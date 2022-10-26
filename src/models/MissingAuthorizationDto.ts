/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MissingAuthorizationDto = {
    /**
     * The permission name that the user is missing.
     */
    permissionName?: string | null;
    /**
     * The name of the resource that the user is missing permission for.
     */
    resourceName?: string | null;
    /**
     * The id of the resource that the user is missing permission for.
     */
    resourceId?: string | null;
};

