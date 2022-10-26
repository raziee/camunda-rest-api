/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A historic detail query which defines a group of historic details.
 */
export type HistoricDetailQueryDto = {
    /**
     * Filter by process instance id.
     */
    processInstanceId?: string | null;
    /**
     * Only include historic details which belong to one of the passed  process instance ids.
     */
    processInstanceIdIn?: Array<string> | null;
    /**
     * Filter by execution id.
     */
    executionId?: string | null;
    /**
     * Filter by task id.
     */
    taskId?: string | null;
    /**
     * Filter by activity instance id.
     */
    activityInstanceId?: string | null;
    /**
     * Filter by case instance id.
     */
    caseInstanceId?: string | null;
    /**
     * Filter by case execution id.
     */
    caseExecutionId?: string | null;
    /**
     * Filter by variable instance id.
     */
    variableInstanceId?: string | null;
    /**
     * Only include historic details where the variable updates belong to one of the passed
     * list of variable types. A list of all supported variable types can be found
     * [here](https://docs.camunda.org/manual/7.18/user-guide/process-engine/variables/#supported-variable-values).
     * **Note:** All non-primitive variables are associated with the type `serializable`.
     */
    variableTypeIn?: Array<string> | null;
    /**
     * Filter by a  list of tenant ids.
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include historic details that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     */
    withoutTenantId?: boolean | null;
    /**
     * Filter by a user operation id.
     */
    userOperationId?: string | null;
    /**
     * Only include `HistoricFormFields`. Value may only be `true`, as `false` is the default behavior.
     */
    formFields?: boolean | null;
    /**
     * Only include `HistoricVariableUpdates`. Value may only be `true`, as `false` is the default behavior.
     */
    variableUpdates?: boolean | null;
    /**
     * Excludes all task-related `HistoricDetails`, so only items which have no task id set will be selected.
     * When this parameter is used together with `taskId`, this call is ignored and task details are not excluded.
     * Value may only be `true`, as `false` is the default behavior.
     */
    excludeTaskDetails?: boolean | null;
    /**
     * Restrict to historic variable updates that contain only initial variable values.
     * Value may only be `true`, as `false` is the default behavior.
     */
    initial?: boolean | null;
    /**
     * Restrict to historic details that occured before the given date (including the date).
     * Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
     */
    occurredBefore?: string | null;
    /**
     * Restrict to historic details that occured after the given date (including the date).
     * Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
     */
    occurredAfter?: string | null;
    /**
     * A JSON array of criteria to sort the result by. Each element of the array is
     * a JSON object that specifies one ordering. The position in the array
     * identifies the rank of an ordering, i.e., whether it is primary, secondary,
     * etc. Does not have an effect for the `count` endpoint.
     */
    sorting?: Array<{
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'processInstanceId' | 'variableName' | 'variableType' | 'variableRevision' | 'formPropertyId' | 'time' | 'occurrence' | 'tenantId' | null;
        /**
         * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for
         * descending order. Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc' | null;
    }> | null;
};

