/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PasswordPolicyDto } from './PasswordPolicyDto';

export type CheckPasswordPolicyResultDto = ({
    /**
     * `true` if the password is compliant with the policy, otherwise `false`.
     */
    valid?: boolean | null;
} & PasswordPolicyDto);

