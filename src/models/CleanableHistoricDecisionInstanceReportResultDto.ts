/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CleanableHistoricDecisionInstanceReportResultDto = {
    /**
     * The id of the decision definition.
     */
    decisionDefinitionId?: string | null;
    /**
     * The key of the decision definition.
     */
    decisionDefinitionKey?: string | null;
    /**
     * The name of the decision definition.
     */
    decisionDefinitionName?: string | null;
    /**
     * The version of the decision definition.
     */
    decisionDefinitionVersion?: number | null;
    /**
     * The history time to live of the decision definition.
     */
    historyTimeToLive?: number | null;
    /**
     * The count of the finished historic decision instances.
     */
    finishedDecisionInstanceCount?: number | null;
    /**
     * The count of the cleanable historic decision instances, referring to history time
     * to live.
     */
    cleanableDecisionInstanceCount?: number | null;
    /**
     * The tenant id of the decision definition.
     */
    tenantId?: string | null;
};

