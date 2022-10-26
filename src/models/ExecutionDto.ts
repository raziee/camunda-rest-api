/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExecutionDto = {
    /**
     * The id of the Execution.
     */
    id?: string | null;
    /**
     * The id of the root of the execution tree representing the process instance.
     */
    processInstanceId?: string | null;
    /**
     * Indicates if the execution is ended.
     */
    ended?: boolean | null;
    /**
     * The id of the tenant this execution belongs to. Can be `null`
     * if the execution belongs to no single tenant.
     */
    tenantId?: string | null;
};

