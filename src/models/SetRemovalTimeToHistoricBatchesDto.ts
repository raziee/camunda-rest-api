/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbstractSetRemovalTimeDto } from './AbstractSetRemovalTimeDto';

export type SetRemovalTimeToHistoricBatchesDto = ({
    /**
     * Query for the historic batches to set the removal time for.
     */
    historicBatchQuery?: any;
    /**
     * The ids of the historic batches to set the removal time for.
     */
    historicBatchIds?: Array<string> | null;
} & AbstractSetRemovalTimeDto);

