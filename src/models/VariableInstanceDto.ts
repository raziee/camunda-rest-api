/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type VariableInstanceDto = ({
    /**
     * The id of the variable instance.
     */
    id?: string | null;
    /**
     * The name of the variable instance.
     */
    name?: string | null;
    /**
     * The id of the process definition that this variable instance belongs to.
     */
    processDefinitionId?: string | null;
    /**
     * The id of the process instance that this variable instance belongs to.
     */
    processInstanceId?: string | null;
    /**
     * The id of the execution that this variable instance belongs to.
     */
    executionId?: string | null;
    /**
     * The id of the case instance that this variable instance belongs to.
     */
    caseInstanceId?: string | null;
    /**
     * The id of the case execution that this variable instance belongs to.
     */
    caseExecutionId?: string | null;
    /**
     * The id of the task that this variable instance belongs to.
     */
    taskId?: string | null;
    /**
     * The id of the batch that this variable instance belongs to.<
     */
    batchId?: string | null;
    /**
     * The id of the activity instance that this variable instance belongs to.
     */
    activityInstanceId?: string | null;
    /**
     * The id of the tenant that this variable instance belongs to.
     */
    tenantId?: string | null;
    /**
     * An error message in case a Java Serialized Object could not be de-serialized.
     */
    errorMessage?: string | null;
} & VariableValueDto);

