package com.madbros.kriya.exception;

/**
 * @author Abhishek Pruthvi V M
 * @since 23/05/23
 */
public class BaseServiceException extends  RuntimeException{

    private static final long serialVersionUID = 1L;

    public ErrorCodes.Exception_Codes errCode;
    public Object[] params;

    public BaseServiceException(ErrorCodes.Exception_Codes errCode1) {
        super(ErrorCodes.getMessageId(errCode1));
        this.errCode = errCode1;
        this.params = new Object[] {};
    }

    public BaseServiceException(ErrorCodes.Exception_Codes errCode1, Object... params1) {
        super(ErrorCodes.getMessageId(errCode1));
        this.errCode = errCode1;
        this.params = params1;
    }
}
