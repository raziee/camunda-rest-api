/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchDto } from '../models/BatchDto';
import type { CountResultDto } from '../models/CountResultDto';
import type { JobDto } from '../models/JobDto';
import type { JobDuedateDto } from '../models/JobDuedateDto';
import type { JobQueryDto } from '../models/JobQueryDto';
import type { JobSuspensionStateDto } from '../models/JobSuspensionStateDto';
import type { PriorityDto } from '../models/PriorityDto';
import type { RetriesDto } from '../models/RetriesDto';
import type { SetJobRetriesDto } from '../models/SetJobRetriesDto';
import type { SuspensionStateDto } from '../models/SuspensionStateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class JobService {

    /**
     * Get Jobs
     * Queries for jobs that fulfill given parameters.
     * The size of the result set can be retrieved by using the [Get Job
     * Count](https://docs.camunda.org/manual/7.18/reference/rest/job/get-query-count/) method.
     * @param jobId Filter by job id.
     * @param jobIds Filter by a comma-separated list of job ids.
     * @param jobDefinitionId Only select jobs which exist for the given job definition.
     * @param processInstanceId Only select jobs which exist for the given process instance.
     * @param processInstanceIds Only select jobs which exist for the given comma-separated list of process instance ids.
     * @param executionId Only select jobs which exist for the given execution.
     * @param processDefinitionId Filter by the id of the process definition the jobs run on.
     * @param processDefinitionKey Filter by the key of the process definition the jobs run on.
     * @param activityId Only select jobs which exist for an activity with the given id.
     * @param withRetriesLeft Only select jobs which have retries left. Value may only be `true`, as `false` is the
     * default behavior.
     * @param executable Only select jobs which are executable, i.e., retries > 0 and due date is `null` or due
     * date is in the past. Value may only be `true`, as `false` is the default
     * behavior.
     * @param timers Only select jobs that are timers. Cannot be used together with `messages`. Value may only
     * be `true`, as `false` is the default behavior.
     * @param messages Only select jobs that are messages. Cannot be used together with `timers`. Value may only
     * be `true`, as `false` is the default behavior.
     * @param dueDates Only select jobs where the due date is lower or higher than the given date.
     * Due date expressions are comma-separated and are structured as follows:
     *
     * A valid condition value has the form `operator_value`.
     * `operator` is the comparison operator to be used and `value` the date value
     * as string.
     *
     * Valid operator values are: `gt` - greater than; `lt` - lower than.
     * `value` may not contain underscore or comma characters.
     * @param createTimes Only select jobs created before or after the given date.
     *
     * Create time expressions are comma-separated and are structured as
     * follows:
     *
     * A valid condition value has the form `operator_value`.
     * `operator` is the comparison operator to be used and `value` the date value
     * as string.
     *
     * Valid operator values are: `gt` - greater than; `lt` - lower than.
     * `value` may not contain underscore or comma characters.
     * @param withException Only select jobs that failed due to an exception. Value may only be `true`, as `false` is
     * the default behavior.
     * @param exceptionMessage Only select jobs that failed due to an exception with the given message.
     * @param failedActivityId Only select jobs that failed due to an exception at an activity with the given id.
     * @param noRetriesLeft Only select jobs which have no retries left. Value may only be `true`, as `false` is the
     * default behavior.
     * @param active Only include active jobs. Value may only be `true`, as `false` is the default behavior.
     * @param suspended Only include suspended jobs. Value may only be `true`, as `false` is the default behavior.
     * @param priorityLowerThanOrEquals Only include jobs with a priority lower than or equal to the given value. Value must be a
     * valid `long` value.
     * @param priorityHigherThanOrEquals Only include jobs with a priority higher than or equal to the given value. Value must be a
     * valid `long` value.
     * @param tenantIdIn Only include jobs which belong to one of the passed comma-separated tenant ids.
     * @param withoutTenantId Only include jobs which belong to no tenant. Value may only be `true`, as `false` is the
     * default behavior.
     * @param includeJobsWithoutTenantId Include jobs which belong to no tenant. Can be used in combination with `tenantIdIn`.
     * Value may only be `true`, as `false` is the default behavior.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns JobDto Request successful.
     * @throws ApiError
     */
    public static getJobs(
        jobId?: string,
        jobIds?: string,
        jobDefinitionId?: string,
        processInstanceId?: string,
        processInstanceIds?: string,
        executionId?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        activityId?: string,
        withRetriesLeft?: boolean,
        executable?: boolean,
        timers?: boolean,
        messages?: boolean,
        dueDates?: string,
        createTimes?: string,
        withException?: boolean,
        exceptionMessage?: string,
        failedActivityId?: string,
        noRetriesLeft?: boolean,
        active?: boolean,
        suspended?: boolean,
        priorityLowerThanOrEquals?: number,
        priorityHigherThanOrEquals?: number,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        includeJobsWithoutTenantId?: boolean,
        sortBy?: 'jobId' | 'executionId' | 'processInstanceId' | 'processDefinitionId' | 'processDefinitionKey' | 'jobPriority' | 'jobRetries' | 'jobDueDate' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<JobDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/job',
            query: {
                'jobId': jobId,
                'jobIds': jobIds,
                'jobDefinitionId': jobDefinitionId,
                'processInstanceId': processInstanceId,
                'processInstanceIds': processInstanceIds,
                'executionId': executionId,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'activityId': activityId,
                'withRetriesLeft': withRetriesLeft,
                'executable': executable,
                'timers': timers,
                'messages': messages,
                'dueDates': dueDates,
                'createTimes': createTimes,
                'withException': withException,
                'exceptionMessage': exceptionMessage,
                'failedActivityId': failedActivityId,
                'noRetriesLeft': noRetriesLeft,
                'active': active,
                'suspended': suspended,
                'priorityLowerThanOrEquals': priorityLowerThanOrEquals,
                'priorityHigherThanOrEquals': priorityHigherThanOrEquals,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'includeJobsWithoutTenantId': includeJobsWithoutTenantId,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\`
                parameter is supplied, but no \`sortBy\`, or if an invalid operator
                for due date comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Jobs (POST)
     * Queries for jobs that fulfill given parameters. This method is slightly more
     * powerful than the [Get Jobs](https://docs.camunda.org/manual/7.18/reference/rest/job/get-query/)
     * method because it allows filtering by multiple jobs of types `String`,
     * `Number` or `Boolean`.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param requestBody
     * @returns JobDto Request successful.
     * @throws ApiError
     */
    public static queryJobs(
        firstResult?: number,
        maxResults?: number,
        requestBody?: JobQueryDto,
    ): CancelablePromise<Array<JobDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/job',
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\`
                parameter is supplied, but no \`sortBy\`, or if an invalid operator
                for due date comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Job Count
     * Queries for the number of jobs that fulfill given parameters.
     * Takes the same parameters as the [Get
     * Jobs](https://docs.camunda.org/manual/7.18/reference/rest/job/get-query/) method.
     * @param jobId Filter by job id.
     * @param jobIds Filter by a comma-separated list of job ids.
     * @param jobDefinitionId Only select jobs which exist for the given job definition.
     * @param processInstanceId Only select jobs which exist for the given process instance.
     * @param processInstanceIds Only select jobs which exist for the given comma-separated list of process instance ids.
     * @param executionId Only select jobs which exist for the given execution.
     * @param processDefinitionId Filter by the id of the process definition the jobs run on.
     * @param processDefinitionKey Filter by the key of the process definition the jobs run on.
     * @param activityId Only select jobs which exist for an activity with the given id.
     * @param withRetriesLeft Only select jobs which have retries left. Value may only be `true`, as `false` is the
     * default behavior.
     * @param executable Only select jobs which are executable, i.e., retries > 0 and due date is `null` or due
     * date is in the past. Value may only be `true`, as `false` is the default
     * behavior.
     * @param timers Only select jobs that are timers. Cannot be used together with `messages`. Value may only
     * be `true`, as `false` is the default behavior.
     * @param messages Only select jobs that are messages. Cannot be used together with `timers`. Value may only
     * be `true`, as `false` is the default behavior.
     * @param dueDates Only select jobs where the due date is lower or higher than the given date.
     * Due date expressions are comma-separated and are structured as follows:
     *
     * A valid condition value has the form `operator_value`.
     * `operator` is the comparison operator to be used and `value` the date value
     * as string.
     *
     * Valid operator values are: `gt` - greater than; `lt` - lower than.
     * `value` may not contain underscore or comma characters.
     * @param createTimes Only select jobs created before or after the given date.
     *
     * Create time expressions are comma-separated and are structured as
     * follows:
     *
     * A valid condition value has the form `operator_value`.
     * `operator` is the comparison operator to be used and `value` the date value
     * as string.
     *
     * Valid operator values are: `gt` - greater than; `lt` - lower than.
     * `value` may not contain underscore or comma characters.
     * @param withException Only select jobs that failed due to an exception. Value may only be `true`, as `false` is
     * the default behavior.
     * @param exceptionMessage Only select jobs that failed due to an exception with the given message.
     * @param failedActivityId Only select jobs that failed due to an exception at an activity with the given id.
     * @param noRetriesLeft Only select jobs which have no retries left. Value may only be `true`, as `false` is the
     * default behavior.
     * @param active Only include active jobs. Value may only be `true`, as `false` is the default behavior.
     * @param suspended Only include suspended jobs. Value may only be `true`, as `false` is the default behavior.
     * @param priorityLowerThanOrEquals Only include jobs with a priority lower than or equal to the given value. Value must be a
     * valid `long` value.
     * @param priorityHigherThanOrEquals Only include jobs with a priority higher than or equal to the given value. Value must be a
     * valid `long` value.
     * @param tenantIdIn Only include jobs which belong to one of the passed comma-separated tenant ids.
     * @param withoutTenantId Only include jobs which belong to no tenant. Value may only be `true`, as `false` is the
     * default behavior.
     * @param includeJobsWithoutTenantId Include jobs which belong to no tenant. Can be used in combination with `tenantIdIn`.
     * Value may only be `true`, as `false` is the default behavior.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getJobsCount(
        jobId?: string,
        jobIds?: string,
        jobDefinitionId?: string,
        processInstanceId?: string,
        processInstanceIds?: string,
        executionId?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        activityId?: string,
        withRetriesLeft?: boolean,
        executable?: boolean,
        timers?: boolean,
        messages?: boolean,
        dueDates?: string,
        createTimes?: string,
        withException?: boolean,
        exceptionMessage?: string,
        failedActivityId?: string,
        noRetriesLeft?: boolean,
        active?: boolean,
        suspended?: boolean,
        priorityLowerThanOrEquals?: number,
        priorityHigherThanOrEquals?: number,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        includeJobsWithoutTenantId?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/job/count',
            query: {
                'jobId': jobId,
                'jobIds': jobIds,
                'jobDefinitionId': jobDefinitionId,
                'processInstanceId': processInstanceId,
                'processInstanceIds': processInstanceIds,
                'executionId': executionId,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'activityId': activityId,
                'withRetriesLeft': withRetriesLeft,
                'executable': executable,
                'timers': timers,
                'messages': messages,
                'dueDates': dueDates,
                'createTimes': createTimes,
                'withException': withException,
                'exceptionMessage': exceptionMessage,
                'failedActivityId': failedActivityId,
                'noRetriesLeft': noRetriesLeft,
                'active': active,
                'suspended': suspended,
                'priorityLowerThanOrEquals': priorityLowerThanOrEquals,
                'priorityHigherThanOrEquals': priorityHigherThanOrEquals,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'includeJobsWithoutTenantId': includeJobsWithoutTenantId,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example, if an invalid operator
                for due date comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Job Count (POST)
     * Queries for jobs that fulfill given parameters. This method takes the same message
     * body as the [Get Jobs POST](https://docs.camunda.org/manual/7.18/reference/rest/job/post-
     * query/) method and therefore it is slightly more powerful than the
     * [Get Job Count](https://docs.camunda.org/manual/7.18/reference/rest/job/get-query-count/)
     * method.
     * @param requestBody
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryJobsCount(
        requestBody?: JobQueryDto,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/job/count',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, for example, if an invalid operator
                for due date comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Set Job Retries Async (POST)
     * Create a batch to set retries of jobs asynchronously.
     * @param requestBody
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static setJobRetriesAsyncOperation(
        requestBody?: SetJobRetriesDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/job/retries',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if neither
                processInstanceIds nor processInstanceQuery is present. Or if the
                retry count is not specified. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Activate/Suspend Jobs
     * Activates or suspends jobs matching the given criterion.
     * This can only be on of:
     * * `jobDefinitionId`
     * * `processDefinitionId`
     * * `processInstanceId`
     * * `processDefinitionKey`
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateSuspensionStateBy(
        requestBody?: JobSuspensionStateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/job/suspended',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request parameters are invalid, for example, if \`jobDefinitionId\` and
                \`processDefinitionId\` are both specified.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Job
     * Retrieves a job by id, according to the `Job` interface in the engine.
     * @param id The id of the job to be retrieved.
     * @returns JobDto Request successful.
     * @throws ApiError
     */
    public static getJob(
        id: string,
    ): CancelablePromise<JobDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/job/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Job with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Set Job Due Date
     * Updates the due date of a job by id.
     * @param id The id of the job to be updated.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static setJobDuedate(
        id: string,
        requestBody?: JobDuedateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/job/{id}/duedate',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Job with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `The due date could not be set successfully. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Recalculate Job Due Date
     * Recalculates the due date of a job by id.
     * @param id The id of the job to be updated.
     * @param creationDateBased Recalculate the due date based on the creation date of the job or the current date.
     * Value may only be `false`, as `true` is the default behavior.
     * @returns void
     * @throws ApiError
     */
    public static recalculateDuedate(
        id: string,
        creationDateBased?: boolean,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/job/{id}/duedate/recalculate',
            path: {
                'id': id,
            },
            query: {
                'creationDateBased': creationDateBased,
            },
            errors: {
                404: `Job with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `The due date could not be recalculated successfully. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Execute Job
     * Executes a job by id. **Note:** The execution of the job happens synchronously in
     * the same thread.
     * @param id The id of the job to be executed.
     * @returns void
     * @throws ApiError
     */
    public static executeJob(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/job/{id}/execute',
            path: {
                'id': id,
            },
            errors: {
                404: `Job with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `The job could not be executed successfully. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Set Job Priority
     * Sets the execution priority of a job by id.
     * @param id The id of the job to be updated.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static setJobPriority(
        id: string,
        requestBody?: PriorityDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/job/{id}/priority',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Job with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `The priority could not be set successfully. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Set Job Retries
     * Sets the retries of the job to the given number of retries by id.
     * @param id The id of the job to be updated.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static setJobRetries(
        id: string,
        requestBody?: RetriesDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/job/{id}/retries',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Job with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `The retries could not be set successfully. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Exception Stacktrace
     * Retrieves the exception stacktrace corresponding to the passed job id.
     * @param id The id of the job to get the exception stacktrace for.
     * @returns any Request successful.
     * @throws ApiError
     */
    public static getStacktrace(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/job/{id}/stacktrace',
            path: {
                'id': id,
            },
            errors: {
                404: `Job with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Activate/Suspend Job By Id
     * Activates or suspends a given job by id.
     * @param id The id of the job to activate or suspend.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateJobSuspensionState(
        id: string,
        requestBody?: SuspensionStateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/job/{id}/suspended',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
