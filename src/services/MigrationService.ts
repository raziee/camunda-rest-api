/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchDto } from '../models/BatchDto';
import type { MigrationExecutionDto } from '../models/MigrationExecutionDto';
import type { MigrationPlanDto } from '../models/MigrationPlanDto';
import type { MigrationPlanGenerationDto } from '../models/MigrationPlanGenerationDto';
import type { MigrationPlanReportDto } from '../models/MigrationPlanReportDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MigrationService {

    /**
     * Execute Migration Plan
     * Executes a migration plan synchronously for multiple process instances. To execute
     * a migration plan asynchronously, use the
     * [Execute Migration Plan Async(Batch)](https://docs.camunda.org/manual/7.18/reference/rest/migration/execute-migration-async/)
     * method.
     *
     * For more information about the difference between synchronous and asynchronous
     * execution of a migration plan, please refer to the related section of
     * [the user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/process-instance-migration/#executing-a-migration-plan).
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static executeMigrationPlan(
        requestBody?: MigrationExecutionDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/migration/execute',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request is not valid if one or more of the following statements apply:

                 * The provided migration plan is not valid, so an exception of type
                \`MigrationPlanValidationException\` is returned.
                 * The provided migration plan is not valid for a specific process
                instance it is applied to, so an exception of type
                \`MigratingProcessInstanceValidationException\` is returned.
                 * In case additional parameters of the request are unexpected, an
                exception of type \`InvalidRequestException\` is returned.

                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Execute Migration Plan Async (Batch)
     * Executes a migration plan asynchronously (batch) for multiple process instances.
     * To execute a migration plan synchronously, use the
     * [Execute MigrationPlan](https://docs.camunda.org/manual/7.18/reference/rest/migration/execute-migration/)
     * method.
     *
     * For more information about the difference between synchronous and asynchronous
     * execution of a migration plan, please refer to the related section of
     * [the user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/process-instance-migration/#executing-a-migration-plan).
     * @param requestBody
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static executeMigrationPlanAsync(
        requestBody?: MigrationExecutionDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/migration/executeAsync',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request is not valid if one or more of the following statements apply:

                 * The provided migration plan is not valid, so an exception of type
                \`MigrationPlanValidationException\` is returned.
                 * In case additional parameters of the request are unexpected, an
                exception of type \`InvalidRequestException\` is returned.

                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Generate Migration Plan
     * Generates a migration plan for two process definitions. The generated migration
     * plan contains migration instructions which map equal activities
     * between the
     * two process definitions.
     * @param requestBody
     * @returns MigrationPlanDto Request successful.
     * @throws ApiError
     */
    public static generateMigrationPlan(
        requestBody?: MigrationPlanGenerationDto,
    ): CancelablePromise<MigrationPlanDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/migration/generate',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `
                The requested migration was invalid. See
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Validate Migration Plan
     * Validates a migration plan statically without executing it. This
     * corresponds to the
     * [creation time validation](https://docs.camunda.org/manual/7.18/user-guide/process-engine/process-instance-migration/#creation-time-validation)
     * described in the user guide.
     * @param requestBody
     * @returns MigrationPlanReportDto Request successful. The validation report was returned.
     * @throws ApiError
     */
    public static validateMigrationPlan(
        requestBody?: MigrationPlanDto,
    ): CancelablePromise<MigrationPlanReportDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/migration/validate',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `In case additional parameters of the request are unexpected, an
                exception of type \`InvalidRequestException\` is returned. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
