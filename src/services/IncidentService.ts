/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnotationDto } from '../models/AnnotationDto';
import type { CountResultDto } from '../models/CountResultDto';
import type { IncidentDto } from '../models/IncidentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IncidentService {

    /**
     * Get List
     * Queries for incidents that fulfill given parameters. The size of the result set can be retrieved by using
     * the [Get Incident Count](https://docs.camunda.org/manual/7.18/reference/rest/incident/get-query-count/) method.
     * @param incidentId Restricts to incidents that have the given id.
     * @param incidentType Restricts to incidents that belong to the given incident type. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/incidents/#incident-types) for a list of incident
     * types.
     * @param incidentMessage Restricts to incidents that have the given incident message.
     * @param incidentMessageLike Restricts to incidents that incidents message is a substring of the given value. The string can include
     * the wildcard character '%' to express like-strategy: starts with (`string%`), ends with (`%string`) or
     * contains (`%string%`).
     * @param processDefinitionId Restricts to incidents that belong to a process definition with the given id.
     * @param processDefinitionKeyIn Restricts to incidents that belong to a process definition with the given keys. Must be a
     * comma-separated list.
     * @param processInstanceId Restricts to incidents that belong to a process instance with the given id.
     * @param executionId Restricts to incidents that belong to an execution with the given id.
     * @param incidentTimestampBefore Restricts to incidents that have an incidentTimestamp date before the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date
     * must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param incidentTimestampAfter Restricts to incidents that have an incidentTimestamp date after the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date
     * must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param activityId Restricts to incidents that belong to an activity with the given id.
     * @param failedActivityId Restricts to incidents that were created due to the failure of an activity with the given id.
     * @param causeIncidentId Restricts to incidents that have the given incident id as cause incident.
     * @param rootCauseIncidentId Restricts to incidents that have the given incident id as root cause incident.
     * @param configuration Restricts to incidents that have the given parameter set as configuration.
     * @param tenantIdIn Restricts to incidents that have one of the given comma-separated tenant ids.
     * @param jobDefinitionIdIn Restricts to incidents that have one of the given comma-separated job definition ids.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns IncidentDto Request successful.
     * @throws ApiError
     */
    public static getIncidents(
        incidentId?: string,
        incidentType?: string,
        incidentMessage?: string,
        incidentMessageLike?: string,
        processDefinitionId?: string,
        processDefinitionKeyIn?: string,
        processInstanceId?: string,
        executionId?: string,
        incidentTimestampBefore?: string,
        incidentTimestampAfter?: string,
        activityId?: string,
        failedActivityId?: string,
        causeIncidentId?: string,
        rootCauseIncidentId?: string,
        configuration?: string,
        tenantIdIn?: string,
        jobDefinitionIdIn?: string,
        sortBy?: 'incidentId' | 'incidentMessage' | 'incidentTimestamp' | 'incidentType' | 'executionId' | 'activityId' | 'processInstanceId' | 'processDefinitionId' | 'causeIncidentId' | 'rootCauseIncidentId' | 'configuration' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<IncidentDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/incident',
            query: {
                'incidentId': incidentId,
                'incidentType': incidentType,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'processInstanceId': processInstanceId,
                'executionId': executionId,
                'incidentTimestampBefore': incidentTimestampBefore,
                'incidentTimestampAfter': incidentTimestampAfter,
                'activityId': activityId,
                'failedActivityId': failedActivityId,
                'causeIncidentId': causeIncidentId,
                'rootCauseIncidentId': rootCauseIncidentId,
                'configuration': configuration,
                'tenantIdIn': tenantIdIn,
                'jobDefinitionIdIn': jobDefinitionIdIn,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\` parameter is supplied,
                but no \`sortBy\`. See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error
                response format.`,
            },
        });
    }

    /**
     * Get List Count
     * Queries for the number of incidents that fulfill given parameters. Takes the same parameters as the
     * [Get Incidents](https://docs.camunda.org/manual/7.18/reference/rest/incident/get-query/) method.
     * @param incidentId Restricts to incidents that have the given id.
     * @param incidentType Restricts to incidents that belong to the given incident type. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/incidents/#incident-types) for a list of incident
     * types.
     * @param incidentMessage Restricts to incidents that have the given incident message.
     * @param incidentMessageLike Restricts to incidents that incidents message is a substring of the given value. The string can include
     * the wildcard character '%' to express like-strategy: starts with (`string%`), ends with (`%string`) or
     * contains (`%string%`).
     * @param processDefinitionId Restricts to incidents that belong to a process definition with the given id.
     * @param processDefinitionKeyIn Restricts to incidents that belong to a process definition with the given keys. Must be a
     * comma-separated list.
     * @param processInstanceId Restricts to incidents that belong to a process instance with the given id.
     * @param executionId Restricts to incidents that belong to an execution with the given id.
     * @param incidentTimestampBefore Restricts to incidents that have an incidentTimestamp date before the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date
     * must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param incidentTimestampAfter Restricts to incidents that have an incidentTimestamp date after the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date
     * must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param activityId Restricts to incidents that belong to an activity with the given id.
     * @param failedActivityId Restricts to incidents that were created due to the failure of an activity with the given id.
     * @param causeIncidentId Restricts to incidents that have the given incident id as cause incident.
     * @param rootCauseIncidentId Restricts to incidents that have the given incident id as root cause incident.
     * @param configuration Restricts to incidents that have the given parameter set as configuration.
     * @param tenantIdIn Restricts to incidents that have one of the given comma-separated tenant ids.
     * @param jobDefinitionIdIn Restricts to incidents that have one of the given comma-separated job definition ids.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getIncidentsCount(
        incidentId?: string,
        incidentType?: string,
        incidentMessage?: string,
        incidentMessageLike?: string,
        processDefinitionId?: string,
        processDefinitionKeyIn?: string,
        processInstanceId?: string,
        executionId?: string,
        incidentTimestampBefore?: string,
        incidentTimestampAfter?: string,
        activityId?: string,
        failedActivityId?: string,
        causeIncidentId?: string,
        rootCauseIncidentId?: string,
        configuration?: string,
        tenantIdIn?: string,
        jobDefinitionIdIn?: string,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/incident/count',
            query: {
                'incidentId': incidentId,
                'incidentType': incidentType,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'processInstanceId': processInstanceId,
                'executionId': executionId,
                'incidentTimestampBefore': incidentTimestampBefore,
                'incidentTimestampAfter': incidentTimestampAfter,
                'activityId': activityId,
                'failedActivityId': failedActivityId,
                'causeIncidentId': causeIncidentId,
                'rootCauseIncidentId': rootCauseIncidentId,
                'configuration': configuration,
                'tenantIdIn': tenantIdIn,
                'jobDefinitionIdIn': jobDefinitionIdIn,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid. See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error
                response format.`,
            },
        });
    }

    /**
     * Resolve Incident
     * Resolves an incident with given id.
     * @param id The id of the incident to be resolved.
     * @returns void
     * @throws ApiError
     */
    public static resolveIncident(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/incident/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Returned if an incident is not related to any execution or an incident is of type \`failedJob\` or
                \`failedExternalTask\`. To resolve such an incident, please refer to the
                [Incident Types](https://docs.camunda.org/manual/7.18/user-guide/process-engine/incidents/#incident-types) section.`,
                404: `Returned if an incident with given id does not exist.`,
            },
        });
    }

    /**
     * Get Incident
     * Retrieves an incident by ID.
     * @param id The id of the incident to be retrieved.
     * @returns IncidentDto Request successful.
     * @throws ApiError
     */
    public static getIncident(
        id: string,
    ): CancelablePromise<IncidentDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/incident/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if an incident with given id does not exist.`,
            },
        });
    }

    /**
     * Clear Incident Annotation
     * Clears the annotation of an incident with given id.
     * @param id The id of the incident to clear the annotation at.
     * @returns void
     * @throws ApiError
     */
    public static clearIncidentAnnotation(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/incident/{id}/annotation',
            path: {
                'id': id,
            },
            errors: {
                400: `Returned if no incident can be found for the given id.`,
            },
        });
    }

    /**
     * Set Incident Annotation
     * Sets the annotation of an incident with given id.
     * @param id The id of the incident to clear the annotation at.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static setIncidentAnnotation(
        id: string,
        requestBody?: AnnotationDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/incident/{id}/annotation',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if no incident can be found for the given id.`,
            },
        });
    }

}
