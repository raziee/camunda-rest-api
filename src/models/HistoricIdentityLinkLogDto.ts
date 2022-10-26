/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HistoricIdentityLinkLogDto = {
    /**
     * Id of the Historic identity link entry.
     */
    id?: string | null;
    /**
     * The time when the identity link is logged.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    time?: string | null;
    /**
     * The type of identity link (candidate/assignee/owner).
     */
    type?: string | null;
    /**
     * The id of the user/assignee.
     */
    userId?: string | null;
    /**
     * The id of the group.
     */
    groupId?: string | null;
    /**
     * The id of the task.
     */
    taskId?: string | null;
    /**
     * The id of the process definition.
     */
    processDefinitionId?: string | null;
    /**
     * The key of the process definition.
     */
    processDefinitionKey?: string | null;
    /**
     * Type of operation (add/delete).
     */
    operationType?: string | null;
    /**
     * The id of the assigner.
     */
    assignerId?: string | null;
    /**
     * The id of the tenant.
     */
    tenantId?: string | null;
    /**
     * The time after which the identity link should be removed by the History Cleanup job.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    removalTime?: string | null;
    /**
     * The process instance id of the root process instance that initiated the process
     * containing this identity link.
     */
    rootProcessInstanceId?: string | null;
};

