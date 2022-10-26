/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type LockedExternalTaskDto = {
    /**
     * The id of the activity that this external task belongs to.
     */
    activityId?: string | null;
    /**
     * The id of the activity instance that the external task belongs to.
     */
    activityInstanceId?: string | null;
    /**
     * The full error message submitted with the latest reported failure executing this task;`null` if no failure
     * was reported previously or if no error message was submitted
     */
    errorMessage?: string | null;
    /**
     * The error details submitted with the latest reported failure executing this task.`null` if no failure was
     * reported previously or if no error details was submitted
     */
    errorDetails?: string | null;
    /**
     * The id of the execution that the external task belongs to.
     */
    executionId?: string | null;
    /**
     * The id of the external task.
     */
    id?: string | null;
    /**
     * The date that the task's most recent lock expires or has expired.
     */
    lockExpirationTime?: string | null;
    /**
     * The id of the process definition the external task is defined in.
     */
    processDefinitionId?: string | null;
    /**
     * The key of the process definition the external task is defined in.
     */
    processDefinitionKey?: string | null;
    /**
     * The version tag of the process definition the external task is defined in.
     */
    processDefinitionVersionTag?: string | null;
    /**
     * The id of the process instance the external task belongs to.
     */
    processInstanceId?: string | null;
    /**
     * The id of the tenant the external task belongs to.
     */
    tenantId?: string | null;
    /**
     * The number of retries the task currently has left.
     */
    retries?: number | null;
    /**
     * Whether the process instance the external task belongs to is suspended.
     */
    suspended?: boolean | null;
    /**
     * The id of the worker that posesses or posessed the most recent lock.
     */
    workerId?: string | null;
    /**
     * The priority of the external task.
     */
    priority?: number | null;
    /**
     * The topic name of the external task.
     */
    topicName?: string | null;
    /**
     * The business key of the process instance the external task belongs to.
     */
    businessKey?: string | null;
    /**
     * A JSON object containing a property for each of the requested variables. The key is the variable name,
     * the value is a JSON object of serialized variable values with the following properties:
     */
    variables?: Record<string, VariableValueDto> | null;
};

