/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SuspensionStateDto } from './SuspensionStateDto';

export type JobSuspensionStateDto = ({
    /**
     * The job definition id of the jobs to activate or suspend.
     */
    jobDefinitionId?: string | null;
    /**
     * The process definition id of the jobs to activate or suspend.
     */
    processDefinitionId?: string | null;
    /**
     * The process instance id of the jobs to activate or suspend.
     */
    processInstanceId?: string | null;
    /**
     * The process definition key of the jobs to activate or suspend.
     */
    processDefinitionKey?: string | null;
    /**
     * Only activate or suspend jobs of a process definition which belongs to a tenant
     * with the given id. Works only when selecting with `processDefinitionKey`.
     */
    processDefinitionTenantId?: string | null;
    /**
     * Only activate or suspend jobs of a process definition which belongs to no tenant.
     * Value may only be `true`, as `false` is the default behavior. Works only when selecting with `processDefinitionKey`.
     */
    processDefinitionWithoutTenantId?: boolean | null;
} & SuspensionStateDto);

