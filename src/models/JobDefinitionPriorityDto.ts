/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type JobDefinitionPriorityDto = {
    /**
     * The new execution priority number for jobs of the given definition. The
     * definition's priority can be reset by using the value `null`. In
     * that case, the job definition's priority no longer applies but a new
     * job's priority is determined as specified in the process model.
     */
    priority?: number | null;
    /**
     * A boolean value indicating whether existing jobs of the given definition should
     * receive the priority as well. Default value is `false`. Can only be
     * `true` when the __priority__ parameter is not `null`.
     */
    includeJobs?: boolean | null;
};

