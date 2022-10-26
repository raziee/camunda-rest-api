/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthenticationResult = {
    /**
     * An id of authenticated user.
     */
    authenticatedUser?: string | null;
    /**
     * A flag indicating if user is authenticated.
     */
    isAuthenticated?: boolean | null;
    /**
     * Will be null.
     */
    tenants?: Array<string> | null;
    /**
     * Will be null.
     */
    groups?: Array<string> | null;
};

