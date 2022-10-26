/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { ResourceOptionsDto } from '../models/ResourceOptionsDto';
import type { TenantDto } from '../models/TenantDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TenantService {

    /**
     * Get Tenants
     * Query for a list of tenants using a list of parameters. The size of the result set
     * can be retrieved by using the [Get Tenant
     * Count](https://docs.camunda.org/manual/7.18/reference/rest/tenant/get-query-count/) method.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param id Filter by the id of the tenant.
     * @param name Filter by the name of the tenant.
     * @param nameLike Filter by the name that the parameter is a substring of.
     * @param userMember Select only tenants where the given user is a member of.
     * @param groupMember Select only tenants where the given group is a member of.
     * @param includingGroupsOfUser Select only tenants where the user or one of his groups is a member of.
     * Can only be used in combination with the `userMember` parameter. Value may only be `true`,
     * as `false` is the default behavior.
     * @returns TenantDto Request successful.
     * @throws ApiError
     */
    public static queryTenants(
        sortBy?: 'id' | 'name',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
        id?: string,
        name?: string,
        nameLike?: string,
        userMember?: string,
        groupMember?: string,
        includingGroupsOfUser?: boolean,
    ): CancelablePromise<Array<TenantDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tenant',
            query: {
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
                'id': id,
                'name': name,
                'nameLike': nameLike,
                'userMember': userMember,
                'groupMember': groupMember,
                'includingGroupsOfUser': includingGroupsOfUser,
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
     * Tenant Resource Options
     * The `/tenant` resource supports two custom OPTIONS requests, this one for the resource
     * as such and one for individual tenant instances. The OPTIONS request
     * allows checking for the set of available operations that the currently
     * authenticated user can perform on the `/tenant` resource. If the user
     * can perform an operation or not may depend on various things,
     * including the users authorizations to interact with this resource and
     * the internal configuration of the process engine.
     * @returns ResourceOptionsDto Request successful.
     * @throws ApiError
     */
    public static availableTenantResourceOperations(): CancelablePromise<ResourceOptionsDto> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/tenant',
        });
    }

    /**
     * Get Tenant Count
     * Query for tenants using a list of parameters and retrieves the count.
     * @param id Filter by the id of the tenant.
     * @param name Filter by the name of the tenant.
     * @param nameLike Filter by the name that the parameter is a substring of.
     * @param userMember Select only tenants where the given user is a member of.
     * @param groupMember Select only tenants where the given group is a member of.
     * @param includingGroupsOfUser Select only tenants where the user or one of his groups is a member of.
     * Can only be used in combination with the `userMember` parameter. Value may only be `true`,
     * as `false` is the default behavior.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getTenantCount(
        id?: string,
        name?: string,
        nameLike?: string,
        userMember?: string,
        groupMember?: string,
        includingGroupsOfUser?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tenant/count',
            query: {
                'id': id,
                'name': name,
                'nameLike': nameLike,
                'userMember': userMember,
                'groupMember': groupMember,
                'includingGroupsOfUser': includingGroupsOfUser,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Create Tenant
     * Create a new tenant.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static createTenant(
        requestBody?: TenantDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tenant/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Identity service is read-only.`,
                500: `The tenant could not be created due to an internal server error. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Delete Tenant
     * Deletes a tenant by id.
     * @param id The id of the tenant to be deleted.
     * @returns void
     * @throws ApiError
     */
    public static deleteTenant(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/tenant/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Identity service is read-only.`,
                404: `Tenant cannot be found. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Tenant
     * Retrieves a tenant.
     * @param id The id of the tenant to be retrieved.
     * @returns TenantDto Request successful.
     * @throws ApiError
     */
    public static getTenant(
        id: string,
    ): CancelablePromise<TenantDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tenant/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Tenant with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Tenant Resource Options
     * The `/tenant` resource supports two custom OPTIONS requests, one for the resource as such and this one for
     * individual tenant instances. The OPTIONS request allows checking for the set of available operations that
     * the currently authenticated user can perform on the `/tenant/{id}` resource. If the user can perform an
     * operation or not may depend on various things, including the users authorizations to interact with this
     * resource and the internal configuration of the process engine.
     * @param id The id of the tenant
     * @returns ResourceOptionsDto Request successful.
     * @throws ApiError
     */
    public static availableTenantInstanceOperations(
        id: string,
    ): CancelablePromise<ResourceOptionsDto> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/tenant/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update Tenant
     * Updates a given tenant.
     * @param id The id of the tenant.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateTenant(
        id: string,
        requestBody?: TenantDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/tenant/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Identity service is read-only.`,
                404: `If the tenant with the requested Id cannot be found.`,
                500: `The tenant could not be updated due to an internal server error. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Tenant Group Membership Resource Options
     * The OPTIONS request allows checking for the set of available operations that the
     * currently authenticated user can perform on the resource. If the user
     * can perform an operation or not may depend on various things,
     * including the users authorizations to interact with this resource and
     * the internal configuration of the process engine.
     * @param id The id of the tenant
     * @returns ResourceOptionsDto Request successful.
     * @throws ApiError
     */
    public static availableTenantGroupMembersOperations(
        id: string,
    ): CancelablePromise<ResourceOptionsDto> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/tenant/{id}/group-members',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create Tenant Group Membership
     * Creates a membership between a tenant and a group.
     * @param id The id of the tenant.
     * @param groupId The id of the group.
     * @returns void
     * @throws ApiError
     */
    public static deleteGroupMembership(
        id: string,
        groupId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/tenant/{id}/group-members/{groupId}',
            path: {
                'id': id,
                'groupId': groupId,
            },
            errors: {
                403: `Identity service is read-only.`,
                500: `In case an internal error occurs. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Create Tenant Group Membership
     * Creates a membership between a tenant and a group.
     * @param id The id of the tenant.
     * @param groupId The id of the group.
     * @returns void
     * @throws ApiError
     */
    public static createGroupMembership(
        id: string,
        groupId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/tenant/{id}/group-members/{groupId}',
            path: {
                'id': id,
                'groupId': groupId,
            },
            errors: {
                403: `Identity service is read-only.`,
                500: `In case an internal error occurs. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Tenant User Membership Resource Options
     * The OPTIONS request allows checking for the set of available operations that the
     * currently authenticated user can perform on the resource. If the user
     * can perform an operation or not may depend on various things,
     * including the users authorizations to interact with this resource and
     * the internal configuration of the process engine.
     * @param id The id of the tenant
     * @returns ResourceOptionsDto Request successful.
     * @throws ApiError
     */
    public static availableTenantUserMembersOperations(
        id: string,
    ): CancelablePromise<ResourceOptionsDto> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/tenant/{id}/user-members',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Delete a Tenant User Membership
     * Deletes a membership between a tenant and an user.
     * @param id The id of the tenant.
     * @param userId The id of the user.
     * @returns void
     * @throws ApiError
     */
    public static deleteUserMembership(
        id: string,
        userId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/tenant/{id}/user-members/{userId}',
            path: {
                'id': id,
                'userId': userId,
            },
            errors: {
                403: `Identity service is read-only.`,
                500: `In case an error occurs. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Create Tenant User Membership
     * Creates a membership between a tenant and an user.
     * @param id The id of the tenant.
     * @param userId The id of the user.
     * @returns void
     * @throws ApiError
     */
    public static createUserMembership(
        id: string,
        userId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/tenant/{id}/user-members/{userId}',
            path: {
                'id': id,
                'userId': userId,
            },
            errors: {
                403: `Identity service is read-only.`,
                500: `In case an internal error occurs. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
