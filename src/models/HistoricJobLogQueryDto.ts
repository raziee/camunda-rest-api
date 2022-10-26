/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A Historic Job Log instance query which defines a list of Historic Job Log instances
 */
export type HistoricJobLogQueryDto = {
    /**
     * Filter by historic job log id.
     */
    logId?: string | null;
    /**
     * Filter by job id.
     */
    jobId?: string | null;
    /**
     * Filter by job exception message.
     */
    jobExceptionMessage?: string | null;
    /**
     * Filter by job definition id.
     */
    jobDefinitionId?: string | null;
    /**
     * Filter by job definition type. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/the-job-executor/#job-creation)
     * for more information about job definition types.
     */
    jobDefinitionType?: string | null;
    /**
     * Filter by job definition configuration.
     */
    jobDefinitionConfiguration?: string | null;
    /**
     * Only include historic job logs which belong to one of the passed activity ids.
     */
    activityIdIn?: Array<string> | null;
    /**
     * Only include historic job logs which belong to failures of one of the passed activity ids.
     */
    failedActivityIdIn?: Array<string> | null;
    /**
     * Only include historic job logs which belong to one of the passed execution ids.
     */
    executionIdIn?: Array<string> | null;
    /**
     * Filter by process instance id.
     */
    processInstanceId?: string | null;
    /**
     * Filter by process definition id.
     */
    processDefinitionId?: string | null;
    /**
     * Filter by process definition key.
     */
    processDefinitionKey?: string | null;
    /**
     * Filter by deployment id.
     */
    deploymentId?: string | null;
    /**
     * Only include historic job log entries which belong to one of the passed and comma-
     * separated tenant ids.
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include historic job log entries that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     */
    withoutTenantId?: boolean | null;
    /**
     * Filter by hostname.
     */
    hostname?: string | null;
    /**
     * Only include logs for which the associated job had a priority lower than or equal to the
     * given value. Value must be a valid `long` value.
     */
    jobPriorityLowerThanOrEquals?: number | null;
    /**
     * Only include logs for which the associated job had a priority higher than or equal to the
     * given value. Value must be a valid `long` value.
     */
    jobPriorityHigherThanOrEquals?: number | null;
    /**
     * Only include creation logs. Value may only be `true`, as `false` is the default behavior.
     */
    creationLog?: boolean | null;
    /**
     * Only include failure logs. Value may only be `true`, as `false` is the default behavior.
     */
    failureLog?: boolean | null;
    /**
     * Only include success logs. Value may only be `true`, as `false` is the default behavior.
     */
    successLog?: boolean | null;
    /**
     * Only include deletion logs. Value may only be `true`, as `false` is the default behavior.
     */
    deletionLog?: boolean | null;
    /**
     * An array of criteria to sort the result by. Each element of the array is
     * an object that specifies one ordering. The position in the array
     * identifies the rank of an ordering, i.e., whether it is primary, secondary,
     * etc. Sorting has no effect for `count` endpoints
     */
    sorting?: Array<{
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'timestamp' | 'jobId' | 'jobDefinitionId' | 'jobDueDate' | 'jobRetries' | 'jobPriority' | 'activityId' | 'executionId' | 'processInstanceId' | 'processDefinitionId' | 'processDefinitionKey' | 'deploymentId' | 'hostname' | 'occurrence' | 'tenantId' | null;
        /**
         * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for
         * descending order. Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc' | null;
    }> | null;
};

