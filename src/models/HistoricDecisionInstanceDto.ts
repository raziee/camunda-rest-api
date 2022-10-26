/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HistoricDecisionInputInstanceDto } from './HistoricDecisionInputInstanceDto';
import type { HistoricDecisionOutputInstanceDto } from './HistoricDecisionOutputInstanceDto';

export type HistoricDecisionInstanceDto = {
    /**
     * The id of the decision instance.
     */
    id?: string | null;
    /**
     * The id of the decision definition that this decision instance belongs to.
     */
    decisionDefinitionId?: string | null;
    /**
     * The key of the decision definition that this decision instance belongs to.
     */
    decisionDefinitionKey?: string | null;
    /**
     * The name of the decision definition that this decision instance belongs to.
     */
    decisionDefinitionName?: string | null;
    /**
     * The time the instance was evaluated.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    evaluationTime?: string | null;
    /**
     * The time after which the instance should be removed by the History Cleanup job.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    removalTime?: string | null;
    /**
     * The id of the process definition that this decision instance belongs to.
     */
    processDefinitionId?: string | null;
    /**
     * The key of the process definition that this decision instance belongs to.
     */
    processDefinitionKey?: string | null;
    /**
     * The id of the process instance that this decision instance belongs to.
     */
    processInstanceId?: string | null;
    /**
     * The id of the case definition that this decision instance belongs to.
     */
    caseDefinitionId?: string | null;
    /**
     * The key of the case definition that this decision instance belongs to.
     */
    caseDefinitionKey?: string | null;
    /**
     * The id of the case instance that this decision instance belongs to.
     */
    caseInstanceId?: string | null;
    /**
     * The id of the activity that this decision instance belongs to.
     */
    activityId?: string | null;
    /**
     * The id of the activity instance that this decision instance belongs to.
     */
    activityInstanceId?: string | null;
    /**
     * The tenant id of the historic decision instance.
     */
    tenantId?: string | null;
    /**
     * The id of the authenticated user that has evaluated this decision instance without
     * a process or case instance.
     */
    userId?: string | null;
    /**
     * The list of decision input values. **Only exists** if `includeInputs`
     * was set to `true` in the query.
     */
    inputs?: Array<HistoricDecisionInputInstanceDto> | null;
    /**
     * The list of decision output values. **Only exists** if `includeOutputs`
     * was set to `true` in the query.
     */
    ouputs?: Array<HistoricDecisionOutputInstanceDto> | null;
    /**
     * The result of the collect aggregation of the decision result if used. `null` if no
     * aggregation was used.
     */
    collectResultValue?: number | null;
    /**
     * The decision instance id of the evaluated root decision. Can be `null` if this
     * instance is the root decision instance of the evaluation.
     */
    rootDecisionInstanceId?: string | null;
    /**
     * The process instance id of the root process instance that initiated the evaluation
     * of this decision. Can be `null` if this decision instance is not
     * evaluated as part of a BPMN process.
     */
    rootProcessInstanceId?: string | null;
    /**
     * The id of the decision requirements definition that this decision instance belongs
     * to.
     */
    decisionRequirementsDefinitionId?: string | null;
    /**
     * The key of the decision requirements definition that this decision instance belongs
     * to.
     */
    decisionRequirementsDefinitionKey?: string | null;
};

