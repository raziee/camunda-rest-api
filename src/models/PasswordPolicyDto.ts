/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PasswordPolicyRuleDto } from './PasswordPolicyRuleDto';

export type PasswordPolicyDto = {
    /**
     * An array of password policy rules. Each element of the array is representing one rule of the policy.
     */
    rules?: Array<PasswordPolicyRuleDto> | null;
};

