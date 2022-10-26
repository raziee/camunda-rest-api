/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnotationDto } from '../models/AnnotationDto';
import type { CountResultDto } from '../models/CountResultDto';
import type { UserOperationLogEntryDto } from '../models/UserOperationLogEntryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricUserOperationLogService {

    /**
     * Get User Operation Log (Historic)
     * Queries for user operation log entries that fulfill the given parameters.
     * The size of the result set can be retrieved by using the
     * [Get User Operation Log Count](https://docs.camunda.org/manual/7.18/reference/rest/history/user-operation-log/get-user-operation-log-query-count/)
     * method.
     *
     * Note that the properties of operation log entries are interpreted as
     * restrictions on the entities they apply to. That means, if a single
     * process instance is updated, the field `processInstanceId` is
     * populated. If a single operation updates all process instances of the
     * same process definition, the field `processInstanceId` is `null` (a
     * `null` restriction is viewed as a wildcard, i.e., matches a process
     * instance with any id) and the field `processDefinitionId` is
     * populated. This way, which entities were changed by a user operation
     * can easily be reconstructed.
     * @param deploymentId Filter by deployment id.
     * @param processDefinitionId Filter by process definition id.
     * @param processDefinitionKey Filter by process definition key.
     * @param processInstanceId Filter by process instance id.
     * @param executionId Filter by execution id.
     * @param caseDefinitionId Filter by case definition id.
     * @param caseInstanceId Filter by case instance id.
     * @param caseExecutionId Filter by case execution id.
     * @param taskId Only include operations on this task.
     * @param externalTaskId Only include operations on this external task.
     * @param batchId Only include operations on this batch.
     * @param jobId Filter by job id.
     * @param jobDefinitionId Filter by job definition id.
     * @param userId Only include operations of this user.
     * @param operationId Filter by the id of the operation. This allows fetching of multiple entries which are part
     * of a composite operation.
     * @param operationType Filter by the type of the operation like `Claim` or `Delegate`. See the
     * [Javadoc](https://docs.camunda.org/manual/7.18/reference/javadoc/?org/camunda/bpm/engine/history/UserOperationLogEntry.html)
     * for a list of available operation types.
     * @param entityType Filter by the type of the entity that was affected by this operation, possible values are
     * `Task`, `Attachment` or `IdentityLink`.
     * @param entityTypeIn Filter by a comma-separated list of types of the entities that was affected by this operation,
     * possible values are `Task`, `Attachment` or `IdentityLink`.
     * @param category Filter by the category that this operation is associated with, possible values are
     * `TaskWorker`, `Admin` or `Operator`.
     * @param categoryIn Filter by a comma-separated list of categories that this operation is associated with, possible values are
     * `TaskWorker`, `Admin` or `Operator`.
     * @param property Only include operations that changed this property, e.g., `owner` or `assignee`.
     * @param afterTimestamp Restrict to entries that were created after the given timestamp. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the
     * timestamp must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., 2013-01-23T14:42:45.000+0200.
     * @param beforeTimestamp Restrict to entries that were created before the given timestamp. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the
     * timestamp must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., 2013-01-23T14:42:45.000+0200.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns UserOperationLogEntryDto Request successful.
     * @throws ApiError
     */
    public static queryUserOperationEntries(
        deploymentId?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        processInstanceId?: string,
        executionId?: string,
        caseDefinitionId?: string,
        caseInstanceId?: string,
        caseExecutionId?: string,
        taskId?: string,
        externalTaskId?: string,
        batchId?: string,
        jobId?: string,
        jobDefinitionId?: string,
        userId?: string,
        operationId?: string,
        operationType?: string,
        entityType?: string,
        entityTypeIn?: string,
        category?: string,
        categoryIn?: string,
        property?: string,
        afterTimestamp?: string,
        beforeTimestamp?: string,
        sortBy?: 'timestamp',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<UserOperationLogEntryDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/user-operation',
            query: {
                'deploymentId': deploymentId,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processInstanceId': processInstanceId,
                'executionId': executionId,
                'caseDefinitionId': caseDefinitionId,
                'caseInstanceId': caseInstanceId,
                'caseExecutionId': caseExecutionId,
                'taskId': taskId,
                'externalTaskId': externalTaskId,
                'batchId': batchId,
                'jobId': jobId,
                'jobDefinitionId': jobDefinitionId,
                'userId': userId,
                'operationId': operationId,
                'operationType': operationType,
                'entityType': entityType,
                'entityTypeIn': entityTypeIn,
                'category': category,
                'categoryIn': categoryIn,
                'property': property,
                'afterTimestamp': afterTimestamp,
                'beforeTimestamp': beforeTimestamp,
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
     * Get User Operation Log Count
     * Queries for the number of user operation log entries that fulfill the given parameters.
     * Takes the same parameters as the
     * [Get User Operation Log (Historic)](https://docs.camunda.org/manual/7.18/reference/rest/history/user-operation-log/get-user-operation-log-query/)
     * method.
     * @param deploymentId Filter by deployment id.
     * @param processDefinitionId Filter by process definition id.
     * @param processDefinitionKey Filter by process definition key.
     * @param processInstanceId Filter by process instance id.
     * @param executionId Filter by execution id.
     * @param caseDefinitionId Filter by case definition id.
     * @param caseInstanceId Filter by case instance id.
     * @param caseExecutionId Filter by case execution id.
     * @param taskId Only include operations on this task.
     * @param externalTaskId Only include operations on this external task.
     * @param batchId Only include operations on this batch.
     * @param jobId Filter by job id.
     * @param jobDefinitionId Filter by job definition id.
     * @param userId Only include operations of this user.
     * @param operationId Filter by the id of the operation. This allows fetching of multiple entries which are part
     * of a composite operation.
     * @param operationType Filter by the type of the operation like `Claim` or `Delegate`. See the
     * [Javadoc](https://docs.camunda.org/manual/7.18/reference/javadoc/?org/camunda/bpm/engine/history/UserOperationLogEntry.html)
     * for a list of available operation types.
     * @param entityType Filter by the type of the entity that was affected by this operation, possible values are
     * `Task`, `Attachment` or `IdentityLink`.
     * @param entityTypeIn Filter by a comma-separated list of types of the entities that was affected by this operation,
     * possible values are `Task`, `Attachment` or `IdentityLink`.
     * @param category Filter by the category that this operation is associated with, possible values are
     * `TaskWorker`, `Admin` or `Operator`.
     * @param categoryIn Filter by a comma-separated list of categories that this operation is associated with, possible values are
     * `TaskWorker`, `Admin` or `Operator`.
     * @param property Only include operations that changed this property, e.g., `owner` or `assignee`.
     * @param afterTimestamp Restrict to entries that were created after the given timestamp. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the
     * timestamp must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., 2013-01-23T14:42:45.000+0200.
     * @param beforeTimestamp Restrict to entries that were created before the given timestamp. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the
     * timestamp must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., 2013-01-23T14:42:45.000+0200.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryUserOperationCount(
        deploymentId?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        processInstanceId?: string,
        executionId?: string,
        caseDefinitionId?: string,
        caseInstanceId?: string,
        caseExecutionId?: string,
        taskId?: string,
        externalTaskId?: string,
        batchId?: string,
        jobId?: string,
        jobDefinitionId?: string,
        userId?: string,
        operationId?: string,
        operationType?: string,
        entityType?: string,
        entityTypeIn?: string,
        category?: string,
        categoryIn?: string,
        property?: string,
        afterTimestamp?: string,
        beforeTimestamp?: string,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/user-operation/count',
            query: {
                'deploymentId': deploymentId,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processInstanceId': processInstanceId,
                'executionId': executionId,
                'caseDefinitionId': caseDefinitionId,
                'caseInstanceId': caseInstanceId,
                'caseExecutionId': caseExecutionId,
                'taskId': taskId,
                'externalTaskId': externalTaskId,
                'batchId': batchId,
                'jobId': jobId,
                'jobDefinitionId': jobDefinitionId,
                'userId': userId,
                'operationId': operationId,
                'operationType': operationType,
                'entityType': entityType,
                'entityTypeIn': entityTypeIn,
                'category': category,
                'categoryIn': categoryIn,
                'property': property,
                'afterTimestamp': afterTimestamp,
                'beforeTimestamp': beforeTimestamp,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Clear Annotation of an User Operation Log (Historic)
     * Clear the annotation which was previously set for auditing reasons.
     * @param operationId The operation id of the operation log to be updated.
     * @returns void
     * @throws ApiError
     */
    public static clearAnnotationUserOperationLog(
        operationId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/history/user-operation/{operationId}/clear-annotation',
            path: {
                'operationId': operationId,
            },
            errors: {
                400: `Returned if some of the request parameters are invalid, for example if the
                \`operationId\` path parameter value does not exists. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Set Annotation to an User Operation Log (Historic)
     * Set an annotation for auditing reasons.
     * @param operationId The operation id of the operation log to be updated.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static setAnnotationUserOperationLog(
        operationId: string,
        requestBody?: AnnotationDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/history/user-operation/{operationId}/set-annotation',
            path: {
                'operationId': operationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the request parameters are invalid, for example if the
                \`operationId\` path parameter value does not exists. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
