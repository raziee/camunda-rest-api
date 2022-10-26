/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SchemaLogEntryDto } from '../models/SchemaLogEntryDto';
import type { SchemaLogQueryDto } from '../models/SchemaLogQueryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SchemaLogService {

    /**
     * Get List
     * Queries for schema log entries that fulfill given parameters.
     * @param version Only return schema log entries with a specific version.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns SchemaLogEntryDto Request successful.
     * **Note**: In order to get any results a user of group `camunda-admin` must
     * be authenticated.
     * @throws ApiError
     */
    public static getSchemaLog(
        version?: string,
        sortBy?: 'timestamp',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<SchemaLogEntryDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/schema/log',
            query: {
                'version': version,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
        });
    }

    /**
     * Get List (POST)
     * Queries for schema log entries that fulfill given parameters.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param requestBody
     * @returns SchemaLogEntryDto Request successful.
     * **Note**: In order to get any results a user of group camunda-admin must be
     * authenticated.
     * @throws ApiError
     */
    public static querySchemaLog(
        firstResult?: number,
        maxResults?: number,
        requestBody?: SchemaLogQueryDto,
    ): CancelablePromise<Array<SchemaLogEntryDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/schema/log',
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
