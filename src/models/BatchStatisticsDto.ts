/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BatchDto } from './BatchDto';

export type BatchStatisticsDto = ({
    /**
     * The number of remaining batch execution jobs. This does include failed batch execution jobs and
     * batch execution jobs which still have to be created by the seed job.
     */
    remainingJobs?: number | null;
    /**
     * The number of completed batch execution jobs. This does include aborted/deleted batch execution jobs.
     */
    completedJobs?: number | null;
    /**
     * The number of failed batch execution jobs. This does not include aborted or deleted batch execution jobs.
     */
    failedJobs?: number | null;
} & BatchDto);

