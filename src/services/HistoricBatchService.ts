/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchDto } from '../models/BatchDto';
import type { CleanableHistoricBatchReportResultDto } from '../models/CleanableHistoricBatchReportResultDto';
import type { CountResultDto } from '../models/CountResultDto';
import type { HistoricBatchDto } from '../models/HistoricBatchDto';
import type { SetRemovalTimeToHistoricBatchesDto } from '../models/SetRemovalTimeToHistoricBatchesDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricBatchService {

    /**
     * Get Historic Batches
     * Queries for historic batches that fulfill given parameters. Parameters may be
     * the properties of batches, such as the id or type. The
     * size of the result set can be retrieved by using the
     * [Get Historic Batch Count](https://docs.camunda.org/manual/7.18/reference/rest/history/batch/get-query-count/)
     * method.
     * @param batchId Filter by batch id.
     * @param type Filter by batch type. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/batch/#creating-a-batch)
     * for more information about batch types.
     * @param completed
     * Filter completed or not completed batches. If the value is
     * `true`, only completed batches, i.e., end time is set, are
     * returned. Otherwise, if the value is `false`, only running
     * batches, i.e., end time is null, are returned.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A batch matches if it has one of the given
     * tenant ids.
     * @param withoutTenantId Only include batches which belong to no tenant. Value can effectively only be `true`, as `false` is the default behavior.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns HistoricBatchDto Request successful.
     * @throws ApiError
     */
    public static getHistoricBatches(
        batchId?: string,
        type?: string,
        completed?: boolean,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        sortBy?: 'batchId' | 'startTime' | 'endTime' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<HistoricBatchDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/batch',
            query: {
                'batchId': batchId,
                'type': type,
                'completed': completed,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `
                Returned if some of the query parameters are invalid, for example if
                a \`sortOrder\` parameter is supplied, but no \`sortBy\`.
                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Get Cleanable Batch Report
     * Retrieves a report about a historic batch operations relevant to history cleanup
     * (see
     * [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)
     * ) so that you can tune the history time to live.
     * These reports include the count of the finished batches, cleanable
     * batches and type of the batch.
     * The size of the result set can be retrieved by using the
     * [Get Cleanable Batch Report Count](https://docs.camunda.org/manual/7.18/reference/rest/history/batch/get-cleanable-batch-report-count/)
     * method.
     *
     * **Please note:**
     * The history time to live for batch operations does not support [Multi-Tenancy](https://docs.camunda.org/manual/7.18/user-guide/process-engine/multi-tenancy.md).
     * The report will return an information for all batch operations (for all tenants) if you have permissions
     * to see the history.
     *
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns CleanableHistoricBatchReportResultDto Request successful.
     * @throws ApiError
     */
    public static getCleanableHistoricBatchesReport(
        sortBy?: 'finished',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<CleanableHistoricBatchReportResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/batch/cleanable-batch-report',
            query: {
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
     * Get Cleanable Batch Report Count
     * Queries for the number of report results about a historic batch operations relevant
     * to history cleanup (see
     * [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)
     * ).
     * Takes the same parameters as the
     * [Get Cleanable Batch Report](https://docs.camunda.org/manual/7.18/reference/rest/history/batch/get-cleanable-batch-report/)
     * method.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getCleanableHistoricBatchesReportCount(
        sortBy?: string,
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/batch/cleanable-batch-report/count',
            query: {
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
     * Get Historic Batch Count
     * Requests the number of historic batches that fulfill the query criteria.
     * Takes the same filtering parameters as the
     * [Get Historic Batches](https://docs.camunda.org/manual/7.18/reference/rest/history/batch/get-query/)
     * method.
     * @param batchId Filter by batch id.
     * @param type Filter by batch type. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/batch/#creating-a-batch)
     * for more information about batch types.
     * @param completed
     * Filter completed or not completed batches. If the value is
     * `true`, only completed batches, i.e., end time is set, are
     * returned. Otherwise, if the value is `false`, only running
     * batches, i.e., end time is null, are returned.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A batch matches if it has one of the given
     * tenant ids.
     * @param withoutTenantId Only include batches which belong to no tenant. Value can effectively only be `true`, as `false` is the default behavior.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getHistoricBatchesCount(
        batchId?: string,
        type?: string,
        completed?: boolean,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/batch/count',
            query: {
                'batchId': batchId,
                'type': type,
                'completed': completed,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
            },
            errors: {
                400: `
                Returned if some of the query parameters are invalid, for example if
                a \`sortOrder\` parameter is supplied, but no \`sortBy\`.
                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Set Removal Time Async (POST)
     * Sets the removal time to multiple historic batches asynchronously (batch).
     *
     * At least __historicBatchIds__ or __historicBatchQuery__ has to be
     * provided. If both are provided,
     * all instances matching query criterion and instances from the list
     * will be updated with a removal time.
     * @param requestBody
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static setRemovalTimeAsyncHistoricBatch(
        requestBody?: SetRemovalTimeToHistoricBatchesDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/batch/set-removal-time',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `
                Request was unsuccessful due to a bad user request. This occurs if
                some of the query parameters are invalid, e.g. if neither
                historicBatchIds nor historicBatchQuery is present or if no mode is
                specified.

                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Delete Historic Batch
     * Deletes a historic batch by id, including related historic job logs.
     * @param id The id of the batch to be deleted.
     * @returns void
     * @throws ApiError
     */
    public static deleteHistoricBatch(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/history/batch/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Historic batch with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Historic Batch
     * Retrieves a historic batch by id, according to the `HistoricBatch` interface in the
     * engine.
     * @param id The id of the historic batch to be retrieved.
     * @returns HistoricBatchDto Request successful.
     * @throws ApiError
     */
    public static getHistoricBatch(
        id: string,
    ): CancelablePromise<HistoricBatchDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/batch/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `
                Historic batch with given id does not exist.
                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

}
