/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HistoricExternalTaskLogDto = {
    /**
     * The id of the log entry.
     */
    id?: string | null;
    /**
     * The id of the external task.
     */
    externalTaskId?: string | null;
    /**
     * The time when the log entry has been written.
     */
    timestamp?: string | null;
    /**
     * The topic name of the associated external task.
     */
    topicName?: string | null;
    /**
     * The id of the worker that posessed the most recent lock.
     */
    workerId?: string | null;
    /**
     * The number of retries the associated external task has left.
     */
    retries?: number | null;
    /**
     * The execution priority the external task had when the log entry was created.
     */
    priority?: number | null;
    /**
     * The message of the error that occurred by executing the associated external task.
     */
    errorMessage?: string | null;
    /**
     * The id of the activity on which the associated external task was created.
     */
    activityId?: string | null;
    /**
     * The id of the activity instance on which the associated external task was created.
     */
    activityInstanceId?: string | null;
    /**
     * The execution id on which the associated external task was created.
     */
    executionId?: string | null;
    /**
     * The id of the process instance on which the associated external task was created.
     */
    processInstanceId?: string | null;
    /**
     * The id of the process definition which the associated external task belongs to.
     */
    processDefinitionId?: string | null;
    /**
     * The key of the process definition which the associated external task belongs to.
     */
    processDefinitionKey?: string | null;
    /**
     * The id of the tenant that this historic external task log entry belongs to.
     */
    tenantId?: string | null;
    /**
     * A flag indicating whether this log represents the creation of the associated
     * external task.
     */
    creationLog?: boolean | null;
    /**
     * A flag indicating whether this log represents the failed execution of the
     * associated external task.
     */
    failureLog?: boolean | null;
    /**
     * A flag indicating whether this log represents the successful execution of the
     * associated external task.
     */
    successLog?: boolean | null;
    /**
     * A flag indicating whether this log represents the deletion of the associated
     * external task.
     */
    deletionLog?: boolean | null;
    /**
     * The time after which this log should be removed by the History Cleanup job. Default
     * format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.  For further information, please see the [documentation](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     */
    removalTime?: string | null;
    /**
     * The process instance id of the root process instance that initiated the process
     * containing this log.
     */
    rootProcessInstanceId?: string | null;
};

