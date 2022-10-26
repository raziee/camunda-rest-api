/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IdentityServiceUserDto = {
    /**
     * The id of the user.
     */
    id?: string | null;
    /**
     * The firstname of the user.
     */
    firstName?: string | null;
    /**
     * The lastname of the user.
     */
    lastName?: string | null;
    /**
     * The displayName is generated from the id or firstName and lastName if available.
     */
    displayName?: string | null;
};

