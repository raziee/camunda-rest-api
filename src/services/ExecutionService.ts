/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { CreateIncidentDto } from '../models/CreateIncidentDto';
import type { EventSubscriptionDto } from '../models/EventSubscriptionDto';
import type { ExecutionDto } from '../models/ExecutionDto';
import type { ExecutionQueryDto } from '../models/ExecutionQueryDto';
import type { ExecutionTriggerDto } from '../models/ExecutionTriggerDto';
import type { IncidentDto } from '../models/IncidentDto';
import type { MultiFormVariableBinaryDto } from '../models/MultiFormVariableBinaryDto';
import type { PatchVariablesDto } from '../models/PatchVariablesDto';
import type { VariableValueDto } from '../models/VariableValueDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ExecutionService {

    /**
     * Get Executions
     * Queries for the executions that fulfill given parameters.
     * Parameters may be static as well as dynamic runtime properties of
     * executions.
     * The size of the result set can be retrieved by using the [Get
     * Execution Count](https://docs.camunda.org/manual/7.18/reference/rest/execution/get-query-count/)
     * method.
     * @param businessKey Filter by the business key of the process instances the executions belong to.
     * @param processDefinitionId Filter by the process definition the executions run on.
     * @param processDefinitionKey Filter by the key of the process definition the executions run on.
     * @param processInstanceId Filter by the id of the process instance the execution belongs to.
     * @param activityId Filter by the id of the activity the execution currently executes.
     * @param signalEventSubscriptionName Select only those executions that expect a signal of the given name.
     * @param messageEventSubscriptionName Select only those executions that expect a message of the given name.
     * @param active Only include active executions. Value may only be `true`, as `false` is the default
     * behavior.
     * @param suspended Only include suspended executions. Value may only be `true`, as `false` is the default
     * behavior.
     * @param incidentId Filter by the incident id.
     * @param incidentType Filter by the incident type. See the [User Guide](/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
     * @param incidentMessage Filter by the incident message. Exact match.
     * @param incidentMessageLike Filter by the incident message that the parameter is a substring of.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. An execution must have one of the given
     * tenant ids.
     * @param variables Only include executions that have variables with certain values.
     * Variable filtering expressions are comma-separated and are structured as
     * follows:
     *
     * A valid parameter value has the form `key_operator_value`.
     * `key` is the variable name, `operator` is the comparison operator to be used
     * and `value` the variable value.
     * **Note:** Values are always treated as `String` objects on server side.
     *
     * Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` -
     * greater than;
     * `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or
     * equal to;
     * `like`.
     * `key` and `value` may not contain underscore or comma characters.
     * @param processVariables Only include executions that belong to a process instance with variables with certain
     * values.
     * Variable filtering expressions are comma-separated and are structured as
     * follows:
     *
     * A valid parameter value has the form `key_operator_value`.
     * `key` is the variable name, `operator` is the comparison operator to be used
     * and `value` the variable value.
     * **Note:** Values are always treated as `String` objects on server side.
     *
     * Valid operator values are: `eq` - equal to; `neq` - not equal to.
     * `key` and `value` may not contain underscore or comma characters.
     * @param variableNamesIgnoreCase Match all variable names provided in `variables` and `processVariables` case-
     * insensitively. If set to `true` **variableName** and **variablename** are
     * treated as equal.
     * @param variableValuesIgnoreCase Match all variable values provided in `variables` and `processVariables` case-
     * insensitively. If set to `true` **variableValue** and **variablevalue** are
     * treated as equal.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns ExecutionDto Request successful.
     * @throws ApiError
     */
    public static getExecutions(
        businessKey?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        processInstanceId?: string,
        activityId?: string,
        signalEventSubscriptionName?: string,
        messageEventSubscriptionName?: string,
        active?: boolean,
        suspended?: boolean,
        incidentId?: string,
        incidentType?: string,
        incidentMessage?: string,
        incidentMessageLike?: string,
        tenantIdIn?: string,
        variables?: string,
        processVariables?: string,
        variableNamesIgnoreCase?: boolean,
        variableValuesIgnoreCase?: boolean,
        sortBy?: 'instanceId' | 'definitionKey' | 'definitionId' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<ExecutionDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/execution',
            query: {
                'businessKey': businessKey,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processInstanceId': processInstanceId,
                'activityId': activityId,
                'signalEventSubscriptionName': signalEventSubscriptionName,
                'messageEventSubscriptionName': messageEventSubscriptionName,
                'active': active,
                'suspended': suspended,
                'incidentId': incidentId,
                'incidentType': incidentType,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'tenantIdIn': tenantIdIn,
                'variables': variables,
                'processVariables': processVariables,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\`
                parameter is supplied, but no \`sortBy\`, or if an invalid operator
                for variable comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Executions (POST)
     * Queries for executions that fulfill given parameters through a JSON object.
     * This method is slightly more powerful than the [Get
     * Executions](https://docs.camunda.org/manual/7.18/reference/rest/execution/get-query/) method
     * because it allows
     * to filter by multiple instance and execution variables of types
     * `String`, `Number` or `Boolean`.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param requestBody
     * @returns ExecutionDto Request successful.
     * @throws ApiError
     */
    public static queryExecutions(
        firstResult?: number,
        maxResults?: number,
        requestBody?: ExecutionQueryDto,
    ): CancelablePromise<Array<ExecutionDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/execution',
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\`
                parameter is supplied, but no \`sortBy\`, or if an invalid operator
                for variable comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Execution Count
     * Queries for the number of executions that fulfill given parameters.
     * Takes the same parameters as the [Get
     * Executions](https://docs.camunda.org/manual/7.18/reference/rest/execution/get-query/) method.
     * @param businessKey Filter by the business key of the process instances the executions belong to.
     * @param processDefinitionId Filter by the process definition the executions run on.
     * @param processDefinitionKey Filter by the key of the process definition the executions run on.
     * @param processInstanceId Filter by the id of the process instance the execution belongs to.
     * @param activityId Filter by the id of the activity the execution currently executes.
     * @param signalEventSubscriptionName Select only those executions that expect a signal of the given name.
     * @param messageEventSubscriptionName Select only those executions that expect a message of the given name.
     * @param active Only include active executions. Value may only be `true`, as `false` is the default
     * behavior.
     * @param suspended Only include suspended executions. Value may only be `true`, as `false` is the default
     * behavior.
     * @param incidentId Filter by the incident id.
     * @param incidentType Filter by the incident type. See the [User Guide](/manual/develop/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
     * @param incidentMessage Filter by the incident message. Exact match.
     * @param incidentMessageLike Filter by the incident message that the parameter is a substring of.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. An execution must have one of the given
     * tenant ids.
     * @param variables Only include executions that have variables with certain values.
     * Variable filtering expressions are comma-separated and are structured as
     * follows:
     *
     * A valid parameter value has the form `key_operator_value`.
     * `key` is the variable name, `operator` is the comparison operator to be used
     * and `value` the variable value.
     * **Note:** Values are always treated as `String` objects on server side.
     *
     * Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` -
     * greater than;
     * `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or
     * equal to;
     * `like`.
     * `key` and `value` may not contain underscore or comma characters.
     * @param processVariables Only include executions that belong to a process instance with variables with certain
     * values.
     * Variable filtering expressions are comma-separated and are structured as
     * follows:
     *
     * A valid parameter value has the form `key_operator_value`.
     * `key` is the variable name, `operator` is the comparison operator to be used
     * and `value` the variable value.
     * **Note:** Values are always treated as `String` objects on server side.
     *
     * Valid operator values are: `eq` - equal to; `neq` - not equal to.
     * `key` and `value` may not contain underscore or comma characters.
     * @param variableNamesIgnoreCase Match all variable names provided in `variables` and `processVariables` case-
     * insensitively. If set to `true` **variableName** and **variablename** are
     * treated as equal.
     * @param variableValuesIgnoreCase Match all variable values provided in `variables` and `processVariables` case-
     * insensitively. If set to `true` **variableValue** and **variablevalue** are
     * treated as equal.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getExecutionsCount(
        businessKey?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        processInstanceId?: string,
        activityId?: string,
        signalEventSubscriptionName?: string,
        messageEventSubscriptionName?: string,
        active?: boolean,
        suspended?: boolean,
        incidentId?: string,
        incidentType?: string,
        incidentMessage?: string,
        incidentMessageLike?: string,
        tenantIdIn?: string,
        variables?: string,
        processVariables?: string,
        variableNamesIgnoreCase?: boolean,
        variableValuesIgnoreCase?: boolean,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/execution/count',
            query: {
                'businessKey': businessKey,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processInstanceId': processInstanceId,
                'activityId': activityId,
                'signalEventSubscriptionName': signalEventSubscriptionName,
                'messageEventSubscriptionName': messageEventSubscriptionName,
                'active': active,
                'suspended': suspended,
                'incidentId': incidentId,
                'incidentType': incidentType,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'tenantIdIn': tenantIdIn,
                'variables': variables,
                'processVariables': processVariables,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if an invalid operator
                for variable comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Execution Count (POST)
     * Queries for the number of executions that fulfill given parameters. This method
     * takes the same message body as the [Get Executions
     * POST](https://docs.camunda.org/manual/7.18/reference/rest/execution/post-query/) method and
     * therefore it is slightly more powerful than the [Get Execution
     * Count](https://docs.camunda.org/manual/7.18/reference/rest/execution/get-query-count/) method.
     * @param requestBody
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryExecutionsCount(
        requestBody?: ExecutionQueryDto,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/execution/count',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if an invalid operator
                for variable comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Execution
     * Retrieves an execution by id, according to the `Execution` interface in the
     * engine.
     * @param id The id of the execution to be retrieved.
     * @returns ExecutionDto Request successful.
     * @throws ApiError
     */
    public static getExecution(
        id: string,
    ): CancelablePromise<ExecutionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/execution/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Execution with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Create Incident
     * Creates a custom incident with given properties.
     * @param id The id of the execution to create a new incident for.
     * @param requestBody
     * @returns IncidentDto Request successful.
     * @throws ApiError
     */
    public static createIncident(
        id: string,
        requestBody?: CreateIncidentDto,
    ): CancelablePromise<IncidentDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/execution/{id}/create-incident',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the incident type is null, the execution does not exist or the
                execution is not related to any activity.`,
            },
        });
    }

    /**
     * Get Local Execution Variables
     * Retrieves all variables of a given execution by id.
     * @param id The id of the execution to retrieve the variables from.
     * @param deserializeValues Determines whether serializable variable values (typically
     * variables that store custom Java objects) should be deserialized
     * on server side (default `true`).
     *
     * If set to `true`, a serializable variable will be deserialized on
     * server side and transformed to JSON using
     * [Jackson's](https://github.com/FasterXML/jackson) POJO/bean
     * property introspection feature. Note that this requires the Java
     * classes of the variable value to be on the REST API's classpath.
     *
     * If set to `false`, a serializable variable will be returned in its
     * serialized format. For example, a variable that is serialized as
     * XML will be returned as a JSON string containing XML.
     *
     * **Note:** While `true` is the default value for reasons of
     * backward compatibility, we recommend setting this parameter to
     * `false` when developing web applications that are independent of
     * the Java process applications deployed to the engine.
     * @returns VariableValueDto Request successful. Returns A JSON object of variables key-value pairs. Each key is a variable name and each value a VariableValueDto
     * @throws ApiError
     */
    public static getLocalExecutionVariables(
        id: string,
        deserializeValues?: boolean,
    ): CancelablePromise<Record<string, VariableValueDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/execution/{id}/localVariables',
            path: {
                'id': id,
            },
            query: {
                'deserializeValues': deserializeValues,
            },
            errors: {
                500: `Execution with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Update/Delete Local Execution Variables
     * Updates or deletes the variables in the context of an execution by id. The updates
     * do not propagate upwards in the execution hierarchy.
     * Updates precede deletions. So, if a variable is updated AND deleted,
     * the deletion overrides the update.
     * @param id The id of the execution to set variables for.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static modifyLocalExecutionVariables(
        id: string,
        requestBody?: PatchVariablesDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/execution/{id}/localVariables',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The variable value or type is invalid, for example if the value could not be parsed
                to an Integer value or the passed variable type is not supported.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-
                handling) for the error response format.`,
                500: `Update or delete could not be executed, for example because the execution does not
                exist.`,
            },
        });
    }

    /**
     * Delete Local Execution Variable
     * Deletes a variable in the context of a given execution by id. Deletion does not
     * propagate upwards in the execution hierarchy.
     * @param id The id of the execution to delete the variable from.
     * @param varName The name of the variable to delete.
     * @returns void
     * @throws ApiError
     */
    public static deleteLocalExecutionVariable(
        id: string,
        varName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/execution/{id}/localVariables/{varName}',
            path: {
                'id': id,
                'varName': varName,
            },
        });
    }

    /**
     * Get Local Execution Variable
     * Retrieves a variable from the context of a given execution by id. Does not traverse
     * the parent execution hierarchy.
     * @param id The id of the execution to retrieve the variable from.
     * @param varName The name of the variable to get.
     * @param deserializeValue Determines whether serializable variable values (typically
     * variables that store custom Java objects) should be deserialized
     * on server side (default `true`).
     *
     * If set to `true`, a serializable variable will be deserialized on
     * server side and transformed to JSON using
     * [Jackson's](https://github.com/FasterXML/jackson) POJO/bean
     * property introspection feature. Note that this requires the Java
     * classes of the variable value to be on the REST API's classpath.
     * If set to `false`, a serializable variable will be returned in its
     * serialized format. For example, a variable that is serialized as
     * XML will be returned as a JSON string containing XML.
     *
     * **Note:** While `true` is the default value for reasons of
     * backward compatibility, we recommend setting this parameter to
     * `false` when developing web applications that are independent of
     * the Java process applications deployed to the engine.
     * @returns VariableValueDto Request successful.
     * @throws ApiError
     */
    public static getLocalExecutionVariable(
        id: string,
        varName: string,
        deserializeValue?: boolean,
    ): CancelablePromise<VariableValueDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/execution/{id}/localVariables/{varName}',
            path: {
                'id': id,
                'varName': varName,
            },
            query: {
                'deserializeValue': deserializeValue,
            },
            errors: {
                404: `Variable with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Put Local Execution Variable
     * Sets a variable in the context of a given execution by id. Update does not
     * propagate upwards in the execution hierarchy.
     * @param id The id of the execution to set the variable for.
     * @param varName The name of the variable to set.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static putLocalExecutionVariable(
        id: string,
        varName: string,
        requestBody?: VariableValueDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/execution/{id}/localVariables/{varName}',
            path: {
                'id': id,
                'varName': varName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The variable value or type is invalid, for example if the value could not be parsed
                to an Integer value or the passed variable type is not supported.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-
                handling) for the error response format.`,
            },
        });
    }

    /**
     * Get Local Execution Variable (Binary)
     * Retrieves a binary variable from the context of a given execution by id. Does not
     * traverse the parent execution hierarchy. Applicable for byte array and
     * file variables.
     * @param id The id of the execution to retrieve the variable from.
     * @param varName The name of the variable to get.
     * @returns binary Request successful.
     * For binary variables or files without any MIME type information, a byte stream is returned.
     * File variables with MIME type information are returned as the saved type.
     * Additionally, for file variables the Content-Disposition header will be set.
     * @throws ApiError
     */
    public static getLocalExecutionVariableBinary(
        id: string,
        varName: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/execution/{id}/localVariables/{varName}/data',
            path: {
                'id': id,
                'varName': varName,
            },
            errors: {
                400: `Variable instance with given id exists but is not a binary variable. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Variable instance with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Post Local Execution Variable (Binary)
     * Sets the serialized value for a binary variable or the binary value for a file
     * variable in the context of a given execution by id.
     * @param id The id of the execution to set the variable for.
     * @param varName The name of the variable to set.
     * @param formData
     * @returns void
     * @throws ApiError
     */
    public static setLocalExecutionVariableBinary(
        id: string,
        varName: string,
        formData?: MultiFormVariableBinaryDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/execution/{id}/localVariables/{varName}/data',
            path: {
                'id': id,
                'varName': varName,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `The variable value or type is invalid, for example if no filename is set. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Message Event Subscription
     * Retrieves a message event subscription for a given execution by id and a message
     * name.
     * @param id The id of the execution that holds the subscription.
     * @param messageName The name of the message that the subscription corresponds to.
     * @returns EventSubscriptionDto Request successful.
     * @throws ApiError
     */
    public static getMessageEventSubscription(
        id: string,
        messageName: string,
    ): CancelablePromise<EventSubscriptionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/execution/{id}/messageSubscriptions/{messageName}',
            path: {
                'id': id,
                'messageName': messageName,
            },
            errors: {
                404: `A message subscription for the given name and execution does not exist.
                This may either mean that the execution does not exist, or that
                it is not subscribed on such a message.
                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Trigger Message Event Subscription
     * Delivers a message to a specific execution by id, to trigger an existing message
     * event subscription. Inject process variables as the message's
     * payload.
     * @param id The id of the execution to submit the message to.
     * @param messageName The name of the message that the addressed subscription corresponds to.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static triggerEvent(
        id: string,
        messageName: string,
        requestBody?: ExecutionTriggerDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/execution/{id}/messageSubscriptions/{messageName}/trigger',
            path: {
                'id': id,
                'messageName': messageName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The variable value or type is invalid, for example if the value could not be parsed
                to an Integer value or the passed variable type is not supported.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
                500: `The addressed execution has no pending message subscriptions for the given message.
                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Trigger Execution
     * Signals an execution by id. Can for example be used to explicitly skip user tasks
     * or signal asynchronous continuations.
     * @param id The id of the execution to signal.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static signalExecution(
        id: string,
        requestBody?: ExecutionTriggerDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/execution/{id}/signal',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The variable value or type is invalid, for example if the value could not be parsed
                to an Integer value or the passed variable type is not supported.
                See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

}
