/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CleanableHistoricDecisionInstanceReportResultDto } from '../models/CleanableHistoricDecisionInstanceReportResultDto';
import type { CountResultDto } from '../models/CountResultDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricDecisionDefinitionService {

    /**
     * Get Cleanable Decision Instance Report
     * Retrieves a report about a decision definition and finished decision instances
     * relevant to history cleanup (see
     * [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)),
     * so that you can tune the history time to live.
     * These reports include the count of the finished historic decision
     * instances, cleanable decision instances and basic decision definition
     * data - id, key, name and version.
     * The size of the result set can be retrieved by using the
     * [Get Cleanable Decision Instance Report Count](https://docs.camunda.org/manual/7.18/reference/rest/history/decision-definition/get-cleanable-decision-instance-report-count/) method.
     * @param decisionDefinitionIdIn Filter by decision definition ids. Must be a comma-separated list of decision definition ids.
     * @param decisionDefinitionKeyIn Filter by decision definition keys. Must be a comma-separated list of decision definition keys.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A decision definition must have one of the given tenant
     * ids.
     * @param withoutTenantId Only include decision definitions which belong to no tenant. Value may only be `true`, as `false`
     * is the default behavior.
     * @param compact Only include decision instances which have more than zero finished instances. Value may only be `true`,
     * as `false` is the default behavior.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns CleanableHistoricDecisionInstanceReportResultDto Request successful.
     * @throws ApiError
     */
    public static getCleanableHistoricDecisionInstanceReport(
        decisionDefinitionIdIn?: string,
        decisionDefinitionKeyIn?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        compact?: boolean,
        sortBy?: 'finished',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<CleanableHistoricDecisionInstanceReportResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/decision-definition/cleanable-decision-instance-report',
            query: {
                'decisionDefinitionIdIn': decisionDefinitionIdIn,
                'decisionDefinitionKeyIn': decisionDefinitionKeyIn,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'compact': compact,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                500: `See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the
                error response format.`,
            },
        });
    }

    /**
     * Get Cleanable Decision Instance Report Count
     * Queries for the number of report results about a decision definition and finished
     * decision instances relevant to history cleanup (see
     * [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)).
     * Takes the same parameters as the [Get Cleanable Decision Instance Report](https://docs.camunda.org/manual/7.18/reference/rest/history/decision-definition/get-cleanable-decision-instance-report/)
     * method.
     * @param decisionDefinitionIdIn Filter by decision definition ids. Must be a comma-separated list of decision definition ids.
     * @param decisionDefinitionKeyIn Filter by decision definition keys. Must be a comma-separated list of decision definition keys.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A decision definition must have one of the given tenant
     * ids.
     * @param withoutTenantId Only include decision definitions which belong to no tenant. Value may only be `true`, as `false`
     * is the default behavior.
     * @param compact Only include decision instances which have more than zero finished instances. Value may only be `true`,
     * as `false` is the default behavior.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getCleanableHistoricDecisionInstanceReportCount(
        decisionDefinitionIdIn?: string,
        decisionDefinitionKeyIn?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        compact?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/decision-definition/cleanable-decision-instance-report/count',
            query: {
                'decisionDefinitionIdIn': decisionDefinitionIdIn,
                'decisionDefinitionKeyIn': decisionDefinitionKeyIn,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'compact': compact,
            },
            errors: {
                500: `See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the
                error response format.`,
            },
        });
    }

}
