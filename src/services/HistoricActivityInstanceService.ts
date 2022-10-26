/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { HistoricActivityInstanceDto } from '../models/HistoricActivityInstanceDto';
import type { HistoricActivityInstanceQueryDto } from '../models/HistoricActivityInstanceQueryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricActivityInstanceService {

    /**
     * Get List
     * Queries for historic activity instances that fulfill the given parameters.
     * The size of the result set can be retrieved by using the
     * [Get Historic Activity Instance Count](https://docs.camunda.org/manual/7.18/reference/rest/history/activity-instance/get-activity-instance-query-count/) method.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param activityInstanceId Filter by activity instance id.
     * @param processInstanceId Filter by process instance id.
     * @param processDefinitionId Filter by process definition id.
     * @param executionId Filter by the id of the execution that executed the activity instance.
     * @param activityId Filter by the activity id (according to BPMN 2.0 XML).
     * @param activityName Filter by the activity name (according to BPMN 2.0 XML).
     * @param activityType Filter by activity type.
     * @param taskAssignee Only include activity instances that are user tasks and assigned to a given user.
     * @param finished Only include finished activity instances.
     * Value may only be `true`, as `false` behaves the same as when the property is not set.
     * @param unfinished Only include unfinished activity instances.
     * Value may only be `true`, as `false` behaves the same as when the property is not set.
     * @param canceled Only include canceled activity instances.
     * Value may only be `true`, as `false` behaves the same as when the property is not set.
     * @param completeScope Only include activity instances which completed a scope.
     * Value may only be `true`, as `false` behaves the same as when the property is not set.
     * @param startedBefore Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param startedAfter Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param finishedBefore Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param finishedAfter Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param tenantIdIn Filter by a comma-separated list of ids. An activity instance must have one of the given tenant ids.
     * @param withoutTenantId Only include historic activity instances that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
     * @returns HistoricActivityInstanceDto Request successful.
     * @throws ApiError
     */
    public static getHistoricActivityInstances(
        sortBy?: 'activityInstanceId' | 'instanceId' | 'executionId' | 'activityId' | 'activityName' | 'activityType' | 'startTime' | 'endTime' | 'duration' | 'definitionId' | 'occurrence' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
        activityInstanceId?: string,
        processInstanceId?: string,
        processDefinitionId?: string,
        executionId?: string,
        activityId?: string,
        activityName?: string,
        activityType?: string,
        taskAssignee?: string,
        finished?: boolean,
        unfinished?: boolean,
        canceled?: boolean,
        completeScope?: boolean,
        startedBefore?: string,
        startedAfter?: string,
        finishedBefore?: string,
        finishedAfter?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
    ): CancelablePromise<Array<HistoricActivityInstanceDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/activity-instance',
            query: {
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
                'activityInstanceId': activityInstanceId,
                'processInstanceId': processInstanceId,
                'processDefinitionId': processDefinitionId,
                'executionId': executionId,
                'activityId': activityId,
                'activityName': activityName,
                'activityType': activityType,
                'taskAssignee': taskAssignee,
                'finished': finished,
                'unfinished': unfinished,
                'canceled': canceled,
                'completeScope': completeScope,
                'startedBefore': startedBefore,
                'startedAfter': startedAfter,
                'finishedBefore': finishedBefore,
                'finishedAfter': finishedAfter,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
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
     * Queries for historic activity instances that fulfill the given parameters.
     * The size of the result set can be retrieved by using the
     * [Get Historic Activity Instance Count](https://docs.camunda.org/manual/7.18/reference/rest/history/activity-instance/get-activity-instance-query-count/) method.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param requestBody
     * @returns HistoricActivityInstanceDto Request successful.
     * @throws ApiError
     */
    public static queryHistoricActivityInstances(
        firstResult?: number,
        maxResults?: number,
        requestBody?: HistoricActivityInstanceQueryDto,
    ): CancelablePromise<Array<HistoricActivityInstanceDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/activity-instance',
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
     * Queries for the number of historic activity instances that fulfill the given parameters.
     * Takes the same parameters as the [Get Historic Activity Instance](https://docs.camunda.org/manual/7.18/reference/rest/history/activity-instance/get-activity-instance-query/)  method.
     * @param activityInstanceId Filter by activity instance id.
     * @param processInstanceId Filter by process instance id.
     * @param processDefinitionId Filter by process definition id.
     * @param executionId Filter by the id of the execution that executed the activity instance.
     * @param activityId Filter by the activity id (according to BPMN 2.0 XML).
     * @param activityName Filter by the activity name (according to BPMN 2.0 XML).
     * @param activityType Filter by activity type.
     * @param taskAssignee Only include activity instances that are user tasks and assigned to a given user.
     * @param finished Only include finished activity instances.
     * Value may only be `true`, as `false` behaves the same as when the property is not set.
     * @param unfinished Only include unfinished activity instances.
     * Value may only be `true`, as `false` behaves the same as when the property is not set.
     * @param canceled Only include canceled activity instances.
     * Value may only be `true`, as `false` behaves the same as when the property is not set.
     * @param completeScope Only include activity instances which completed a scope.
     * Value may only be `true`, as `false` behaves the same as when the property is not set.
     * @param startedBefore Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param startedAfter Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param finishedBefore Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param finishedAfter Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param tenantIdIn Filter by a comma-separated list of ids. An activity instance must have one of the given tenant ids.
     * @param withoutTenantId Only include historic activity instances that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getHistoricActivityInstancesCount(
        activityInstanceId?: string,
        processInstanceId?: string,
        processDefinitionId?: string,
        executionId?: string,
        activityId?: string,
        activityName?: string,
        activityType?: string,
        taskAssignee?: string,
        finished?: boolean,
        unfinished?: boolean,
        canceled?: boolean,
        completeScope?: boolean,
        startedBefore?: string,
        startedAfter?: string,
        finishedBefore?: string,
        finishedAfter?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/activity-instance/count',
            query: {
                'activityInstanceId': activityInstanceId,
                'processInstanceId': processInstanceId,
                'processDefinitionId': processDefinitionId,
                'executionId': executionId,
                'activityId': activityId,
                'activityName': activityName,
                'activityType': activityType,
                'taskAssignee': taskAssignee,
                'finished': finished,
                'unfinished': unfinished,
                'canceled': canceled,
                'completeScope': completeScope,
                'startedBefore': startedBefore,
                'startedAfter': startedAfter,
                'finishedBefore': finishedBefore,
                'finishedAfter': finishedAfter,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
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
     * Queries for the number of historic activity instances that fulfill the given parameters.
     * @param requestBody
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryHistoricActivityInstancesCount(
        requestBody?: HistoricActivityInstanceQueryDto,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/activity-instance/count',
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
     * Get
     * Retrieves a historic activity instance by id, according to the `HistoricActivityInstance` interface in the engine.
     * @param id The id of the historic activity instance to be retrieved.
     * @returns HistoricActivityInstanceDto Request successful.
     * @throws ApiError
     */
    public static getHistoricActivityInstance(
        id: string,
    ): CancelablePromise<HistoricActivityInstanceDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/activity-instance/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found
                Historic activity instance with given id does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

}
