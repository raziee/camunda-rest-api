/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MultipleProcessInstanceModificationInstructionDto } from './MultipleProcessInstanceModificationInstructionDto';
import type { ProcessInstanceQueryDto } from './ProcessInstanceQueryDto';

export type ModificationDto = {
    /**
     * The id of the process definition for the modification
     */
    processDefinitionId?: string | null;
    /**
     * Skip execution listener invocation for activities that are started or ended as part
     * of this request.
     */
    skipCustomListeners?: boolean | null;
    /**
     * Skip execution of [input/output variable mappings](https://docs.camunda.org/manual/7.18/user-guide/process-engine/variables/#input-output-variable-mapping) for
     * activities that are started or ended as part of this request.
     */
    skipIoMappings?: boolean | null;
    /**
     * A list of process instance ids to modify.
     */
    processInstanceIds?: Array<string> | null;
    processInstanceQuery?: ProcessInstanceQueryDto;
    /**
     * An array of modification instructions. The instructions are executed in the order they are in.
     */
    instructions?: Array<MultipleProcessInstanceModificationInstructionDto> | null;
    /**
     * An arbitrary text annotation set by a user for auditing reasons.
     */
    annotation?: string | null;
};

