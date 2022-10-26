/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HandleExternalTaskDto } from './HandleExternalTaskDto';
import type { VariableValueDto } from './VariableValueDto';

export type CompleteExternalTaskDto = ({
    /**
     * A JSON object containing variable key-value pairs. Each key is a variable name and each value a JSON variable value object with the following properties:
     */
    variables?: Record<string, VariableValueDto> | null;
    /**
     * A JSON object containing local variable key-value pairs. Local variables are set only in the scope of external task. Each key is a variable name and each value a JSON variable value object with the following properties:
     */
    localVariables?: Record<string, VariableValueDto> | null;
} & HandleExternalTaskDto);

