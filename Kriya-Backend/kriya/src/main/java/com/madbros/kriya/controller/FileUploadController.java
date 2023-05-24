package com.madbros.kriya.controller;

import com.madbros.kriya.exception.BaseServiceException;
import com.madbros.kriya.exception.ErrorCodes;
import com.madbros.kriya.model.File;
import com.madbros.kriya.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * @author Abhishek Pruthvi V M
 * @since 23/05/23
 */
@RestController
@RequestMapping("/api/file")
public class FileUploadController {


    @Autowired
    FileService fileService;

    @PostMapping("/upload")
    public ResponseEntity<?> handleFileUpload(
            @RequestParam("file") MultipartFile file,
            @RequestParam("name") String fileName,
            @RequestParam("description") String description,
            @RequestParam("owner") String ownerName) {

        // Check if file is empty
        if (file.isEmpty()) {
           throw new BaseServiceException(ErrorCodes.Exception_Codes.EMPTY_FILE);
        }

        fileService.uploadFile(fileName, description, ownerName, file);
        return ResponseEntity.ok("File uploaded successfully");
    }

    @GetMapping("/list")
    public ResponseEntity<?> getAllFiles(HttpServletRequest httpServletRequest) {
        String userName =  httpServletRequest.getHeader("userName");
        return new ResponseEntity<>(fileService.getAllFileByOwnerName(userName), HttpStatus.OK);
    }

    @GetMapping("/download/{fileId}")
    public ResponseEntity<?> downloadFile(@PathVariable("fileId") Long fileId) {
        File file = fileService.getFileByFileId(fileId);
        if(file != null) {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentDisposition(ContentDisposition.builder("attachment").filename(file.getFileName()).build());
        }
        return new ResponseEntity<>(file.getContent(), HttpStatus.OK);
    }
}
