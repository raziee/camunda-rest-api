/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FilterDto = {
    /**
     * The id of the filter.
     */
    id?: string | null;
    /**
     * The resource type of the filter.
     */
    resourceType?: string | null;
    /**
     * The name of the filter.
     */
    name?: string | null;
    /**
     * The user id of the owner of the filter.
     */
    owner?: string | null;
    /**
     * The query of the filter as a JSON object.
     */
    query?: any;
    /**
     * The properties of a filter as a JSON object.
     */
    properties?: any;
    /**
     *
     * The number of items matched by the filter itself. Note: Only exists
     * if the query parameter
     * `itemCount` was set to `true`
     */
    itemCount?: number | null;
};

