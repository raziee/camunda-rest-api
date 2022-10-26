/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A Job definition query which defines a list of Job definitions
 */
export type JobDefinitionQueryDto = {
    /**
     * Filter by job definition id.
     */
    jobDefinitionId?: string | null;
    /**
     * Only include job definitions which belong to one of the passed activity ids.
     */
    activityIdIn?: Array<string> | null;
    /**
     * Only include job definitions which exist for the given process definition id.
     */
    processDefinitionId?: string | null;
    /**
     * Only include job definitions which exist for the given process definition key.
     */
    processDefinitionKey?: string | null;
    /**
     * Only include job definitions which exist for the given job type. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/the-job-executor/#job-creation)
     * for more information about job types.
     */
    jobType?: string | null;
    /**
     * Only include job definitions which exist for the given job configuration. For example: for
     * timer jobs it is the timer configuration.
     */
    jobConfiguration?: string | null;
    /**
     * Only include active job definitions. Value may only be `true`, as `false` is the default
     * behavior.
     */
    active?: boolean | null;
    /**
     * Only include suspended job definitions. Value may only be `true`, as `false` is the
     * default behavior.
     */
    suspended?: boolean | null;
    /**
     * Only include job definitions that have an overriding job priority defined. The only
     * effective value is `true`. If set to `false`, this filter is not applied.
     */
    withOverridingJobPriority?: boolean | null;
    /**
     * Only include job definitions which belong to one of the passed tenant
     * ids.
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include job definitions which belong to no tenant. Value may only be `true`, as
     * `false` is the default behavior.
     */
    withoutTenantId?: boolean | null;
    /**
     * Include job definitions which belong to no tenant. Can be used in combination with
     * `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
     */
    includeJobDefinitionsWithoutTenantId?: boolean | null;
    /**
     * An array of criteria to sort the result by. Each element of the array is
     * an object that specifies one ordering. The position in the array
     * identifies the rank of an ordering, i.e., whether it is primary, secondary,
     * etc. Sorting has no effect for `count` endpoints.
     */
    sorting?: Array<{
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'jobDefinitionId' | 'activityId' | 'processDefinitionId' | 'processDefinitionKey' | 'jobType' | 'jobConfiguration' | 'tenantId' | null;
        /**
         * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for
         * descending order. Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc' | null;
    }> | null;
};

