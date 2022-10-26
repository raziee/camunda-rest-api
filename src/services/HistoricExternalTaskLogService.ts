/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { HistoricExternalTaskLogDto } from '../models/HistoricExternalTaskLogDto';
import type { HistoricExternalTaskLogQueryDto } from '../models/HistoricExternalTaskLogQueryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricExternalTaskLogService {

    /**
     * Get External Task Logs
     * Queries for historic external task logs that fulfill the given parameters.
     * The size of the result set can be retrieved by using the
     * [Get External Task Log Count](https://docs.camunda.org/manual/7.18/reference/rest/history/external-task-log/get-external-task-log-query-count/)
     * method.
     * @param logId Filter by historic external task log id.
     * @param externalTaskId Filter by external task id.
     * @param topicName Filter by an external task topic.
     * @param workerId Filter by the id of the worker that the task was most recently locked by.
     * @param errorMessage Filter by external task exception message.
     * @param activityIdIn Only include historic external task logs which belong to one of the passed activity ids.
     * @param activityInstanceIdIn Only include historic external task logs which belong to one of the passed activity
     * instance ids.
     * @param executionIdIn Only include historic external task logs which belong to one of the passed execution ids.
     * @param processInstanceId Filter by process instance id.
     * @param processDefinitionId Filter by process definition id.
     * @param processDefinitionKey Filter by process definition key.
     * @param tenantIdIn Only include historic external task log entries which belong to one of the passed and
     * comma-separated tenant ids.
     * @param withoutTenantId Only include historic external task log entries that belong to no tenant. Value may only
     * be `true`, as `false` is the default behavior.
     * @param priorityLowerThanOrEquals Only include logs for which the associated external task had a priority lower than or
     * equal to the given value. Value must be a valid `long` value.
     * @param priorityHigherThanOrEquals Only include logs for which the associated external task had a priority higher than or
     * equal to the given value. Value must be a valid `long` value.
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
     * @returns HistoricExternalTaskLogDto Request successful.
     * @throws ApiError
     */
    public static getHistoricExternalTaskLogs(
        logId?: string,
        externalTaskId?: string,
        topicName?: string,
        workerId?: string,
        errorMessage?: string,
        activityIdIn?: string,
        activityInstanceIdIn?: string,
        executionIdIn?: string,
        processInstanceId?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        priorityLowerThanOrEquals?: number,
        priorityHigherThanOrEquals?: number,
        creationLog?: boolean,
        failureLog?: boolean,
        successLog?: boolean,
        deletionLog?: boolean,
        sortBy?: 'timestamp' | 'externalTaskId' | 'topicName' | 'workerId' | 'retries' | 'priority' | 'activityId' | 'activityInstanceId' | 'executionId' | 'processInstanceId' | 'processDefinitionId' | 'processDefinitionKey' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<HistoricExternalTaskLogDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/external-task-log',
            query: {
                'logId': logId,
                'externalTaskId': externalTaskId,
                'topicName': topicName,
                'workerId': workerId,
                'errorMessage': errorMessage,
                'activityIdIn': activityIdIn,
                'activityInstanceIdIn': activityInstanceIdIn,
                'executionIdIn': executionIdIn,
                'processInstanceId': processInstanceId,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'priorityLowerThanOrEquals': priorityLowerThanOrEquals,
                'priorityHigherThanOrEquals': priorityHigherThanOrEquals,
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
     * Get External Task Logs (POST)
     * Queries for historic external task logs that fulfill the given parameters.
     * This method is slightly more powerful than the
     * [Get External Task Logs](https://docs.camunda.org/manual/7.18/reference/rest/history/external-task-log/get-external-task-log-query/)
     * method because it allows filtering by historic external task logs
     * values of the different types `String`, `Number` or `Boolean`.
     * @param requestBody
     * @returns HistoricExternalTaskLogDto Request successful.
     * @throws ApiError
     */
    public static queryHistoricExternalTaskLogs(
        requestBody?: HistoricExternalTaskLogQueryDto,
    ): CancelablePromise<Array<HistoricExternalTaskLogDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/external-task-log',
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
     * Get External Task Log Count
     * Queries for the number of historic external task logs that fulfill the given
     * parameters.
     * Takes the same parameters as the
     * [Get External Task Logs](https://docs.camunda.org/manual/7.18/reference/rest/history/external-task-log/get-external-task-log-query/)
     * method.
     * @param logId Filter by historic external task log id.
     * @param externalTaskId Filter by external task id.
     * @param topicName Filter by an external task topic.
     * @param workerId Filter by the id of the worker that the task was most recently locked by.
     * @param errorMessage Filter by external task exception message.
     * @param activityIdIn Only include historic external task logs which belong to one of the passed activity ids.
     * @param activityInstanceIdIn Only include historic external task logs which belong to one of the passed activity
     * instance ids.
     * @param executionIdIn Only include historic external task logs which belong to one of the passed execution ids.
     * @param processInstanceId Filter by process instance id.
     * @param processDefinitionId Filter by process definition id.
     * @param processDefinitionKey Filter by process definition key.
     * @param tenantIdIn Only include historic external task log entries which belong to one of the passed and
     * comma-separated tenant ids.
     * @param withoutTenantId Only include historic external task log entries that belong to no tenant. Value may only
     * be `true`, as `false` is the default behavior.
     * @param priorityLowerThanOrEquals Only include logs for which the associated external task had a priority lower than or
     * equal to the given value. Value must be a valid `long` value.
     * @param priorityHigherThanOrEquals Only include logs for which the associated external task had a priority higher than or
     * equal to the given value. Value must be a valid `long` value.
     * @param creationLog Only include creation logs. Value may only be `true`, as `false` is the default behavior.
     * @param failureLog Only include failure logs. Value may only be `true`, as `false` is the default behavior.
     * @param successLog Only include success logs. Value may only be `true`, as `false` is the default behavior.
     * @param deletionLog Only include deletion logs. Value may only be `true`, as `false` is the default behavior.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getHistoricExternalTaskLogsCount(
        logId?: string,
        externalTaskId?: string,
        topicName?: string,
        workerId?: string,
        errorMessage?: string,
        activityIdIn?: string,
        activityInstanceIdIn?: string,
        executionIdIn?: string,
        processInstanceId?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        priorityLowerThanOrEquals?: number,
        priorityHigherThanOrEquals?: number,
        creationLog?: boolean,
        failureLog?: boolean,
        successLog?: boolean,
        deletionLog?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/external-task-log/count',
            query: {
                'logId': logId,
                'externalTaskId': externalTaskId,
                'topicName': topicName,
                'workerId': workerId,
                'errorMessage': errorMessage,
                'activityIdIn': activityIdIn,
                'activityInstanceIdIn': activityInstanceIdIn,
                'executionIdIn': executionIdIn,
                'processInstanceId': processInstanceId,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'priorityLowerThanOrEquals': priorityLowerThanOrEquals,
                'priorityHigherThanOrEquals': priorityHigherThanOrEquals,
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
     * Get External Task Log Count (POST)
     * Queries for the number of historic external task logs that fulfill the given
     * parameters.
     * This method takes the same message body as the
     * [Get External Task Logs (POST)](https://docs.camunda.org/manual/7.18/reference/rest/history/external-task-log/post-external-task-log-query/)
     * method and therefore it is slightly more powerful than the
     * [Get External Task Log Count](https://docs.camunda.org/manual/7.18/reference/rest/history/external-task-log/get-external-task-log-query-count/)
     * method.
     * @param requestBody
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryHistoricExternalTaskLogsCount(
        requestBody?: HistoricExternalTaskLogQueryDto,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/external-task-log/count',
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
     * Get External Task Log
     * Retrieves a historic external task log by id.
     * @param id The id of the log entry.
     * @returns HistoricExternalTaskLogDto Request successful.
     * @throws ApiError
     */
    public static getHistoricExternalTaskLog(
        id: string,
    ): CancelablePromise<HistoricExternalTaskLogDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/external-task-log/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Historic external task log with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get External Task Log Error Details
     * Retrieves the corresponding error details of the passed historic external task log
     * by id.
     * @param id The id of the historic external task log to get the error details for.
     * @returns any Request successful.
     * @throws ApiError
     */
    public static getErrorDetailsHistoricExternalTaskLog(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/external-task-log/{id}/error-details',
            path: {
                'id': id,
            },
            errors: {
                404: `Historic external task log with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
