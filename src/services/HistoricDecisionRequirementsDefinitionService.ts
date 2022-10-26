/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HistoricDecisionInstanceStatisticsDto } from '../models/HistoricDecisionInstanceStatisticsDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricDecisionRequirementsDefinitionService {

    /**
     * Get DRD Statistics
     * Retrieves evaluation statistics of a given decision requirements definition.
     * @param id The id of the decision requirements definition.
     * @param decisionInstanceId Restrict query results to be based only on specific evaluation
     * instance of a given decision requirements definition.
     * @returns HistoricDecisionInstanceStatisticsDto Request successful.
     * @throws ApiError
     */
    public static getDecisionStatistics(
        id: string,
        decisionInstanceId?: string,
    ): CancelablePromise<Array<HistoricDecisionInstanceStatisticsDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/decision-requirements-definition/{id}/statistics',
            path: {
                'id': id,
            },
            query: {
                'decisionInstanceId': decisionInstanceId,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
