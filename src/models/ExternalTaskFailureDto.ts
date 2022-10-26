/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HandleExternalTaskDto } from './HandleExternalTaskDto';
import type { VariableValueDto } from './VariableValueDto';

export type ExternalTaskFailureDto = ({
    /**
     * An message indicating the reason of the failure.
     */
    errorMessage?: string | null;
    /**
     * A detailed error description.
     */
    errorDetails?: string | null;
    /**
     * A number of how often the task should be retried. Must be >= 0. If this is 0, an incident is created and
     * the task cannot be fetched anymore unless the retries are increased again. The incident's message is set
     * to the `errorMessage` parameter.
     */
    retries?: number | null;
    /**
     * A timeout in milliseconds before the external task becomes available again for fetching. Must be >= 0.
     */
    retryTimeout?: number | null;
    /**
     * A JSON object containing variable key-value pairs. Each key is a variable name and each value a JSON variable value object with the following properties:
     */
    variables?: Record<string, VariableValueDto> | null;
    /**
     * A JSON object containing local variable key-value pairs. Local variables are set only in the scope of external task. Each key is a variable name and each value a JSON variable value object with the following properties:
     */
    localVariables?: Record<string, VariableValueDto> | null;
} & HandleExternalTaskDto);

