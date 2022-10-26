/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbstractSetRemovalTimeDto } from './AbstractSetRemovalTimeDto';
import type { HistoricDecisionInstanceQueryDto } from './HistoricDecisionInstanceQueryDto';

export type SetRemovalTimeToHistoricDecisionInstancesDto = ({
    /**
     * Sets the removal time to all historic decision instances in the hierarchy.
     * Value may only be `true`, as `false` is the default behavior.
     */
    hierarchical?: boolean | null;
    historicDecisionInstanceQuery?: HistoricDecisionInstanceQueryDto;
    /**
     * The ids of the historic decision instances to set the removal time for.
     */
    historicDecisionInstanceIds?: Array<string> | null;
} & AbstractSetRemovalTimeDto);

