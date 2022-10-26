/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserOperationLogEntryDto = {
    /**
     * The unique identifier of this log entry.
     */
    id?: string | null;
    /**
     * The user who performed this operation.
     */
    userId?: string | null;
    /**
     * Timestamp of this operation.
     */
    timestamp?: string | null;
    /**
     * The unique identifier of this operation. A composite operation that changes
     * multiple properties has a common `operationId`.
     */
    operationId?: string | null;
    /**
     * The type of this operation, e.g., `Assign`, `Claim` and so on.
     */
    operationType?: string | null;
    /**
     * The type of the entity on which this operation was executed, e.g., `Task` or
     * `Attachment`.
     */
    entityType?: string | null;
    /**
     * The name of the category this operation was associated with, e.g., `TaskWorker` or
     * `Admin`.
     */
    category?: string | null;
    /**
     * An arbitrary annotation set by a user for auditing reasons.
     */
    annotation?: string | null;
    /**
     * The property changed by this operation.
     */
    property?: string | null;
    /**
     * The original value of the changed property.
     */
    orgValue?: string | null;
    /**
     * The new value of the changed property.
     */
    newValue?: string | null;
    /**
     * If not `null`, the operation is restricted to entities in relation to this
     * deployment.
     */
    deploymentId?: string | null;
    /**
     * If not `null`, the operation is restricted to entities in relation to this process
     * definition.
     */
    processDefinitionId?: string | null;
    /**
     * If not `null`, the operation is restricted to entities in relation to process
     * definitions with this key.
     */
    processDefinitionKey?: string | null;
    /**
     * If not `null`, the operation is restricted to entities in relation to this process
     * instance.
     */
    processInstanceId?: string | null;
    /**
     * If not `null`, the operation is restricted to entities in relation to this
     * execution.
     */
    executionId?: string | null;
    /**
     * If not `null`, the operation is restricted to entities in relation to this case
     * definition.
     */
    caseDefinitionId?: string | null;
    /**
     * If not `null`, the operation is restricted to entities in relation to this case
     * instance.
     */
    caseInstanceId?: string | null;
    /**
     * If not `null`, the operation is restricted to entities in relation to this case
     * execution.
     */
    caseExecutionId?: string | null;
    /**
     * If not `null`, the operation is restricted to entities in relation to this task.
     */
    taskId?: string | null;
    /**
     * If not `null`, the operation is restricted to entities in relation to this external task.
     */
    externalTaskId?: string | null;
    /**
     * If not `null`, the operation is restricted to entities in relation to this batch.
     */
    batchId?: string | null;
    /**
     * If not `null`, the operation is restricted to entities in relation to this job.
     */
    jobId?: string | null;
    /**
     * If not `null`, the operation is restricted to entities in relation to this job
     * definition.
     */
    jobDefinitionId?: string | null;
    /**
     * The time after which the entry should be removed by the History Cleanup job.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    removalTime?: string | null;
    /**
     * The process instance id of the root process instance that initiated the process
     * containing this entry.
     */
    rootProcessInstanceId?: string | null;
};

