/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type JobDuedateDto = {
    /**
     * The date to set when the job has the next execution.
     */
    duedate?: string | null;
    /**
     * A boolean value to indicate if modifications to the due date should cascade to
     * subsequent jobs. (e.g. Modify the due date of a timer by +15
     * minutes. This flag indicates if a +15 minutes should be applied to all
     * subsequent timers.) This flag only affects timer jobs and only works if due date
     * is not null. Default: `false`
     */
    cascade?: boolean | null;
};

