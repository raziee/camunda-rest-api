/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HistoryCleanupConfigurationDto } from '../models/HistoryCleanupConfigurationDto';
import type { JobDto } from '../models/JobDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoryCleanupService {

    /**
     * Clean up history (POST)
     * Schedules asynchronous history cleanup (See
     * [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)).
     *
     * **Note:** This endpoint will return at most a single history cleanup job.
     * Since version `7.9.0` it is possible to configure multiple
     * [parallel history cleanup jobs](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#parallel-execution). Use
     * [`GET /history/cleanup/jobs`](https://docs.camunda.org/manual/7.18/reference/rest/history/history-cleanup/get-history-cleanup-jobs)
     * to find all the available history cleanup jobs.
     * @param immediatelyDue When true the job will be scheduled for nearest future. When `false`, the job will be
     * scheduled for next batch window start time. Default is `true`.
     * @returns JobDto Request successful.
     * @throws ApiError
     */
    public static cleanupAsync(
        immediatelyDue?: boolean,
    ): CancelablePromise<JobDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/cleanup',
            query: {
                'immediatelyDue': immediatelyDue,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid or the engine
                does not participate in history cleanup. See
                [Cleanup Execution Participation per Node](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#cleanup-execution-participation-per-node).`,
            },
        });
    }

    /**
     * Get History Cleanup Configuration
     * Retrieves history cleanup batch window configuration (See
     * [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)).
     * @returns HistoryCleanupConfigurationDto Request successful.
     * @throws ApiError
     */
    public static getHistoryCleanupConfiguration(): CancelablePromise<HistoryCleanupConfigurationDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/cleanup/configuration',
        });
    }

    /**
     * @deprecated
     * Find clean up history job (GET)
     * **Deprecated!** Use `GET /history/cleanup/jobs` instead.
     *
     * Finds history cleanup job (See
     * [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)).
     * @returns JobDto Request successful.
     * @throws ApiError
     */
    public static findCleanupJob(): CancelablePromise<JobDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/cleanup/job',
            errors: {
                404: `History clean up job does not exist.`,
            },
        });
    }

    /**
     * Find clean up history jobs (GET)
     * Finds history cleanup jobs (See
     * [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup)).
     * @returns JobDto Request successful.
     * @throws ApiError
     */
    public static findCleanupJobs(): CancelablePromise<Array<JobDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/cleanup/jobs',
            errors: {
                404: `History clean up jobs are empty.`,
            },
        });
    }

}
