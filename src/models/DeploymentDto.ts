/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LinkableDto } from './LinkableDto';

export type DeploymentDto = ({
    /**
     * The id of the deployment.
     */
    id?: string | null;
    /**
     * The tenant id of the deployment.
     */
    tenantId?: string | null;
    /**
     * The time when the deployment was created.
     */
    deploymentTime?: string | null;
    /**
     * The source of the deployment.
     */
    source?: string | null;
    /**
     * The name of the deployment.
     */
    name?: string | null;
} & LinkableDto);

