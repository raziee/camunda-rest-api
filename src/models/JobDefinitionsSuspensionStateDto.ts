/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobDefinitionSuspensionStateDto } from './JobDefinitionSuspensionStateDto';

export type JobDefinitionsSuspensionStateDto = ({
    /**
     * The process definition id of the job definitions to activate or suspend.
     */
    processDefinitionId?: string | null;
    /**
     * The process definition key of the job definitions to activate or suspend.
     */
    processDefinitionKey?: string | null;
    /**
     * Only activate or suspend job definitions of a process definition which belongs to a
     * tenant with the given id.
     *
     * Note that this parameter will only be considered
     * in combination with `processDefinitionKey`.
     */
    processDefinitionTenantId?: string | null;
    /**
     * Only activate or suspend job definitions of a process definition which belongs to
     * no tenant. Value may only be `true`, as `false` is the default
     * behavior.
     *
     * Note that this parameter will only be considered
     * in combination with `processDefinitionKey`.
     */
    processDefinitionWithoutTenantId?: boolean | null;
} & JobDefinitionSuspensionStateDto);

