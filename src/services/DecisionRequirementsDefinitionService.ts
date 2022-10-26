/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { DecisionRequirementsDefinitionDto } from '../models/DecisionRequirementsDefinitionDto';
import type { DecisionRequirementsDefinitionXmlDto } from '../models/DecisionRequirementsDefinitionXmlDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DecisionRequirementsDefinitionService {

    /**
     * Get Decision Requirements Definitions
     * Queries for decision requirements definitions that fulfill given parameters.
     * Parameters may be the properties of decision requirements definitions, such as the name,
     * key or version.  The size of the result set can be retrieved by using the
     * [Get Decision Requirements Definition Count](https://docs.camunda.org/manual/7.18/reference/rest/decision-requirements-definition/get-query-count/)
     * method.
     * @param decisionRequirementsDefinitionId Filter by decision requirements definition id.
     * @param decisionRequirementsDefinitionIdIn Filter by decision requirements definition ids.
     * @param name Filter by decision requirements definition name.
     * @param nameLike Filter by decision requirements definition names that the parameter is a substring of.
     * @param deploymentId Filter by the id of the deployment a decision requirement definition belongs to.
     * @param key Filter by decision requirements definition key, i.e., the id in the DMN 1.3 XML. Exact
     * match.
     * @param keyLike Filter by decision requirements definition keys that the parameter is a substring of.
     * @param category Filter by decision requirements definition category. Exact match.
     * @param categoryLike Filter by decision requirements definition categories that the parameter is a substring
     * of.
     * @param version Filter by decision requirements definition version.
     * @param latestVersion Only include those decision requirements definitions that are latest versions. Value may
     * only be `true`, as `false` is the default behavior.
     * @param resourceName Filter by the name of the decision requirements definition resource. Exact match.
     * @param resourceNameLike Filter by names of those decision requirements definition resources that the parameter is
     * a substring of.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A decision requirements definition must
     * have one of the given tenant ids.
     * @param withoutTenantId Only include decision requirements definitions which belong to no tenant. Value may only
     * be `true`, as `false` is the default behavior.
     * @param includeDecisionRequirementsDefinitionsWithoutTenantId Include decision requirements definitions which belong to no tenant. Can be used in
     * combination with `tenantIdIn`. Value may only be `true`, as `false` is the
     * default behavior.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns DecisionRequirementsDefinitionDto Request successful.
     * @throws ApiError
     */
    public static getDecisionRequirementsDefinitions(
        decisionRequirementsDefinitionId?: string,
        decisionRequirementsDefinitionIdIn?: string,
        name?: string,
        nameLike?: string,
        deploymentId?: string,
        key?: string,
        keyLike?: string,
        category?: string,
        categoryLike?: string,
        version?: number,
        latestVersion?: boolean,
        resourceName?: string,
        resourceNameLike?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        includeDecisionRequirementsDefinitionsWithoutTenantId?: boolean,
        sortBy?: 'id' | 'key' | 'name' | 'version' | 'deploymentId' | 'category' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<DecisionRequirementsDefinitionDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-requirements-definition',
            query: {
                'decisionRequirementsDefinitionId': decisionRequirementsDefinitionId,
                'decisionRequirementsDefinitionIdIn': decisionRequirementsDefinitionIdIn,
                'name': name,
                'nameLike': nameLike,
                'deploymentId': deploymentId,
                'key': key,
                'keyLike': keyLike,
                'category': category,
                'categoryLike': categoryLike,
                'version': version,
                'latestVersion': latestVersion,
                'resourceName': resourceName,
                'resourceNameLike': resourceNameLike,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'includeDecisionRequirementsDefinitionsWithoutTenantId': includeDecisionRequirementsDefinitionsWithoutTenantId,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if
                a \`sortOrder\` parameter is supplied, but no \`sortBy\`. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Decision Requirements Definition Count
     * Requests the number of decision requirements definitions that fulfill the query
     * criteria.
     * Takes the same filtering parameters as the
     * [Get Decision Requirements Definitions](https://docs.camunda.org/manual/7.18/reference/rest/decision-requirements-definition/get-query/)
     * method.
     * @param decisionRequirementsDefinitionId Filter by decision requirements definition id.
     * @param decisionRequirementsDefinitionIdIn Filter by decision requirements definition ids.
     * @param name Filter by decision requirements definition name.
     * @param nameLike Filter by decision requirements definition names that the parameter is a substring of.
     * @param deploymentId Filter by the id of the deployment a decision requirement definition belongs to.
     * @param key Filter by decision requirements definition key, i.e., the id in the DMN 1.3 XML. Exact
     * match.
     * @param keyLike Filter by decision requirements definition keys that the parameter is a substring of.
     * @param category Filter by decision requirements definition category. Exact match.
     * @param categoryLike Filter by decision requirements definition categories that the parameter is a substring
     * of.
     * @param version Filter by decision requirements definition version.
     * @param latestVersion Only include those decision requirements definitions that are latest versions. Value may
     * only be `true`, as `false` is the default behavior.
     * @param resourceName Filter by the name of the decision requirements definition resource. Exact match.
     * @param resourceNameLike Filter by names of those decision requirements definition resources that the parameter is
     * a substring of.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A decision requirements definition must
     * have one of the given tenant ids.
     * @param withoutTenantId Only include decision requirements definitions which belong to no tenant. Value may only
     * be `true`, as `false` is the default behavior.
     * @param includeDecisionRequirementsDefinitionsWithoutTenantId Include decision requirements definitions which belong to no tenant. Can be used in
     * combination with `tenantIdIn`. Value may only be `true`, as `false` is the
     * default behavior.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getDecisionRequirementsDefinitionsCount(
        decisionRequirementsDefinitionId?: string,
        decisionRequirementsDefinitionIdIn?: string,
        name?: string,
        nameLike?: string,
        deploymentId?: string,
        key?: string,
        keyLike?: string,
        category?: string,
        categoryLike?: string,
        version?: number,
        latestVersion?: boolean,
        resourceName?: string,
        resourceNameLike?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        includeDecisionRequirementsDefinitionsWithoutTenantId?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-requirements-definition/count',
            query: {
                'decisionRequirementsDefinitionId': decisionRequirementsDefinitionId,
                'decisionRequirementsDefinitionIdIn': decisionRequirementsDefinitionIdIn,
                'name': name,
                'nameLike': nameLike,
                'deploymentId': deploymentId,
                'key': key,
                'keyLike': keyLike,
                'category': category,
                'categoryLike': categoryLike,
                'version': version,
                'latestVersion': latestVersion,
                'resourceName': resourceName,
                'resourceNameLike': resourceNameLike,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'includeDecisionRequirementsDefinitionsWithoutTenantId': includeDecisionRequirementsDefinitionsWithoutTenantId,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if
                a \`sortOrder\` parameter is supplied, but no \`sortBy\`. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Decision Requirements Definition by Key
     * Retrieves a decision requirements definition according to the
     * `DecisionRequirementsDefinition` interface in the engine.
     * Returns the latest version of the decision requirements definition
     * which belongs to no tenant.
     * @param key The key of the decision requirements definition (the latest version thereof) to be retrieved.
     * @returns DecisionRequirementsDefinitionDto Request successful.
     * @throws ApiError
     */
    public static getDecisionRequirementsDefinitionByKey(
        key: string,
    ): CancelablePromise<DecisionRequirementsDefinitionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-requirements-definition/key/{key}',
            path: {
                'key': key,
            },
            errors: {
                404: `Decision requirements definition with given id or key does not
                exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Decision Requirements Diagram by Key
     * Retrieves the diagram of a decision requirements definition.
     * Returns the diagram for the latest version of the decision requirements
     * definition which belongs to no tenant.
     * @param key The key of the decision requirements definition (the latest version thereof) to be
     * retrieved.
     * @returns binary The image diagram of the decision requirements definition.
     * @throws ApiError
     */
    public static getDecisionRequirementsDefinitionDiagramByKey(
        key: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-requirements-definition/key/{key}/diagram',
            path: {
                'key': key,
            },
            errors: {
                404: `Decision requirements definition with given id or key does not
                exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Decision Requirements Definition by Key and Tenant ID
     * Retrieves a decision requirements definition according to the
     * `DecisionRequirementsDefinition` interface in the engine.
     * Returns the latest version of the decision requirements definition
     * for a tenant.
     * @param key The key of the decision requirements definition (the latest version thereof) to be retrieved.
     * @param tenantId The id of the tenant to which the decision requirements definition belongs to.
     * @returns DecisionRequirementsDefinitionDto Request successful.
     * @throws ApiError
     */
    public static getDecisionRequirementsDefinitionByKeyAndTenantId(
        key: string,
        tenantId: string,
    ): CancelablePromise<DecisionRequirementsDefinitionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-requirements-definition/key/{key}/tenant-id/{tenant-id}',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            errors: {
                404: `Decision requirements definition with given id or key does not
                exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Decision Requirements Diagram by Key and Tenant ID
     * Retrieves the diagram of a decision requirements definition.
     * Returns the diagram of the latest version of the decision requirements
     * definition for a tenant.
     * @param key The key of the decision requirements definition (the latest version thereof) to be
     * retrieved.
     * @param tenantId The id of the tenant to which the decision requirements definition belongs to.
     * @returns binary The image diagram of the decision requirements definition.
     * @throws ApiError
     */
    public static getDecisionRequirementsDefinitionDiagramByKeyAndTenantId(
        key: string,
        tenantId: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-requirements-definition/key/{key}/tenant-id/{tenant-id}/diagram',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            errors: {
                404: `Decision requirements definition with given id or key does not
                exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get DMN XML by Key and Tenant ID
     * Retrieves the DMN XML of a decision requirements definition.
     * Returns the XML of the latest version of the decision requirements
     * definition for a tenant.
     * @param key The key of the decision requirements definition (the latest version thereof) to be
     * retrieved.
     * @param tenantId The id of the tenant to which the decision requirements definition belongs to.
     * @returns DecisionRequirementsDefinitionXmlDto Request successful.
     * @throws ApiError
     */
    public static getDecisionRequirementsDefinitionDmnXmlByKeyAndTenantId(
        key: string,
        tenantId: string,
    ): CancelablePromise<DecisionRequirementsDefinitionXmlDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-requirements-definition/key/{key}/tenant-id/{tenant-id}/xml',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            errors: {
                404: `
                Decision requirements definition with given id or key does not
                exist.
                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Get DMN XML by Key
     * Retrieves the DMN XML of a decision requirements definition.
     * Returns the XML for the latest version of the decision requirements
     * definition which belongs to no tenant.
     * @param key The key of the decision requirements definition (the latest version thereof) to be
     * retrieved.
     * @returns DecisionRequirementsDefinitionXmlDto Request successful.
     * @throws ApiError
     */
    public static getDecisionRequirementsDefinitionDmnXmlByKey(
        key: string,
    ): CancelablePromise<DecisionRequirementsDefinitionXmlDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-requirements-definition/key/{key}/xml',
            path: {
                'key': key,
            },
            errors: {
                404: `
                Decision requirements definition with given id or key does not
                exist.
                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Get Decision Requirements Definition by ID
     * Retrieves a decision requirements definition according to the
     * `DecisionRequirementsDefinition` interface in the engine.
     * @param id The id of the decision requirements definition to be retrieved.
     * @returns DecisionRequirementsDefinitionDto Request successful.
     * @throws ApiError
     */
    public static getDecisionRequirementsDefinitionById(
        id: string,
    ): CancelablePromise<DecisionRequirementsDefinitionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-requirements-definition/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Decision requirements definition with given id or key does not
                exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Decision Requirements Diagram by ID
     * Retrieves the diagram of a decision requirements definition.
     * @param id The id of the decision requirements definition.
     * @returns binary The image diagram of the decision requirements definition.
     * @throws ApiError
     */
    public static getDecisionRequirementsDefinitionDiagramById(
        id: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-requirements-definition/{id}/diagram',
            path: {
                'id': id,
            },
            errors: {
                404: `Decision requirements definition with given id or key does not
                exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get DMN XML by ID
     * Retrieves the DMN XML of a decision requirements definition.
     * @param id The id of the decision requirements definition.
     * @returns DecisionRequirementsDefinitionXmlDto Request successful.
     * @throws ApiError
     */
    public static getDecisionRequirementsDefinitionDmnXmlById(
        id: string,
    ): CancelablePromise<DecisionRequirementsDefinitionXmlDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/decision-requirements-definition/{id}/xml',
            path: {
                'id': id,
            },
            errors: {
                404: `Decision requirements definition with given id or key does not
                exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
