/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HistoricDecisionInstanceQueryDto } from './HistoricDecisionInstanceQueryDto';

export type DeleteHistoricDecisionInstancesDto = {
    /**
     * A list of historic decision instance ids to delete.
     */
    historicDecisionInstanceIds?: Array<string> | null;
    historicDecisionInstanceQuery?: HistoricDecisionInstanceQueryDto;
    /**
     * A string with delete reason.
     */
    deleteReason?: string | null;
};

