/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { HistoricTaskInstanceDto } from '../models/HistoricTaskInstanceDto';
import type { HistoricTaskInstanceQueryDto } from '../models/HistoricTaskInstanceQueryDto';
import type { HistoricTaskInstanceReportResultDto } from '../models/HistoricTaskInstanceReportResultDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricTaskInstanceService {

    /**
     * Get Tasks (Historic)
     * Queries for historic tasks that fulfill the given parameters. The size of the result
     * set can be retrieved by using the
     * [Get Task Count](https://docs.camunda.org/manual/7.18/reference/rest/history/task/get-task-query-count/)
     * method.
     * @param taskId Filter by task id.
     * @param taskParentTaskId Filter by parent task id.
     * @param processInstanceId Filter by process instance id.
     * @param processInstanceBusinessKey Filter by process instance business key.
     * @param processInstanceBusinessKeyIn Filter by process instances with one of the give business keys.
     * The keys need to be in a comma-separated list.
     * @param processInstanceBusinessKeyLike Filter by  process instance business key that has the parameter value as a substring.
     * @param executionId Filter by the id of the execution that executed the task.
     * @param processDefinitionId Filter by process definition id.
     * @param processDefinitionKey Restrict to tasks that belong to a process definition with the given key.
     * @param processDefinitionName Restrict to tasks that belong to a process definition with the given name.
     * @param caseInstanceId Filter by case instance id.
     * @param caseExecutionId Filter by the id of the case execution that executed the task.
     * @param caseDefinitionId Filter by case definition id.
     * @param caseDefinitionKey Restrict to tasks that belong to a case definition with the given key.
     * @param caseDefinitionName Restrict to tasks that belong to a case definition with the given name.
     * @param activityInstanceIdIn Only include tasks which belong to one of the passed comma-separated activity instance ids.
     * @param taskName Restrict to tasks that have the given name.
     * @param taskNameLike Restrict to tasks that have a name with the given parameter value as substring.
     * @param taskDescription Restrict to tasks that have the given description.
     * @param taskDescriptionLike Restrict to tasks that have a description that has the parameter value as a substring.
     * @param taskDefinitionKey Restrict to tasks that have the given key.
     * @param taskDefinitionKeyIn Restrict to tasks that have one of the passed comma-separated task definition keys.
     * @param taskDeleteReason Restrict to tasks that have the given delete reason.
     * @param taskDeleteReasonLike Restrict to tasks that have a delete reason that has the parameter value as a substring.
     * @param taskAssignee Restrict to tasks that the given user is assigned to.
     * @param taskAssigneeLike Restrict to tasks that are assigned to users with the parameter value as a substring.
     * @param taskOwner Restrict to tasks that the given user owns.
     * @param taskOwnerLike Restrict to tasks that are owned by users with the parameter value as a substring.
     * @param taskPriority Restrict to tasks that have the given priority.
     * @param assigned If set to `true`, restricts the query to all tasks that are assigned.
     * @param unassigned If set to `true`, restricts the query to all tasks that are unassigned.
     * @param finished Only include finished tasks. Value may only be `true`, as `false` is the default behavior.
     * @param unfinished Only include unfinished tasks. Value may only be `true`, as `false` is the default
     * behavior.
     * @param processFinished Only include tasks of finished processes. Value may only be `true`, as `false` is the
     * default behavior.
     * @param processUnfinished Only include tasks of unfinished processes. Value may only be `true`, as `false` is the
     * default behavior.
     * @param taskDueDate Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param taskDueDateBefore Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param taskDueDateAfter Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param withoutTaskDueDate Only include tasks which have no due date. Value may only be `true`, as `false` is the
     * default behavior.
     * @param taskFollowUpDate Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param taskFollowUpDateBefore Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param taskFollowUpDateAfter Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param startedBefore Restrict to tasks that were started before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param startedAfter Restrict to tasks that were started after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param finishedBefore Restrict to tasks that were finished before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param finishedAfter Restrict to tasks that were finished after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A task instance must have one of the given
     * tenant ids.
     * @param withoutTenantId Only include historic task instances that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     * @param taskVariables Only include tasks that have variables with certain values. Variable filtering expressions are
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
     * @param processVariables Only include tasks that belong to process instances that have variables with certain
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
     * @param variableNamesIgnoreCase Match the variable name provided in `taskVariables` and `processVariables` case-
     * insensitively. If set to `true` **variableName** and **variablename** are
     * treated as equal.
     * @param variableValuesIgnoreCase Match the variable value provided in `taskVariables` and `processVariables` case-
     * insensitively. If set to `true` **variableValue** and **variablevalue** are
     * treated as equal.
     * @param taskInvolvedUser Restrict to tasks with a historic identity link to the given user.
     * @param taskInvolvedGroup Restrict to tasks with a historic identity link to the given group.
     * @param taskHadCandidateUser Restrict to tasks with a historic identity link to the given candidate user.
     * @param taskHadCandidateGroup Restrict to tasks with a historic identity link to the given candidate group.
     * @param withCandidateGroups Only include tasks which have a candidate group. Value may only be `true`,
     * as `false` is the default behavior.
     * @param withoutCandidateGroups Only include tasks which have no candidate group. Value may only be `true`,
     * as `false` is the default behavior.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns HistoricTaskInstanceDto Request successful.
     * @throws ApiError
     */
    public static getHistoricTaskInstances(
        taskId?: string,
        taskParentTaskId?: string,
        processInstanceId?: string,
        processInstanceBusinessKey?: string,
        processInstanceBusinessKeyIn?: string,
        processInstanceBusinessKeyLike?: string,
        executionId?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        processDefinitionName?: string,
        caseInstanceId?: string,
        caseExecutionId?: string,
        caseDefinitionId?: string,
        caseDefinitionKey?: string,
        caseDefinitionName?: string,
        activityInstanceIdIn?: string,
        taskName?: string,
        taskNameLike?: string,
        taskDescription?: string,
        taskDescriptionLike?: string,
        taskDefinitionKey?: string,
        taskDefinitionKeyIn?: string,
        taskDeleteReason?: string,
        taskDeleteReasonLike?: string,
        taskAssignee?: string,
        taskAssigneeLike?: string,
        taskOwner?: string,
        taskOwnerLike?: string,
        taskPriority?: number,
        assigned?: boolean,
        unassigned?: boolean,
        finished?: boolean,
        unfinished?: boolean,
        processFinished?: boolean,
        processUnfinished?: boolean,
        taskDueDate?: string,
        taskDueDateBefore?: string,
        taskDueDateAfter?: string,
        withoutTaskDueDate?: boolean,
        taskFollowUpDate?: string,
        taskFollowUpDateBefore?: string,
        taskFollowUpDateAfter?: string,
        startedBefore?: string,
        startedAfter?: string,
        finishedBefore?: string,
        finishedAfter?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        taskVariables?: string,
        processVariables?: string,
        variableNamesIgnoreCase?: boolean,
        variableValuesIgnoreCase?: boolean,
        taskInvolvedUser?: string,
        taskInvolvedGroup?: string,
        taskHadCandidateUser?: string,
        taskHadCandidateGroup?: string,
        withCandidateGroups?: boolean,
        withoutCandidateGroups?: boolean,
        sortBy?: 'taskId' | 'activityInstanceId' | 'processDefinitionId' | 'processInstanceId' | 'executionId' | 'duration' | 'endTime' | 'startTime' | 'taskName' | 'taskDescription' | 'assignee' | 'owner' | 'dueDate' | 'followUpDate' | 'deleteReason' | 'taskDefinitionKey' | 'priority' | 'caseDefinitionId' | 'caseInstanceId' | 'caseExecutionId' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<HistoricTaskInstanceDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/task',
            query: {
                'taskId': taskId,
                'taskParentTaskId': taskParentTaskId,
                'processInstanceId': processInstanceId,
                'processInstanceBusinessKey': processInstanceBusinessKey,
                'processInstanceBusinessKeyIn': processInstanceBusinessKeyIn,
                'processInstanceBusinessKeyLike': processInstanceBusinessKeyLike,
                'executionId': executionId,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processDefinitionName': processDefinitionName,
                'caseInstanceId': caseInstanceId,
                'caseExecutionId': caseExecutionId,
                'caseDefinitionId': caseDefinitionId,
                'caseDefinitionKey': caseDefinitionKey,
                'caseDefinitionName': caseDefinitionName,
                'activityInstanceIdIn': activityInstanceIdIn,
                'taskName': taskName,
                'taskNameLike': taskNameLike,
                'taskDescription': taskDescription,
                'taskDescriptionLike': taskDescriptionLike,
                'taskDefinitionKey': taskDefinitionKey,
                'taskDefinitionKeyIn': taskDefinitionKeyIn,
                'taskDeleteReason': taskDeleteReason,
                'taskDeleteReasonLike': taskDeleteReasonLike,
                'taskAssignee': taskAssignee,
                'taskAssigneeLike': taskAssigneeLike,
                'taskOwner': taskOwner,
                'taskOwnerLike': taskOwnerLike,
                'taskPriority': taskPriority,
                'assigned': assigned,
                'unassigned': unassigned,
                'finished': finished,
                'unfinished': unfinished,
                'processFinished': processFinished,
                'processUnfinished': processUnfinished,
                'taskDueDate': taskDueDate,
                'taskDueDateBefore': taskDueDateBefore,
                'taskDueDateAfter': taskDueDateAfter,
                'withoutTaskDueDate': withoutTaskDueDate,
                'taskFollowUpDate': taskFollowUpDate,
                'taskFollowUpDateBefore': taskFollowUpDateBefore,
                'taskFollowUpDateAfter': taskFollowUpDateAfter,
                'startedBefore': startedBefore,
                'startedAfter': startedAfter,
                'finishedBefore': finishedBefore,
                'finishedAfter': finishedAfter,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'taskVariables': taskVariables,
                'processVariables': processVariables,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
                'taskInvolvedUser': taskInvolvedUser,
                'taskInvolvedGroup': taskInvolvedGroup,
                'taskHadCandidateUser': taskHadCandidateUser,
                'taskHadCandidateGroup': taskHadCandidateGroup,
                'withCandidateGroups': withCandidateGroups,
                'withoutCandidateGroups': withoutCandidateGroups,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\`
                parameter is supplied, but no \`sortBy\`. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Tasks (Historic) (POST)
     * Queries for historic tasks that fulfill the given parameters. This method is slightly more powerful
     * than the [Get Tasks (Historic)](https://docs.camunda.org/manual/7.18/reference/rest/history/task/get-task-query/) method because
     * it allows filtering by multiple process or task variables of types `String`, `Number` or `Boolean`.
     * The size of the result set can be retrieved by using the
     * [Get Task Count (POST)](https://docs.camunda.org/manual/7.18/reference/rest/history/task/post-task-query-count/)
     * method.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param requestBody
     * @returns HistoricTaskInstanceDto Request successful.
     * @throws ApiError
     */
    public static queryHistoricTaskInstances(
        firstResult?: number,
        maxResults?: number,
        requestBody?: HistoricTaskInstanceQueryDto,
    ): CancelablePromise<Array<HistoricTaskInstanceDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/task',
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\`
                parameter is supplied, but no \`sortBy\`. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Task Count
     * Queries for the number of historic tasks that fulfill the given parameters.
     * Takes the same parameters as the
     * [Get Tasks (Historic)](https://docs.camunda.org/manual/7.18/reference/rest/history/task/get-task-query/)
     * method.
     * @param taskId Filter by task id.
     * @param taskParentTaskId Filter by parent task id.
     * @param processInstanceId Filter by process instance id.
     * @param processInstanceBusinessKey Filter by process instance business key.
     * @param processInstanceBusinessKeyIn Filter by process instances with one of the give business keys.
     * The keys need to be in a comma-separated list.
     * @param processInstanceBusinessKeyLike Filter by  process instance business key that has the parameter value as a substring.
     * @param executionId Filter by the id of the execution that executed the task.
     * @param processDefinitionId Filter by process definition id.
     * @param processDefinitionKey Restrict to tasks that belong to a process definition with the given key.
     * @param processDefinitionName Restrict to tasks that belong to a process definition with the given name.
     * @param caseInstanceId Filter by case instance id.
     * @param caseExecutionId Filter by the id of the case execution that executed the task.
     * @param caseDefinitionId Filter by case definition id.
     * @param caseDefinitionKey Restrict to tasks that belong to a case definition with the given key.
     * @param caseDefinitionName Restrict to tasks that belong to a case definition with the given name.
     * @param activityInstanceIdIn Only include tasks which belong to one of the passed comma-separated activity instance ids.
     * @param taskName Restrict to tasks that have the given name.
     * @param taskNameLike Restrict to tasks that have a name with the given parameter value as substring.
     * @param taskDescription Restrict to tasks that have the given description.
     * @param taskDescriptionLike Restrict to tasks that have a description that has the parameter value as a substring.
     * @param taskDefinitionKey Restrict to tasks that have the given key.
     * @param taskDefinitionKeyIn Restrict to tasks that have one of the passed comma-separated task definition keys.
     * @param taskDeleteReason Restrict to tasks that have the given delete reason.
     * @param taskDeleteReasonLike Restrict to tasks that have a delete reason that has the parameter value as a substring.
     * @param taskAssignee Restrict to tasks that the given user is assigned to.
     * @param taskAssigneeLike Restrict to tasks that are assigned to users with the parameter value as a substring.
     * @param taskOwner Restrict to tasks that the given user owns.
     * @param taskOwnerLike Restrict to tasks that are owned by users with the parameter value as a substring.
     * @param taskPriority Restrict to tasks that have the given priority.
     * @param assigned If set to `true`, restricts the query to all tasks that are assigned.
     * @param unassigned If set to `true`, restricts the query to all tasks that are unassigned.
     * @param finished Only include finished tasks. Value may only be `true`, as `false` is the default behavior.
     * @param unfinished Only include unfinished tasks. Value may only be `true`, as `false` is the default
     * behavior.
     * @param processFinished Only include tasks of finished processes. Value may only be `true`, as `false` is the
     * default behavior.
     * @param processUnfinished Only include tasks of unfinished processes. Value may only be `true`, as `false` is the
     * default behavior.
     * @param taskDueDate Restrict to tasks that are due on the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param taskDueDateBefore Restrict to tasks that are due before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param taskDueDateAfter Restrict to tasks that are due after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param withoutTaskDueDate Only include tasks which have no due date. Value may only be `true`, as `false` is the
     * default behavior.
     * @param taskFollowUpDate Restrict to tasks that have a followUp date on the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param taskFollowUpDateBefore Restrict to tasks that have a followUp date before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param taskFollowUpDateAfter Restrict to tasks that have a followUp date after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param startedBefore Restrict to tasks that were started before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param startedAfter Restrict to tasks that were started after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param finishedBefore Restrict to tasks that were finished before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param finishedAfter Restrict to tasks that were finished after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A task instance must have one of the given
     * tenant ids.
     * @param withoutTenantId Only include historic task instances that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     * @param taskVariables Only include tasks that have variables with certain values. Variable filtering expressions are
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
     * @param processVariables Only include tasks that belong to process instances that have variables with certain
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
     * @param variableNamesIgnoreCase Match the variable name provided in `taskVariables` and `processVariables` case-
     * insensitively. If set to `true` **variableName** and **variablename** are
     * treated as equal.
     * @param variableValuesIgnoreCase Match the variable value provided in `taskVariables` and `processVariables` case-
     * insensitively. If set to `true` **variableValue** and **variablevalue** are
     * treated as equal.
     * @param taskInvolvedUser Restrict to tasks with a historic identity link to the given user.
     * @param taskInvolvedGroup Restrict to tasks with a historic identity link to the given group.
     * @param taskHadCandidateUser Restrict to tasks with a historic identity link to the given candidate user.
     * @param taskHadCandidateGroup Restrict to tasks with a historic identity link to the given candidate group.
     * @param withCandidateGroups Only include tasks which have a candidate group. Value may only be `true`,
     * as `false` is the default behavior.
     * @param withoutCandidateGroups Only include tasks which have no candidate group. Value may only be `true`,
     * as `false` is the default behavior.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getHistoricTaskInstancesCount(
        taskId?: string,
        taskParentTaskId?: string,
        processInstanceId?: string,
        processInstanceBusinessKey?: string,
        processInstanceBusinessKeyIn?: string,
        processInstanceBusinessKeyLike?: string,
        executionId?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        processDefinitionName?: string,
        caseInstanceId?: string,
        caseExecutionId?: string,
        caseDefinitionId?: string,
        caseDefinitionKey?: string,
        caseDefinitionName?: string,
        activityInstanceIdIn?: string,
        taskName?: string,
        taskNameLike?: string,
        taskDescription?: string,
        taskDescriptionLike?: string,
        taskDefinitionKey?: string,
        taskDefinitionKeyIn?: string,
        taskDeleteReason?: string,
        taskDeleteReasonLike?: string,
        taskAssignee?: string,
        taskAssigneeLike?: string,
        taskOwner?: string,
        taskOwnerLike?: string,
        taskPriority?: number,
        assigned?: boolean,
        unassigned?: boolean,
        finished?: boolean,
        unfinished?: boolean,
        processFinished?: boolean,
        processUnfinished?: boolean,
        taskDueDate?: string,
        taskDueDateBefore?: string,
        taskDueDateAfter?: string,
        withoutTaskDueDate?: boolean,
        taskFollowUpDate?: string,
        taskFollowUpDateBefore?: string,
        taskFollowUpDateAfter?: string,
        startedBefore?: string,
        startedAfter?: string,
        finishedBefore?: string,
        finishedAfter?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        taskVariables?: string,
        processVariables?: string,
        variableNamesIgnoreCase?: boolean,
        variableValuesIgnoreCase?: boolean,
        taskInvolvedUser?: string,
        taskInvolvedGroup?: string,
        taskHadCandidateUser?: string,
        taskHadCandidateGroup?: string,
        withCandidateGroups?: boolean,
        withoutCandidateGroups?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/task/count',
            query: {
                'taskId': taskId,
                'taskParentTaskId': taskParentTaskId,
                'processInstanceId': processInstanceId,
                'processInstanceBusinessKey': processInstanceBusinessKey,
                'processInstanceBusinessKeyIn': processInstanceBusinessKeyIn,
                'processInstanceBusinessKeyLike': processInstanceBusinessKeyLike,
                'executionId': executionId,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processDefinitionName': processDefinitionName,
                'caseInstanceId': caseInstanceId,
                'caseExecutionId': caseExecutionId,
                'caseDefinitionId': caseDefinitionId,
                'caseDefinitionKey': caseDefinitionKey,
                'caseDefinitionName': caseDefinitionName,
                'activityInstanceIdIn': activityInstanceIdIn,
                'taskName': taskName,
                'taskNameLike': taskNameLike,
                'taskDescription': taskDescription,
                'taskDescriptionLike': taskDescriptionLike,
                'taskDefinitionKey': taskDefinitionKey,
                'taskDefinitionKeyIn': taskDefinitionKeyIn,
                'taskDeleteReason': taskDeleteReason,
                'taskDeleteReasonLike': taskDeleteReasonLike,
                'taskAssignee': taskAssignee,
                'taskAssigneeLike': taskAssigneeLike,
                'taskOwner': taskOwner,
                'taskOwnerLike': taskOwnerLike,
                'taskPriority': taskPriority,
                'assigned': assigned,
                'unassigned': unassigned,
                'finished': finished,
                'unfinished': unfinished,
                'processFinished': processFinished,
                'processUnfinished': processUnfinished,
                'taskDueDate': taskDueDate,
                'taskDueDateBefore': taskDueDateBefore,
                'taskDueDateAfter': taskDueDateAfter,
                'withoutTaskDueDate': withoutTaskDueDate,
                'taskFollowUpDate': taskFollowUpDate,
                'taskFollowUpDateBefore': taskFollowUpDateBefore,
                'taskFollowUpDateAfter': taskFollowUpDateAfter,
                'startedBefore': startedBefore,
                'startedAfter': startedAfter,
                'finishedBefore': finishedBefore,
                'finishedAfter': finishedAfter,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'taskVariables': taskVariables,
                'processVariables': processVariables,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
                'taskInvolvedUser': taskInvolvedUser,
                'taskInvolvedGroup': taskInvolvedGroup,
                'taskHadCandidateUser': taskHadCandidateUser,
                'taskHadCandidateGroup': taskHadCandidateGroup,
                'withCandidateGroups': withCandidateGroups,
                'withoutCandidateGroups': withoutCandidateGroups,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Task Count (POST)
     * Queries for the number of historic tasks that fulfill the given parameters. Takes the
     * same parameters as the [Get Tasks (Historic)](https://docs.camunda.org/manual/7.18/reference/rest/history/task/get-task-query/)
     * method. Corresponds to the size of the result set of the
     * [Get Tasks (Historic) (POST)](https://docs.camunda.org/manual/7.18/reference/rest/history/task/post-task-query/)
     * method and takes the same parameters.
     * @param requestBody
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryHistoricTaskInstancesCount(
        requestBody?: HistoricTaskInstanceQueryDto,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/task/count',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Task Report (Historic)
     * Retrieves a report of completed tasks. When the report type is set to `count`, the
     * report contains a list of completed task counts where an entry contains the task name, the
     * definition key of the task, the process definition id, the process definition key, the process
     * definition name and the count of how many tasks were completed for the specified key in a given
     * period. When the report type is set to `duration`, the report contains a minimum, maximum and
     * average duration value of all completed task instances in a given period.
     * @param reportType **Mandatory.** Specifies the kind of the report to execute. To retrieve a report
     * about the duration of process instances the value must be set to `duration`. For a
     * report of the completed tasks in a specific timespan the value must be set to `count`.
     * @param periodUnit When the report type is set to `duration`, this parameter is **mandatory**.
     * Specifies the granularity of the report. Valid values are `month` and `quarter`.
     * @param completedBefore Restrict to tasks that were completed before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param completedAfter Restrict to tasks that were completed after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param groupBy When the report type is set to `count`, this parameter is **mandatory**. Groups the
     * tasks report by a given criterion. Valid values are `taskName` and `processDefinition`.
     * @returns HistoricTaskInstanceReportResultDto Request successful.
     * @throws ApiError
     */
    public static getHistoricTaskInstanceReport(
        reportType?: 'duration' | 'count',
        periodUnit?: 'MONTH' | 'QUARTER',
        completedBefore?: string,
        completedAfter?: string,
        groupBy?: string,
    ): CancelablePromise<Array<HistoricTaskInstanceReportResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/task/report',
            query: {
                'reportType': reportType,
                'periodUnit': periodUnit,
                'completedBefore': completedBefore,
                'completedAfter': completedAfter,
                'groupBy': groupBy,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`completedAfter\`
                parameter is supplied, but the date format is wrong. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
