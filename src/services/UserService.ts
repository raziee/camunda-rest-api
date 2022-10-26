/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { ResourceOptionsDto } from '../models/ResourceOptionsDto';
import type { UserCredentialsDto } from '../models/UserCredentialsDto';
import type { UserDto } from '../models/UserDto';
import type { UserProfileDto } from '../models/UserProfileDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Get List
     * Query for a list of users using a list of parameters.
     * The size of the result set can be retrieved by using the Get User Count method.
     * [Get User Count](https://docs.camunda.org/manual/7.18/reference/rest/user/get-query-count/) method.
     * @param id Filter by user id
     * @param idIn Filter by a comma-separated list of user ids.
     * @param firstName Filter by the first name of the user. Exact match.
     * @param firstNameLike Filter by the first name that the parameter is a substring of.
     * @param lastName Filter by the last name of the user. Exact match.
     * @param lastNameLike Filter by the last name that the parameter is a substring of.
     * @param email Filter by the email of the user. Exact match.
     * @param emailLike Filter by the email that the parameter is a substring of.
     * @param memberOfGroup Filter for users which are members of the given group.
     * @param memberOfTenant Filter for users which are members of the given tenant.
     * @param potentialStarter Only select Users that are potential starter for the given process definition.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns UserProfileDto Request successful.
     * @throws ApiError
     */
    public static getUsers(
        id?: string,
        idIn?: string,
        firstName?: string,
        firstNameLike?: string,
        lastName?: string,
        lastNameLike?: string,
        email?: string,
        emailLike?: string,
        memberOfGroup?: string,
        memberOfTenant?: string,
        potentialStarter?: string,
        sortBy?: 'userId' | 'firstName' | 'lastName' | 'email',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<UserProfileDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user',
            query: {
                'id': id,
                'idIn': idIn,
                'firstName': firstName,
                'firstNameLike': firstNameLike,
                'lastName': lastName,
                'lastNameLike': lastNameLike,
                'email': email,
                'emailLike': emailLike,
                'memberOfGroup': memberOfGroup,
                'memberOfTenant': memberOfTenant,
                'potentialStarter': potentialStarter,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\` parameter is supplied,
                but no \`sortBy\`, or if an invalid operator for variable comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Options
     * The `/user` resource supports two custom `OPTIONS` requests, one for the resource as such
     * and one for individual user instances. The `OPTIONS` request allows checking for the set of
     * available operations that the currently authenticated user can perform on the /user resource.
     * If the user can perform an operation or not may depend on various things, including the user's
     * authorizations to interact with this resource and the internal configuration of the process
     * engine. `OPTIONS /user` returns available interactions on the resource.
     * @returns ResourceOptionsDto Request successful.
     * @throws ApiError
     */
    public static availableOperations(): CancelablePromise<ResourceOptionsDto> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/user',
        });
    }

    /**
     * Get List Count
     * Queries for the number of deployments that fulfill given parameters. Takes the same parameters as the
     * [Get Users](https://docs.camunda.org/manual/7.18/reference/rest/user/get-query/) method.
     * @param id Filter by user id
     * @param idIn Filter by a comma-separated list of user ids.
     * @param firstName Filter by the first name of the user. Exact match.
     * @param firstNameLike Filter by the first name that the parameter is a substring of.
     * @param lastName Filter by the last name of the user. Exact match.
     * @param lastNameLike Filter by the last name that the parameter is a substring of.
     * @param email Filter by the email of the user. Exact match.
     * @param emailLike Filter by the email that the parameter is a substring of.
     * @param memberOfGroup Filter for users which are members of the given group.
     * @param memberOfTenant Filter for users which are members of the given tenant.
     * @param potentialStarter Only select Users that are potential starter for the given process definition.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getUserCount(
        id?: string,
        idIn?: string,
        firstName?: string,
        firstNameLike?: string,
        lastName?: string,
        lastNameLike?: string,
        email?: string,
        emailLike?: string,
        memberOfGroup?: string,
        memberOfTenant?: string,
        potentialStarter?: string,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/count',
            query: {
                'id': id,
                'idIn': idIn,
                'firstName': firstName,
                'firstNameLike': firstNameLike,
                'lastName': lastName,
                'lastNameLike': lastNameLike,
                'email': email,
                'emailLike': emailLike,
                'memberOfGroup': memberOfGroup,
                'memberOfTenant': memberOfTenant,
                'potentialStarter': potentialStarter,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example, if an invalid operator for variable
                comparison is used. See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Create
     * Create a new user.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static createUser(
        requestBody?: UserDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete
     * Deletes a user by id.
     * @param id The id of the user to be deleted.
     * @returns void
     * @throws ApiError
     */
    public static deleteUser(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Identity service is read-only (Cannot modify users / groups / memberships).`,
                404: `A Deployment with the provided id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Options
     * The `/user` resource supports two custom `OPTIONS` requests, one for the resource as such
     * and one for individual user instances. The `OPTIONS` request allows checking for the set of
     * available operations that the currently authenticated user can perform on the /user resource.
     * If the user can perform an operation or not may depend on various things, including the user's
     * authorizations to interact with this resource and the internal configuration of the process
     * engine. `OPTIONS /user/{id}` returns available interactions on a resource instance.
     * @param id The id of the user to be deleted.
     * @returns ResourceOptionsDto Request successful.
     * @throws ApiError
     */
    public static availableUserOperations(
        id: string,
    ): CancelablePromise<ResourceOptionsDto> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/user/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update Credentials
     * Updates a user's credentials (password)
     * @param id The id of the user to be updated.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateCredentials(
        id: string,
        requestBody?: UserCredentialsDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/{id}/credentials',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The authenticated user password does not match`,
                403: `Identity service is read-only (Cannot modify users / groups / memberships).`,
                404: `If the corresponding user cannot be found`,
                500: `The user could not be updated due to an internal server error. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Profile
     * Retrieves a user's profile.
     * @param id The id of the user to retrieve.
     * @returns UserProfileDto Request successful.
     * @throws ApiError
     */
    public static getUserProfile(
        id: string,
    ): CancelablePromise<UserProfileDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{id}/profile',
            path: {
                'id': id,
            },
            errors: {
                404: `Execution with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Update User Profile
     * Updates the profile information of an already existing user.
     * @param id The id of the user.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateProfile(
        id: string,
        requestBody?: UserProfileDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/{id}/profile',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Identity service is read-only (Cannot modify users / groups / memberships).`,
                404: `If the user with the requested Id cannot be found.`,
                500: `The user could not be updated due to an internal server error. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Unlock User
     * Unlocks a user by id.
     * @param id The id of the user to be unlocked.
     * @returns void
     * @throws ApiError
     */
    public static unlockUser(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/{id}/unlock',
            path: {
                'id': id,
            },
            errors: {
                403: `The user who performed the operation is not a Camunda admin user.`,
                404: `User cannot be found. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
