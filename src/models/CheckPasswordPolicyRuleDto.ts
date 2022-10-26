/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PasswordPolicyRuleDto } from './PasswordPolicyRuleDto';

export type CheckPasswordPolicyRuleDto = ({
    /**
     * `true` if the password is compliant with this rule, otherwise `false`.
     */
    valid?: boolean | null;
} & PasswordPolicyRuleDto);

