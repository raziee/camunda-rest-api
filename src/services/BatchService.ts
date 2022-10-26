/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchDto } from '../models/BatchDto';
import type { BatchStatisticsDto } from '../models/BatchStatisticsDto';
import type { CountResultDto } from '../models/CountResultDto';
import type { SuspensionStateDto } from '../models/SuspensionStateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BatchService {

    /**
     * Get List
     * Queries for batches that fulfill given parameters. Parameters may be the properties of batches, such as the id or type.
     * The size of the result set can be retrieved by using the
     * [Get Batch Count](https://docs.camunda.org/manual/7.18/reference/rest/batch/get-query-count/) method.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param batchId Filter by batch id.
     * @param type Filter by batch type.
     * See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/batch/#creating-a-batch)
     * for more information about batch types.
     * @param tenantIdIn Filter by a comma-separated list of `Strings`. A batch matches if it has one of the given tenant ids.
     * @param withoutTenantId Only include batches which belong to no tenant.
     * Value can effectively only be `true`, as `false` is the default behavior.
     * @param suspended A `Boolean` value which indicates whether only active or suspended batches should be included.
     * When the value is set to `true`, only suspended batches will be returned and
     * when the value is set to `false`, only active batches will be returned.
     * @param createdBy Only include batches that were started by this user id.
     * @param startedBefore Only include batches that were started before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param startedAfter Only include batches that were started after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param withFailures Only include batches having jobs with failures.
     * Value can only be `true`.
     * @param withoutFailures Only include batches having jobs without failures.
     * Value can only be `true`.
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static getBatches(
        sortBy?: 'batchId' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
        batchId?: string,
        type?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        suspended?: boolean,
        createdBy?: string,
        startedBefore?: string,
        startedAfter?: string,
        withFailures?: boolean,
        withoutFailures?: boolean,
    ): CancelablePromise<Array<BatchDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/batch',
            query: {
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
                'batchId': batchId,
                'type': type,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'suspended': suspended,
                'createdBy': createdBy,
                'startedBefore': startedBefore,
                'startedAfter': startedAfter,
                'withFailures': withFailures,
                'withoutFailures': withoutFailures,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid,
                for example if a \`sortOrder\` parameter is supplied, but no \`sortBy\`.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get List Count
     * Requests the number of batches that fulfill the query criteria.
     * Takes the same filtering parameters as the [Get Batches](https://docs.camunda.org/manual/7.18/reference/rest/batch/get-query/) method.
     * @param batchId Filter by batch id.
     * @param type Filter by batch type.
     * See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/batch/#creating-a-batch)
     * for more information about batch types.
     * @param tenantIdIn Filter by a comma-separated list of `Strings`. A batch matches if it has one of the given tenant ids.
     * @param withoutTenantId Only include batches which belong to no tenant.
     * Value can effectively only be `true`, as `false` is the default behavior.
     * @param suspended A `Boolean` value which indicates whether only active or suspended batches should be included.
     * When the value is set to `true`, only suspended batches will be returned and
     * when the value is set to `false`, only active batches will be returned.
     * @param createdBy Only include batches that were started by this user id.
     * @param startedBefore Only include batches that were started before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param startedAfter Only include batches that were started after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param withFailures Only include batches having jobs with failures.
     * Value can only be `true`.
     * @param withoutFailures Only include batches having jobs without failures.
     * Value can only be `true`.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getBatchesCount(
        batchId?: string,
        type?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        suspended?: boolean,
        createdBy?: string,
        startedBefore?: string,
        startedAfter?: string,
        withFailures?: boolean,
        withoutFailures?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/batch/count',
            query: {
                'batchId': batchId,
                'type': type,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'suspended': suspended,
                'createdBy': createdBy,
                'startedBefore': startedBefore,
                'startedAfter': startedAfter,
                'withFailures': withFailures,
                'withoutFailures': withoutFailures,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get Statistics
     * Queries for batch statistics that fulfill given parameters.
     * Parameters may be the properties of batches, such as the id or type.
     * The size of the result set can be retrieved by using the
     * [Get Batch Statistics Count](https://docs.camunda.org/manual/7.18/reference/rest/batch/get-statistics-query-count/) method.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param batchId Filter by batch id.
     * @param type Filter by batch type.
     * See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/batch/#creating-a-batch)
     * for more information about batch types.
     * @param tenantIdIn Filter by a comma-separated list of `Strings`. A batch matches if it has one of the given tenant ids.
     * @param withoutTenantId Only include batches which belong to no tenant.
     * Value can effectively only be `true`, as `false` is the default behavior.
     * @param suspended A `Boolean` value which indicates whether only active or suspended batches should be included.
     * When the value is set to `true`, only suspended batches will be returned and
     * when the value is set to `false`, only active batches will be returned.
     * @param createdBy Only include batches that were started by this user id.
     * @param startedBefore Only include batches that were started before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param startedAfter Only include batches that were started after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param withFailures Only include batches having jobs with failures.
     * Value can only be `true`.
     * @param withoutFailures Only include batches having jobs without failures.
     * Value can only be `true`.
     * @returns BatchStatisticsDto Request successful.
     * @throws ApiError
     */
    public static getBatchStatistics(
        sortBy?: 'batchId' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
        batchId?: string,
        type?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        suspended?: boolean,
        createdBy?: string,
        startedBefore?: string,
        startedAfter?: string,
        withFailures?: boolean,
        withoutFailures?: boolean,
    ): CancelablePromise<Array<BatchStatisticsDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/batch/statistics',
            query: {
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
                'batchId': batchId,
                'type': type,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'suspended': suspended,
                'createdBy': createdBy,
                'startedBefore': startedBefore,
                'startedAfter': startedAfter,
                'withFailures': withFailures,
                'withoutFailures': withoutFailures,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid,
                for example if a \`sortOrder\` parameter is supplied, but no \`sortBy\`.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get Statistics Count
     * Requests the number of batch statistics that fulfill the query criteria.
     * Takes the same filtering parameters as the
     * [Get Batch Statistics](https://docs.camunda.org/manual/7.18/reference/rest/batch/get-statistics-query/) method.
     * @param batchId Filter by batch id.
     * @param type Filter by batch type.
     * See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/batch/#creating-a-batch)
     * for more information about batch types.
     * @param tenantIdIn Filter by a comma-separated list of `Strings`. A batch matches if it has one of the given tenant ids.
     * @param withoutTenantId Only include batches which belong to no tenant.
     * Value can effectively only be `true`, as `false` is the default behavior.
     * @param suspended A `Boolean` value which indicates whether only active or suspended batches should be included.
     * When the value is set to `true`, only suspended batches will be returned and
     * when the value is set to `false`, only active batches will be returned.
     * @param createdBy Only include batches that were started by this user id.
     * @param startedBefore Only include batches that were started before the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param startedAfter Only include batches that were started after the given date. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param withFailures Only include batches having jobs with failures.
     * Value can only be `true`.
     * @param withoutFailures Only include batches having jobs without failures.
     * Value can only be `true`.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getBatchStatisticsCount(
        batchId?: string,
        type?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        suspended?: boolean,
        createdBy?: string,
        startedBefore?: string,
        startedAfter?: string,
        withFailures?: boolean,
        withoutFailures?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/batch/statistics/count',
            query: {
                'batchId': batchId,
                'type': type,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'suspended': suspended,
                'createdBy': createdBy,
                'startedBefore': startedBefore,
                'startedAfter': startedAfter,
                'withFailures': withFailures,
                'withoutFailures': withoutFailures,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Delete
     * Deletes a batch by id, including all related jobs and job definitions.
     * Optionally also deletes the batch history.
     * @param id The id of the batch to be deleted.
     * @param cascade `true`, if the historic batch and historic job logs for this batch should also be deleted.
     * @returns void
     * @throws ApiError
     */
    public static deleteBatch(
        id: string,
        cascade?: boolean,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/batch/{id}',
            path: {
                'id': id,
            },
            query: {
                'cascade': cascade,
            },
            errors: {
                400: `Batch with given id does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get
     * Retrieves a batch by id, according to the Batch interface in the engine.
     * @param id The id of the batch to be retrieved.
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static getBatch(
        id: string,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/batch/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Batch with given id does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Activate/Suspend
     * Activates or suspends a batch by id.
     * @param id The id of the batch to activate or suspend.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateBatchSuspensionState(
        id: string,
        requestBody?: SuspensionStateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/batch/{id}/suspended',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the batch cannot be suspended or activated.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

}
