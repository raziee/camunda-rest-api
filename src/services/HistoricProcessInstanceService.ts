/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchDto } from '../models/BatchDto';
import type { CountResultDto } from '../models/CountResultDto';
import type { DeleteHistoricProcessInstancesDto } from '../models/DeleteHistoricProcessInstancesDto';
import type { DurationReportResultDto } from '../models/DurationReportResultDto';
import type { HistoricProcessInstanceDto } from '../models/HistoricProcessInstanceDto';
import type { HistoricProcessInstanceQueryDto } from '../models/HistoricProcessInstanceQueryDto';
import type { SetRemovalTimeToHistoricProcessInstancesDto } from '../models/SetRemovalTimeToHistoricProcessInstancesDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricProcessInstanceService {

    /**
     * Get List
     * Queries for historic process instances that fulfill the given parameters.
     * The size of the result set can be retrieved by using the
     * [Get Process Instance Count](https://docs.camunda.org/manual/7.18/reference/rest/history/process-instance/get-process-instance-query-count/) method.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param processInstanceId Filter by process instance id.
     * @param processInstanceIds Filter by process instance ids. Filter by a comma-separated list of `Strings`.
     * @param processDefinitionId Filter by the process definition the instances run on.
     * @param processDefinitionKey Filter by the key of the process definition the instances run on.
     * @param processDefinitionKeyIn Filter by a list of process definition keys. A process instance must have one of the given process definition keys. Filter by a comma-separated list of `Strings`.
     * @param processDefinitionName Filter by the name of the process definition the instances run on.
     * @param processDefinitionNameLike Filter by process definition names that the parameter is a substring of.
     * @param processDefinitionKeyNotIn Exclude instances that belong to a set of process definitions. Filter by a comma-separated list of `Strings`.
     * @param processInstanceBusinessKey Filter by process instance business key.
     * @param processInstanceBusinessKeyIn Filter by a list of business keys. A process instance must have one of the given business keys. Filter by a comma-separated list of `Strings`
     * @param processInstanceBusinessKeyLike Filter by process instance business key that the parameter is a substring of.
     * @param rootProcessInstances Restrict the query to all process instances that are top level process instances.
     * @param finished Only include finished process instances. This flag includes all process instances
     * that are completed or terminated. Value may only be `true`, as `false` is the default behavior.
     * @param unfinished Only include unfinished process instances. Value may only be `true`, as `false` is the default behavior.
     * @param withIncidents Only include process instances which have an incident. Value may only be `true`, as `false` is the default behavior.
     * @param withRootIncidents Only include process instances which have a root incident. Value may only be `true`, as `false` is the default behavior.
     * @param incidentType Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
     * @param incidentStatus Only include process instances which have an incident in status either open or resolved. To get all process instances, use the query parameter withIncidents.
     * @param incidentMessage Filter by the incident message. Exact match.
     * @param incidentMessageLike Filter by the incident message that the parameter is a substring of.
     * @param startedBefore Restrict to instances that were started before the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param startedAfter Restrict to instances that were started after the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param finishedBefore Restrict to instances that were finished before the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param finishedAfter Restrict to instances that were finished after the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param executedActivityAfter Restrict to instances that executed an activity after the given date (inclusive).
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param executedActivityBefore Restrict to instances that executed an activity before the given date (inclusive).
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param executedJobAfter Restrict to instances that executed an job after the given date (inclusive).
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param executedJobBefore Restrict to instances that executed an job before the given date (inclusive).
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param startedBy Only include process instances that were started by the given user.
     * @param superProcessInstanceId Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id.
     * @param subProcessInstanceId Restrict query to one process instance that has a sub process instance with the given id.
     * @param superCaseInstanceId Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
     * @param subCaseInstanceId Restrict query to one process instance that has a sub case instance with the given id.
     * @param caseInstanceId Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
     * @param tenantIdIn Filter by a list of tenant ids. A process instance must have one of the given tenant ids. Filter by a comma-separated list of `Strings`
     * @param withoutTenantId Only include historic process instances which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
     * @param executedActivityIdIn Restrict to instances that executed an activity with one of given ids. Filter by a comma-separated list of `Strings`
     * @param activeActivityIdIn Restrict to instances that have an active activity with one of given ids. Filter by a comma-separated list of `Strings`
     * @param active Restrict to instances that are active.
     * @param suspended Restrict to instances that are suspended.
     * @param completed Restrict to instances that are completed.
     * @param externallyTerminated Restrict to instances that are externallyTerminated.
     * @param internallyTerminated Restrict to instances that are internallyTerminated.
     * @param variables Only include process instances that have/had variables with certain values.
     * Variable filtering expressions are comma-separated and are structured as follows:
     * A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.
     *
     * **Note:** Values are always treated as String objects on server side.
     *
     * Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`.
     *
     * Key and value may not contain underscore or comma characters.
     *
     * @param variableNamesIgnoreCase Match all variable names provided in variables case-insensitively. If set to `true` variableName and variablename are treated as equal.
     * @param variableValuesIgnoreCase Match all variable values provided in variables case-insensitively. If set to `true` variableValue and variablevalue are treated as equal.
     * @returns HistoricProcessInstanceDto Request successful.
     * @throws ApiError
     */
    public static getHistoricProcessInstances(
        sortBy?: 'instanceId' | 'definitionId' | 'definitionKey' | 'definitionName' | 'definitionVersion' | 'businessKey' | 'startTime' | 'endTime' | 'duration' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
        processInstanceId?: string,
        processInstanceIds?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        processDefinitionKeyIn?: string,
        processDefinitionName?: string,
        processDefinitionNameLike?: string,
        processDefinitionKeyNotIn?: string,
        processInstanceBusinessKey?: string,
        processInstanceBusinessKeyIn?: string,
        processInstanceBusinessKeyLike?: string,
        rootProcessInstances?: boolean,
        finished?: boolean,
        unfinished?: boolean,
        withIncidents?: boolean,
        withRootIncidents?: boolean,
        incidentType?: string,
        incidentStatus?: 'open' | 'resolved',
        incidentMessage?: string,
        incidentMessageLike?: string,
        startedBefore?: string,
        startedAfter?: string,
        finishedBefore?: string,
        finishedAfter?: string,
        executedActivityAfter?: string,
        executedActivityBefore?: string,
        executedJobAfter?: string,
        executedJobBefore?: string,
        startedBy?: string,
        superProcessInstanceId?: string,
        subProcessInstanceId?: string,
        superCaseInstanceId?: string,
        subCaseInstanceId?: string,
        caseInstanceId?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        executedActivityIdIn?: string,
        activeActivityIdIn?: string,
        active?: boolean,
        suspended?: boolean,
        completed?: boolean,
        externallyTerminated?: boolean,
        internallyTerminated?: boolean,
        variables?: string,
        variableNamesIgnoreCase?: boolean,
        variableValuesIgnoreCase?: boolean,
    ): CancelablePromise<Array<HistoricProcessInstanceDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/process-instance',
            query: {
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
                'processInstanceId': processInstanceId,
                'processInstanceIds': processInstanceIds,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'processDefinitionName': processDefinitionName,
                'processDefinitionNameLike': processDefinitionNameLike,
                'processDefinitionKeyNotIn': processDefinitionKeyNotIn,
                'processInstanceBusinessKey': processInstanceBusinessKey,
                'processInstanceBusinessKeyIn': processInstanceBusinessKeyIn,
                'processInstanceBusinessKeyLike': processInstanceBusinessKeyLike,
                'rootProcessInstances': rootProcessInstances,
                'finished': finished,
                'unfinished': unfinished,
                'withIncidents': withIncidents,
                'withRootIncidents': withRootIncidents,
                'incidentType': incidentType,
                'incidentStatus': incidentStatus,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'startedBefore': startedBefore,
                'startedAfter': startedAfter,
                'finishedBefore': finishedBefore,
                'finishedAfter': finishedAfter,
                'executedActivityAfter': executedActivityAfter,
                'executedActivityBefore': executedActivityBefore,
                'executedJobAfter': executedJobAfter,
                'executedJobBefore': executedJobBefore,
                'startedBy': startedBy,
                'superProcessInstanceId': superProcessInstanceId,
                'subProcessInstanceId': subProcessInstanceId,
                'superCaseInstanceId': superCaseInstanceId,
                'subCaseInstanceId': subCaseInstanceId,
                'caseInstanceId': caseInstanceId,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'executedActivityIdIn': executedActivityIdIn,
                'activeActivityIdIn': activeActivityIdIn,
                'active': active,
                'suspended': suspended,
                'completed': completed,
                'externallyTerminated': externallyTerminated,
                'internallyTerminated': internallyTerminated,
                'variables': variables,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
            },
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid, for example if a sortOrder parameter is supplied, but no sortBy.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get List (POST)
     * Queries for historic process instances that fulfill the given parameters.
     * This method is slightly more powerful than the
     * [Get Process Instance](https://docs.camunda.org/manual/7.18/reference/rest/history/process-instance/get-process-instance-query/)
     * because it allows filtering by multiple process variables of types `String`, `Number` or `Boolean`.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param requestBody
     * @returns HistoricProcessInstanceDto Request successful.
     * @throws ApiError
     */
    public static queryHistoricProcessInstances(
        firstResult?: number,
        maxResults?: number,
        requestBody?: HistoricProcessInstanceQueryDto,
    ): CancelablePromise<Array<HistoricProcessInstanceDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/process-instance',
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid, for example if a sortOrder parameter is supplied, but no sortBy.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get List Count
     * Queries for the number of historic process instances that fulfill the given parameters.
     * Takes the same parameters as the [Get Process Instances](https://docs.camunda.org/manual/7.18/reference/rest/history/process-instance/get-process-instance-query/) method.
     * @param processInstanceId Filter by process instance id.
     * @param processInstanceIds Filter by process instance ids. Filter by a comma-separated list of `Strings`.
     * @param processDefinitionId Filter by the process definition the instances run on.
     * @param processDefinitionKey Filter by the key of the process definition the instances run on.
     * @param processDefinitionKeyIn Filter by a list of process definition keys. A process instance must have one of the given process definition keys. Filter by a comma-separated list of `Strings`.
     * @param processDefinitionName Filter by the name of the process definition the instances run on.
     * @param processDefinitionNameLike Filter by process definition names that the parameter is a substring of.
     * @param processDefinitionKeyNotIn Exclude instances that belong to a set of process definitions. Filter by a comma-separated list of `Strings`.
     * @param processInstanceBusinessKey Filter by process instance business key.
     * @param processInstanceBusinessKeyIn Filter by a list of business keys. A process instance must have one of the given business keys. Filter by a comma-separated list of `Strings`
     * @param processInstanceBusinessKeyLike Filter by process instance business key that the parameter is a substring of.
     * @param rootProcessInstances Restrict the query to all process instances that are top level process instances.
     * @param finished Only include finished process instances. This flag includes all process instances
     * that are completed or terminated. Value may only be `true`, as `false` is the default behavior.
     * @param unfinished Only include unfinished process instances. Value may only be `true`, as `false` is the default behavior.
     * @param withIncidents Only include process instances which have an incident. Value may only be `true`, as `false` is the default behavior.
     * @param withRootIncidents Only include process instances which have a root incident. Value may only be `true`, as `false` is the default behavior.
     * @param incidentType Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
     * @param incidentStatus Only include process instances which have an incident in status either open or resolved. To get all process instances, use the query parameter withIncidents.
     * @param incidentMessage Filter by the incident message. Exact match.
     * @param incidentMessageLike Filter by the incident message that the parameter is a substring of.
     * @param startedBefore Restrict to instances that were started before the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param startedAfter Restrict to instances that were started after the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param finishedBefore Restrict to instances that were finished before the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param finishedAfter Restrict to instances that were finished after the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param executedActivityAfter Restrict to instances that executed an activity after the given date (inclusive).
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param executedActivityBefore Restrict to instances that executed an activity before the given date (inclusive).
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param executedJobAfter Restrict to instances that executed an job after the given date (inclusive).
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param executedJobBefore Restrict to instances that executed an job before the given date (inclusive).
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param startedBy Only include process instances that were started by the given user.
     * @param superProcessInstanceId Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id.
     * @param subProcessInstanceId Restrict query to one process instance that has a sub process instance with the given id.
     * @param superCaseInstanceId Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
     * @param subCaseInstanceId Restrict query to one process instance that has a sub case instance with the given id.
     * @param caseInstanceId Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
     * @param tenantIdIn Filter by a list of tenant ids. A process instance must have one of the given tenant ids. Filter by a comma-separated list of `Strings`
     * @param withoutTenantId Only include historic process instances which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
     * @param executedActivityIdIn Restrict to instances that executed an activity with one of given ids. Filter by a comma-separated list of `Strings`
     * @param activeActivityIdIn Restrict to instances that have an active activity with one of given ids. Filter by a comma-separated list of `Strings`
     * @param active Restrict to instances that are active.
     * @param suspended Restrict to instances that are suspended.
     * @param completed Restrict to instances that are completed.
     * @param externallyTerminated Restrict to instances that are externallyTerminated.
     * @param internallyTerminated Restrict to instances that are internallyTerminated.
     * @param variables Only include process instances that have/had variables with certain values.
     * Variable filtering expressions are comma-separated and are structured as follows:
     * A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.
     *
     * **Note:** Values are always treated as String objects on server side.
     *
     * Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`.
     *
     * Key and value may not contain underscore or comma characters.
     *
     * @param variableNamesIgnoreCase Match all variable names provided in variables case-insensitively. If set to `true` variableName and variablename are treated as equal.
     * @param variableValuesIgnoreCase Match all variable values provided in variables case-insensitively. If set to `true` variableValue and variablevalue are treated as equal.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getHistoricProcessInstancesCount(
        processInstanceId?: string,
        processInstanceIds?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        processDefinitionKeyIn?: string,
        processDefinitionName?: string,
        processDefinitionNameLike?: string,
        processDefinitionKeyNotIn?: string,
        processInstanceBusinessKey?: string,
        processInstanceBusinessKeyIn?: string,
        processInstanceBusinessKeyLike?: string,
        rootProcessInstances?: boolean,
        finished?: boolean,
        unfinished?: boolean,
        withIncidents?: boolean,
        withRootIncidents?: boolean,
        incidentType?: string,
        incidentStatus?: 'open' | 'resolved',
        incidentMessage?: string,
        incidentMessageLike?: string,
        startedBefore?: string,
        startedAfter?: string,
        finishedBefore?: string,
        finishedAfter?: string,
        executedActivityAfter?: string,
        executedActivityBefore?: string,
        executedJobAfter?: string,
        executedJobBefore?: string,
        startedBy?: string,
        superProcessInstanceId?: string,
        subProcessInstanceId?: string,
        superCaseInstanceId?: string,
        subCaseInstanceId?: string,
        caseInstanceId?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        executedActivityIdIn?: string,
        activeActivityIdIn?: string,
        active?: boolean,
        suspended?: boolean,
        completed?: boolean,
        externallyTerminated?: boolean,
        internallyTerminated?: boolean,
        variables?: string,
        variableNamesIgnoreCase?: boolean,
        variableValuesIgnoreCase?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/process-instance/count',
            query: {
                'processInstanceId': processInstanceId,
                'processInstanceIds': processInstanceIds,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'processDefinitionName': processDefinitionName,
                'processDefinitionNameLike': processDefinitionNameLike,
                'processDefinitionKeyNotIn': processDefinitionKeyNotIn,
                'processInstanceBusinessKey': processInstanceBusinessKey,
                'processInstanceBusinessKeyIn': processInstanceBusinessKeyIn,
                'processInstanceBusinessKeyLike': processInstanceBusinessKeyLike,
                'rootProcessInstances': rootProcessInstances,
                'finished': finished,
                'unfinished': unfinished,
                'withIncidents': withIncidents,
                'withRootIncidents': withRootIncidents,
                'incidentType': incidentType,
                'incidentStatus': incidentStatus,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'startedBefore': startedBefore,
                'startedAfter': startedAfter,
                'finishedBefore': finishedBefore,
                'finishedAfter': finishedAfter,
                'executedActivityAfter': executedActivityAfter,
                'executedActivityBefore': executedActivityBefore,
                'executedJobAfter': executedJobAfter,
                'executedJobBefore': executedJobBefore,
                'startedBy': startedBy,
                'superProcessInstanceId': superProcessInstanceId,
                'subProcessInstanceId': subProcessInstanceId,
                'superCaseInstanceId': superCaseInstanceId,
                'subCaseInstanceId': subCaseInstanceId,
                'caseInstanceId': caseInstanceId,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'executedActivityIdIn': executedActivityIdIn,
                'activeActivityIdIn': activeActivityIdIn,
                'active': active,
                'suspended': suspended,
                'completed': completed,
                'externallyTerminated': externallyTerminated,
                'internallyTerminated': internallyTerminated,
                'variables': variables,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
            },
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get List Count (POST)
     * Queries for the number of historic process instances that fulfill the given parameters.
     * This method takes the same message body as the [Get Process Instances (POST)](https://docs.camunda.org/manual/7.18/reference/rest/history/process-instance/get-process-instance-query/) method and
     * therefore it is slightly more powerful than the [Get Process Instance Count](https://docs.camunda.org/manual/7.18/reference/rest/history/process-instance/post-process-instance-query-count/) method.
     * @param requestBody
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryHistoricProcessInstancesCount(
        requestBody?: HistoricProcessInstanceQueryDto,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/process-instance/count',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Delete Async (POST)
     * Delete multiple historic process instances asynchronously (batch).
     * At least `historicProcessInstanceIds` or `historicProcessInstanceQuery` has to be provided.
     * If both are provided then all instances matching query criterion and instances from the list will be deleted.
     * @param requestBody
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static deleteHistoricProcessInstancesAsync(
        requestBody?: DeleteHistoricProcessInstancesDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/process-instance/delete',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, i.e. neither historicProcessInstanceIds,
                nor historicProcessInstanceQuery is present. See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Duration Report
     * Retrieves a report about the duration of completed process instances, grouped by a period.
     * These reports include the maximum, minimum and average duration of all completed process instances which were started in a given period.
     *
     * **Note:** This only includes historic data.
     * @param reportType **Mandatory.** Specifies the type of the report to retrieve.
     * To retrieve a report about the duration of process instances, the value must be set to `duration`.
     * @param periodUnit **Mandatory.** Specifies the granularity of the report. Valid values are `month` and `quarter`.
     * @param processDefinitionIdIn Filter by process definition ids. Must be a comma-separated list of process definition ids.
     * @param processDefinitionKeyIn Filter by process definition keys. Must be a comma-separated list of process definition keys.
     * @param startedBefore Restrict to instances that were started before the given date.
     * By [default](), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2016-01-23T14:42:45.000+0200`.
     * @param startedAfter Restrict to instances that were started after the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2016-01-23T14:42:45.000+0200`.
     * @returns DurationReportResultDto Request successful.
     * @throws ApiError
     */
    public static getHistoricProcessInstanceDurationReport(
        reportType: string,
        periodUnit: 'month' | 'quarter',
        processDefinitionIdIn?: string,
        processDefinitionKeyIn?: string,
        startedBefore?: string,
        startedAfter?: string,
    ): CancelablePromise<Array<DurationReportResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/process-instance/report',
            query: {
                'reportType': reportType,
                'periodUnit': periodUnit,
                'processDefinitionIdIn': processDefinitionIdIn,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'startedBefore': startedBefore,
                'startedAfter': startedAfter,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid or mandatory parameters are not supplied.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
                403: `If the authenticated user is unauthorized to read the history.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Set Removal Time Async (POST)
     * Sets the removal time to multiple historic process instances asynchronously (batch).
     *
     * At least `historicProcessInstanceIds` or `historicProcessInstanceQuery` has to be provided.
     * If both are provided, all instances matching query criterion and instances from the list will be updated with a removal time.
     * @param requestBody
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static setRemovalTimeAsync(
        requestBody?: SetRemovalTimeToHistoricProcessInstancesDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/process-instance/set-removal-time',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                Request was unsuccessfull due to a bad user request. This occurs if some of the query parameters are invalid,
                e. g. if neither \`historicProcessInstances\` nor \`historicProcessInstanceQuery\` is present or if no mode is specified.

                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Delete
     * Deletes a process instance from the history by id.
     * @param id The id of the historic process instance to be deleted.
     * @param failIfNotExists If set to `false`, the request will still be successful if the process id is not found.
     * @returns void
     * @throws ApiError
     */
    public static deleteHistoricProcessInstance(
        id: string,
        failIfNotExists?: boolean,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/history/process-instance/{id}',
            path: {
                'id': id,
            },
            query: {
                'failIfNotExists': failIfNotExists,
            },
            errors: {
                404: `Not found
                Historic process instance with given id does not exist.`,
            },
        });
    }

    /**
     * Get
     * Retrieves a historic process instance by id, according to the `HistoricProcessInstance` interface in the engine.
     * @param id The id of the historic process instance to be retrieved.
     * @returns HistoricProcessInstanceDto Request successful.
     * @throws ApiError
     */
    public static getHistoricProcessInstance(
        id: string,
    ): CancelablePromise<HistoricProcessInstanceDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/process-instance/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found
                Historic process instance with given id does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Delete Variable Instances
     * Deletes all variables of a process instance from the history by id.
     * @param id The id of the process instance for which all historic variables are to be deleted.
     * @returns void
     * @throws ApiError
     */
    public static deleteHistoricVariableInstancesOfHistoricProcessInstance(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/history/process-instance/{id}/variable-instances',
            path: {
                'id': id,
            },
            errors: {
                404: `Not found
                Historic process instance with given id does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#parse-exceptions) for the error response format.`,
            },
        });
    }

}
