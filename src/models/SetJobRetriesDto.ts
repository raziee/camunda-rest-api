/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobQueryDto } from './JobQueryDto';

/**
 * Defines the number of retries for a selection of jobs.
 * Please note that if both jobIds and jobQuery are provided,
 * then retries will be set on the union of these sets.
 */
export type SetJobRetriesDto = {
    /**
     * A list of job ids to set retries for.
     */
    jobIds?: Array<string> | null;
    jobQuery?: JobQueryDto;
    /**
     * An integer representing the number of retries. Please note that the value cannot be
     * negative or null.
     */
    retries?: number | null;
};

