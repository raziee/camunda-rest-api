/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type HistoricVariableInstanceDto = ({
    /**
     * The id of the variable instance.
     */
    id?: string | null;
    /**
     * The name of the variable instance.
     */
    name?: string | null;
    /**
     * The key of the process definition the variable instance belongs to.
     */
    processDefinitionKey?: string | null;
    /**
     * The id of the process definition the variable instance belongs to.
     */
    processDefinitionId?: string | null;
    /**
     * The process instance id the variable instance belongs to.
     */
    processInstanceId?: string | null;
    /**
     * The execution id the variable instance belongs to.
     */
    executionId?: string | null;
    /**
     * The id of the activity instance in which the variable is valid.
     */
    activityInstanceId?: string | null;
    /**
     * The key of the case definition the variable instance belongs to.
     */
    caseDefinitionKey?: string | null;
    /**
     * The id of the case definition the variable instance belongs to.
     */
    caseDefinitionId?: string | null;
    /**
     * The case instance id the variable instance belongs to.
     */
    caseInstanceId?: string | null;
    /**
     * The case execution id the variable instance belongs to.
     */
    caseExecutionId?: string | null;
    /**
     * The id of the task the variable instance belongs to.
     */
    taskId?: string | null;
    /**
     * The id of the tenant that this variable instance belongs to.
     */
    tenantId?: string | null;
    /**
     * An error message in case a Java Serialized Object could not be de-serialized.
     */
    errorMessage?: string | null;
    /**
     * The current state of the variable. Can be 'CREATED' or 'DELETED'.
     */
    state?: string | null;
    /**
     * The time the variable was inserted. [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    createTime?: string | null;
    /**
     * The time after which the variable should be removed by the History Cleanup job.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    removalTime?: string | null;
    /**
     * The process instance id of the root process instance that initiated the process
     * containing this variable.
     */
    rootProcessInstanceId?: string | null;
} & VariableValueDto);

