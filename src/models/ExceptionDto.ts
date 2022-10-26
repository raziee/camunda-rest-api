/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExceptionDto = {
    /**
     * An exception class indicating the occurred error.
     */
    type?: string | null;
    /**
     * A detailed message of the error.
     */
    message?: string | null;
    /**
     * The code allows your client application to identify the error in an automated fashion.
     * You can look up the meaning of all built-in codes and learn how to add custom codes
     * in the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/error-handling/#exception-codes).
     */
    code?: number;
};

