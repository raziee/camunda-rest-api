/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdentityServiceGroupDto } from './IdentityServiceGroupDto';
import type { IdentityServiceUserDto } from './IdentityServiceUserDto';

export type IdentityServiceGroupInfoDto = {
    /**
     * An array of group objects.
     */
    groups?: Array<IdentityServiceGroupDto> | null;
    /**
     * An array that contains all users that are member in one of the groups.
     */
    groupUsers?: Array<IdentityServiceUserDto> | null;
};

