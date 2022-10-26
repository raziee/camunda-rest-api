/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityInstanceDto } from '../models/ActivityInstanceDto';
import type { BatchDto } from '../models/BatchDto';
import type { CommentDto } from '../models/CommentDto';
import type { CorrelationMessageAsyncDto } from '../models/CorrelationMessageAsyncDto';
import type { CountResultDto } from '../models/CountResultDto';
import type { DeleteProcessInstancesDto } from '../models/DeleteProcessInstancesDto';
import type { MultiFormVariableBinaryDto } from '../models/MultiFormVariableBinaryDto';
import type { PatchVariablesDto } from '../models/PatchVariablesDto';
import type { ProcessInstanceDto } from '../models/ProcessInstanceDto';
import type { ProcessInstanceModificationDto } from '../models/ProcessInstanceModificationDto';
import type { ProcessInstanceQueryDto } from '../models/ProcessInstanceQueryDto';
import type { ProcessInstanceSuspensionStateAsyncDto } from '../models/ProcessInstanceSuspensionStateAsyncDto';
import type { ProcessInstanceSuspensionStateDto } from '../models/ProcessInstanceSuspensionStateDto';
import type { SetJobRetriesByProcessDto } from '../models/SetJobRetriesByProcessDto';
import type { SetVariablesAsyncDto } from '../models/SetVariablesAsyncDto';
import type { SuspensionStateDto } from '../models/SuspensionStateDto';
import type { VariableValueDto } from '../models/VariableValueDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProcessInstanceService {

    /**
     * Get List
     * Queries for process instances that fulfill given parameters.
     * Parameters may be static as well as dynamic runtime properties of process instances.
     * The size of the result set can be retrieved by using the Get Instance Count method.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param processInstanceIds Filter by a comma-separated list of process instance ids.
     * @param businessKey Filter by process instance business key.
     * @param businessKeyLike Filter by process instance business key that the parameter is a substring of.
     * @param caseInstanceId Filter by case instance id.
     * @param processDefinitionId Filter by the deployment the id belongs to.
     * @param processDefinitionKey Filter by the key of the process definition the instances run on.
     * @param processDefinitionKeyIn Filter by a comma-separated list of process definition keys.
     * A process instance must have one of the given process definition keys.
     * @param processDefinitionKeyNotIn Exclude instances by a comma-separated list of process definition keys.
     * A process instance must not have one of the given process definition keys.
     * @param deploymentId Filter by the deployment the id belongs to.
     * @param superProcessInstance Restrict query to all process instances that are sub process instances of the given process instance.
     * Takes a process instance id.
     * @param subProcessInstance Restrict query to all process instances that have the given process instance as a sub process instance.
     * Takes a process instance id.
     * @param superCaseInstance Restrict query to all process instances that are sub process instances of the given case instance.
     * Takes a case instance id.
     * @param subCaseInstance Restrict query to all process instances that have the given case instance as a sub case instance.
     * Takes a case instance id.
     * @param active Only include active process instances. Value may only be true,
     * as false is the default behavior.
     * @param suspended Only include suspended process instances. Value may only be true,
     * as false is the default behavior.
     * @param withIncident Filter by presence of incidents. Selects only process instances that have an incident.
     * @param incidentId Filter by the incident id.
     * @param incidentType Filter by the incident type.
     * See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/incidents/#incident-types)
     * for a list of incident types.
     * @param incidentMessage Filter by the incident message. Exact match.
     * @param incidentMessageLike Filter by the incident message that the parameter is a substring of.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A process instance must have one of the given tenant ids.
     * @param withoutTenantId Only include process instances which belong to no tenant.
     * @param processDefinitionWithoutTenantId Only include process instances which process definition has no tenant id.
     * @param activityIdIn Filter by a comma-separated list of activity ids.
     * A process instance must currently wait in a leaf activity with one of the given activity ids.
     * @param rootProcessInstances Restrict the query to all process instances that are top level process instances.
     * @param leafProcessInstances Restrict the query to all process instances that are leaf instances. (i.e. don't have any sub instances).
     * @param variables Only include process instances that have variables with certain values.
     * Variable filtering expressions are comma-separated and are structured as follows:
     *
     * A valid parameter value has the form `key_operator_value`. `key` is the variable name,
     * `operator` is the comparison operator to be used and `value` the variable value.
     *
     * **Note**: Values are always treated as String objects on server side.
     *
     * Valid `operator` values are:
     * `eq` - equal to;
     * `neq` - not equal to;
     * `gt` - greater than;
     * `gteq` - greater than or equal to;
     * `lt` - lower than;
     * `lteq` - lower than or equal to;
     * `like`.
     * `key` and `value` may not contain underscore or comma characters.
     * @param variableNamesIgnoreCase Match all variable names in this query case-insensitively.
     * If set to true variableName and variablename are treated as equal.
     * @param variableValuesIgnoreCase Match all variable values in this query case-insensitively.
     * If set to true variableValue and variablevalue are treated as equal.
     * @returns ProcessInstanceDto Request successful.
     * @throws ApiError
     */
    public static getProcessInstances(
        sortBy?: 'instanceId' | 'definitionKey' | 'definitionId' | 'tenantId' | 'businessKey',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
        processInstanceIds?: string,
        businessKey?: string,
        businessKeyLike?: string,
        caseInstanceId?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        processDefinitionKeyIn?: string,
        processDefinitionKeyNotIn?: string,
        deploymentId?: string,
        superProcessInstance?: string,
        subProcessInstance?: string,
        superCaseInstance?: string,
        subCaseInstance?: string,
        active: boolean = false,
        suspended: boolean = false,
        withIncident: boolean = false,
        incidentId?: string,
        incidentType?: string,
        incidentMessage?: string,
        incidentMessageLike?: string,
        tenantIdIn?: string,
        withoutTenantId: boolean = false,
        processDefinitionWithoutTenantId: boolean = false,
        activityIdIn?: string,
        rootProcessInstances: boolean = false,
        leafProcessInstances: boolean = false,
        variables?: string,
        variableNamesIgnoreCase: boolean = false,
        variableValuesIgnoreCase: boolean = false,
    ): CancelablePromise<Array<ProcessInstanceDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-instance',
            query: {
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
                'processInstanceIds': processInstanceIds,
                'businessKey': businessKey,
                'businessKeyLike': businessKeyLike,
                'caseInstanceId': caseInstanceId,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'processDefinitionKeyNotIn': processDefinitionKeyNotIn,
                'deploymentId': deploymentId,
                'superProcessInstance': superProcessInstance,
                'subProcessInstance': subProcessInstance,
                'superCaseInstance': superCaseInstance,
                'subCaseInstance': subCaseInstance,
                'active': active,
                'suspended': suspended,
                'withIncident': withIncident,
                'incidentId': incidentId,
                'incidentType': incidentType,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'processDefinitionWithoutTenantId': processDefinitionWithoutTenantId,
                'activityIdIn': activityIdIn,
                'rootProcessInstances': rootProcessInstances,
                'leafProcessInstances': leafProcessInstances,
                'variables': variables,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
            },
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid,
                for example if a sortOrder parameter is supplied, but no sortBy, or if an invalid operator for variable comparison is used.`,
            },
        });
    }

    /**
     * Get List (POST)
     * Queries for process instances that fulfill given parameters through a JSON object.
     * This method is slightly more powerful than the Get Instances method because
     * it allows filtering by multiple process variables of types `string`, `number` or `boolean`.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param requestBody
     * @returns ProcessInstanceDto Request successful.
     * @throws ApiError
     */
    public static queryProcessInstances(
        firstResult?: number,
        maxResults?: number,
        requestBody?: ProcessInstanceQueryDto,
    ): CancelablePromise<Array<ProcessInstanceDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-instance',
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid,
                for example if a sortOrder parameter is supplied, but no sortBy, or if an invalid operator for variable comparison is used.`,
            },
        });
    }

    /**
     * Get List Count
     * Queries for the number of process instances that fulfill given parameters.
     * @param processInstanceIds Filter by a comma-separated list of process instance ids.
     * @param businessKey Filter by process instance business key.
     * @param businessKeyLike Filter by process instance business key that the parameter is a substring of.
     * @param caseInstanceId Filter by case instance id.
     * @param processDefinitionId Filter by the deployment the id belongs to.
     * @param processDefinitionKey Filter by the key of the process definition the instances run on.
     * @param processDefinitionKeyIn Filter by a comma-separated list of process definition keys.
     * A process instance must have one of the given process definition keys.
     * @param processDefinitionKeyNotIn Exclude instances by a comma-separated list of process definition keys.
     * A process instance must not have one of the given process definition keys.
     * @param deploymentId Filter by the deployment the id belongs to.
     * @param superProcessInstance Restrict query to all process instances that are sub process instances of the given process instance.
     * Takes a process instance id.
     * @param subProcessInstance Restrict query to all process instances that have the given process instance as a sub process instance.
     * Takes a process instance id.
     * @param superCaseInstance Restrict query to all process instances that are sub process instances of the given case instance.
     * Takes a case instance id.
     * @param subCaseInstance Restrict query to all process instances that have the given case instance as a sub case instance.
     * Takes a case instance id.
     * @param active Only include active process instances. Value may only be true,
     * as false is the default behavior.
     * @param suspended Only include suspended process instances. Value may only be true,
     * as false is the default behavior.
     * @param withIncident Filter by presence of incidents. Selects only process instances that have an incident.
     * @param incidentId Filter by the incident id.
     * @param incidentType Filter by the incident type.
     * See the [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/incidents/#incident-types)
     * for a list of incident types.
     * @param incidentMessage Filter by the incident message. Exact match.
     * @param incidentMessageLike Filter by the incident message that the parameter is a substring of.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A process instance must have one of the given tenant ids.
     * @param withoutTenantId Only include process instances which belong to no tenant.
     * @param processDefinitionWithoutTenantId Only include process instances which process definition has no tenant id.
     * @param activityIdIn Filter by a comma-separated list of activity ids.
     * A process instance must currently wait in a leaf activity with one of the given activity ids.
     * @param rootProcessInstances Restrict the query to all process instances that are top level process instances.
     * @param leafProcessInstances Restrict the query to all process instances that are leaf instances. (i.e. don't have any sub instances).
     * @param variables Only include process instances that have variables with certain values.
     * Variable filtering expressions are comma-separated and are structured as follows:
     *
     * A valid parameter value has the form `key_operator_value`. `key` is the variable name,
     * `operator` is the comparison operator to be used and `value` the variable value.
     *
     * **Note**: Values are always treated as String objects on server side.
     *
     * Valid `operator` values are:
     * `eq` - equal to;
     * `neq` - not equal to;
     * `gt` - greater than;
     * `gteq` - greater than or equal to;
     * `lt` - lower than;
     * `lteq` - lower than or equal to;
     * `like`.
     * `key` and `value` may not contain underscore or comma characters.
     * @param variableNamesIgnoreCase Match all variable names in this query case-insensitively.
     * If set to true variableName and variablename are treated as equal.
     * @param variableValuesIgnoreCase Match all variable values in this query case-insensitively.
     * If set to true variableValue and variablevalue are treated as equal.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getProcessInstancesCount(
        processInstanceIds?: string,
        businessKey?: string,
        businessKeyLike?: string,
        caseInstanceId?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        processDefinitionKeyIn?: string,
        processDefinitionKeyNotIn?: string,
        deploymentId?: string,
        superProcessInstance?: string,
        subProcessInstance?: string,
        superCaseInstance?: string,
        subCaseInstance?: string,
        active: boolean = false,
        suspended: boolean = false,
        withIncident: boolean = false,
        incidentId?: string,
        incidentType?: string,
        incidentMessage?: string,
        incidentMessageLike?: string,
        tenantIdIn?: string,
        withoutTenantId: boolean = false,
        processDefinitionWithoutTenantId: boolean = false,
        activityIdIn?: string,
        rootProcessInstances: boolean = false,
        leafProcessInstances: boolean = false,
        variables?: string,
        variableNamesIgnoreCase: boolean = false,
        variableValuesIgnoreCase: boolean = false,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-instance/count',
            query: {
                'processInstanceIds': processInstanceIds,
                'businessKey': businessKey,
                'businessKeyLike': businessKeyLike,
                'caseInstanceId': caseInstanceId,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'processDefinitionKeyNotIn': processDefinitionKeyNotIn,
                'deploymentId': deploymentId,
                'superProcessInstance': superProcessInstance,
                'subProcessInstance': subProcessInstance,
                'superCaseInstance': superCaseInstance,
                'subCaseInstance': subCaseInstance,
                'active': active,
                'suspended': suspended,
                'withIncident': withIncident,
                'incidentId': incidentId,
                'incidentType': incidentType,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'processDefinitionWithoutTenantId': processDefinitionWithoutTenantId,
                'activityIdIn': activityIdIn,
                'rootProcessInstances': rootProcessInstances,
                'leafProcessInstances': leafProcessInstances,
                'variables': variables,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
            },
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid, for example an invalid operator for variable comparison is used.`,
            },
        });
    }

    /**
     * Get List Count (POST)
     * Queries for the number of process instances that fulfill the given parameters.
     * This method takes the same message body as the Get Instances (POST) method and
     * therefore it is slightly more powerful than the Get Instance Count method.
     * @param requestBody
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryProcessInstancesCount(
        requestBody?: ProcessInstanceQueryDto,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-instance/count',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid, for example if an invalid operator for variable comparison is used.`,
            },
        });
    }

    /**
     * Delete Async (POST)
     * Deletes multiple process instances asynchronously (batch).
     * @param requestBody **Unallowed property**: `historicProcessInstanceQuery`
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static deleteProcessInstancesAsyncOperation(
        requestBody?: DeleteProcessInstancesDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-instance/delete',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid, i.e., neither processInstanceIds, nor processInstanceQuery is present`,
            },
        });
    }

    /**
     * Delete Async Historic Query Based (POST)
     * Deletes a set of process instances asynchronously (batch) based on a historic process instance query.
     * @param requestBody **Unallowed property**: `processInstanceQuery`
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static deleteAsyncHistoricQueryBased(
        requestBody?: DeleteProcessInstancesDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-instance/delete-historic-query-based',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid, i.e., neither processInstanceIds, nor historicProcessInstanceQuery is present`,
            },
        });
    }

    /**
     * Set Job Retries Async (POST)
     * Create a batch to set retries of jobs associated with given processes asynchronously.
     * @param requestBody Please note that if both processInstances and processInstanceQuery are provided,
     * then the resulting execution will be performed on the union of these sets.
     * **Unallowed property**: `historicProcessInstanceQuery`
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static setRetriesByProcess(
        requestBody?: SetJobRetriesByProcessDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-instance/job-retries',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid, for example if neither processInstanceIds, nor processInstanceQuery is present.
                Or if the retry count is not specified.`,
            },
        });
    }

    /**
     * Set Job Retries Async Historic Query Based (POST)
     * Create a batch to set retries of jobs asynchronously based on a historic process instance query.
     * @param requestBody Please note that if both processInstances and historicProcessInstanceQuery are provided,
     * then the resulting execution will be performed on the union of these sets.
     * **Unallowed property**: `processInstanceQuery`
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static setRetriesByProcessHistoricQueryBased(
        requestBody?: SetJobRetriesByProcessDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-instance/job-retries-historic-query-based',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid, for example if neither processInstanceIds, nor historicProcessInstanceQuery is present.
                Or if the retry count is not specified.`,
            },
        });
    }

    /**
     * Correlate Message Async (POST)
     * Correlates a message asynchronously to executions that are waiting for this message.
     * Messages will not be correlated to process definition-level start message events to start process instances.
     * @param requestBody
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static correlateMessageAsyncOperation(
        requestBody?: CorrelationMessageAsyncDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-instance/message-async',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                 * If none of \`processInstanceIds\`, \`processInstanceQuery\`, and \`historicProcessInstanceQuery\` is given
                 * If no process instance ids where found`,
                403: `Returned if the user is not allowed to create the batch.

                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the
                error response format.`,
            },
        });
    }

    /**
     * Activate/Suspend In Group
     * Activates or suspends process instances by providing certain criteria:
     *
     * # Activate/Suspend Process Instance By Process Definition Id
     * * `suspend`
     * * `processDefinitionId`
     *
     * # Activate/Suspend Process Instance By Process Definition Key
     *
     * * `suspend`
     * * `processDefinitionKey`
     * * `processDefinitionTenantId`
     * * `processDefinitionWithoutTenantId`
     *
     * # Activate/Suspend Process Instance In Group
     * * `suspend`
     * * `processInstanceIds`
     * * `processInstanceQuery`
     * * `historicProcessInstanceQuery`
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateSuspensionState(
        requestBody?: ProcessInstanceSuspensionStateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/process-instance/suspended',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                Returned if some of the request parameters are invalid,
                for example if the provided processDefinitionId or processDefinitionKey parameter is null.`,
            },
        });
    }

    /**
     * Activate/Suspend In Batch
     * Activates or suspends process instances asynchronously with a list of process instance ids,
     * a process instance query, and/or a historical process instance query.
     * @param requestBody
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static updateSuspensionStateAsyncOperation(
        requestBody?: ProcessInstanceSuspensionStateAsyncDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-instance/suspended-async',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                Returned if some of the request parameters are invalid,
                for example if the provided processDefinitionId or processDefinitionKey parameter is null.`,
            },
        });
    }

    /**
     * Set Variables Async (POST)
     * Update or create runtime process variables in the root scope of process instances.
     * @param requestBody
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static setVariablesAsyncOperation(
        requestBody?: SetVariablesAsyncDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-instance/variables-async',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                 * The variable value or type is invalid, for example if the value could not be parsed to an Integer value or
                the passed variable type is not supported
                 * If none of \`processInstanceIds\`, \`processInstanceQuery\` and \`historicProcessInstanceQuery\` is given
                 * If no or an empty array of \`variables\` is given
                 * If no process instance ids where found
                 * If a transient variable is set
                 * If the engine config flag \`javaSerializationFormatEnabled\` is \`false\` and a Java serialized variable is given`,
                403: `Returned if the user is not allowed to create the batch.

                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the
                error response format.`,
            },
        });
    }

    /**
     * Delete
     * Deletes a running process instance by id.
     * @param id The id of the process instance to be deleted.
     * @param skipCustomListeners If set to true, the custom listeners will be skipped.
     * @param skipIoMappings If set to true, the input/output mappings will be skipped.
     * @param skipSubprocesses If set to true, subprocesses related to deleted processes will be skipped.
     * @param failIfNotExists If set to false, the request will still be successful if the process id is not found.
     * @returns void
     * @throws ApiError
     */
    public static deleteProcessInstance(
        id: string,
        skipCustomListeners: boolean = false,
        skipIoMappings: boolean = false,
        skipSubprocesses: boolean = false,
        failIfNotExists: boolean = true,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/process-instance/{id}',
            path: {
                'id': id,
            },
            query: {
                'skipCustomListeners': skipCustomListeners,
                'skipIoMappings': skipIoMappings,
                'skipSubprocesses': skipSubprocesses,
                'failIfNotExists': failIfNotExists,
            },
            errors: {
                404: `Not found
                Process instance with given id does not exist. `,
            },
        });
    }

    /**
     * Get Process Instance
     * Retrieves a process instance by id, according to the `ProcessInstance` interface in the engine.
     * @param id The id of the process instance to be retrieved.
     * @returns ProcessInstanceDto Request successful.
     * @throws ApiError
     */
    public static getProcessInstance(
        id: string,
    ): CancelablePromise<ProcessInstanceDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-instance/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Process instance with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format. `,
            },
        });
    }

    /**
     * Get Activity Instance
     * Retrieves an Activity Instance (Tree) for a given process instance by id.
     * @param id The id of the process instance for which the activity instance should be retrieved.
     * @returns ActivityInstanceDto Request successful.
     * @throws ApiError
     */
    public static getActivityInstanceTree(
        id: string,
    ): CancelablePromise<ActivityInstanceDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-instance/{id}/activity-instances',
            path: {
                'id': id,
            },
            errors: {
                500: `Process instance with given id does not exist.`,
            },
        });
    }

    /**
     * Get Process Instance Comments
     * Gets the comments for a process instance by id.
     * @param id The id of the process instance to retrieve the comments for.
     * @returns CommentDto Request successful.
     * @throws ApiError
     */
    public static getProcessInstanceComments(
        id: string,
    ): CancelablePromise<Array<CommentDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-instance/{id}/comment',
            path: {
                'id': id,
            },
            errors: {
                404: `No process instance exists for the given process instance id. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Modify Process Instance Execution State
     * Submits a list of modification instructions to change a process instance's execution state.
     * A modification instruction is one of the following:
     *
     * * Starting execution before an activity
     * * Starting execution after an activity on its single outgoing sequence flow
     * * Starting execution on a specific sequence flow
     * * Canceling an activity instance, transition instance, or all instances (activity or transition) for an activity
     *
     * Instructions are executed immediately and in the order they are provided in this request's body.
     * Variables can be provided with every starting instruction.
     *
     * The exact semantics of modification can be read about in the [User guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/process-instance-modification/).
     * @param id The id of the process instance to modify.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static modifyProcessInstance(
        id: string,
        requestBody?: ProcessInstanceModificationDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-instance/{id}/modification',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `At least one modification instruction misses required parameters.`,
                500: `The modification cannot be performed, for example because it starts a failing activity.`,
            },
        });
    }

    /**
     * Modify Process Instance Execution State Async
     * Submits a list of modification instructions to change a process instance's execution state async.
     * A modification instruction is one of the following:
     *
     * * Starting execution before an activity
     * * Starting execution after an activity on its single outgoing sequence flow
     * * Starting execution on a specific sequence flow
     * * Cancelling an activity instance, transition instance, or all instances (activity or transition) for an activity
     *
     * Instructions are executed asynchronous and in the order they are provided in this request's body.
     * Variables can be provided with every starting instruction.
     *
     * The exact semantics of modification can be read about in the
     * [User guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/process-instance-modification/).
     * @param id The id of the process instance to modify.
     * @param requestBody
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static modifyProcessInstanceAsyncOperation(
        id: string,
        requestBody?: ProcessInstanceModificationDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-instance/{id}/modification-async',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                At least one modification instruction misses required parameters.`,
                403: `Forbidden
                If the user is not allowed to execute batches. See the Introduction for the error response format.`,
                500: `The modification cannot be performed, for example because it starts a failing activity.`,
            },
        });
    }

    /**
     * Activate/Suspend Process Instance By Id
     * Activates or suspends a given process instance by id.
     * @param id The id of the process instance to activate or suspend.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateSuspensionStateById(
        id: string,
        requestBody?: SuspensionStateDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/process-instance/{id}/suspended',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Process Variables
     * Retrieves all variables of a given process instance by id.
     * @param id The id of the process instance to retrieve the variables from.
     * @param deserializeValues Determines whether serializable variable values (typically variables that store custom Java objects)
     * should be deserialized on server side (default true).
     *
     * If set to true, a serializable variable will be deserialized on server side and transformed to JSON
     * using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature.
     * Note that this requires the Java classes of the variable value to be on the REST API's classpath.
     *
     * If set to false, a serializable variable will be returned in its serialized format.
     * For example, a variable that is serialized as XML will be returned as a JSON string containing XML.
     *
     * Note: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false
     * when developing web applications that are independent of the Java process applications deployed to the engine.
     * @returns VariableValueDto Request successful.
     * @throws ApiError
     */
    public static getProcessInstanceVariables(
        id: string,
        deserializeValues: boolean = true,
    ): CancelablePromise<Record<string, VariableValueDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-instance/{id}/variables',
            path: {
                'id': id,
            },
            query: {
                'deserializeValues': deserializeValues,
            },
            errors: {
                500: `Process instance with given id does not exist.`,
            },
        });
    }

    /**
     * Update/Delete Process Variables
     * Updates or deletes the variables of a process instance by id. Updates precede deletions.
     * So, if a variable is updated AND deleted, the deletion overrides the update.
     * @param id The id of the process instance to set variables for.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static modifyProcessInstanceVariables(
        id: string,
        requestBody?: PatchVariablesDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-instance/{id}/variables',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                The variable value or type is invalid, for example if the value could not be parsed to an Integer value or
                the passed variable type is not supported.`,
                500: `Update or delete could not be executed, for example because the process instance does not exist.`,
            },
        });
    }

    /**
     * Delete Process Variable
     * Deletes a variable of a process instance by id.
     * @param id The id of the process instance to delete the variable from.
     * @param varName The name of the variable to delete.
     * @returns void
     * @throws ApiError
     */
    public static deleteProcessInstanceVariable(
        id: string,
        varName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/process-instance/{id}/variables/{varName}',
            path: {
                'id': id,
                'varName': varName,
            },
        });
    }

    /**
     * Get Process Variable
     * Retrieves a variable of a given process instance by id.
     * @param id The id of the process instance to retrieve the variable for.
     * @param varName The name of the variable to retrieve.
     * @param deserializeValue Determines whether serializable variable values (typically variables that store custom Java objects)
     * should be deserialized on server side (default true).
     *
     * If set to true, a serializable variable will be deserialized on server side and transformed to JSON
     * using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature.
     * Note that this requires the Java classes of the variable value to be on the REST API's classpath.
     *
     * If set to false, a serializable variable will be returned in its serialized format.
     * For example, a variable that is serialized as XML will be returned as a JSON string containing XML.
     *
     * Note: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false
     * when developing web applications that are independent of the Java process applications deployed to the engine.
     * @returns VariableValueDto Request successful.
     * @throws ApiError
     */
    public static getProcessInstanceVariable(
        id: string,
        varName: string,
        deserializeValue: boolean = true,
    ): CancelablePromise<VariableValueDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-instance/{id}/variables/{varName}',
            path: {
                'id': id,
                'varName': varName,
            },
            query: {
                'deserializeValue': deserializeValue,
            },
            errors: {
                400: `Bad Request
                Variable with given id does not exist.`,
            },
        });
    }

    /**
     * Update Process Variable
     * Sets a variable of a given process instance by id.
     * @param id The id of the process instance to set the variable for.
     * @param varName The name of the variable to set.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static setProcessInstanceVariable(
        id: string,
        varName: string,
        requestBody?: VariableValueDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/process-instance/{id}/variables/{varName}',
            path: {
                'id': id,
                'varName': varName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                The variable value or type is invalid, for example if the value could not be parsed to an Integer value or
                the passed variable type is not supported.`,
            },
        });
    }

    /**
     * Get Process Variable (Binary)
     * Retrieves the content of a Process Variable by the Process Instance id and the Process Variable name.
     * Applicable for byte array or file Process Variables.
     * @param id The id of the process instance to retrieve the variable for.
     * @param varName The name of the variable to retrieve.
     * @returns binary Request successful.
     * For binary variables or files without any MIME type information, a byte stream is returned.
     * File variables with MIME type information are returned as the saved type.
     * Additionally, for file variables the Content-Disposition header will be set.
     * @throws ApiError
     */
    public static getProcessInstanceVariableBinary(
        id: string,
        varName: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-instance/{id}/variables/{varName}/data',
            path: {
                'id': id,
                'varName': varName,
            },
            errors: {
                400: `Bad Request
                A Process Variable with the given id exists but does not serialize as binary data.`,
                404: `Not Found
                A Process Variable with the given id does not exist. `,
            },
        });
    }

    /**
     * Update Process Variable (Binary)
     * Sets the serialized value for a binary variable or the binary value for a file variable.
     * @param id The id of the process instance to retrieve the variable for.
     * @param varName The name of the variable to retrieve.
     * @param formData For binary variables a multipart form submit with the following parts:
     * @returns void
     * @throws ApiError
     */
    public static setProcessInstanceVariableBinary(
        id: string,
        varName: string,
        formData?: MultiFormVariableBinaryDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-instance/{id}/variables/{varName}/data',
            path: {
                'id': id,
                'varName': varName,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request
                The variable value or type is invalid, for example if no filename is set.`,
            },
        });
    }

}
