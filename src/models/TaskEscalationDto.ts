/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type TaskEscalationDto = {
    /**
     * An escalation code that indicates the predefined escalation. It is used to identify
     * the BPMN escalation handler.
     */
    escalationCode?: string | null;
    /**
     * A JSON object containing variable key-value pairs.
     */
    variables?: Record<string, VariableValueDto> | null;
};

