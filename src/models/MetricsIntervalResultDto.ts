/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MetricsIntervalResultDto = {
    /**
     * The interval timestamp.
     */
    timestamp?: string | null;
    /**
     * The name of the metric.
     */
    name?: string | null;
    /**
     * The reporter of the metric. `null` if the metrics are aggregated by reporter.
     */
    reporter?: string | null;
    /**
     * The value of the metric aggregated by the interval.
     */
    value?: number | null;
};

