/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BatchDto = {
    /**
     * The id of the batch.
     */
    id?: string | null;
    /**
     * The type of the batch.
     * See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/batch/#creating-a-batch)
     * for more information about batch types.
     */
    type?: string | null;
    /**
     * The total jobs of a batch is the number of batch execution jobs required to complete the batch.
     */
    totalJobs?: number | null;
    /**
     * The number of batch execution jobs already created by the seed job.
     */
    jobsCreated?: number | null;
    /**
     * The number of batch execution jobs created per seed job invocation.
     * The batch seed job is invoked until it has created all batch execution jobs required by the batch
     * (see `totalJobs` property).
     */
    batchJobsPerSeed?: number | null;
    /**
     * Every batch execution job invokes the command executed by the batch `invocationsPerBatchJob` times.
     * E.g., for a process instance migration batch this specifies the number of process instances which are migrated per batch execution job.
     */
    invocationsPerBatchJob?: number | null;
    /**
     * The job definition id for the seed jobs of this batch.
     */
    seedJobDefinitionId?: string | null;
    /**
     * The job definition id for the monitor jobs of this batch.
     */
    monitorJobDefinitionId?: string | null;
    /**
     * The job definition id for the batch execution jobs of this batch.
     */
    batchJobDefinitionId?: string | null;
    /**
     * Indicates whether this batch is suspended or not.
     */
    suspended?: boolean | null;
    /**
     * The tenant id of the batch.
     */
    tenantId?: string | null;
    /**
     * The id of the user that created the batch.
     */
    createUserId?: string | null;
    /**
     * The time the batch was started. Default format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`. For further information,
     * please see the [documentation] (https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     */
    startTime?: string | null;
    /**
     * The time the batch execution was started, i.e., at least one batch job has been executed. Default
     * format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`. For further information, please see the [documentation]
     * (https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     */
    executionStartTime?: string | null;
};

