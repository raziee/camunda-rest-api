/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type JobDefinitionDto = {
    /**
     * The id of the job definition.
     */
    id?: string | null;
    /**
     * The id of the process definition this job definition is associated with.
     */
    processDefinitionId?: string | null;
    /**
     * The key of the process definition this job definition is associated with.
     */
    processDefinitionKey?: string | null;
    /**
     * The id of the activity this job definition is associated with.
     */
    activityId?: string | null;
    /**
     * The type of the job which is running for this job definition. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/the-job-executor/#job-creation)
     * for more information about job types.
     */
    jobType?: string | null;
    /**
     * The configuration of a job definition provides details about the jobs which will be
     * created. For example: for timer jobs it is the timer configuration.
     */
    jobConfiguration?: string | null;
    /**
     * The execution priority defined for jobs that are created based on this definition.
     * May be `null` when the priority has not been overridden on the job
     * definition level.
     */
    overridingJobPriority?: number | null;
    /**
     * Indicates whether this job definition is suspended or not.
     */
    suspended?: boolean | null;
    /**
     * The id of the tenant this job definition is associated with.
     */
    tenantId?: string | null;
    /**
     * The id of the deployment this job definition is related to. In a deployment-aware
     * setup, this leads to all jobs of the same definition being executed
     * on the same node.
     */
    deploymentId?: string | null;
};

