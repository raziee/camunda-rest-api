/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { HistoricJobLogDto } from '../models/HistoricJobLogDto';
import type { HistoricJobLogQueryDto } from '../models/HistoricJobLogQueryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricJobLogService {

    /**
     * Get Job Logs
     * Queries for historic job logs that fulfill the given parameters.
     * The size of the result set can be retrieved by using the
     * [Get Job Log Count](https://docs.camunda.org/manual/7.18/reference/rest/history/job-log/get-job-log-query-count/)
     * method.
     * @param logId Filter by historic job log id.
     * @param jobId Filter by job id.
     * @param jobExceptionMessage Filter by job exception message.
     * @param jobDefinitionId Filter by job definition id.
     * @param jobDefinitionType Filter by job definition type. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/the-job-executor/#job-creation)
     * for more information about job definition types.
     * @param jobDefinitionConfiguration Filter by job definition configuration.
     * @param activityIdIn Only include historic job logs which belong to one of the passed activity ids.
     * @param failedActivityIdIn Only include historic job logs which belong to failures of one of the passed activity ids.
     * @param executionIdIn Only include historic job logs which belong to one of the passed execution ids.
     * @param processInstanceId Filter by process instance id.
     * @param processDefinitionId Filter by process definition id.
     * @param processDefinitionKey Filter by process definition key.
     * @param deploymentId Filter by deployment id.
     * @param tenantIdIn Only include historic job log entries which belong to one of the passed and comma-
     * separated tenant ids.
     * @param withoutTenantId Only include historic job log entries that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     * @param hostname Filter by hostname.
     * @param jobPriorityLowerThanOrEquals Only include logs for which the associated job had a priority lower than or equal to the
     * given value. Value must be a valid `long` value.
     * @param jobPriorityHigherThanOrEquals Only include logs for which the associated job had a priority higher than or equal to the
     * given value. Value must be a valid `long` value.
     * @param creationLog Only include creation logs. Value may only be `true`, as `false` is the default behavior.
     * @param failureLog Only include failure logs. Value may only be `true`, as `false` is the default behavior.
     * @param successLog Only include success logs. Value may only be `true`, as `false` is the default behavior.
     * @param deletionLog Only include deletion logs. Value may only be `true`, as `false` is the default behavior.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns HistoricJobLogDto Request successful.
     * @throws ApiError
     */
    public static getHistoricJobLogs(
        logId?: string,
        jobId?: string,
        jobExceptionMessage?: string,
        jobDefinitionId?: string,
        jobDefinitionType?: string,
        jobDefinitionConfiguration?: string,
        activityIdIn?: string,
        failedActivityIdIn?: string,
        executionIdIn?: string,
        processInstanceId?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        deploymentId?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        hostname?: string,
        jobPriorityLowerThanOrEquals?: number,
        jobPriorityHigherThanOrEquals?: number,
        creationLog?: boolean,
        failureLog?: boolean,
        successLog?: boolean,
        deletionLog?: boolean,
        sortBy?: 'timestamp' | 'jobId' | 'jobDefinitionId' | 'jobDueDate' | 'jobRetries' | 'jobPriority' | 'activityId' | 'executionId' | 'processInstanceId' | 'processDefinitionId' | 'processDefinitionKey' | 'deploymentId' | 'hostname' | 'occurrence' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<HistoricJobLogDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/job-log',
            query: {
                'logId': logId,
                'jobId': jobId,
                'jobExceptionMessage': jobExceptionMessage,
                'jobDefinitionId': jobDefinitionId,
                'jobDefinitionType': jobDefinitionType,
                'jobDefinitionConfiguration': jobDefinitionConfiguration,
                'activityIdIn': activityIdIn,
                'failedActivityIdIn': failedActivityIdIn,
                'executionIdIn': executionIdIn,
                'processInstanceId': processInstanceId,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'deploymentId': deploymentId,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'hostname': hostname,
                'jobPriorityLowerThanOrEquals': jobPriorityLowerThanOrEquals,
                'jobPriorityHigherThanOrEquals': jobPriorityHigherThanOrEquals,
                'creationLog': creationLog,
                'failureLog': failureLog,
                'successLog': successLog,
                'deletionLog': deletionLog,
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
     * Get Job Logs (POST)
     * Queries for historic job logs that fulfill the given parameters.
     * This method is slightly more powerful than the
     * [Get Job Logs](https://docs.camunda.org/manual/7.18/reference/rest/history/job-log/get-job-log-query/)
     * method because it allows filtering by historic job logs values of the
     * different types `String`, `Number` or `Boolean`.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param requestBody
     * @returns HistoricJobLogDto Request successful.
     * @throws ApiError
     */
    public static queryHistoricJobLogs(
        firstResult?: number,
        maxResults?: number,
        requestBody?: HistoricJobLogQueryDto,
    ): CancelablePromise<Array<HistoricJobLogDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/job-log',
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\`
                parameter is supplied, but no \`sortBy\`. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Job Log Count
     * Queries for the number of historic job logs that fulfill the given parameters.
     * Takes the same parameters as the
     * [Get Job Logs](https://docs.camunda.org/manual/7.18/reference/rest/history/job-log/get-job-log-query/)
     * method.
     * @param logId Filter by historic job log id.
     * @param jobId Filter by job id.
     * @param jobExceptionMessage Filter by job exception message.
     * @param jobDefinitionId Filter by job definition id.
     * @param jobDefinitionType Filter by job definition type. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/the-job-executor/#job-creation)
     * for more information about job definition types.
     * @param jobDefinitionConfiguration Filter by job definition configuration.
     * @param activityIdIn Only include historic job logs which belong to one of the passed activity ids.
     * @param failedActivityIdIn Only include historic job logs which belong to failures of one of the passed activity ids.
     * @param executionIdIn Only include historic job logs which belong to one of the passed execution ids.
     * @param processInstanceId Filter by process instance id.
     * @param processDefinitionId Filter by process definition id.
     * @param processDefinitionKey Filter by process definition key.
     * @param deploymentId Filter by deployment id.
     * @param tenantIdIn Only include historic job log entries which belong to one of the passed and comma-
     * separated tenant ids.
     * @param withoutTenantId Only include historic job log entries that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     * @param hostname Filter by hostname.
     * @param jobPriorityLowerThanOrEquals Only include logs for which the associated job had a priority lower than or equal to the
     * given value. Value must be a valid `long` value.
     * @param jobPriorityHigherThanOrEquals Only include logs for which the associated job had a priority higher than or equal to the
     * given value. Value must be a valid `long` value.
     * @param creationLog Only include creation logs. Value may only be `true`, as `false` is the default behavior.
     * @param failureLog Only include failure logs. Value may only be `true`, as `false` is the default behavior.
     * @param successLog Only include success logs. Value may only be `true`, as `false` is the default behavior.
     * @param deletionLog Only include deletion logs. Value may only be `true`, as `false` is the default behavior.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getHistoricJobLogsCount(
        logId?: string,
        jobId?: string,
        jobExceptionMessage?: string,
        jobDefinitionId?: string,
        jobDefinitionType?: string,
        jobDefinitionConfiguration?: string,
        activityIdIn?: string,
        failedActivityIdIn?: string,
        executionIdIn?: string,
        processInstanceId?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        deploymentId?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        hostname?: string,
        jobPriorityLowerThanOrEquals?: number,
        jobPriorityHigherThanOrEquals?: number,
        creationLog?: boolean,
        failureLog?: boolean,
        successLog?: boolean,
        deletionLog?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/job-log/count',
            query: {
                'logId': logId,
                'jobId': jobId,
                'jobExceptionMessage': jobExceptionMessage,
                'jobDefinitionId': jobDefinitionId,
                'jobDefinitionType': jobDefinitionType,
                'jobDefinitionConfiguration': jobDefinitionConfiguration,
                'activityIdIn': activityIdIn,
                'failedActivityIdIn': failedActivityIdIn,
                'executionIdIn': executionIdIn,
                'processInstanceId': processInstanceId,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'deploymentId': deploymentId,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'hostname': hostname,
                'jobPriorityLowerThanOrEquals': jobPriorityLowerThanOrEquals,
                'jobPriorityHigherThanOrEquals': jobPriorityHigherThanOrEquals,
                'creationLog': creationLog,
                'failureLog': failureLog,
                'successLog': successLog,
                'deletionLog': deletionLog,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.`,
            },
        });
    }

    /**
     * Get Job Log Count (POST)
     * Queries for the number of historic job logs that fulfill the given parameters.
     * This method takes the same message body as the
     * [Get Job Logs (POST)](https://docs.camunda.org/manual/7.18/reference/rest/history/job-log/post-job-log-query/)
     * method and therefore it is slightly more powerful than the
     * [Get Job Log Count](https://docs.camunda.org/manual/7.18/reference/rest/history/job-log/get-job-log-query-count/)
     * method.
     * @param requestBody
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryHistoricJobLogsCount(
        requestBody?: HistoricJobLogQueryDto,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/job-log/count',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Job Log
     * Retrieves a historic job log by id.
     * @param id The id of the log entry.
     * @returns HistoricJobLogDto Request successful.
     * @throws ApiError
     */
    public static getHistoricJobLog(
        id: string,
    ): CancelablePromise<HistoricJobLogDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/job-log/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Historic job log with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Job Log Exception Stacktrace
     * Retrieves the corresponding exception stacktrace to the passed historic job log by
     * id.
     * @param id The id of the historic job log to get the exception stacktrace for.
     * @returns any Request successful.
     * @throws ApiError
     */
    public static getStacktraceHistoricJobLog(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/job-log/{id}/stacktrace',
            path: {
                'id': id,
            },
            errors: {
                404: `Historic job log with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
