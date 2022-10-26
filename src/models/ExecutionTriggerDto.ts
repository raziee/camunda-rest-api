/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type ExecutionTriggerDto = {
    /**
     * A JSON object containing variable key-value pairs. Each key is a variable name and
     * each value a JSON variable value object.
     */
    variables?: Record<string, VariableValueDto> | null;
};

