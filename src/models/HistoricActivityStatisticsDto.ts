/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HistoricActivityStatisticsDto = {
    /**
     * The id of the activity the results are aggregated for.
     */
    id?: string | null;
    /**
     * The total number of all running instances of the activity.
     */
    instances?: number | null;
    /**
     * The total number of all canceled instances of the activity. **Note:** Will be `0`
     * (not `null`), if canceled activity instances were excluded.
     */
    canceled?: number | null;
    /**
     * The total number of all finished instances of the activity. **Note:** Will be `0`
     * (not `null`), if finished activity instances were excluded.
     */
    finished?: number | null;
    /**
     * The total number of all instances which completed a scope of the activity.
     * **Note:** Will be `0` (not `null`), if activity instances which
     * completed a scope were excluded.
     */
    completeScope?: number | null;
    /**
     * The total number of open incidents for the activity. **Note:** Will be `0` (not
     * `null`), if `incidents` is set to `false`.
     */
    openIncidents?: number | null;
    /**
     * The total number of resolved incidents for the activity. **Note:** Will be `0` (not
     * `null`), if `incidents` is set to `false`.
     */
    resolvedIncidents?: number | null;
    /**
     * The total number of deleted incidents for the activity. **Note:** Will be `0` (not
     * `null`), if `incidents` is set to `false`.
     */
    deletedIncidents?: number | null;
};

