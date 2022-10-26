/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HistoricJobLogDto = {
    /**
     * The id of the log entry.
     */
    id?: string | null;
    /**
     * The time when the log entry has been written.
     */
    timestamp?: string | null;
    /**
     * The time after which the log entry should be removed by the History Cleanup job.
     * Default format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`. For further info see the
     * [docs](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     */
    removalTime?: string | null;
    /**
     * The id of the associated job.
     */
    jobId?: string | null;
    /**
     * The date on which the associated job is supposed to be processed.
     */
    jobDueDate?: string | null;
    /**
     * The number of retries the associated job has left.
     */
    jobRetries?: number | null;
    /**
     * The execution priority the job had when the log entry was created.
     */
    jobPriority?: number | null;
    /**
     * The message of the exception that occurred by executing the associated job.
     */
    jobExceptionMessage?: string | null;
    /**
     * The id of the activity on which the last exception occurred by executing the
     * associated job.
     */
    failedActivityId?: string | null;
    /**
     * The id of the job definition on which the associated job was created.
     */
    jobDefinitionId?: string | null;
    /**
     * The job definition type of the associated job. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/the-job-executor/#job-creation)
     * for more information about job definition types.
     */
    jobDefinitionType?: string | null;
    /**
     * The job definition configuration type of the associated job.
     */
    jobDefinitionConfiguration?: string | null;
    /**
     * The id of the activity on which the associated job was created.
     */
    activityId?: string | null;
    /**
     * The execution id on which the associated job was created.
     */
    executionId?: string | null;
    /**
     * The id of the process instance on which the associated job was created.
     */
    processInstanceId?: string | null;
    /**
     * The id of the process definition which the associated job belongs to.
     */
    processDefinitionId?: string | null;
    /**
     * The key of the process definition which the associated job belongs to.
     */
    processDefinitionKey?: string | null;
    /**
     * The id of the deployment which the associated job belongs to.
     */
    deploymentId?: string | null;
    /**
     * The process instance id of the root process instance that initiated the process
     * which the associated job belongs to.
     */
    rootProcessInstanceId?: string | null;
    /**
     * The id of the tenant that this historic job log entry belongs to.
     */
    tenantId?: string | null;
    /**
     *
     * The name of the host of the Process Engine where the
     * job of this historic job log entry was executed.
     */
    hostname?: string | null;
    /**
     * A flag indicating whether this log represents the creation of the associated job.
     */
    creationLog?: boolean | null;
    /**
     * A flag indicating whether this log represents the failed execution of the
     * associated job.
     */
    failureLog?: boolean | null;
    /**
     * A flag indicating whether this log represents the successful execution of the
     * associated job.
     */
    successLog?: boolean | null;
    /**
     * A flag indicating whether this log represents the deletion of the associated job.
     */
    deletionLog?: boolean | null;
};

