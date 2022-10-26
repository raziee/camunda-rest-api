/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { DecisionDefinitionDiagramDto } from '../models/DecisionDefinitionDiagramDto';
import type { DecisionDefinitionDto } from '../models/DecisionDefinitionDto';
import type { EvaluateDecisionDto } from '../models/EvaluateDecisionDto';
import type { HistoryTimeToLiveDto } from '../models/HistoryTimeToLiveDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DecisionDefinitionService {

    /**
     * Get List
     * Queries for decision definitions that fulfill given parameters.
     * Parameters may be the properties of decision definitions, such as the name, key or version.
     * The size of the result set can be retrieved by using
     * the [Get Decision Definition Count](https://docs.camunda.org/manual/7.18/reference/rest/decision-definition/get-query-count/) method.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param decisionDefinitionId Filter by decision definition id.
     * @param decisionDefinitionIdIn Filter by decision definition ids.
     * @param name Filter by decision definition name.
     * @param nameLike Filter by decision definition names that the parameter is a substring of.
     * @param deploymentId Filter by the deployment the id belongs to.
     * @param deployedAfter Filter by the deploy time of the deployment the decision definition belongs to.
     * Only selects decision definitions that have been deployed after (exclusive) a specific time.
     * @param deployedAt Filter by the deploy time of the deployment the decision definition belongs to.
     * Only selects decision definitions that have been deployed at a specific time (exact match).
     * @param key Filter by decision definition key, i.e., the id in the DMN 1.0 XML. Exact match.
     * @param keyLike Filter by decision definition keys that the parameter is a substring of.
     * @param category Filter by decision definition category. Exact match.
     * @param categoryLike Filter by decision definition categories that the parameter is a substring of.
     * @param version Filter by decision definition version.
     * @param latestVersion Only include those decision definitions that are latest versions.
     * Value may only be `true`, as `false` is the default behavior.
     * @param resourceName Filter by the name of the decision definition resource. Exact match.
     * @param resourceNameLike Filter by names of those decision definition resources that the parameter is a substring of.
     * @param decisionRequirementsDefinitionId Filter by the id of the decision requirements definition this decision definition belongs to.
     * @param decisionRequirementsDefinitionKey Filter by the key of the decision requirements definition this decision definition belongs to.
     * @param withoutDecisionRequirementsDefinition Only include decision definitions which does not belongs to any decision requirements definition.
     * Value may only be `true`, as `false` is the default behavior.
     * @param tenantIdIn Filter by a comma-separated list of `Strings`. A decision definition must have one of the given tenant ids.
     * @param withoutTenantId Only include decision definitions which belong to no tenant.
     * Value can effectively only be `true`, as `false` is the default behavior.
     * @param includeDecisionDefinitionsWithoutTenantId Include decision definitions which belong to no tenant.
     * Can be used in combination with `tenantIdIn`.
     * Value may only be `true`, as `false` is the default behavior.
     * @param versionTag Filter by the version tag.
     * @param versionTagLike Filter by the version tags of those decision definition resources that the parameter is a substring of.
     * @returns DecisionDefinitionDto Request successful.
     * @throws ApiError
     */
    public static getDecisionDefinitions(
        sortBy?: 'category' | 'decisionRequirementsDefinitionKey' | 'key' | 'id' | 'name' | 'version' | 'deploymentId' | 'deployTime' | 'versionTag' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
        decisionDefinitionId?: string,
        decisionDefinitionIdIn?: string,
        name?: string,
        nameLike?: string,
        deploymentId?: string,
        deployedAfter?: string,
        deployedAt?: string,
        key?: string,
        keyLike?: string,
        category?: string,
        categoryLike?: string,
        version?: number,
        latestVersion?: boolean,
        resourceName?: string,
        resourceNameLike?: string,
        decisionRequirementsDefinitionId?: string,
        decisionRequirementsDefinitionKey?: string,
        withoutDecisionRequirementsDefinition?: boolean,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        includeDecisionDefinitionsWithoutTenantId?: boolean,
        versionTag?: string,
        versionTagLike?: string,
    ): CancelablePromise<Array<DecisionDefinitionDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-definition',
            query: {
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
                'decisionDefinitionId': decisionDefinitionId,
                'decisionDefinitionIdIn': decisionDefinitionIdIn,
                'name': name,
                'nameLike': nameLike,
                'deploymentId': deploymentId,
                'deployedAfter': deployedAfter,
                'deployedAt': deployedAt,
                'key': key,
                'keyLike': keyLike,
                'category': category,
                'categoryLike': categoryLike,
                'version': version,
                'latestVersion': latestVersion,
                'resourceName': resourceName,
                'resourceNameLike': resourceNameLike,
                'decisionRequirementsDefinitionId': decisionRequirementsDefinitionId,
                'decisionRequirementsDefinitionKey': decisionRequirementsDefinitionKey,
                'withoutDecisionRequirementsDefinition': withoutDecisionRequirementsDefinition,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'includeDecisionDefinitionsWithoutTenantId': includeDecisionDefinitionsWithoutTenantId,
                'versionTag': versionTag,
                'versionTagLike': versionTagLike,
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
     * Requests the number of decision definitions that fulfill the query criteria.
     * Takes the same filtering parameters as the
     * [Get Decision Definition](https://docs.camunda.org/manual/7.18/reference/rest/decision-definition/get-query/) method.
     * @param decisionDefinitionId Filter by decision definition id.
     * @param decisionDefinitionIdIn Filter by decision definition ids.
     * @param name Filter by decision definition name.
     * @param nameLike Filter by decision definition names that the parameter is a substring of.
     * @param deploymentId Filter by the deployment the id belongs to.
     * @param deployedAfter Filter by the deploy time of the deployment the decision definition belongs to.
     * Only selects decision definitions that have been deployed after (exclusive) a specific time.
     * @param deployedAt Filter by the deploy time of the deployment the decision definition belongs to.
     * Only selects decision definitions that have been deployed at a specific time (exact match).
     * @param key Filter by decision definition key, i.e., the id in the DMN 1.0 XML. Exact match.
     * @param keyLike Filter by decision definition keys that the parameter is a substring of.
     * @param category Filter by decision definition category. Exact match.
     * @param categoryLike Filter by decision definition categories that the parameter is a substring of.
     * @param version Filter by decision definition version.
     * @param latestVersion Only include those decision definitions that are latest versions.
     * Value may only be `true`, as `false` is the default behavior.
     * @param resourceName Filter by the name of the decision definition resource. Exact match.
     * @param resourceNameLike Filter by names of those decision definition resources that the parameter is a substring of.
     * @param decisionRequirementsDefinitionId Filter by the id of the decision requirements definition this decision definition belongs to.
     * @param decisionRequirementsDefinitionKey Filter by the key of the decision requirements definition this decision definition belongs to.
     * @param withoutDecisionRequirementsDefinition Only include decision definitions which does not belongs to any decision requirements definition.
     * Value may only be `true`, as `false` is the default behavior.
     * @param tenantIdIn Filter by a comma-separated list of `Strings`. A decision definition must have one of the given tenant ids.
     * @param withoutTenantId Only include decision definitions which belong to no tenant.
     * Value can effectively only be `true`, as `false` is the default behavior.
     * @param includeDecisionDefinitionsWithoutTenantId Include decision definitions which belong to no tenant.
     * Can be used in combination with `tenantIdIn`.
     * Value may only be `true`, as `false` is the default behavior.
     * @param versionTag Filter by the version tag.
     * @param versionTagLike Filter by the version tags of those decision definition resources that the parameter is a substring of.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getDecisionDefinitionsCount(
        decisionDefinitionId?: string,
        decisionDefinitionIdIn?: string,
        name?: string,
        nameLike?: string,
        deploymentId?: string,
        deployedAfter?: string,
        deployedAt?: string,
        key?: string,
        keyLike?: string,
        category?: string,
        categoryLike?: string,
        version?: number,
        latestVersion?: boolean,
        resourceName?: string,
        resourceNameLike?: string,
        decisionRequirementsDefinitionId?: string,
        decisionRequirementsDefinitionKey?: string,
        withoutDecisionRequirementsDefinition?: boolean,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        includeDecisionDefinitionsWithoutTenantId?: boolean,
        versionTag?: string,
        versionTagLike?: string,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-definition/count',
            query: {
                'decisionDefinitionId': decisionDefinitionId,
                'decisionDefinitionIdIn': decisionDefinitionIdIn,
                'name': name,
                'nameLike': nameLike,
                'deploymentId': deploymentId,
                'deployedAfter': deployedAfter,
                'deployedAt': deployedAt,
                'key': key,
                'keyLike': keyLike,
                'category': category,
                'categoryLike': categoryLike,
                'version': version,
                'latestVersion': latestVersion,
                'resourceName': resourceName,
                'resourceNameLike': resourceNameLike,
                'decisionRequirementsDefinitionId': decisionRequirementsDefinitionId,
                'decisionRequirementsDefinitionKey': decisionRequirementsDefinitionKey,
                'withoutDecisionRequirementsDefinition': withoutDecisionRequirementsDefinition,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'includeDecisionDefinitionsWithoutTenantId': includeDecisionDefinitionsWithoutTenantId,
                'versionTag': versionTag,
                'versionTagLike': versionTagLike,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get Decision Definition By Key
     * Retrieves the latest version of the decision definition which belongs to no tenant.
     * @param key The key of the decision definition (the latest version thereof) to be retrieved.
     * @returns DecisionDefinitionDto Request successful.
     * @throws ApiError
     */
    public static getDecisionDefinitionByKey(
        key: string,
    ): CancelablePromise<DecisionDefinitionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-definition/key/{key}',
            path: {
                'key': key,
            },
            errors: {
                404: `Decision definition with given key does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get Diagram By Key
     * Returns the diagram for the latest version of the decision definition which belongs to no tenant
     * @param key The key of the decision definition (the latest version thereof) to be retrieved.
     * @returns binary Request successful. The image diagram of this process.
     * @throws ApiError
     */
    public static getDecisionDefinitionDiagramByKey(
        key: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-definition/key/{key}/diagram',
            path: {
                'key': key,
            },
            errors: {
                404: `Decision definition with given key does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Evaluate By Key
     * Evaluates the latest version of the decision definition which belongs to no tenant.
     * The input values of the decision have to be supplied in the request body.
     * @param key The key of the decision definition (the latest version thereof) to be evaluated.
     * @param requestBody
     * @returns any Request successful.
     * @throws ApiError
     */
    public static evaluateDecisionByKey(
        key: string,
        requestBody?: EvaluateDecisionDto,
    ): CancelablePromise<Array<any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/decision-definition/key/{key}/evaluate',
            path: {
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Decision definition with given key does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Update History Time to Live By Key
     * Updates the latest version of the decision definition which belongs to no tenant.
     * The field is used within [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup).
     * @param key The key of the decision definitions to change history time to live.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateHistoryTimeToLiveByDecisionDefinitionKey(
        key: string,
        requestBody?: HistoryTimeToLiveDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/decision-definition/key/{key}/history-time-to-live',
            path: {
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the request parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Decision definition with given key does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Decision Definition By Key And Tenant Id
     * Retrieves the latest version of the decision definition for tenant
     * @param key The key of the decision definition (the latest version thereof) to be retrieved.
     * @param tenantId The id of the tenant the decision definition belongs to.
     * @returns DecisionDefinitionDto Request successful.
     * @throws ApiError
     */
    public static getDecisionDefinitionByKeyAndTenantId(
        key: string,
        tenantId: string,
    ): CancelablePromise<DecisionDefinitionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-definition/key/{key}/tenant-id/{tenant-id}',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            errors: {
                404: `Decision definition with given key does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get Diagram By Key And Tenant
     * Returns the XML of the latest version of the decision definition for tenant.
     * @param key The key of the decision definition (the latest version thereof) to be retrieved.
     * @param tenantId The id of the tenant the decision definition belongs to.
     * @returns binary Request successful. The image diagram of this process.
     * @throws ApiError
     */
    public static getDecisionDefinitionDiagramByKeyAndTenant(
        key: string,
        tenantId: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-definition/key/{key}/tenant-id/{tenant-id}/diagram',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            errors: {
                404: `Decision definition with given key does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Evaluate By Key And Tenant
     * Evaluates the latest version of the decision definition for tenant.
     * The input values of the decision have to be supplied in the request body.
     * @param key The key of the decision definition (the latest version thereof) to be evaluated.
     * @param tenantId The id of the tenant the decision definition belongs to.
     * @param requestBody
     * @returns any Request successful.
     * @throws ApiError
     */
    public static evaluateDecisionByKeyAndTenant(
        key: string,
        tenantId: string,
        requestBody?: EvaluateDecisionDto,
    ): CancelablePromise<Array<any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/decision-definition/key/{key}/tenant-id/{tenant-id}/evaluate',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Decision definition with given key does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Update History Time to Live By Key And Tenant
     * Updates the latest version of the decision definition for tenant.
     * The field is used within [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup).
     * @param key The key of the decision definitions to change history time to live.
     * @param tenantId The id of the tenant the decision definition belongs to.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateHistoryTimeToLiveByDecisionDefinitionKeyAndTenant(
        key: string,
        tenantId: string,
        requestBody?: HistoryTimeToLiveDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/decision-definition/key/{key}/tenant-id/{tenant-id}/history-time-to-live',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the request parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Decision definition with given key does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get XML By Key and Tenant
     * Retrieves the XML of the latest version of the decision definition for tenant
     * @param key The key of the decision definition (the latest version thereof).
     * @param tenantId The id of the tenant the decision definition belongs to.
     * @returns DecisionDefinitionDiagramDto Request successful.
     * @throws ApiError
     */
    public static getDecisionDefinitionDmnXmlByKeyAndTenant(
        key: string,
        tenantId: string,
    ): CancelablePromise<DecisionDefinitionDiagramDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-definition/key/{key}/tenant-id/{tenant-id}/xml',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            errors: {
                404: `Decision definition with given key does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get XML By Key
     * Retrieves the XML for the latest version of the decision definition which belongs to no tenant.
     * @param key The key of the decision definition (the latest version thereof).
     * @returns DecisionDefinitionDiagramDto Request successful.
     * @throws ApiError
     */
    public static getDecisionDefinitionDmnXmlByKey(
        key: string,
    ): CancelablePromise<DecisionDefinitionDiagramDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-definition/key/{key}/xml',
            path: {
                'key': key,
            },
            errors: {
                404: `Decision definition with given key does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get Decision Definition By Id
     * Retrieves a decision definition by id, according to the `DecisionDefinition` interface in the engine.
     * @param id The id of the decision definition to be retrieved.
     * @returns DecisionDefinitionDto Request successful.
     * @throws ApiError
     */
    public static getDecisionDefinitionById(
        id: string,
    ): CancelablePromise<DecisionDefinitionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-definition/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Decision definition with given id does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get Diagram
     * Retrieves the diagram of a decision definition.
     * @param id The id of the process definition.
     * @returns binary Request successful. The image diagram of this process.
     * @throws ApiError
     */
    public static getDecisionDefinitionDiagram(
        id: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-definition/{id}/diagram',
            path: {
                'id': id,
            },
            errors: {
                404: `Decision definition with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Evaluate By Id
     * Evaluates a given decision and returns the result.
     * The input values of the decision have to be supplied in the request body.
     * @param id The id of the decision definition to be evaluated.
     * @param requestBody
     * @returns any Request successful.
     * @throws ApiError
     */
    public static evaluateDecisionById(
        id: string,
        requestBody?: EvaluateDecisionDto,
    ): CancelablePromise<Array<any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/decision-definition/{id}/evaluate',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Decision definition with given id does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Update History Time to Live
     * Updates history time to live for decision definition.
     * The field is used within [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup).
     * @param id The id of the decision definition to change history time to live.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateHistoryTimeToLiveByDecisionDefinitionId(
        id: string,
        requestBody?: HistoryTimeToLiveDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/decision-definition/{id}/history-time-to-live',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the request parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Decision definition with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get XML By Id
     * Retrieves the DMN XML of a decision definition.
     * @param id The id of the decision definition.
     * @returns DecisionDefinitionDiagramDto Request successful.
     * @throws ApiError
     */
    public static getDecisionDefinitionDmnXmlById(
        id: string,
    ): CancelablePromise<DecisionDefinitionDiagramDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-definition/{id}/xml',
            path: {
                'id': id,
            },
            errors: {
                404: `Decision definition with given id does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

}
