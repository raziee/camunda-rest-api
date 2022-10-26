/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A Historic External Task Log instance query which defines a list of Historic External Task Log instances
 */
export type HistoricExternalTaskLogQueryDto = {
    /**
     * Filter by historic external task log id.
     */
    logId?: string | null;
    /**
     * Filter by external task id.
     */
    externalTaskId?: string | null;
    /**
     * Filter by an external task topic.
     */
    topicName?: string | null;
    /**
     * Filter by the id of the worker that the task was most recently locked by.
     */
    workerId?: string | null;
    /**
     * Filter by external task exception message.
     */
    errorMessage?: string | null;
    /**
     * Only include historic external task logs which belong to one of the passed activity ids.
     */
    activityIdIn?: Array<string> | null;
    /**
     * Only include historic external task logs which belong to one of the passed activity
     * instance ids.
     */
    activityInstanceIdIn?: Array<string> | null;
    /**
     * Only include historic external task logs which belong to one of the passed execution ids.
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
     * Only include historic external task log entries which belong to one of the passed and
     * comma-separated tenant ids.
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include historic external task log entries that belong to no tenant. Value may only
     * be `true`, as `false` is the default behavior.
     */
    withoutTenantId?: boolean | null;
    /**
     * Only include logs for which the associated external task had a priority lower than or
     * equal to the given value. Value must be a valid `long` value.
     */
    priorityLowerThanOrEquals?: number | null;
    /**
     * Only include logs for which the associated external task had a priority higher than or
     * equal to the given value. Value must be a valid `long` value.
     */
    priorityHigherThanOrEquals?: number | null;
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
     * etc. Sorting has no effect for `count` endpoints.
     */
    sorting?: Array<{
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'timestamp' | 'externalTaskId' | 'topicName' | 'workerId' | 'retries' | 'priority' | 'activityId' | 'activityInstanceId' | 'executionId' | 'processInstanceId' | 'processDefinitionId' | 'processDefinitionKey' | 'tenantId' | null;
        /**
         * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for
         * descending order. Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc' | null;
    }> | null;
};

