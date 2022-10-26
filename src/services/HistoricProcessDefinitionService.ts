/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CleanableHistoricProcessInstanceReportResultDto } from '../models/CleanableHistoricProcessInstanceReportResultDto';
import type { CountResultDto } from '../models/CountResultDto';
import type { HistoricActivityStatisticsDto } from '../models/HistoricActivityStatisticsDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricProcessDefinitionService {

    /**
     * Get Cleanable Process Instance Report
     * Retrieves a report about a process definition and finished process instances
     * relevant to history cleanup (see
     * [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup))
     * so that you can tune the history time to live.
     * These reports include the count of the finished historic process
     * instances, cleanable process instances and basic process definition
     * data - id, key, name and version.
     * The size of the result set can be retrieved by using the
     * [Get Cleanable Process Instance Report Count](https://docs.camunda.org/manual/7.18/reference/rest/history/process-definition/get-cleanable-process-instance-report-count/)
     * method.
     * @param processDefinitionIdIn Filter by process definition ids. Must be a comma-separated list of process definition ids.
     * @param processDefinitionKeyIn Filter by process definition keys. Must be a comma-separated list of process definition keys.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A process definition must have one of the given
     * tenant ids.
     * @param withoutTenantId Only include process definitions which belong to no tenant. Value may only be `true`, as
     * `false` is the default behavior.
     * @param compact Only include process instances which have more than zero finished instances. Value may
     * only be `true`, as `false` is the default behavior.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns CleanableHistoricProcessInstanceReportResultDto Request successful.
     * @throws ApiError
     */
    public static getCleanableHistoricProcessInstanceReport(
        processDefinitionIdIn?: string,
        processDefinitionKeyIn?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        compact?: boolean,
        sortBy?: 'finished',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<CleanableHistoricProcessInstanceReportResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/process-definition/cleanable-process-instance-report',
            query: {
                'processDefinitionIdIn': processDefinitionIdIn,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'compact': compact,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                500: `See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Cleanable Process Instance Report Count
     * Queries for the number of report results about a process definition and finished
     * process instances relevant to history cleanup (see
     * [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)).
     * Takes the same parameters as the
     * [Get Cleanable Process Instance Report](https://docs.camunda.org/manual/7.18/reference/rest/history/process-definition/get-cleanable-process-instance-report/)
     * method.
     * @param processDefinitionIdIn Filter by process definition ids. Must be a comma-separated list of process definition ids.
     * @param processDefinitionKeyIn Filter by process definition keys. Must be a comma-separated list of process definition keys.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A process definition must have one of the given
     * tenant ids.
     * @param withoutTenantId Only include process definitions which belong to no tenant. Value may only be `true`, as
     * `false` is the default behavior.
     * @param compact Only include process instances which have more than zero finished instances. Value may
     * only be `true`, as `false` is the default behavior.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getCleanableHistoricProcessInstanceReportCount(
        processDefinitionIdIn?: string,
        processDefinitionKeyIn?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        compact?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/process-definition/cleanable-process-instance-report/count',
            query: {
                'processDefinitionIdIn': processDefinitionIdIn,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'compact': compact,
            },
            errors: {
                500: `See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Historic Activity Statistics
     * Retrieves historic statistics of a given process definition, grouped by activities.
     * These statistics include the number of running activity instances and,
     * optionally, the number of canceled activity instances, finished
     * activity instances and activity instances which completed a scope
     * (i.e., in BPMN 2.0 manner: a scope is completed by an activity
     * instance when the activity instance consumed a token but did not emit
     * a new token).
     * **Note:** This only includes historic data.
     * @param id The id of the process definition.
     * @param canceled Whether to include the number of canceled activity instances in the result or not. Valid
     * values are `true` or `false`. Default: `false`.
     * @param finished Whether to include the number of finished activity instances in the result or not. Valid
     * values are `true` or `false`. Default: `false`.
     * @param completeScope Whether to include the number of activity instances which completed a scope in the result
     * or not. Valid values are `true` or `false`. Default: `false`.
     * @param incidents Whether to include the number of incidents. Valid values are `true` or `false`. Default: `false`.
     * @param startedBefore Restrict to process instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param startedAfter Restrict to process instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param finishedBefore Restrict to process instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param finishedAfter Restrict to process instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     * @param processInstanceIdIn Restrict to process instances with the given IDs. The IDs must be provided as a comma-
     * separated list.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @returns HistoricActivityStatisticsDto Request successful.
     * @throws ApiError
     */
    public static getHistoricActivityStatistics(
        id: string,
        canceled?: boolean,
        finished?: boolean,
        completeScope?: boolean,
        incidents?: boolean,
        startedBefore?: string,
        startedAfter?: string,
        finishedBefore?: string,
        finishedAfter?: string,
        processInstanceIdIn?: string,
        sortBy?: 'activityId',
        sortOrder?: 'asc' | 'desc',
    ): CancelablePromise<Array<HistoricActivityStatisticsDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/process-definition/{id}/statistics',
            path: {
                'id': id,
            },
            query: {
                'canceled': canceled,
                'finished': finished,
                'completeScope': completeScope,
                'incidents': incidents,
                'startedBefore': startedBefore,
                'startedAfter': startedAfter,
                'finishedBefore': finishedBefore,
                'finishedAfter': finishedAfter,
                'processInstanceIdIn': processInstanceIdIn,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
