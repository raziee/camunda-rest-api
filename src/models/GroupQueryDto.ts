/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A group instance query which defines a list of group instances
 */
export type GroupQueryDto = {
    /**
     * Filter by the id of the group.
     */
    id?: string | null;
    /**
     * Filter by a JSON string array of group ids.
     */
    idIn?: Array<string> | null;
    /**
     * Filter by the name of the group.
     */
    name?: string | null;
    /**
     * Filter by the name that the parameter is a substring of.
     */
    nameLike?: string | null;
    /**
     * Filter by the type of the group.
     */
    type?: string | null;
    /**
     * Only retrieve groups where the given user id is a member of.
     */
    member?: string | null;
    /**
     * Only retrieve groups which are members of the given tenant.
     */
    memberOfTenant?: string | null;
    /**
     * Apply sorting of the result
     */
    sorting?: Array<{
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'id' | 'name' | 'type' | null;
        /**
         * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for
         * descending order. Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc' | null;
    }> | null;
};

