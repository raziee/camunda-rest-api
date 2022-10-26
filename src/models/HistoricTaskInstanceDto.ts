/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HistoricTaskInstanceDto = {
    /**
     * The task id.
     */
    id?: string | null;
    /**
     * The key of the process definition the task belongs to.
     */
    processDefinitionKey?: string | null;
    /**
     * The id of the process definition the task belongs to.
     */
    processDefinitionId?: string | null;
    /**
     * The id of the process instance the task belongs to.
     */
    processInstanceId?: string | null;
    /**
     * The id of the execution the task belongs to.
     */
    executionId?: string | null;
    /**
     * The key of the case definition the task belongs to.
     */
    caseDefinitionKey?: string | null;
    /**
     * The id of the case definition the task belongs to.
     */
    caseDefinitionId?: string | null;
    /**
     * The id of the case instance the task belongs to.
     */
    caseInstanceId?: string | null;
    /**
     * The id of the case execution the task belongs to.
     */
    caseExecutionId?: string | null;
    /**
     * The id of the activity that this object is an instance of.
     */
    activityInstanceId?: string | null;
    /**
     * The task name.
     */
    name?: string | null;
    /**
     * The task's description.
     */
    description?: string | null;
    /**
     * The task's delete reason.
     */
    deleteReason?: string | null;
    /**
     * The owner's id.
     */
    owner?: string | null;
    /**
     * The assignee's id.
     */
    assignee?: string | null;
    /**
     * The time the task was started. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    startTime?: string | null;
    /**
     * The time the task ended. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    endTime?: string | null;
    /**
     * The time the task took to finish (in milliseconds).
     */
    duration?: number | null;
    /**
     * The task's key.
     */
    taskDefinitionKey?: string | null;
    /**
     * The task's priority.
     */
    priority?: number | null;
    /**
     * The task's due date. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    due?: string | null;
    /**
     * The id of the parent task, if this task is a subtask.
     */
    parentTaskId?: string | null;
    /**
     * The follow-up date for the task. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    followUp?: string | null;
    /**
     * The tenant id of the task instance.
     */
    tenantId?: string | null;
    /**
     * The time after which the task should be removed by the History Cleanup job. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    removalTime?: string | null;
    /**
     * The process instance id of the root process instance that initiated the process
     * containing this task.
     */
    rootProcessInstanceId?: string | null;
};

