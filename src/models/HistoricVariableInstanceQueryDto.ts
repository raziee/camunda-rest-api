/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A Historic Variable Instance instance query which defines a list of Historic Variable Instance instances
 */
export type HistoricVariableInstanceQueryDto = {
    /**
     * Filter by variable name.
     */
    variableName?: string | null;
    /**
     * Restrict to variables with a name like the parameter.
     */
    variableNameLike?: string | null;
    /**
     * Filter by variable value. May be `String`, `Number` or `Boolean`.
     */
    variableValue?: any;
    /**
     * Match the variable name provided in `variableName` and `variableNameLike` case-
     * insensitively. If set to `true` **variableName** and **variablename** are
     * treated as equal.
     */
    variableNamesIgnoreCase?: boolean | null;
    /**
     * Match the variable value provided in `variableValue` case-insensitively. If set to `true`
     * **variableValue** and **variablevalue** are treated as equal.
     */
    variableValuesIgnoreCase?: boolean | null;
    /**
     * Only include historic variable instances which belong to one of the passed and comma-
     * separated variable types. A list of all supported variable types can be found
     * [here](https://docs.camunda.org/manual/7.18/user-guide/process-engine/variables/#supported-variable-values).
     * **Note:** All non-primitive variables are associated with the type
     * 'serializable'.
     */
    variableTypeIn?: Array<string> | null;
    /**
     * Include variables that has already been deleted during the execution.
     */
    includeDeleted?: boolean | null;
    /**
     * Filter by the process instance the variable belongs to.
     */
    processInstanceId?: string | null;
    /**
     * Only include historic variable instances which belong to one of the passed  process instance ids.
     */
    processInstanceIdIn?: Array<string> | null;
    /**
     * Filter by the process definition the variable belongs to.
     */
    processDefinitionId?: string | null;
    /**
     * Filter by a key of the process definition the variable belongs to.
     */
    processDefinitionKey?: string | null;
    /**
     * Only include historic variable instances which belong to one of the passed and  execution ids.
     */
    executionIdIn?: Array<string> | null;
    /**
     * Filter by the case instance the variable belongs to.
     */
    caseInstanceId?: string | null;
    /**
     * Only include historic variable instances which belong to one of the passed and  case execution ids.
     */
    caseExecutionIdIn?: Array<string> | null;
    /**
     * Only include historic variable instances which belong to one of the passed and  case activity ids.
     */
    caseActivityIdIn?: Array<string> | null;
    /**
     * Only include historic variable instances which belong to one of the passed and  task ids.
     */
    taskIdIn?: Array<string> | null;
    /**
     * Only include historic variable instances which belong to one of the passed and  activity instance ids.
     */
    activityInstanceIdIn?: Array<string> | null;
    /**
     * Only include historic variable instances which belong to one of the passed and comma-
     * separated tenant ids.
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include historic variable instances that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     */
    withoutTenantId?: boolean | null;
    /**
     * Only include historic variable instances which belong to one of the passed  variable names.
     */
    variableNameIn?: Array<string> | null;
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
        sortBy?: 'instanceId' | 'variableName' | 'tenantId' | null;
        /**
         * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for
         * descending order. Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc' | null;
    }> | null;
};

