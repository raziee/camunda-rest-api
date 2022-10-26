/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type JobDto = {
    /**
     * The id of the job.
     */
    id?: string | null;
    /**
     * The id of the associated job definition.
     */
    jobDefinitionId?: string | null;
    /**
     * The date on which this job is supposed to be processed.
     */
    dueDate?: string | null;
    /**
     * The id of the process instance which execution created the job.
     */
    processInstanceId?: string | null;
    /**
     * The specific execution id on which the job was created.
     */
    executionId?: string | null;
    /**
     * The id of the process definition which this job belongs to.
     */
    processDefinitionId?: string | null;
    /**
     * The key of the process definition which this job belongs to.
     */
    processDefinitionKey?: string | null;
    /**
     * The number of retries this job has left.
     */
    retries?: number | null;
    /**
     * The message of the exception that occurred, the last time the job was executed. Is
     * null when no exception occurred.
     */
    exceptionMessage?: string | null;
    /**
     * The id of the activity on which the last exception occurred, the last time the job
     * was executed. Is null when no exception occurred.
     */
    failedActivityId?: string | null;
    /**
     * A flag indicating whether the job is suspended or not.
     */
    suspended?: boolean | null;
    /**
     * The job's priority for execution.
     */
    priority?: number | null;
    /**
     * The id of the tenant which this job belongs to.
     */
    tenantId?: string | null;
    /**
     * The date on which this job has been created.
     */
    createTime?: string | null;
};

