/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { GroupDto } from '../models/GroupDto';
import type { GroupQueryDto } from '../models/GroupQueryDto';
import type { ResourceOptionsDto } from '../models/ResourceOptionsDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GroupService {

    /**
     * Get List
     * Queries for a list of groups using a list of parameters. The size of the result set can be retrieved
     * by using the [Get Group Count](https://docs.camunda.org/manual/7.18/reference/rest/group/get-query-count) method.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param id Filter by the id of the group.
     * @param idIn Filter by a comma seperated list of group ids.
     * @param name Filter by the name of the group.
     * @param nameLike Filter by the name that the parameter is a substring of.
     * @param type Filter by the type of the group.
     * @param member Only retrieve groups where the given user id is a member of.
     * @param memberOfTenant Only retrieve groups which are members of the given tenant.
     * @returns GroupDto Request successful.
     * @throws ApiError
     */
    public static getQueryGroups(
        sortBy?: 'id' | 'name' | 'type',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
        id?: string,
        idIn?: string,
        name?: string,
        nameLike?: string,
        type?: string,
        member?: string,
        memberOfTenant?: string,
    ): CancelablePromise<Array<GroupDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/group',
            query: {
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
                'id': id,
                'idIn': idIn,
                'name': name,
                'nameLike': nameLike,
                'type': type,
                'member': member,
                'memberOfTenant': memberOfTenant,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\` parameter is supplied,
                but no \`sortBy\` is specified. See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Group Resource Options
     * The `/group` resource supports two custom OPTIONS requests, this one for the resource as such and one for
     * individual group instances. The OPTIONS request allows checking for the set of available operations that
     * the currently authenticated user can perform on the `/group` resource. If the user can perform an operation
     * or not may depend on various things, including the users authorizations to interact with this resource and
     * the internal configuration of the process engine.
     * @returns ResourceOptionsDto Request successful.
     * @throws ApiError
     */
    public static availableGroupOperations(): CancelablePromise<ResourceOptionsDto> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/group',
        });
    }

    /**
     * Get List (POST)
     * Queries for a list of groups using a list of parameters.
     * The size of the result set can be retrieved by using the
     * [Get Group Count (POST)](https://docs.camunda.org/manual/7.18/reference/rest/group/post-query-count/) method.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param requestBody
     * @returns GroupDto Request successful.
     * @throws ApiError
     */
    public static postQueryGroups(
        firstResult?: number,
        maxResults?: number,
        requestBody?: GroupQueryDto,
    ): CancelablePromise<Array<GroupDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/group',
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\` parameter is supplied,
                but no \`sortBy\` is specified. See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get List Count
     * Queries for groups using a list of parameters and retrieves the count.
     * @param id Filter by the id of the group.
     * @param idIn Filter by a comma seperated list of group ids.
     * @param name Filter by the name of the group.
     * @param nameLike Filter by the name that the parameter is a substring of.
     * @param type Filter by the type of the group.
     * @param member Only retrieve groups where the given user id is a member of.
     * @param memberOfTenant Only retrieve groups which are members of the given tenant.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getGroupCount(
        id?: string,
        idIn?: string,
        name?: string,
        nameLike?: string,
        type?: string,
        member?: string,
        memberOfTenant?: string,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/group/count',
            query: {
                'id': id,
                'idIn': idIn,
                'name': name,
                'nameLike': nameLike,
                'type': type,
                'member': member,
                'memberOfTenant': memberOfTenant,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response
                format.`,
            },
        });
    }

    /**
     * Get List Count (POST)
     * Queries for groups using a list of parameters and retrieves the count.
     * @param requestBody
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryGroupCount(
        requestBody?: GroupQueryDto,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/group/count',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response
                format.`,
            },
        });
    }

    /**
     * Create Group
     * Creates a new group.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static createGroup(
        requestBody?: GroupDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/group/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Identity service is read-only (Cannot modify users / groups / memberships).`,
                500: `The group could not be created due to an internal server error. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the
                error response format.`,
            },
        });
    }

    /**
     * Delete Group
     * Deletes a group by id.
     * @param id The id of the group to be deleted.
     * @returns void
     * @throws ApiError
     */
    public static deleteGroup(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/group/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Identity service is read-only (Cannot modify users / groups / memberships).`,
                404: `Group cannot be found. See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for
                the error response format.`,
            },
        });
    }

    /**
     * Get Group
     * Retrieves a group by id.
     * @param id The id of the group to be retrieved.
     * @returns GroupDto Request successful.
     * @throws ApiError
     */
    public static getGroup(
        id: string,
    ): CancelablePromise<GroupDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/group/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Group with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Group Resource Instance Options
     * The `/group` resource supports two custom OPTIONS requests, one for the resource as such and this one for individual group instances.
     * The OPTIONS request allows checking for the set of available operations that the currently authenticated user can perform on the
     * `/group/{id}` resource instance. If the user can perform an operation or not may depend on various things, including the users authorizations
     * to interact with this resource and the internal configuration of the process engine.
     * @param id The id of the group.
     * @returns ResourceOptionsDto Request successful.
     * @throws ApiError
     */
    public static availableGroupInstanceOperations(
        id: string,
    ): CancelablePromise<ResourceOptionsDto> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/group/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update Group
     * Updates a given group by id.
     * @param id The id of the group.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateGroup(
        id: string,
        requestBody?: GroupDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/group/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Identity service is read-only (Cannot modify users / groups / memberships).`,
                404: `If the group with the requested Id cannot be found.`,
                500: `The group could not be updated due to an internal server error.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error
                response format.`,
            },
        });
    }

    /**
     * Group Membership Resource Options
     * The OPTIONS request allows checking for the set of available operations that the currently authenticated
     * user can perform on the resource. If the user can perform an operation or not may depend on various
     * things, including the users authorizations to interact with this resource and the internal configuration
     * of the process engine.
     * @param id The id of the group.
     * @returns ResourceOptionsDto Request successful.
     * @throws ApiError
     */
    public static availableGroupMembersOperations(
        id: string,
    ): CancelablePromise<ResourceOptionsDto> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/group/{id}/members',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Delete a Group Member
     * Removes a member from a group.
     * @param id The id of the group.
     * @param userId The id of user to remove from the group.
     * @returns void
     * @throws ApiError
     */
    public static deleteGroupMember(
        id: string,
        userId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/group/{id}/members/{userId}',
            path: {
                'id': id,
                'userId': userId,
            },
            errors: {
                403: `Identity service is read-only (Cannot modify users / groups / memberships).`,
                500: `In case an error occurs. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Create Group Member
     * Adds a member to a group.
     * @param id The id of the group.
     * @param userId The id of user to add to the group.
     * @returns void
     * @throws ApiError
     */
    public static createGroupMember(
        id: string,
        userId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/group/{id}/members/{userId}',
            path: {
                'id': id,
                'userId': userId,
            },
            errors: {
                403: `Identity service is read-only (Cannot modify users / groups / memberships).`,
                500: `In case an internal error occurs. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
