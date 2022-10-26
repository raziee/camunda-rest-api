/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { HistoricIdentityLinkLogDto } from '../models/HistoricIdentityLinkLogDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricIdentityLinkLogService {

    /**
     * Get Identity Link Logs
     * Queries for historic identity link logs that fulfill given parameters.
     * The size of the result set can be retrieved by using the
     * [Get Identity-Link-Log Count](https://docs.camunda.org/manual/7.18/reference/rest/history/identity-links/get-identity-link-query-count/)
     * method.
     * @param type Restricts to identity links that have the given type (candidate/assignee/owner).
     * @param userId Restricts to identity links that have the given user id.
     * @param groupId Restricts to identity links that have the given group id.
     * @param dateBefore Restricts to identity links that have the time before the given time.
     * @param dateAfter Restricts to identity links that have the time after the given time.
     * @param taskId Restricts to identity links that have the given task id.
     * @param processDefinitionId Restricts to identity links that have the given process definition id.
     * @param processDefinitionKey Restricts to identity links that have the given process definition key.
     * @param operationType Restricts to identity links that have the given operationType (add/delete).
     * @param assignerId Restricts to identity links that have the given assigner id.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids.
     * @param withoutTenantId Only include historic identity links that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns HistoricIdentityLinkLogDto Request successful.
     * @throws ApiError
     */
    public static getHistoricIdentityLinks(
        type?: string,
        userId?: string,
        groupId?: string,
        dateBefore?: string,
        dateAfter?: string,
        taskId?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        operationType?: string,
        assignerId?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        sortBy?: 'time' | 'type' | 'userId' | 'groupId' | 'taskId' | 'processDefinitionId' | 'processDefinitionKey' | 'operationType' | 'assignerId' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<HistoricIdentityLinkLogDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/identity-link-log',
            query: {
                'type': type,
                'userId': userId,
                'groupId': groupId,
                'dateBefore': dateBefore,
                'dateAfter': dateAfter,
                'taskId': taskId,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'operationType': operationType,
                'assignerId': assignerId,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
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
     * Get Identity Link Log Count
     * Queries for the number of historic identity link logs that fulfill the given
     * parameters. Takes the same parameters as the
     * [Get Identity-Link-Logs](https://docs.camunda.org/manual/7.18/reference/rest/history/identity-links/get-identity-link-query/)
     * method.
     * @param type Restricts to identity links that have the given type (candidate/assignee/owner).
     * @param userId Restricts to identity links that have the given user id.
     * @param groupId Restricts to identity links that have the given group id.
     * @param dateBefore Restricts to identity links that have the time before the given time.
     * @param dateAfter Restricts to identity links that have the time after the given time.
     * @param taskId Restricts to identity links that have the given task id.
     * @param processDefinitionId Restricts to identity links that have the given process definition id.
     * @param processDefinitionKey Restricts to identity links that have the given process definition key.
     * @param operationType Restricts to identity links that have the given operationType (add/delete).
     * @param assignerId Restricts to identity links that have the given assigner id.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids.
     * @param withoutTenantId Only include historic identity links that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getHistoricIdentityLinksCount(
        type?: string,
        userId?: string,
        groupId?: string,
        dateBefore?: string,
        dateAfter?: string,
        taskId?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        operationType?: string,
        assignerId?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/identity-link-log/count',
            query: {
                'type': type,
                'userId': userId,
                'groupId': groupId,
                'dateBefore': dateBefore,
                'dateAfter': dateAfter,
                'taskId': taskId,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'operationType': operationType,
                'assignerId': assignerId,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
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
