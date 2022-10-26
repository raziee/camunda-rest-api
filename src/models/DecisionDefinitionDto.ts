/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DecisionDefinitionDto = {
    /**
     * The id of the decision definition
     */
    id?: string | null;
    /**
     * The key of the decision definition, i.e., the id of the DMN 1.0 XML decision definition.
     */
    key?: string | null;
    /**
     * The category of the decision definition.
     */
    category?: string | null;
    /**
     * The name of the decision definition.
     */
    name?: string | null;
    /**
     * The version of the decision definition that the engine assigned to it.
     */
    version?: number | null;
    /**
     * The file name of the decision definition.
     */
    resource?: string | null;
    /**
     * The deployment id of the decision definition.
     */
    deploymentId?: string | null;
    /**
     * The tenant id of the decision definition.
     */
    tenantId?: string | null;
    /**
     * The id of the decision requirements definition this decision definition belongs to.
     */
    decisionRequirementsDefinitionId?: string | null;
    /**
     * The key of the decision requirements definition this decision definition belongs to.
     */
    decisionRequirementsDefinitionKey?: string | null;
    /**
     * History time to live value of the decision definition.
     * Is used within [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup).
     */
    historyTimeToLive?: number | null;
    /**
     * The version tag of the decision definition.
     */
    versionTag?: string | null;
};

