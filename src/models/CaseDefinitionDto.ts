/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CaseDefinitionDto = {
    /**
     * The id of the case definition
     */
    id?: string | null;
    /**
     * The key of the case definition, i.e., the id of the CMMN 2.0 XML case definition.
     */
    key?: string | null;
    /**
     * The category of the case definition.
     */
    category?: string | null;
    /**
     * The name of the case definition.
     */
    name?: string | null;
    /**
     * The version of the case definition that the engine assigned to it.
     */
    version?: number | null;
    /**
     * The file name of the case definition.
     */
    resource?: string | null;
    /**
     * The deployment id of the case definition.
     */
    deploymentId?: string | null;
    /**
     * The tenant id of the case definition.
     */
    tenantId?: string | null;
    /**
     * History time to live value of the case definition.
     * Is used within [History cleanup](https://docs.camunda.org/manual/7.18/user-guide/process-engine/history/#history-cleanup).
     */
    historyTimeToLive?: number | null;
};

