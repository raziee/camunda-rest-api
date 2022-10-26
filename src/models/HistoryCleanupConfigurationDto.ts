/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HistoryCleanupConfigurationDto = {
    /**
     * Start time of the current or next batch window. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     */
    batchWindowStartTime?: string | null;
    /**
     * End time of the current or next batch window. By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/),
     * the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`,
     * e.g., `2013-01-23T14:42:45.000+0200`.
     */
    batchWindowEndTime?: string | null;
    /**
     * Indicates whether the engine node participates in history cleanup or
     * not. The default is `true`. Participation can be disabled via
     * [Process Engine Configuration](https://docs.camunda.org/manual/7.18/reference/deployment-descriptors/tags/process-engine/#history-cleanup-enabled).
     *
     * For more details, see
     * [Cleanup Execution Participation per Node](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#cleanup-execution-participation-per-node).
     */
    enabled?: boolean | null;
};

