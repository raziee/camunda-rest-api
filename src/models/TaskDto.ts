/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CamundaFormRef } from './CamundaFormRef';

export type TaskDto = {
    /**
     * The task id.
     */
    id?: string | null;
    /**
     * The task name.
     */
    name?: string | null;
    /**
     * The assignee's id.
     */
    assignee?: string | null;
    /**
     * The owner's id.
     */
    owner?: string | null;
    /**
     * The date the task was created on.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    created?: string | null;
    /**
     * The date the task was last updated. Every action that fires a [task update event](https://docs.camunda.org/manual/7.18/user-guide/process-engine/delegation-code/#task-listener-event-lifecycle) will update this property.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    lastUpdated?: string | null;
    /**
     * The task's due date.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    due?: string | null;
    /**
     * The follow-up date for the task.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    followUp?: string | null;
    /**
     * The task's delegation state. Possible values are `PENDING` and `RESOLVED`.
     */
    delegationState?: TaskDto.delegationState | null;
    /**
     * The task's description.
     */
    description?: string | null;
    /**
     * The id of the execution the task belongs to.
     */
    executionId?: string | null;
    /**
     * The id the parent task, if this task is a subtask.
     */
    parentTaskId?: string | null;
    /**
     * The task's priority.
     */
    priority?: number | null;
    /**
     * The id of the process definition the task belongs to.
     */
    processDefinitionId?: string | null;
    /**
     * The id of the process instance the task belongs to.
     */
    processInstanceId?: string | null;
    /**
     * The id of the case execution the task belongs to.
     */
    caseExecutionId?: string | null;
    /**
     * The id of the case definition the task belongs to.
     */
    caseDefinitionId?: string | null;
    /**
     * The id of the case instance the task belongs to.
     */
    caseInstanceId?: string | null;
    /**
     * The task's key.
     */
    taskDefinitionKey?: string | null;
    /**
     * Whether the task belongs to a process instance that is suspended.
     */
    suspended?: boolean | null;
    /**
     * If not `null`, the form key for the task.
     */
    formKey?: string | null;
    /**
     * A reference to a specific version of a Camunda Form.
     */
    camundaFormRef?: Record<string, CamundaFormRef> | null;
    /**
     * If not `null`, the tenant id of the task.
     */
    tenantId?: string | null;
};

export namespace TaskDto {

    /**
     * The task's delegation state. Possible values are `PENDING` and `RESOLVED`.
     */
    export enum delegationState {
        PENDING = 'PENDING',
        RESOLVED = 'RESOLVED',
    }


}

