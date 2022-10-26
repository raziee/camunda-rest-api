/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthorizationCheckResultDto } from '../models/AuthorizationCheckResultDto';
import type { AuthorizationCreateDto } from '../models/AuthorizationCreateDto';
import type { AuthorizationDto } from '../models/AuthorizationDto';
import type { AuthorizationUpdateDto } from '../models/AuthorizationUpdateDto';
import type { CountResultDto } from '../models/CountResultDto';
import type { ResourceOptionsDto } from '../models/ResourceOptionsDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthorizationService {

    /**
     * Get Authorizations
     * Queries for a list of authorizations using a list of parameters.
     * The size of the result set can be retrieved by using the
     * [Get Authorization Count](https://docs.camunda.org/manual/7.18/reference/rest/authorization/get-query-count/) method.
     * @param id Filter by the id of the authorization.
     * @param type Filter by authorization type. (0=global, 1=grant, 2=revoke).
     * See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/authorization-service/#authorization-type)
     * for more information about authorization types.
     * @param userIdIn Filter by a comma-separated list of userIds.
     * @param groupIdIn Filter by a comma-separated list of groupIds.
     * @param resourceType Filter by an integer representation of the resource type. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/authorization-service/#resources)
     * for a list of integer representations of resource types.
     * @param resourceId Filter by resource id.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns AuthorizationDto Request successful.
     * @throws ApiError
     */
    public static queryAuthorizations(
        id?: string,
        type?: number,
        userIdIn?: string,
        groupIdIn?: string,
        resourceType?: number,
        resourceId?: string,
        sortBy?: 'resourceType' | 'resourceId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<AuthorizationDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authorization',
            query: {
                'id': id,
                'type': type,
                'userIdIn': userIdIn,
                'groupIdIn': groupIdIn,
                'resourceType': resourceType,
                'resourceId': resourceId,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\`
                parameter is supplied, but no \`sortBy\` is specified. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Authorization Resource Options
     * The OPTIONS request allows you to check for the set of available operations that the currently
     * authenticated user can perform on the `/authorization` resource. Whether the user can perform an operation
     * or not may depend on various factors, including the users authorizations to interact with this
     * resource and the internal configuration of the process engine.
     * @returns ResourceOptionsDto Request successful.
     * @throws ApiError
     */
    public static availableOperationsAuthorization(): CancelablePromise<ResourceOptionsDto> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/authorization',
        });
    }

    /**
     * Perform an Authorization Check
     * Performs an authorization check for the currently authenticated user.
     * @param permissionName String value representing the permission name to check for.
     * @param resourceName String value for the name of the resource to check permissions for.
     * @param resourceType An integer representing the resource type to check permissions for.
     * See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/authorization-service/#resources)
     * for a list of integer representations of resource types.
     * @param resourceId The id of the resource to check permissions for. If left blank,
     * a check for global permissions on the resource is performed.
     * @param userId The id of the user to check permissions for. The currently authenticated
     * user must have a READ permission for the Authorization resource. If `userId` is
     * blank, a check for the currently authenticated user is performed.
     * @returns AuthorizationCheckResultDto Request successful.
     * @throws ApiError
     */
    public static isUserAuthorized(
        permissionName: string,
        resourceName: string,
        resourceType: number,
        resourceId?: string,
        userId?: string,
    ): CancelablePromise<AuthorizationCheckResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authorization/check',
            query: {
                'permissionName': permissionName,
                'resourceName': resourceName,
                'resourceType': resourceType,
                'resourceId': resourceId,
                'userId': userId,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a permission
                parameterName is not valid for the provided resourceType. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                401: `The user is not authenticated. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                403: `When a \`userId\` is passed and the user does not possess a READ permission for the
                Authorization resource. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Authorization with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Authorization Count
     * Queries for authorizations using a list of parameters and retrieves the count.
     * @param id Filter by the id of the authorization.
     * @param type Filter by authorization type. (0=global, 1=grant, 2=revoke).
     * See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/authorization-service/#authorization-type)
     * for more information about authorization types.
     * @param userIdIn Filter by a comma-separated list of userIds.
     * @param groupIdIn Filter by a comma-separated list of groupIds.
     * @param resourceType Filter by an integer representation of the resource type. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/authorization-service/#resources)
     * for a list of integer representations of resource types.
     * @param resourceId Filter by resource id.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getAuthorizationCount(
        id?: string,
        type?: number,
        userIdIn?: string,
        groupIdIn?: string,
        resourceType?: number,
        resourceId?: string,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authorization/count',
            query: {
                'id': id,
                'type': type,
                'userIdIn': userIdIn,
                'groupIdIn': groupIdIn,
                'resourceType': resourceType,
                'resourceId': resourceId,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\`
                parameter is supplied, but no \`sortBy\` is specified. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Create a New Authorization
     * Creates a new authorization.
     * @param requestBody
     * @returns AuthorizationDto Request successful.
     * @throws ApiError
     */
    public static createAuthorization(
        requestBody?: AuthorizationCreateDto,
    ): CancelablePromise<AuthorizationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/authorization/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the properties in the request body are invalid, for example if
                a permission parameter is not valid for the provided resourceType.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                403: `The authenticated user is unauthorized to create an instance of this resource. See
                the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
                500: `The authorization could not be updated due to an internal server error. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Delete Authorization
     * Deletes an authorization by id.
     * @param id The id of the authorization to be deleted.
     * @returns void
     * @throws ApiError
     */
    public static deleteAuthorization(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authorization/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `If the authenticated user is unauthorized to delete the resource instance. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Authorization cannot be found. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Authorization
     * Retrieves an authorization by id.
     * @param id The id of the authorization to be retrieved.
     * @returns AuthorizationDto Request successful.
     * @throws ApiError
     */
    public static getAuthorization(
        id: string,
    ): CancelablePromise<AuthorizationDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authorization/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Authorization with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Authorization Resource Options
     * The OPTIONS request allows you to check for the set of available operations that the currently
     * authenticated user can perform on a given instance of the `/authorization` resource.
     * Whether the user can perform an operation or not may depend on various factors, including the users
     * authorizations to interact with this resource and the internal configuration of the process engine.
     * @param id The id of the authorization to be retrieved.
     * @returns ResourceOptionsDto Request successful.
     * @throws ApiError
     */
    public static availableOperationsAuthorizationInstance(
        id: string,
    ): CancelablePromise<ResourceOptionsDto> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/authorization/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update an Authorization
     * Updates an authorization by id.
     * @param id The id of the authorization to be updated.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateAuthorization(
        id: string,
        requestBody?: AuthorizationUpdateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/authorization/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the properties in the request body are invalid, for example if
                a permission parameter is not valid for the provided resourceType.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                403: `The authenticated user is unauthorized to update this resource. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `The authorization with the requested Id cannot be found.`,
                500: `The authorization could not be updated due to an internal server error. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
