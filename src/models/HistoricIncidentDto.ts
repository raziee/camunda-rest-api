/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HistoricIncidentDto = {
    /**
     * The id of the incident.
     */
    id?: string | null;
    /**
     * The key of the process definition this incident is associated with.
     */
    processDefinitionKey?: string | null;
    /**
     * The id of the process definition this incident is associated with.
     */
    processDefinitionId?: string | null;
    /**
     * The key of the process definition this incident is associated with.
     */
    processInstanceId?: string | null;
    /**
     * The id of the execution this incident is associated with.
     */
    executionId?: string | null;
    /**
     * The process instance id of the root process instance that initiated the process
     * containing this incident.
     */
    rootProcessInstanceId?: string | null;
    /**
     * The time this incident happened.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    createTime?: string | null;
    /**
     * The time this incident has been deleted or resolved.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    endTime?: string | null;
    /**
     * The time after which the incident should be removed by the History Cleanup job.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    removalTime?: string | null;
    /**
     * The type of incident, for example: `failedJobs` will be returned in case of an
     * incident which identified a failed job during the execution of a
     * process instance. See the [User Guide](/manual/develop/user-
     * guide/process-engine/incidents/#incident-types) for a list of
     * incident types.
     */
    incidentType?: string | null;
    /**
     * The id of the activity this incident is associated with.
     */
    activityId?: string | null;
    /**
     * The id of the activity on which the last exception occurred.
     */
    failedActivityId?: string | null;
    /**
     * The id of the associated cause incident which has been triggered.
     */
    causeIncidentId?: string | null;
    /**
     * The id of the associated root cause incident which has been triggered.
     */
    rootCauseIncidentId?: string | null;
    /**
     * The payload of this incident.
     */
    configuration?: string | null;
    /**
     * The payload of this incident at the time when it occurred.
     */
    historyConfiguration?: string | null;
    /**
     * The message of this incident.
     */
    incidentMessage?: string | null;
    /**
     * The id of the tenant this incident is associated with.
     */
    tenantId?: string | null;
    /**
     * The job definition id the incident is associated with.
     */
    jobDefinitionId?: string | null;
    /**
     * If true, this incident is open.
     */
    open?: boolean | null;
    /**
     * If true, this incident has been deleted.
     */
    deleted?: boolean | null;
    /**
     * If true, this incident has been resolved.
     */
    resolved?: boolean | null;
    /**
     * The annotation set to the incident.
     */
    annotation?: string | null;
};

