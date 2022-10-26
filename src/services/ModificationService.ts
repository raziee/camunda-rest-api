/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchDto } from '../models/BatchDto';
import type { ModificationDto } from '../models/ModificationDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModificationService {

    /**
     * Execute Modification
     * Executes a modification synchronously for multiple process instances.
     * To modify a single process instance, use the
     * [Modify Process Instance Execution State](https://docs.camunda.org/manual/7.18/reference/rest/process-instance/post-modification/) method.
     * To execute a modification asynchronously, use the
     * [Execute Modification Async (Batch)](https://docs.camunda.org/manual/7.18/reference/rest/modification/post-modification-async/) method.
     *
     * For more information about the difference between synchronous and
     * asynchronous execution of a modification, please refer to the related
     * section of the
     * [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/process-instance-migration.md#executing-a-migration-plan).
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static executeModification(
        requestBody?: ModificationDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/modification/execute',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `
                In case following parameters are missing: instructions,
                processDefinitionId, activityId or transitionId, processInstanceIds
                or processInstanceQuery, an exception of type
                \`InvalidRequestException\` is returned. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Execute Modification Async (Batch)
     * Executes a modification asynchronously for multiple process instances. To execute a
     * modification synchronously, use the
     * [Execute Modification](https://docs.camunda.org/manual/7.18/reference/rest/modification/post-modification-sync/) method.
     *
     * For more information about the difference between synchronous and
     * asynchronous execution of a modification, please refer to the related
     * section of the
     * [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/process-instance-migration.md#executing-a-migration-plan).
     * @param requestBody
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static executeModificationAsync(
        requestBody?: ModificationDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/modification/executeAsync',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `
                In case following parameters are missing: instructions,
                processDefinitionId, activityId or transitionId, processInstanceIds
                or processInstanceQuery, an exception of type
                \`InvalidRequestException\` is returned. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

}
