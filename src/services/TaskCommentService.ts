/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentDto } from '../models/CommentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TaskCommentService {

    /**
     * Get List
     * Gets the comments for a task by id.
     * @param id The id of the task to retrieve the comments for.
     * @returns CommentDto Request successful.
     * @throws ApiError
     */
    public static getComments(
        id: string,
    ): CancelablePromise<Array<CommentDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/comment',
            path: {
                'id': id,
            },
            errors: {
                404: `No task exists for the given task id. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Create
     * Creates a comment for a task by id.
     * @param id The id of the task to add the comment to.
     * @param requestBody **Note:** Only the `message` and `processInstanceId` properties will be used. Every other property passed to this endpoint will be ignored.
     * @returns CommentDto Request successful.
     * @throws ApiError
     */
    public static createComment(
        id: string,
        requestBody?: CommentDto,
    ): CancelablePromise<CommentDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/comment/create',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The task does not exist or no comment message was submitted. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                403: `The history of the engine is disabled. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get
     * Retrieves a task comment by task id and comment id.
     * @param id The id of the task.
     * @param commentId The id of the comment to be retrieved.
     * @returns CommentDto Request successful.
     * @throws ApiError
     */
    public static getComment(
        id: string,
        commentId: string,
    ): CancelablePromise<CommentDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/comment/{commentId}',
            path: {
                'id': id,
                'commentId': commentId,
            },
            errors: {
                404: `The task or comment with given task and comment id does not exist, or the history of
                the engine is disabled. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
