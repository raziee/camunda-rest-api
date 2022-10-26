/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HandleExternalTaskDto } from './HandleExternalTaskDto';

export type ExtendLockOnExternalTaskDto = ({
    /**
     * An amount of time (in milliseconds). This is the new lock duration starting from the
     * current moment.
     */
    newDuration?: number | null;
} & HandleExternalTaskDto);

