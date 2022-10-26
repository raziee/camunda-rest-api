/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityLinkDto } from '../models/IdentityLinkDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TaskIdentityLinkService {

    /**
     * Get List
     * Gets the identity links for a task by id, which are the users and groups that are in
     * *some* relation to it (including assignee and owner).
     * @param id The id of the task to retrieve the identity links for.
     * @param type Filter by the type of links to include.
     * @returns IdentityLinkDto Request successful.
     * @throws ApiError
     */
    public static getIdentityLinks(
        id: string,
        type?: string,
    ): CancelablePromise<Array<IdentityLinkDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/identity-links',
            path: {
                'id': id,
            },
            query: {
                'type': type,
            },
            errors: {
                400: `Task with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Add
     * Adds an identity link to a task by id. Can be used to link any user or group to a task
     * and specify a relation.
     * @param id The id of the task to add a link to.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static addIdentityLink(
        id: string,
        requestBody?: IdentityLinkDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/identity-links',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Task with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Delete
     * Removes an identity link from a task by id
     * @param id The id of the task to remove a link from.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static deleteIdentityLink(
        id: string,
        requestBody?: IdentityLinkDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/identity-links/delete',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Task with given id does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for
                the error response format.`,
            },
        });
    }

}
