/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableQueryParameterDto } from './VariableQueryParameterDto';

/**
 * A Execution instance query which defines a list of Execution instances
 */
export type ExecutionQueryDto = {
    /**
     * Filter by the business key of the process instances the executions belong to.
     */
    businessKey?: string | null;
    /**
     * Filter by the process definition the executions run on.
     */
    processDefinitionId?: string | null;
    /**
     * Filter by the key of the process definition the executions run on.
     */
    processDefinitionKey?: string | null;
    /**
     * Filter by the id of the process instance the execution belongs to.
     */
    processInstanceId?: string | null;
    /**
     * Filter by the id of the activity the execution currently executes.
     */
    activityId?: string | null;
    /**
     * Select only those executions that expect a signal of the given name.
     */
    signalEventSubscriptionName?: string | null;
    /**
     * Select only those executions that expect a message of the given name.
     */
    messageEventSubscriptionName?: string | null;
    /**
     * Only include active executions. Value may only be `true`, as `false` is the default
     * behavior.
     */
    active?: boolean | null;
    /**
     * Only include suspended executions. Value may only be `true`, as `false` is the default
     * behavior.
     */
    suspended?: boolean | null;
    /**
     * Filter by the incident id.
     */
    incidentId?: string | null;
    /**
     * Filter by the incident type. See the [User Guide](/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
     */
    incidentType?: string | null;
    /**
     * Filter by the incident message. Exact match.
     */
    incidentMessage?: string | null;
    /**
     * Filter by the incident message that the parameter is a substring of.
     */
    incidentMessageLike?: string | null;
    /**
     * Filter by a  list of tenant ids. An execution must have one of the given
     * tenant ids.
     */
    tenantIdIn?: Array<string> | null;
    /**
     * An array to only include executions that have variables with certain values.
     *
     * The array consists of objects with the three properties `name`, `operator`
     * and `value`.
     * `name (String)` is the variable name, `operator (String)` is the comparison
     * operator to be used and `value` the variable value.
     * `value` may be `String`, `Number` or `Boolean`.
     *
     * Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` -
     * greater than;
     * `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or
     * equal to;
     * `like`.
     */
    variables?: Array<VariableQueryParameterDto> | null;
    /**
     * An array to only include executions that belong to a process instance with variables
     * with certain values.
     *
     * The array consists of objects with the three properties `name`, `operator`
     * and `value`.
     * `name (String)` is the variable name, `operator (String)` is the comparison
     * operator to be used and `value` the variable value.
     * `value` may be `String`, `Number` or `Boolean`.
     *
     * Valid operator values are: `eq` - equal to; `neq` - not equal to.
     */
    processVariables?: Array<VariableQueryParameterDto> | null;
    /**
     * Match all variable names provided in `variables` and `processVariables` case-
     * insensitively. If set to `true` **variableName** and **variablename** are
     * treated as equal.
     */
    variableNamesIgnoreCase?: boolean | null;
    /**
     * Match all variable values provided in `variables` and `processVariables` case-
     * insensitively. If set to `true` **variableValue** and **variablevalue** are
     * treated as equal.
     */
    variableValuesIgnoreCase?: boolean | null;
    /**
     * An array of criteria to sort the result by. Each element of the array is
     * an object that specifies one ordering. The position in the array
     * identifies the rank of an ordering, i.e., whether it is primary, secondary,
     * etc. Has no effect for the `/count` endpoint
     */
    sorting?: Array<{
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'instanceId' | 'definitionKey' | 'definitionId' | 'tenantId' | null;
        /**
         * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for
         * descending order. Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc' | null;
    }> | null;
};

