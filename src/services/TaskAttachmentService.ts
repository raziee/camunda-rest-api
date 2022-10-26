/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentDto } from '../models/AttachmentDto';
import type { MultiFormAttachmentDto } from '../models/MultiFormAttachmentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TaskAttachmentService {

    /**
     * Get List
     * Gets the attachments for a task.
     * @param id The id of the task to retrieve the attachments for.
     * @returns AttachmentDto Request successful.
     * @throws ApiError
     */
    public static getAttachments(
        id: string,
    ): CancelablePromise<Array<AttachmentDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/attachment',
            path: {
                'id': id,
            },
            errors: {
                404: `No task exists for the given task id. See the [Introduction](/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Create
     * Creates an attachment for a task.
     * @param id The id of the task to add the attachment to.
     * @param formData
     * @returns AttachmentDto Request successful.
     * @throws ApiError
     */
    public static addAttachment(
        id: string,
        formData?: MultiFormAttachmentDto,
    ): CancelablePromise<AttachmentDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/attachment/create',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `The task does not exists or task id is null. No content or url to remote content exists. See the
                [Introduction](/reference/rest/overview/#error-handling) for the error response format.`,
                403: `The history of the engine is disabled. See the [Introduction](/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Delete
     * Removes an attachment from a task by id.
     * @param id The id of the task.
     * @param attachmentId The id of the attachment to be removed.
     * @returns void
     * @throws ApiError
     */
    public static deleteAttachment(
        id: string,
        attachmentId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/task/{id}/attachment/{attachmentId}',
            path: {
                'id': id,
                'attachmentId': attachmentId,
            },
            errors: {
                403: `The history of the engine is disabled. See the [Introduction](/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `A Task Attachment for the given task id and attachment id does not exist. See the
                [Introduction](/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get
     * Retrieves a task attachment by task id and attachment id.
     * @param id The id of the task.
     * @param attachmentId The id of the attachment to be retrieved.
     * @returns AttachmentDto Request successful.
     * @throws ApiError
     */
    public static getAttachment(
        id: string,
        attachmentId: string,
    ): CancelablePromise<AttachmentDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/attachment/{attachmentId}',
            path: {
                'id': id,
                'attachmentId': attachmentId,
            },
            errors: {
                404: `The attachment for the given task and attachment id does not exist or the history of the engine is
                disabled.

                See the [Introduction](/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get (Binary)
     * Retrieves the binary content of a task attachment by task id and attachment id.
     * @param id The id of the task.
     * @param attachmentId The id of the attachment to be retrieved.
     * @returns binary Request successful.
     * @throws ApiError
     */
    public static getAttachmentData(
        id: string,
        attachmentId: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/attachment/{attachmentId}/data',
            path: {
                'id': id,
                'attachmentId': attachmentId,
            },
            errors: {
                404: `The attachment content for the given task id and attachment id does not exist, or the history of the
                engine is disabled.

                See the [Introduction](/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

}
