/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableQueryParameterDto } from './VariableQueryParameterDto';

/**
 * A Historic Task instance query which defines a list of Historic Task instances
 */
export type HistoricTaskInstanceQueryDto = {
    /**
     * Filter by task id.
     */
    taskId?: string | null;
    /**
     * Filter by parent task id.
     */
    taskParentTaskId?: string | null;
    /**
     * Filter by process instance id.
     */
    processInstanceId?: string | null;
    /**
     * Filter by process instance business key.
     */
    processInstanceBusinessKey?: string | null;
    /**
     * Filter by process instances with one of the give business keys.
     * The keys need to be in a comma-separated list.
     */
    processInstanceBusinessKeyIn?: Array<string> | null;
    /**
     * Filter by  process instance business key that has the parameter value as a substring.
     */
    processInstanceBusinessKeyLike?: string | null;
    /**
     * Filter by the id of the execution that executed the task.
     */
    executionId?: string | null;
    /**
     * Filter by process definition id.
     */
    processDefinitionId?: string | null;
    /**
     * Restrict to tasks that belong to a process definition with the given key.
     */
    processDefinitionKey?: string | null;
    /**
     * Restrict to tasks that belong to a process definition with the given name.
     */
    processDefinitionName?: string | null;
    /**
     * Filter by case instance id.
     */
    caseInstanceId?: string | null;
    /**
     * Filter by the id of the case execution that executed the task.
     */
    caseExecutionId?: string | null;
    /**
     * Filter by case definition id.
     */
    caseDefinitionId?: string | null;
    /**
     * Restrict to tasks that belong to a case definition with the given key.
     */
    caseDefinitionKey?: string | null;
    /**
     * Restrict to tasks that belong to a case definition with the given name.
     */
    caseDefinitionName?: string | null;
    /**
     * Only include tasks which belong to one of the passed  activity instance ids.
     */
    activityInstanceIdIn?: Array<string> | null;
    /**
     * Restrict to tasks that have the given name.
     */
    taskName?: string | null;
    /**
     * Restrict to tasks that have a name with the given parameter value as substring.
     */
    taskNameLike?: string | null;
    /**
     * Restrict to tasks that have the given description.
     */
    taskDescription?: string | null;
    /**
     * Restrict to tasks that have a description that has the parameter value as a substring.
     */
    taskDescriptionLike?: string | null;
    /**
     * Restrict to tasks that have the given key.
     */
    taskDefinitionKey?: string | null;
    /**
     * Restrict to tasks that have one of the passed  task definition keys.
     */
    taskDefinitionKeyIn?: Array<string> | null;
    /**
     * Restrict to tasks that have the given delete reason.
     */
    taskDeleteReason?: string | null;
    /**
     * Restrict to tasks that have a delete reason that has the parameter value as a substring.
     */
    taskDeleteReasonLike?: string | null;
    /**
     * Restrict to tasks that the given user is assigned to.
     */
    taskAssignee?: string | null;
    /**
     * Restrict to tasks that are assigned to users with the parameter value as a substring.
     */
    taskAssigneeLike?: string | null;
    /**
     * Restrict to tasks that the given user owns.
     */
    taskOwner?: string | null;
    /**
     * Restrict to tasks that are owned by users with the parameter value as a substring.
     */
    taskOwnerLike?: string | null;
    /**
     * Restrict to tasks that have the given priority.
     */
    taskPriority?: number | null;
    /**
     * If set to `true`, restricts the query to all tasks that are assigned.
     */
    assigned?: boolean | null;
    /**
     * If set to `true`, restricts the query to all tasks that are unassigned.
     */
    unassigned?: boolean | null;
    /**
     * Only include finished tasks. Value may only be `true`, as `false` is the default behavior.
     */
    finished?: boolean | null;
    /**
     * Only include unfinished tasks. Value may only be `true`, as `false` is the default
     * behavior.
     */
    unfinished?: boolean | null;
    /**
     * Only include tasks of finished processes. Value may only be `true`, as `false` is the
     * default behavior.
     */
    processFinished?: boolean | null;
    /**
     * Only include tasks of unfinished processes. Value may only be `true`, as `false` is the
     * default behavior.
     */
    processUnfinished?: boolean | null;
    /**
     * Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     */
    taskDueDate?: string | null;
    /**
     * Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     */
    taskDueDateBefore?: string | null;
    /**
     * Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     */
    taskDueDateAfter?: string | null;
    /**
     * Only include tasks which have no due date. Value may only be `true`, as `false` is the
     * default behavior.
     */
    withoutTaskDueDate?: boolean | null;
    /**
     * Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     */
    taskFollowUpDate?: string | null;
    /**
     * Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     */
    taskFollowUpDateBefore?: string | null;
    /**
     * Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     */
    taskFollowUpDateAfter?: string | null;
    /**
     * Restrict to tasks that were started before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     */
    startedBefore?: string | null;
    /**
     * Restrict to tasks that were started after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     */
    startedAfter?: string | null;
    /**
     * Restrict to tasks that were finished before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     */
    finishedBefore?: string | null;
    /**
     * Restrict to tasks that were finished after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     */
    finishedAfter?: string | null;
    /**
     * Filter by a  list of tenant ids. A task instance must have one of the given
     * tenant ids.
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include historic task instances that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     */
    withoutTenantId?: boolean | null;
    /**
     * Only include tasks that have variables with certain values. Variable filtering expressions are
     * comma-separated and are structured as follows:
     *
     * A valid parameter value has the form `key_operator_value`.
     * `key` is the variable name, `operator` is the comparison operator to be used
     * and `value` the variable value.
     * **Note:** Values are always treated as `String` objects on server side.
     *
     *
     * Valid operator values are:
     * * `eq` - equal to;
     * * `neq` - not equal to;
     * * `gt` - greater than;
     * * `gteq` - greater than or equal to;
     * * `lt` - lower than;
     * * `lteq` - lower than or equal to;
     * * `like`.
     *
     * `key` and `value` may not contain underscore or comma characters.
     */
    taskVariables?: Array<VariableQueryParameterDto> | null;
    /**
     * Only include tasks that belong to process instances that have variables with certain
     * values. Variable filtering expressions are comma-separated and are structured as
     * follows:
     *
     * A valid parameter value has the form `key_operator_value`.
     * `key` is the variable name, `operator` is the comparison operator to be used
     * and `value` the variable value.
     * **Note:** Values are always treated as `String` objects on server side.
     *
     *
     * Valid operator values are:
     * * `eq` - equal to;
     * * `neq` - not equal to;
     * * `gt` - greater than;
     * * `gteq` - greater than or equal to;
     * * `lt` - lower than;
     * * `lteq` - lower than or equal to;
     * * `like`;
     * * `notLike`.
     *
     * `key` and `value` may not contain underscore or comma characters.
     */
    processVariables?: Array<VariableQueryParameterDto> | null;
    /**
     * Match the variable name provided in `taskVariables` and `processVariables` case-
     * insensitively. If set to `true` **variableName** and **variablename** are
     * treated as equal.
     */
    variableNamesIgnoreCase?: boolean | null;
    /**
     * Match the variable value provided in `taskVariables` and `processVariables` case-
     * insensitively. If set to `true` **variableValue** and **variablevalue** are
     * treated as equal.
     */
    variableValuesIgnoreCase?: boolean | null;
    /**
     * Restrict to tasks with a historic identity link to the given user.
     */
    taskInvolvedUser?: string | null;
    /**
     * Restrict to tasks with a historic identity link to the given group.
     */
    taskInvolvedGroup?: string | null;
    /**
     * Restrict to tasks with a historic identity link to the given candidate user.
     */
    taskHadCandidateUser?: string | null;
    /**
     * Restrict to tasks with a historic identity link to the given candidate group.
     */
    taskHadCandidateGroup?: string | null;
    /**
     * Only include tasks which have a candidate group. Value may only be `true`,
     * as `false` is the default behavior.
     */
    withCandidateGroups?: boolean | null;
    /**
     * Only include tasks which have no candidate group. Value may only be `true`,
     * as `false` is the default behavior.
     */
    withoutCandidateGroups?: boolean | null;
    /**
     * A JSON array of nested historic task instance queries with OR semantics.
     *
     * A task instance matches a nested query if it fulfills at least one of the query's predicates.
     *
     * With multiple nested queries, a task instance must fulfill at least one predicate of each query
     * ([Conjunctive Normal Form](https://en.wikipedia.org/wiki/Conjunctive_normal_form)).
     *
     * All task instance query properties can be used except for: `sorting`, `withCandidateGroups`, ` withoutCandidateGroups`.
     *
     * See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/process-engine-api/#or-queries) for more information about OR queries.
     */
    orQueries?: Array<HistoricTaskInstanceQueryDto> | null;
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
        sortBy?: 'taskId' | 'activityInstanceId' | 'processDefinitionId' | 'processInstanceId' | 'executionId' | 'duration' | 'endTime' | 'startTime' | 'taskName' | 'taskDescription' | 'assignee' | 'owner' | 'dueDate' | 'followUpDate' | 'deleteReason' | 'taskDefinitionKey' | 'priority' | 'caseDefinitionId' | 'caseInstanceId' | 'caseExecutionId' | 'tenantId' | null;
        /**
         * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for
         * descending order. Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc' | null;
    }> | null;
};

