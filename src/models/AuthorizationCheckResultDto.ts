/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthorizationCheckResultDto = {
    /**
     * Name of the permission which was checked.
     */
    permissionName?: string | null;
    /**
     * The name of the resource for which the permission check was performed.
     */
    resourceName?: string | null;
    /**
     * The id of the resource for which the permission check was performed.
     */
    resourceId?: string | null;
    /**
     * True / false for isAuthorized.
     */
    isAuthorized?: boolean | null;
};

