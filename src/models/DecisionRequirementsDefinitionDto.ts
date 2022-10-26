/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DecisionRequirementsDefinitionDto = {
    /**
     * The id of the decision requirements definition
     */
    id?: string | null;
    /**
     * The key of the decision requirements definition, i.e., the id of the DMN 1.0 XML decision definition.
     */
    key?: string | null;
    /**
     * The name of the decision requirements definition.
     */
    name?: string | null;
    /**
     * The category of the decision requirements definition.
     */
    category?: string | null;
    /**
     * The version of the decision requirements definition that the engine assigned to it.
     */
    version?: number | null;
    /**
     * The file name of the decision requirements definition.
     */
    resource?: string | null;
    /**
     * The deployment id of the decision requirements definition.
     */
    deploymentId?: string | null;
    /**
     * The tenant id of the decisionrequirements definition.
     */
    tenantId?: string | null;
};

