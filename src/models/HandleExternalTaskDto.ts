/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HandleExternalTaskDto = {
    /**
     * **Mandatory.** The ID of the worker who is performing the operation on the external task.
     * If the task is already locked, must match the id of the worker who has most recently
     * locked the task.
     */
    workerId?: string;
};

