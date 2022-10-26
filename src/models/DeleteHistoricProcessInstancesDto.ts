/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HistoricProcessInstanceQueryDto } from './HistoricProcessInstanceQueryDto';

export type DeleteHistoricProcessInstancesDto = {
    /**
     * A list historic process instance ids to delete.
     */
    historicProcessInstanceIds?: Array<string> | null;
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
    /**
     * A string with delete reason.
     */
    deleteReason?: string | null;
    /**
     * If set to `false`, the request will still be successful if one ore more of the process ids are not found.
     */
    failIfNotExists?: boolean | null;
};

