/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobConditionQueryParameterDto } from './JobConditionQueryParameterDto';

/**
 * A Job instance query which defines a list of Job instances
 */
export type JobQueryDto = {
    /**
     * Filter by job id.
     */
    jobId?: string | null;
    /**
     * Filter by a  list of job ids.
     */
    jobIds?: Array<string> | null;
    /**
     * Only select jobs which exist for the given job definition.
     */
    jobDefinitionId?: string | null;
    /**
     * Only select jobs which exist for the given process instance.
     */
    processInstanceId?: string | null;
    /**
     * Only select jobs which exist for the given  list of process instance ids.
     */
    processInstanceIds?: Array<string> | null;
    /**
     * Only select jobs which exist for the given execution.
     */
    executionId?: string | null;
    /**
     * Filter by the id of the process definition the jobs run on.
     */
    processDefinitionId?: string | null;
    /**
     * Filter by the key of the process definition the jobs run on.
     */
    processDefinitionKey?: string | null;
    /**
     * Only select jobs which exist for an activity with the given id.
     */
    activityId?: string | null;
    /**
     * Only select jobs which have retries left. Value may only be `true`, as `false` is the
     * default behavior.
     */
    withRetriesLeft?: boolean | null;
    /**
     * Only select jobs which are executable, i.e., retries > 0 and due date is `null` or due
     * date is in the past. Value may only be `true`, as `false` is the default
     * behavior.
     */
    executable?: boolean | null;
    /**
     * Only select jobs that are timers. Cannot be used together with `messages`. Value may only
     * be `true`, as `false` is the default behavior.
     */
    timers?: boolean | null;
    /**
     * Only select jobs that are messages. Cannot be used together with `timers`. Value may only
     * be `true`, as `false` is the default behavior.
     */
    messages?: boolean | null;
    /**
     * Only select jobs where the due date is lower or higher than the given date.
     *
     */
    dueDates?: Array<JobConditionQueryParameterDto> | null;
    /**
     * Only select jobs created before or after the given date.
     *
     */
    createTimes?: Array<JobConditionQueryParameterDto> | null;
    /**
     * Only select jobs that failed due to an exception. Value may only be `true`, as `false` is
     * the default behavior.
     */
    withException?: boolean | null;
    /**
     * Only select jobs that failed due to an exception with the given message.
     */
    exceptionMessage?: string | null;
    /**
     * Only select jobs that failed due to an exception at an activity with the given id.
     */
    failedActivityId?: string | null;
    /**
     * Only select jobs which have no retries left. Value may only be `true`, as `false` is the
     * default behavior.
     */
    noRetriesLeft?: boolean | null;
    /**
     * Only include active jobs. Value may only be `true`, as `false` is the default behavior.
     */
    active?: boolean | null;
    /**
     * Only include suspended jobs. Value may only be `true`, as `false` is the default behavior.
     */
    suspended?: boolean | null;
    /**
     * Only include jobs with a priority lower than or equal to the given value. Value must be a
     * valid `long` value.
     */
    priorityLowerThanOrEquals?: number | null;
    /**
     * Only include jobs with a priority higher than or equal to the given value. Value must be a
     * valid `long` value.
     */
    priorityHigherThanOrEquals?: number | null;
    /**
     * Only include jobs which belong to one of the passed  tenant ids.
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include jobs which belong to no tenant. Value may only be `true`, as `false` is the
     * default behavior.
     */
    withoutTenantId?: boolean | null;
    /**
     * Include jobs which belong to no tenant. Can be used in combination with `tenantIdIn`.
     * Value may only be `true`, as `false` is the default behavior.
     */
    includeJobsWithoutTenantId?: boolean | null;
    /**
     * An array of criteria to sort the result by. Each element of the array is
     * an object that specifies one ordering. The position in the array
     * identifies the rank of an ordering, i.e., whether it is primary, secondary,
     * etc. Does not have an effect for the `count` endpoint.
     */
    sorting?: Array<{
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'jobId' | 'executionId' | 'processInstanceId' | 'processDefinitionId' | 'processDefinitionKey' | 'jobPriority' | 'jobRetries' | 'jobDueDate' | 'tenantId' | null;
        /**
         * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for
         * descending order. Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc' | null;
    }> | null;
};

