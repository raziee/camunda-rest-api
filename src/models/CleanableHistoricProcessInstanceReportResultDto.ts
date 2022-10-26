/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CleanableHistoricProcessInstanceReportResultDto = {
    /**
     * The id of the process definition.
     */
    processDefinitionId?: string | null;
    /**
     * The key of the process definition.
     */
    processDefinitionKey?: string | null;
    /**
     * The name of the process definition.
     */
    processDefinitionName?: string | null;
    /**
     * The version of the process definition.
     */
    processDefinitionVersion?: number | null;
    /**
     * The history time to live of the process definition.
     */
    historyTimeToLive?: number | null;
    /**
     * The count of the finished historic process instances.
     */
    finishedProcessInstanceCount?: number | null;
    /**
     * The count of the cleanable historic process instances, referring to history time to
     * live.
     */
    cleanableProcessInstanceCount?: number | null;
    /**
     * The tenant id of the process definition.
     */
    tenantId?: string | null;
};

