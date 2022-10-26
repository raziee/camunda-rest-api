/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type TaskBpmnErrorDto = {
    /**
     * An error code that indicates the predefined error. It is used to identify the BPMN
     * error handler.
     */
    errorCode?: string | null;
    /**
     * An error message that describes the error.
     */
    errorMessage?: string | null;
    /**
     * A JSON object containing variable key-value pairs.
     */
    variables?: Record<string, VariableValueDto> | null;
};

