/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HandleExternalTaskDto } from './HandleExternalTaskDto';

export type LockExternalTaskDto = ({
    /**
     * The duration to lock the external task for in milliseconds.
     * **Note:** Attempting to lock an already locked external task with the same `workerId`
     * will succeed and a new lock duration will be set, starting from the current moment.
     */
    lockDuration?: number;
} & HandleExternalTaskDto);

