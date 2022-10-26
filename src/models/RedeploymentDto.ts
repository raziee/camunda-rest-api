/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A JSON object with the following properties:
 */
export type RedeploymentDto = {
    /**
     * A list of deployment resource ids to re-deploy.
     */
    resourceIds?: Array<string> | null;
    /**
     * A list of deployment resource names to re-deploy.
     */
    resourceNames?: Array<string> | null;
    /**
     * Sets the source of the deployment.
     */
    source?: string | null;
};

