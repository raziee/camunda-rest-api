/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableQueryParameterDto } from './VariableQueryParameterDto';

/**
 * A variable instance query which defines a list of variable instances
 */
export type VariableInstanceQueryDto = {
    /**
     * Filter by variable instance name.
     */
    variableName?: string | null;
    /**
     * Filter by the variable instance name. The parameter can include the wildcard `%` to
     * express like-strategy such as: starts with (`%`name), ends with (name`%`) or
     * contains (`%`name`%`).
     */
    variableNameLike?: string | null;
    /**
     * Only include variable instances which belong to one of the passed
     * process instance ids.
     */
    processInstanceIdIn?: Array<string> | null;
    /**
     * Only include variable instances which belong to one of the passed
     * execution ids.
     */
    executionIdIn?: Array<string> | null;
    /**
     * Only include variable instances which belong to one of the passed  case instance ids.
     */
    caseInstanceIdIn?: Array<string> | null;
    /**
     * Only include variable instances which belong to one of the passed  case execution ids.
     */
    caseExecutionIdIn?: Array<string> | null;
    /**
     * Only include variable instances which belong to one of the passed  task
     * ids.
     */
    taskIdIn?: Array<string> | null;
    /**
     * Only include variable instances which belong to one of the passed
     * batch ids.
     */
    batchIdIn?: Array<string> | null;
    /**
     * Only include variable instances which belong to one of the passed
     * activity instance ids.
     */
    activityInstanceIdIn?: Array<string> | null;
    /**
     * Only include variable instances which belong to one of the passed
     * tenant ids.
     */
    tenantIdIn?: Array<string> | null;
    /**
     * An array to only include variable instances that have the certain values.
     * The array consists of objects with the three properties `name`, `operator` and `value`. `name (String)` is the
     * variable name, `operator (String)` is the comparison operator to be used and `value` the variable value.
     * `value` may be `String`, `Number` or `Boolean`.
     *
     * Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater
     * than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`
     */
    variableValues?: Array<VariableQueryParameterDto> | null;
    /**
     * Match all variable names provided in `variableValues` case-insensitively. If set to `true`
     * **variableName** and **variablename** are treated as equal.
     */
    variableNamesIgnoreCase?: boolean | null;
    /**
     * Match all variable values provided in `variableValues` case-insensitively. If set to
     * `true` **variableValue** and **variablevalue** are treated as equal.
     */
    variableValuesIgnoreCase?: boolean | null;
    /**
     * Only include variable instances which belong to one of passed scope ids.
     */
    variableScopeIdIn?: Array<string> | null;
    /**
     * An array of criteria to sort the result by. Each element of the array is an object that specifies one ordering.
     * The position in the array identifies the rank of an ordering, i.e., whether it is primary, secondary, etc.
     * Sorting has no effect for `count` endpoints
     */
    sorting?: Array<{
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'variableName' | 'variableType' | 'activityInstanceId' | 'tenantId' | null;
        /**
         * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for
         * descending order. Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc' | null;
    }> | null;
};

