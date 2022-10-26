/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateFilterDto = {
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
};

