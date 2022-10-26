/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Describes a rule of a password policy.
 */
export type PasswordPolicyRuleDto = {
    /**
     * A placeholder string that contains the name of a password policy rule.
     */
    placeholder?: string | null;
    /**
     * A map that describes the characteristics of a password policy rule, such as the minimum number of digits.
     */
    parameter?: Record<string, string>;
};

