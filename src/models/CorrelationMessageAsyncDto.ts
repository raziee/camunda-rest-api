/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HistoricProcessInstanceQueryDto } from './HistoricProcessInstanceQueryDto';
import type { ProcessInstanceQueryDto } from './ProcessInstanceQueryDto';
import type { VariableValueDto } from './VariableValueDto';

export type CorrelationMessageAsyncDto = {
    /**
     * The name of the message to correlate. Corresponds to the 'name' element of the message defined in BPMN 2.0 XML. Can be null to correlate by other criteria only.
     */
    messageName?: string | null;
    /**
     * A list of process instance ids that define a group of process instances
     * to which the operation will correlate a message.
     *
     * Please note that if `processInstanceIds`, `processInstanceQuery` and `historicProcessInstanceQuery`
     * are defined, the resulting operation will be performed on the union of these sets.
     */
    processInstanceIds?: Array<string> | null;
    processInstanceQuery?: ProcessInstanceQueryDto;
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
    /**
     * All variables the operation will set in the root scope of the process instances the message is correlated to.
     */
    variables?: Record<string, VariableValueDto> | null;
};

