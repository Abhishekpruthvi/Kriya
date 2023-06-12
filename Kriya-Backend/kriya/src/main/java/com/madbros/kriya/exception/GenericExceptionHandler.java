package com.madbros.kriya.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

/**
 * @author Abhishek Pruthvi V M
 * @since 11/06/23
 */

@EnableWebMvc
@ControllerAdvice
public class GenericExceptionHandler extends ResponseEntityExceptionHandler {

    private static Logger LOGGER = LoggerFactory.getLogger(GenericExceptionHandler.class);
    @Autowired
    private MessageSource messageSource;

    @ExceptionHandler({BaseServiceException.class})
    public ResponseEntity<Object> handleBaseProvisonExceptions(
            RuntimeException ex, WebRequest request) {
        MessageSourceAccessor accessor;
//        log.debug("EXCEPTION WAS CAUGHT {} ", ex.getClass().getSimpleName());
        Locale locale = request.getLocale();
        List<String> errors = new ArrayList<>();
        String propMsg = null;
        HttpStatus httpstatus = HttpStatus.NOT_FOUND;

        //Below is common code applicable to all exceptions
        //once all exceptions are defined same as UserException.
        if (ex instanceof BaseServiceException) {

            //get message from resource bundle
            accessor = new MessageSourceAccessor(messageSource, locale);
            BaseServiceException ex1 = (BaseServiceException) ex;
            propMsg = ": " + accessor.getMessage(ex1.getLocalizedMessage(), ex1.params);
            httpstatus = HttpStatus.resolve((ErrorCodes.getHttpCode(ex1.errCode)));
        }

        ApiError apiError =
                new ApiError(httpstatus, ex.getLocalizedMessage() + propMsg, errors);
        apiError.setDateTime(LocalDateTime.now());
        return new ResponseEntity<>(
                apiError, new HttpHeaders(), apiError.getStatus());
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        List<String> errors = new ArrayList<>();
        for (FieldError error : ex.getBindingResult().getFieldErrors()) {
            errors.add(error.getField() + ": " + error.getDefaultMessage());
        }
        for (ObjectError error : ex.getBindingResult().getGlobalErrors()) {
            errors.add(error.getObjectName() + ": " + error.getDefaultMessage());
        }

        ApiError apiError =
                new ApiError(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage(), errors);
        return handleExceptionInternal(
                ex, apiError, headers, apiError.getStatus(), request);
    }
}
