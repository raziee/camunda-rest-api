/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Query for the historic batches to set the removal time for.
 */
export type HistoricBatchQueryDto = {
    /**
     * Filter by batch id.
     */
    batchId?: string | null;
    /**
     * Filter by batch type. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/batch/#creating-a-batch)
     * for more information about batch types.
     */
    type?: string | null;
    /**
     *
     * Filter completed or not completed batches. If the value is
     * `true`, only completed batches, i.e., end time is set, are
     * returned. Otherwise, if the value is `false`, only running
     * batches, i.e., end time is null, are returned.
     */
    completed?: boolean | null;
    /**
     * Filter by a comma-separated list of tenant ids. A batch matches if it has one of the given
     * tenant ids.
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include batches which belong to no tenant. Value can effectively only be `true`, as `false` is the default behavior.
     */
    withoutTenantId?: boolean | null;
    /**
     * An array of criteria to sort the result by. Each element of the array is
     * an object that specifies one ordering. The position in the array
     * identifies the rank of an ordering, i.e., whether it is primary, secondary,
     * etc. Has no effect for the `/count` endpoint
     */
    sorting?: Array<{
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'batchId' | 'startTime' | 'endTime' | 'tenantId' | null;
        /**
         * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for
         * descending order. Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc' | null;
    }> | null;
};

