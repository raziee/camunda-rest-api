/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HistoricProcessInstanceQueryDto } from './HistoricProcessInstanceQueryDto';
import type { ProcessInstanceQueryDto } from './ProcessInstanceQueryDto';
import type { SuspensionStateDto } from './SuspensionStateDto';

export type ProcessInstanceSuspensionStateAsyncDto = ({
    /**
     * A list of process instance ids which defines a group of process instances
     * which will be activated or suspended by the operation.
     */
    processInstanceIds?: Array<string> | null;
    processInstanceQuery?: ProcessInstanceQueryDto;
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
} & SuspensionStateDto);

