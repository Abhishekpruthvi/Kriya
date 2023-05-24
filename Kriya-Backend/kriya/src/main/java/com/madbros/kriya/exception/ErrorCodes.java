package com.madbros.kriya.exception;

/**
 * This is generalized exception code for reporting system.
 *
 * @author Abhishek Pruthvi V M
 * @since 23/05/23
 */
public class ErrorCodes {

    private ErrorCodes() {

    }

    /**
     * MessageId needs to be defined in validation property file.
     *
     * @author Rashmi
     */
    public enum Exception_Codes {

        // user codes
        USER_NAME_EMPTY("U1001", 400),
        FIRST_NAME_EMPTY("U1002", 400),
        USER_NOT_FOUND("U1003", 400),
        USER_ID_EMPTY("U1004", 400),
        USER_NAME_ALREADY_EXISTS("U1005", 409),
        USER_ID_NOT_FOUND("U1006", 404),
        PASSWORD_INCORRECT("U1007", 400),
        USER_NAME_PASSWORD_WRONG("U1008", 400),

        EMPTY_FILE("F1001", 400),

        INTERNAL_SERVER_ERROR("I500",500)
        ;

        private final String messageId;
        private final int httpCode;

        private Exception_Codes(String messageId, int httpCode) {
            this.messageId = messageId;
            this.httpCode = httpCode;
        }

        ;

        private String getMessageId() {
            return this.messageId;
        }

        private int getHttpCode() {
            return this.httpCode;
        }


    }

    public static String getMessageId(Exception_Codes code) {
        return code.getMessageId();
    }

    public static int getHttpCode(Exception_Codes code) {
        return code.getHttpCode();
    }
}
