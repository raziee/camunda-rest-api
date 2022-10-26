/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticationResult } from '../models/AuthenticationResult';
import type { BasicUserCredentialsDto } from '../models/BasicUserCredentialsDto';
import type { CheckPasswordPolicyResultDto } from '../models/CheckPasswordPolicyResultDto';
import type { IdentityServiceGroupInfoDto } from '../models/IdentityServiceGroupInfoDto';
import type { PasswordPolicyDto } from '../models/PasswordPolicyDto';
import type { PasswordPolicyRequestDto } from '../models/PasswordPolicyRequestDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IdentityService {

    /**
     * Get a User's Groups
     * Gets the groups of a user by id and includes all users that share a group with the
     * given user.
     * @param userId The id of the user to get the groups for.
     * @returns IdentityServiceGroupInfoDto Request successful.
     * @throws ApiError
     */
    public static getGroupInfo(
        userId: string,
    ): CancelablePromise<IdentityServiceGroupInfoDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/identity/groups',
            query: {
                'userId': userId,
            },
            errors: {
                400: `If the \`userId\` query parameter is missing. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Password Policy
     * A password policy consists of a list of rules that new passwords must follow to be
     * policy compliant. This end point returns a JSON representation of the
     * list of policy rules. More information on password policies in Camunda can be found in the password policy
     * [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/password-policy/) and in
     * the [security instructions](https://docs.camunda.org/manual/7.18/user-guide/security/).
     * @returns PasswordPolicyDto Request successful. This example uses the built-in password policy that enforces a minimum password length,
     * and some complexity rules.
     * @throws ApiError
     */
    public static getPasswordPolicy(): CancelablePromise<PasswordPolicyDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/identity/password-policy',
            errors: {
                404: `No password policy was found.`,
            },
        });
    }

    /**
     * Validate Password
     * A password policy consists of a list of rules that new passwords must follow to be
     * policy compliant. A password can be checked for compliancy via this
     * end point. More information on password policies in Camunda can be found in the password policy
     * [user guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/password-policy/) and in
     * the [security instructions](https://docs.camunda.org/manual/7.18/user-guide/security/).
     * @param requestBody
     * @returns CheckPasswordPolicyResultDto Request successful. This example uses the built-in password policy that enforces a minimum password length, and
     * some complexity rules. The checked password is myPassword which is not complex enough to match all of
     * the policy rules.
     * @throws ApiError
     */
    public static checkPassword(
        requestBody?: PasswordPolicyRequestDto,
    ): CancelablePromise<CheckPasswordPolicyResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/password-policy',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `No password policy was found to check the password against.`,
            },
        });
    }

    /**
     * Verify User
     * Verifies that user credentials are valid.
     * @param requestBody
     * @returns AuthenticationResult Request successful.
     * @throws ApiError
     */
    public static verifyUser(
        requestBody?: BasicUserCredentialsDto,
    ): CancelablePromise<AuthenticationResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `If body does not contain username or password.`,
            },
        });
    }

}
