/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchDto } from '../models/BatchDto';
import type { CompleteExternalTaskDto } from '../models/CompleteExternalTaskDto';
import type { CountResultDto } from '../models/CountResultDto';
import type { ExtendLockOnExternalTaskDto } from '../models/ExtendLockOnExternalTaskDto';
import type { ExternalTaskBpmnError } from '../models/ExternalTaskBpmnError';
import type { ExternalTaskDto } from '../models/ExternalTaskDto';
import type { ExternalTaskFailureDto } from '../models/ExternalTaskFailureDto';
import type { ExternalTaskQueryDto } from '../models/ExternalTaskQueryDto';
import type { FetchExternalTasksDto } from '../models/FetchExternalTasksDto';
import type { LockedExternalTaskDto } from '../models/LockedExternalTaskDto';
import type { LockExternalTaskDto } from '../models/LockExternalTaskDto';
import type { PriorityDto } from '../models/PriorityDto';
import type { RetriesDto } from '../models/RetriesDto';
import type { SetRetriesForExternalTasksDto } from '../models/SetRetriesForExternalTasksDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ExternalTaskService {

    /**
     * Get List
     * Queries for the external tasks that fulfill given parameters. Parameters may be static as well as dynamic
     * runtime properties of executions. The size of the result set can be retrieved by using the
     * [Get External Task Count](https://docs.camunda.org/manual/7.18/reference/rest/external-task/get-query-count/) method.
     * @param externalTaskId Filter by an external task's id.
     * @param externalTaskIdIn Filter by the comma-separated list of external task ids.
     * @param topicName Filter by an external task topic.
     * @param workerId Filter by the id of the worker that the task was most recently locked by.
     * @param locked Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired).
     * Value may only be `true`, as `false` matches any external task.
     * @param notLocked Only include external tasks that are currently not locked (i.e., they have no lock or it has expired).
     * Value may only be `true`, as `false` matches any external task.
     * @param withRetriesLeft Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be
     * `true`, as `false` matches any external task.
     * @param noRetriesLeft Only include external tasks that have 0 retries. Value may only be `true`, as `false` matches any
     * external task.
     * @param lockExpirationAfter Restrict to external tasks that have a lock that expires after a given date. By
     * [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param lockExpirationBefore Restrict to external tasks that have a lock that expires before a given date. By
     * [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param activityId Filter by the id of the activity that an external task is created for.
     * @param activityIdIn Filter by the comma-separated list of ids of the activities that an external task is created for.
     * @param executionId Filter by the id of the execution that an external task belongs to.
     * @param processInstanceId Filter by the id of the process instance that an external task belongs to.
     * @param processInstanceIdIn Filter by a comma-separated list of process instance ids that an external task may belong to.
     * @param processDefinitionId Filter by the id of the process definition that an external task belongs to.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids.
     * An external task must have one of the given tenant ids.
     * @param active Only include active tasks. Value may only be `true`, as `false` matches any external task.
     * @param suspended Only include suspended tasks. Value may only be `true`, as `false` matches any external task.
     * @param priorityHigherThanOrEquals Only include jobs with a priority higher than or equal to the given value.
     * Value must be a valid `long` value.
     * @param priorityLowerThanOrEquals Only include jobs with a priority lower than or equal to the given value.
     * Value must be a valid `long` value.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns ExternalTaskDto Request successful.
     * @throws ApiError
     */
    public static getExternalTasks(
        externalTaskId?: string,
        externalTaskIdIn?: string,
        topicName?: string,
        workerId?: string,
        locked?: boolean,
        notLocked?: boolean,
        withRetriesLeft?: boolean,
        noRetriesLeft?: boolean,
        lockExpirationAfter?: string,
        lockExpirationBefore?: string,
        activityId?: string,
        activityIdIn?: string,
        executionId?: string,
        processInstanceId?: string,
        processInstanceIdIn?: string,
        processDefinitionId?: string,
        tenantIdIn?: string,
        active?: boolean,
        suspended?: boolean,
        priorityHigherThanOrEquals?: number,
        priorityLowerThanOrEquals?: number,
        sortBy?: 'id' | 'lockExpirationTime' | 'processInstanceId' | 'processDefinitionId' | 'processDefinitionKey' | 'taskPriority' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<ExternalTaskDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/external-task',
            query: {
                'externalTaskId': externalTaskId,
                'externalTaskIdIn': externalTaskIdIn,
                'topicName': topicName,
                'workerId': workerId,
                'locked': locked,
                'notLocked': notLocked,
                'withRetriesLeft': withRetriesLeft,
                'noRetriesLeft': noRetriesLeft,
                'lockExpirationAfter': lockExpirationAfter,
                'lockExpirationBefore': lockExpirationBefore,
                'activityId': activityId,
                'activityIdIn': activityIdIn,
                'executionId': executionId,
                'processInstanceId': processInstanceId,
                'processInstanceIdIn': processInstanceIdIn,
                'processDefinitionId': processDefinitionId,
                'tenantIdIn': tenantIdIn,
                'active': active,
                'suspended': suspended,
                'priorityHigherThanOrEquals': priorityHigherThanOrEquals,
                'priorityLowerThanOrEquals': priorityLowerThanOrEquals,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\` parameter is supplied,
                but no \`sortBy\`. See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get List (POST)
     * Queries for external tasks that fulfill given parameters in the form of a JSON object.
     *
     * This method is slightly more powerful than the
     * [Get External Tasks](https://docs.camunda.org/manual/7.18/reference/rest/external-task/get-query/) method because it allows to
     * specify a hierarchical result sorting.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param requestBody
     * @returns ExternalTaskDto Request successful. The Response is a JSON array of external task objects.
     * @throws ApiError
     */
    public static queryExternalTasks(
        firstResult?: number,
        maxResults?: number,
        requestBody?: ExternalTaskQueryDto,
    ): CancelablePromise<Array<ExternalTaskDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task',
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\` parameter is supplied,
                but no \`sortBy\`. See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get List Count
     * Queries for the number of external tasks that fulfill given parameters. Takes the same parameters as the
     * [Get External Tasks](https://docs.camunda.org/manual/7.18/reference/rest/external-task/get-query/) method.
     * @param externalTaskId Filter by an external task's id.
     * @param externalTaskIdIn Filter by the comma-separated list of external task ids.
     * @param topicName Filter by an external task topic.
     * @param workerId Filter by the id of the worker that the task was most recently locked by.
     * @param locked Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired).
     * Value may only be `true`, as `false` matches any external task.
     * @param notLocked Only include external tasks that are currently not locked (i.e., they have no lock or it has expired).
     * Value may only be `true`, as `false` matches any external task.
     * @param withRetriesLeft Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be
     * `true`, as `false` matches any external task.
     * @param noRetriesLeft Only include external tasks that have 0 retries. Value may only be `true`, as `false` matches any
     * external task.
     * @param lockExpirationAfter Restrict to external tasks that have a lock that expires after a given date. By
     * [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param lockExpirationBefore Restrict to external tasks that have a lock that expires before a given date. By
     * [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param activityId Filter by the id of the activity that an external task is created for.
     * @param activityIdIn Filter by the comma-separated list of ids of the activities that an external task is created for.
     * @param executionId Filter by the id of the execution that an external task belongs to.
     * @param processInstanceId Filter by the id of the process instance that an external task belongs to.
     * @param processInstanceIdIn Filter by a comma-separated list of process instance ids that an external task may belong to.
     * @param processDefinitionId Filter by the id of the process definition that an external task belongs to.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids.
     * An external task must have one of the given tenant ids.
     * @param active Only include active tasks. Value may only be `true`, as `false` matches any external task.
     * @param suspended Only include suspended tasks. Value may only be `true`, as `false` matches any external task.
     * @param priorityHigherThanOrEquals Only include jobs with a priority higher than or equal to the given value.
     * Value must be a valid `long` value.
     * @param priorityLowerThanOrEquals Only include jobs with a priority lower than or equal to the given value.
     * Value must be a valid `long` value.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getExternalTasksCount(
        externalTaskId?: string,
        externalTaskIdIn?: string,
        topicName?: string,
        workerId?: string,
        locked?: boolean,
        notLocked?: boolean,
        withRetriesLeft?: boolean,
        noRetriesLeft?: boolean,
        lockExpirationAfter?: string,
        lockExpirationBefore?: string,
        activityId?: string,
        activityIdIn?: string,
        executionId?: string,
        processInstanceId?: string,
        processInstanceIdIn?: string,
        processDefinitionId?: string,
        tenantIdIn?: string,
        active?: boolean,
        suspended?: boolean,
        priorityHigherThanOrEquals?: number,
        priorityLowerThanOrEquals?: number,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/external-task/count',
            query: {
                'externalTaskId': externalTaskId,
                'externalTaskIdIn': externalTaskIdIn,
                'topicName': topicName,
                'workerId': workerId,
                'locked': locked,
                'notLocked': notLocked,
                'withRetriesLeft': withRetriesLeft,
                'noRetriesLeft': noRetriesLeft,
                'lockExpirationAfter': lockExpirationAfter,
                'lockExpirationBefore': lockExpirationBefore,
                'activityId': activityId,
                'activityIdIn': activityIdIn,
                'executionId': executionId,
                'processInstanceId': processInstanceId,
                'processInstanceIdIn': processInstanceIdIn,
                'processDefinitionId': processDefinitionId,
                'tenantIdIn': tenantIdIn,
                'active': active,
                'suspended': suspended,
                'priorityHigherThanOrEquals': priorityHigherThanOrEquals,
                'priorityLowerThanOrEquals': priorityLowerThanOrEquals,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get List Count (POST)
     * Queries for the number of external tasks that fulfill given parameters. This method takes the same message
     * body as the [Get External Tasks (POST)](https://docs.camunda.org/manual/7.18/reference/rest/external-task/post-query/) method.
     * @param requestBody
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryExternalTasksCount(
        requestBody?: ExternalTaskQueryDto,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/count',
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
     * Fetch and Lock
     * Fetches and locks a specific number of external tasks for execution by a worker. Query can be restricted
     * to specific task topics and for each task topic an individual lock time can be provided.
     * @param requestBody
     * @returns LockedExternalTaskDto Request successful.
     * @throws ApiError
     */
    public static fetchAndLock(
        requestBody?: FetchExternalTasksDto,
    ): CancelablePromise<Array<LockedExternalTaskDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/fetchAndLock',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Set Retries Sync
     * Sets the number of retries left to execute external tasks by id synchronously. If retries are set to 0,
     * an incident is created.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static setExternalTaskRetries(
        requestBody?: SetRetriesForExternalTasksDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/external-task/retries',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `In case the number of retries is negative or null, an exception of type \`InvalidRequestException\` is
                returned. See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Set Retries Async
     * Sets the number of retries left to execute external tasks by id asynchronously. If retries are set to 0,
     * an incident is created.
     * @param requestBody
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static setExternalTaskRetriesAsyncOperation(
        requestBody?: SetRetriesForExternalTasksDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/retries-async',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `If neither externalTaskIds nor externalTaskQuery are present or externalTaskIds contains null value or
                the number of retries is negative or null, an exception of type \`InvalidRequestException\` is returned.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get External Task Topic Names
     * Queries for distinct topic names of external tasks that fulfill given parameters.
     * Query can be restricted to only tasks with retries left, tasks that are locked, or tasks
     * that are unlocked. The parameters withLockedTasks and withUnlockedTasks are
     * exclusive. Setting them both to true will return an empty list.
     * Providing no parameters will return a list of all distinct topic names with external tasks.
     * @param withLockedTasks Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired).
     * Value may only be `true`, as `false` matches any external task.
     * @param withUnlockedTasks Only include external tasks that are currently not locked (i.e., they have no lock or it has expired).
     * Value may only be `true`, as `false` matches any external task.
     * @param withRetriesLeft Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be
     * `true`, as `false` matches any external task.
     * @returns string Request successful.
     * @throws ApiError
     */
    public static getTopicNames(
        withLockedTasks?: boolean,
        withUnlockedTasks?: boolean,
        withRetriesLeft?: boolean,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/external-task/topic-names',
            query: {
                'withLockedTasks': withLockedTasks,
                'withUnlockedTasks': withUnlockedTasks,
                'withRetriesLeft': withRetriesLeft,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.`,
            },
        });
    }

    /**
     * Get
     * Retrieves an external task by id, corresponding to the `ExternalTask` interface in the engine.
     * @param id The id of the external task to be retrieved.
     * @returns ExternalTaskDto Request successful.
     * @throws ApiError
     */
    public static getExternalTask(
        id: string,
    ): CancelablePromise<ExternalTaskDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/external-task/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `External task with the given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Handle BPMN Error
     * Reports a business error in the context of a running external task by id. The error code must be specified
     * to identify the BPMN error handler.
     * @param id The id of the external task in which context a BPMN error is reported.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static handleExternalTaskBpmnError(
        id: string,
        requestBody?: ExternalTaskBpmnError,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/{id}/bpmnError',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the task's most recent lock was not acquired by the provided worker.

                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event.

                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `Returned if the corresponding process instance could not be resumed successfully.

                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Complete
     * Completes an external task by id and updates process variables.
     * @param id The id of the task to complete.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static completeExternalTaskResource(
        id: string,
        requestBody?: CompleteExternalTaskDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/{id}/complete',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the task's most recent lock was not acquired by the provided worker. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `Returned if the corresponding process instance could not be resumed successfully. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Error Details
     * Retrieves the error details in the context of a running external task by id.
     * @param id The id of the external task for which the error details should be retrieved.
     * @returns string Request successful.
     * @throws ApiError
     */
    public static getExternalTaskErrorDetails(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/external-task/{id}/errorDetails',
            path: {
                'id': id,
            },
            errors: {
                500: `An external task with the given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Extend Lock
     * Extends the timeout of the lock by a given amount of time.
     * @param id The id of the external task.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static extendLock(
        id: string,
        requestBody?: ExtendLockOnExternalTaskDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/{id}/extendLock',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `In case the new lock duration is negative or the external task is not locked by the given worker or not
                locked at all, an exception of type \`InvalidRequestException\` is returned. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Handle Failure
     * Reports a failure to execute an external task by id. A number of retries and a timeout until the task can
     * be retried can be specified. If retries are set to 0, an incident for this task is created.
     * @param id The id of the external task to report a failure for.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static handleFailure(
        id: string,
        requestBody?: ExternalTaskFailureDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/{id}/failure',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the task's most recent lock was not acquired by the provided worker. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `Returned if the corresponding process instance could not be resumed successfully. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Lock an external task by a given id for a specified worker and amount of time.
     * @param id The id of the external task.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static lock(
        id: string,
        requestBody?: LockExternalTaskDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/{id}/lock',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `In case the lock duration is negative or the external task is already locked by
                a different worker, an exception of type \`InvalidRequestException\` is returned. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Set Priority
     * Sets the priority of an existing external task by id. The default value of a priority is 0.
     * @param id The id of the external task to set the priority for.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static setExternalTaskResourcePriority(
        id: string,
        requestBody?: PriorityDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/external-task/{id}/priority',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Set Retries
     * Sets the number of retries left to execute an external task by id. If retries are set to 0, an
     * incident is created.
     * @param id The id of the external task to set the number of retries for.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static setExternalTaskResourceRetries(
        id: string,
        requestBody?: RetriesDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/external-task/{id}/retries',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `In case the number of retries is negative or null, an exception of type \`InvalidRequestException\`
                is returned. See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Unlock
     * Unlocks an external task by id. Clears the task's lock expiration time and worker id.
     * @param id The id of the external task to unlock.
     * @returns void
     * @throws ApiError
     */
    public static unlock(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/{id}/unlock',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
