/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { HistoricIncidentDto } from '../models/HistoricIncidentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricIncidentService {

    /**
     * Get Incidents
     * Queries for historic incidents that fulfill given parameters.
     * The size of the result set can be retrieved by using the
     * [Get Incident Count](https://docs.camunda.org/manual/7.18/reference/rest/history/incident/get-incident-query-count/)
     * method.
     * @param incidentId Restricts to incidents that have the given id.
     * @param incidentType Restricts to incidents that belong to the given incident type. See the [User
     * Guide](/manual/develop/user-guide/process-engine/incidents/#incident-types)
     * for a list of incident types.
     * @param incidentMessage Restricts to incidents that have the given incident message.
     * @param incidentMessageLike Restricts to incidents that incidents message is a substring of the given value.
     * The string can include the wildcard character '%' to express
     * like-strategy: starts with (string%), ends with (%string) or contains
     * (%string%).
     *
     * @param processDefinitionId Restricts to incidents that belong to a process definition with the given id.
     * @param processDefinitionKey Restricts to incidents that have the given processDefinitionKey.
     * @param processDefinitionKeyIn Restricts to incidents that have one of the given process definition keys.
     * @param processInstanceId Restricts to incidents that belong to a process instance with the given id.
     * @param executionId Restricts to incidents that belong to an execution with the given id.
     * @param createTimeBefore Restricts to incidents that have a createTime date before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param createTimeAfter Restricts to incidents that have a createTime date after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param endTimeBefore Restricts to incidents that have an endTimeBefore date before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param endTimeAfter Restricts to incidents that have an endTimeAfter date after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param activityId Restricts to incidents that belong to an activity with the given id.
     * @param failedActivityId Restricts to incidents that were created due to the failure of an activity with the given
     * id.
     * @param causeIncidentId Restricts to incidents that have the given incident id as cause incident.
     * @param rootCauseIncidentId Restricts to incidents that have the given incident id as root cause incident.
     * @param configuration Restricts to incidents that have the given parameter set as configuration.
     * @param historyConfiguration Restricts to incidents that have the given parameter set as history configuration.
     * @param open Restricts to incidents that are open.
     * @param resolved Restricts to incidents that are resolved.
     * @param deleted Restricts to incidents that are deleted.
     * @param tenantIdIn Restricts to incidents that have one of the given comma-separated tenant ids.
     * @param withoutTenantId Only include historic incidents that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     * @param jobDefinitionIdIn Restricts to incidents that have one of the given comma-separated job definition ids.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @returns HistoricIncidentDto Request successful.
     * @throws ApiError
     */
    public static getHistoricIncidents(
        incidentId?: string,
        incidentType?: string,
        incidentMessage?: string,
        incidentMessageLike?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        processDefinitionKeyIn?: string,
        processInstanceId?: string,
        executionId?: string,
        createTimeBefore?: string,
        createTimeAfter?: string,
        endTimeBefore?: string,
        endTimeAfter?: string,
        activityId?: string,
        failedActivityId?: string,
        causeIncidentId?: string,
        rootCauseIncidentId?: string,
        configuration?: string,
        historyConfiguration?: string,
        open?: boolean,
        resolved?: boolean,
        deleted?: boolean,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        jobDefinitionIdIn?: string,
        sortBy?: 'incidentId' | 'incidentMessage' | 'createTime' | 'endTime' | 'incidentType' | 'executionId' | 'activityId' | 'processInstanceId' | 'processDefinitionId' | 'processDefinitionKey' | 'causeIncidentId' | 'rootCauseIncidentId' | 'configuration' | 'historyConfiguration' | 'tenantId' | 'incidentState',
        sortOrder?: 'asc' | 'desc',
    ): CancelablePromise<Array<HistoricIncidentDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/incident',
            query: {
                'incidentId': incidentId,
                'incidentType': incidentType,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'processInstanceId': processInstanceId,
                'executionId': executionId,
                'createTimeBefore': createTimeBefore,
                'createTimeAfter': createTimeAfter,
                'endTimeBefore': endTimeBefore,
                'endTimeAfter': endTimeAfter,
                'activityId': activityId,
                'failedActivityId': failedActivityId,
                'causeIncidentId': causeIncidentId,
                'rootCauseIncidentId': rootCauseIncidentId,
                'configuration': configuration,
                'historyConfiguration': historyConfiguration,
                'open': open,
                'resolved': resolved,
                'deleted': deleted,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'jobDefinitionIdIn': jobDefinitionIdIn,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
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
     * Get Incident Count
     * Queries for the number of historic incidents that fulfill the given parameters.
     * Takes the same parameters as the
     * [Get Incidents](https://docs.camunda.org/manual/7.18/reference/rest/history/incident/get-incident-query/)
     * method.
     * @param incidentId Restricts to incidents that have the given id.
     * @param incidentType Restricts to incidents that belong to the given incident type. See the [User
     * Guide](/manual/develop/user-guide/process-engine/incidents/#incident-types)
     * for a list of incident types.
     * @param incidentMessage Restricts to incidents that have the given incident message.
     * @param incidentMessageLike Restricts to incidents that incidents message is a substring of the given value.
     * The string can include the wildcard character '%' to express
     * like-strategy: starts with (string%), ends with (%string) or contains
     * (%string%).
     *
     * @param processDefinitionId Restricts to incidents that belong to a process definition with the given id.
     * @param processDefinitionKey Restricts to incidents that have the given processDefinitionKey.
     * @param processDefinitionKeyIn Restricts to incidents that have one of the given process definition keys.
     * @param processInstanceId Restricts to incidents that belong to a process instance with the given id.
     * @param executionId Restricts to incidents that belong to an execution with the given id.
     * @param createTimeBefore Restricts to incidents that have a createTime date before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param createTimeAfter Restricts to incidents that have a createTime date after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param endTimeBefore Restricts to incidents that have an endTimeBefore date before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param endTimeAfter Restricts to incidents that have an endTimeAfter date after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param activityId Restricts to incidents that belong to an activity with the given id.
     * @param failedActivityId Restricts to incidents that were created due to the failure of an activity with the given
     * id.
     * @param causeIncidentId Restricts to incidents that have the given incident id as cause incident.
     * @param rootCauseIncidentId Restricts to incidents that have the given incident id as root cause incident.
     * @param configuration Restricts to incidents that have the given parameter set as configuration.
     * @param historyConfiguration Restricts to incidents that have the given parameter set as history configuration.
     * @param open Restricts to incidents that are open.
     * @param resolved Restricts to incidents that are resolved.
     * @param deleted Restricts to incidents that are deleted.
     * @param tenantIdIn Restricts to incidents that have one of the given comma-separated tenant ids.
     * @param withoutTenantId Only include historic incidents that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     * @param jobDefinitionIdIn Restricts to incidents that have one of the given comma-separated job definition ids.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getHistoricIncidentsCount(
        incidentId?: string,
        incidentType?: string,
        incidentMessage?: string,
        incidentMessageLike?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        processDefinitionKeyIn?: string,
        processInstanceId?: string,
        executionId?: string,
        createTimeBefore?: string,
        createTimeAfter?: string,
        endTimeBefore?: string,
        endTimeAfter?: string,
        activityId?: string,
        failedActivityId?: string,
        causeIncidentId?: string,
        rootCauseIncidentId?: string,
        configuration?: string,
        historyConfiguration?: string,
        open?: boolean,
        resolved?: boolean,
        deleted?: boolean,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        jobDefinitionIdIn?: string,
        sortBy?: 'incidentId' | 'incidentMessage' | 'createTime' | 'endTime' | 'incidentType' | 'executionId' | 'activityId' | 'processInstanceId' | 'processDefinitionId' | 'processDefinitionKey' | 'causeIncidentId' | 'rootCauseIncidentId' | 'configuration' | 'historyConfiguration' | 'tenantId' | 'incidentState',
        sortOrder?: 'asc' | 'desc',
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/incident/count',
            query: {
                'incidentId': incidentId,
                'incidentType': incidentType,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'processInstanceId': processInstanceId,
                'executionId': executionId,
                'createTimeBefore': createTimeBefore,
                'createTimeAfter': createTimeAfter,
                'endTimeBefore': endTimeBefore,
                'endTimeAfter': endTimeAfter,
                'activityId': activityId,
                'failedActivityId': failedActivityId,
                'causeIncidentId': causeIncidentId,
                'rootCauseIncidentId': rootCauseIncidentId,
                'configuration': configuration,
                'historyConfiguration': historyConfiguration,
                'open': open,
                'resolved': resolved,
                'deleted': deleted,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'jobDefinitionIdIn': jobDefinitionIdIn,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\`
                parameter is supplied, but no \`sortBy\`. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
