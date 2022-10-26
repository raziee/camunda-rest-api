/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CleanableHistoricBatchReportResultDto = {
    /**
     * The type of the batch operation.
     */
    batchType?: string | null;
    /**
     * The history time to live of the batch operation.
     */
    historyTimeToLive?: number | null;
    /**
     * The count of the finished batch operations.
     */
    finishedBatchesCount?: number | null;
    /**
     * The count of the cleanable historic batch operations, referring to history time to
     * live.
     */
    cleanableBatchesCount?: number | null;
};

