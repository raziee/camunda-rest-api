/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MetricsIntervalResultDto } from '../models/MetricsIntervalResultDto';
import type { MetricsResultDto } from '../models/MetricsResultDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MetricsService {

    /**
     * Get Metrics in Interval
     * Retrieves a list of metrics, aggregated for a given interval.
     * @param name The name of the metric.
     * @param reporter The name of the reporter (host), on which the metrics was logged. This will have
     * value provided by the [hostname configuration property](https://docs.camunda.org/manual/7.18/reference/deployment-descriptors/tags/process-engine/#hostname).
     * @param startDate The start date (inclusive).
     * @param endDate The end date (exclusive).
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param interval The interval for which the metrics should be aggregated. Time unit is seconds.
     * Default: The interval is set to 15 minutes (900 seconds).
     * @param aggregateByReporter Aggregate metrics by reporter.
     * @returns MetricsIntervalResultDto Request successful.
     * @throws ApiError
     */
    public static interval(
        name?: 'activity-instance-start' | 'activity-instance-end' | 'decision-instances' | 'flow-node-instances' | 'job-acquisition-attempt' | 'job-acquired-success' | 'job-acquired-failure' | 'job-execution-rejected' | 'job-successful' | 'job-failed' | 'job-locked-exclusive' | 'executed-decision-elements' | 'history-cleanup-removed-process-instances' | 'history-cleanup-removed-case-instances' | 'history-cleanup-removed-decision-instances' | 'history-cleanup-removed-batch-operations' | 'history-cleanup-removed-task-metrics' | 'process-instances',
        reporter?: string,
        startDate?: string,
        endDate?: string,
        firstResult?: number,
        maxResults?: number,
        interval: string = '900',
        aggregateByReporter?: string,
    ): CancelablePromise<Array<MetricsIntervalResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/metrics',
            query: {
                'name': name,
                'reporter': reporter,
                'startDate': startDate,
                'endDate': endDate,
                'firstResult': firstResult,
                'maxResults': maxResults,
                'interval': interval,
                'aggregateByReporter': aggregateByReporter,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.`,
            },
        });
    }

    /**
     * Delete Task Worker Metrics
     * Deletes all task worker metrics prior to the given date or all if no date is provided.
     * @param date The date prior to which all task worker metrics should be deleted.
     * @returns void
     * @throws ApiError
     */
    public static deleteTaskMetrics(
        date?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/metrics/task-worker',
            query: {
                'date': date,
            },
            errors: {
                403: `If the user who performs the operation is not a <b>camunda-admin</b> user.`,
            },
        });
    }

    /**
     * Get Sum
     * Retrieves the `sum` (count) for a given metric.
     * @param metricsName The name of the metric.
     * @param startDate The start date (inclusive).
     * @param endDate The end date (exclusive).
     * @returns MetricsResultDto Request successful.
     * @throws ApiError
     */
    public static getMetrics(
        metricsName: 'activity-instance-start' | 'activity-instance-end' | 'decision-instances' | 'flow-node-instances' | 'job-acquisition-attempt' | 'job-acquired-success' | 'job-acquired-failure' | 'job-execution-rejected' | 'job-successful' | 'job-failed' | 'job-locked-exclusive' | 'executed-decision-elements' | 'history-cleanup-removed-process-instances' | 'history-cleanup-removed-case-instances' | 'history-cleanup-removed-decision-instances' | 'history-cleanup-removed-batch-operations' | 'history-cleanup-removed-task-metrics' | 'unique-task-workers' | 'process-instances' | 'task-users',
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<MetricsResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/metrics/{metrics-name}/sum',
            path: {
                'metrics-name': metricsName,
            },
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }

}
