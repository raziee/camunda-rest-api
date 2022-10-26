/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { JobDefinitionDto } from '../models/JobDefinitionDto';
import type { JobDefinitionPriorityDto } from '../models/JobDefinitionPriorityDto';
import type { JobDefinitionQueryDto } from '../models/JobDefinitionQueryDto';
import type { JobDefinitionsSuspensionStateDto } from '../models/JobDefinitionsSuspensionStateDto';
import type { JobDefinitionSuspensionStateDto } from '../models/JobDefinitionSuspensionStateDto';
import type { RetriesDto } from '../models/RetriesDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class JobDefinitionService {

    /**
     * Get Job Definitions
     * Queries for job definitions that fulfill given parameters.
     * The size of the result set can be retrieved by using the
     * [Get Job Definition Count](https://docs.camunda.org/manual/7.18/reference/rest/job-definition/get-query-count/)
     * method.
     * @param jobDefinitionId Filter by job definition id.
     * @param activityIdIn Only include job definitions which belong to one of the passed and comma-separated activity ids.
     * @param processDefinitionId Only include job definitions which exist for the given process definition id.
     * @param processDefinitionKey Only include job definitions which exist for the given process definition key.
     * @param jobType Only include job definitions which exist for the given job type. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/the-job-executor/#job-creation)
     * for more information about job types.
     * @param jobConfiguration Only include job definitions which exist for the given job configuration. For example: for
     * timer jobs it is the timer configuration.
     * @param active Only include active job definitions. Value may only be `true`, as `false` is the default
     * behavior.
     * @param suspended Only include suspended job definitions. Value may only be `true`, as `false` is the
     * default behavior.
     * @param withOverridingJobPriority Only include job definitions that have an overriding job priority defined. The only
     * effective value is `true`. If set to `false`, this filter is not applied.
     * @param tenantIdIn Only include job definitions which belong to one of the passed and comma-separated tenant
     * ids.
     * @param withoutTenantId Only include job definitions which belong to no tenant. Value may only be `true`, as
     * `false` is the default behavior.
     * @param includeJobDefinitionsWithoutTenantId Include job definitions which belong to no tenant. Can be used in combination with
     * `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns JobDefinitionDto Request successful.
     * @throws ApiError
     */
    public static getJobDefinitions(
        jobDefinitionId?: string,
        activityIdIn?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        jobType?: string,
        jobConfiguration?: string,
        active?: boolean,
        suspended?: boolean,
        withOverridingJobPriority?: boolean,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        includeJobDefinitionsWithoutTenantId?: boolean,
        sortBy?: 'jobDefinitionId' | 'activityId' | 'processDefinitionId' | 'processDefinitionKey' | 'jobType' | 'jobConfiguration' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<JobDefinitionDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/job-definition',
            query: {
                'jobDefinitionId': jobDefinitionId,
                'activityIdIn': activityIdIn,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'jobType': jobType,
                'jobConfiguration': jobConfiguration,
                'active': active,
                'suspended': suspended,
                'withOverridingJobPriority': withOverridingJobPriority,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'includeJobDefinitionsWithoutTenantId': includeJobDefinitionsWithoutTenantId,
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
     * Get Job Definitions (POST)
     * Queries for job definitions that fulfill given parameters. This method is slightly
     * more powerful than the
     * [Get Job Definitions](https://docs.camunda.org/manual/7.18/reference/rest/job-definition/get-query/)
     * method because it allows filtering by multiple job definitions of
     * types `String`, `Number` or `Boolean`.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param requestBody
     * @returns JobDefinitionDto Request successful.
     * @throws ApiError
     */
    public static queryJobDefinitions(
        firstResult?: number,
        maxResults?: number,
        requestBody?: JobDefinitionQueryDto,
    ): CancelablePromise<Array<JobDefinitionDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/job-definition',
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
     * Get Job Definition Count
     * Queries for the number of job definitions that fulfill given parameters.
     * Takes the same parameters as the
     * [Get Job Definitions](https://docs.camunda.org/manual/7.18/reference/rest/job-definition/get-query/)
     * method.
     * @param jobDefinitionId Filter by job definition id.
     * @param activityIdIn Only include job definitions which belong to one of the passed and comma-separated activity ids.
     * @param processDefinitionId Only include job definitions which exist for the given process definition id.
     * @param processDefinitionKey Only include job definitions which exist for the given process definition key.
     * @param jobType Only include job definitions which exist for the given job type. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/the-job-executor/#job-creation)
     * for more information about job types.
     * @param jobConfiguration Only include job definitions which exist for the given job configuration. For example: for
     * timer jobs it is the timer configuration.
     * @param active Only include active job definitions. Value may only be `true`, as `false` is the default
     * behavior.
     * @param suspended Only include suspended job definitions. Value may only be `true`, as `false` is the
     * default behavior.
     * @param withOverridingJobPriority Only include job definitions that have an overriding job priority defined. The only
     * effective value is `true`. If set to `false`, this filter is not applied.
     * @param tenantIdIn Only include job definitions which belong to one of the passed and comma-separated tenant
     * ids.
     * @param withoutTenantId Only include job definitions which belong to no tenant. Value may only be `true`, as
     * `false` is the default behavior.
     * @param includeJobDefinitionsWithoutTenantId Include job definitions which belong to no tenant. Can be used in combination with
     * `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getJobDefinitionsCount(
        jobDefinitionId?: string,
        activityIdIn?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        jobType?: string,
        jobConfiguration?: string,
        active?: boolean,
        suspended?: boolean,
        withOverridingJobPriority?: boolean,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        includeJobDefinitionsWithoutTenantId?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/job-definition/count',
            query: {
                'jobDefinitionId': jobDefinitionId,
                'activityIdIn': activityIdIn,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'jobType': jobType,
                'jobConfiguration': jobConfiguration,
                'active': active,
                'suspended': suspended,
                'withOverridingJobPriority': withOverridingJobPriority,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'includeJobDefinitionsWithoutTenantId': includeJobDefinitionsWithoutTenantId,
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
     * Get Job Definition Count (POST)
     * Queries for the number of job definitions that fulfill given parameters. This
     * method takes the same message body as the
     * [Get Job Definitions (POST)](https://docs.camunda.org/manual/7.18/reference/rest/job-definition/post-query/)
     * method and therefore it is slightly more powerful than the
     * [Get Job Definition Count](https://docs.camunda.org/manual/7.18/reference/rest/job-definition/get-query-count/)
     * method.
     * @param requestBody
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryJobDefinitionsCount(
        requestBody?: JobDefinitionQueryDto,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/job-definition/count',
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
     * Activate/Suspend Job Definitions
     * Activates or suspends job definitions with the given process definition id or process definition key.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateSuspensionStateJobDefinitions(
        requestBody?: JobDefinitionsSuspensionStateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/job-definition/suspended',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the request parameters are invalid, for example if the provided
                \`executionDate\` parameter doesn't have the expected format. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Job Definition
     * Retrieves a job definition by id, according to the `JobDefinition` interface in the engine.
     * @param id The id of the job definition to be retrieved.
     * @returns JobDefinitionDto Request successful.
     * @throws ApiError
     */
    public static getJobDefinition(
        id: string,
    ): CancelablePromise<JobDefinitionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/job-definition/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Job definition with given id does not exist.  See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Set Job Definition Priority by Id
     * Sets an overriding execution priority for jobs with the given definition id.
     * Optionally, the priorities of all the definitions' existing jobs are
     * updated accordingly. The priority can be reset by setting it to
     * `null`, meaning that a new job's priority will not be determined based
     * on its definition's priority any longer. See the
     * [user guide on job prioritization](https://docs.camunda.org/manual/7.18/user-guide/process-engine/the-job-executor/#set-job-definition-priorities-via-managementservice-api)
     * for details.
     * @param id The id of the job definition to be updated.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static setJobPriorityJobDefinition(
        id: string,
        requestBody?: JobDefinitionPriorityDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/job-definition/{id}/jobPriority',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Job definition with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `The retries could not be set successfully. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Set Job Retries By Job Definition Id
     * Sets the number of retries of all **failed** jobs associated with the given job
     * definition id.
     * @param id The id of the job definition to be updated.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static setJobRetriesJobDefinition(
        id: string,
        requestBody?: RetriesDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/job-definition/{id}/retries',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `The retries could not be set successfully. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Activate/Suspend Job Definition By Id
     * Activates or suspends a given job definition by id.
     * @param id The id of the job definition to activate or suspend.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateSuspensionStateJobDefinition(
        id: string,
        requestBody?: JobDefinitionSuspensionStateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/job-definition/{id}/suspended',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the request parameters are invalid, for example if the provided
                \`executionDate\` parameter doesn't have the expected format. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
