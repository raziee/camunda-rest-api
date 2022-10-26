/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserProfileDto } from './UserProfileDto';

export type PasswordPolicyRequestDto = {
    /**
     * The candidate password to be check against the password policy.
     */
    password?: string | null;
    profile?: UserProfileDto;
};

