/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { HistoricVariableInstanceDto } from '../models/HistoricVariableInstanceDto';
import type { HistoricVariableInstanceQueryDto } from '../models/HistoricVariableInstanceQueryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricVariableInstanceService {

    /**
     * Get Variable Instances
     * Queries for historic variable instances that fulfill the given parameters.
     * The size of the result set can be retrieved by using the
     * [Get Variable Instance Count](https://docs.camunda.org/manual/7.18/reference/rest/history/variable-instance/get-variable-instance-query-count/)
     * method.
     * @param variableName Filter by variable name.
     * @param variableNameLike Restrict to variables with a name like the parameter.
     * @param variableValue Filter by variable value. Is treated as a `String` object on server side.
     * @param variableNamesIgnoreCase Match the variable name provided in `variableName` and `variableNameLike` case-
     * insensitively. If set to `true` **variableName** and **variablename** are
     * treated as equal.
     * @param variableValuesIgnoreCase Match the variable value provided in `variableValue` case-insensitively. If set to `true`
     * **variableValue** and **variablevalue** are treated as equal.
     * @param variableTypeIn Only include historic variable instances which belong to one of the passed and comma-
     * separated variable types. A list of all supported variable types can be found
     * [here](https://docs.camunda.org/manual/7.18/user-guide/process-engine/variables/#supported-variable-values).
     * **Note:** All non-primitive variables are associated with the type
     * 'serializable'.
     * @param includeDeleted Include variables that has already been deleted during the execution.
     * @param processInstanceId Filter by the process instance the variable belongs to.
     * @param processInstanceIdIn Only include historic variable instances which belong to one of the passed and comma-separated process instance ids.
     * @param processDefinitionId Filter by the process definition the variable belongs to.
     * @param processDefinitionKey Filter by a key of the process definition the variable belongs to.
     * @param executionIdIn Only include historic variable instances which belong to one of the passed and and comma-separated execution ids.
     * @param caseInstanceId Filter by the case instance the variable belongs to.
     * @param caseExecutionIdIn Only include historic variable instances which belong to one of the passed and and comma-separated case execution ids.
     * @param caseActivityIdIn Only include historic variable instances which belong to one of the passed and and comma-separated case activity ids.
     * @param taskIdIn Only include historic variable instances which belong to one of the passed and and comma-separated task ids.
     * @param activityInstanceIdIn Only include historic variable instances which belong to one of the passed and and comma-separated activity instance ids.
     * @param tenantIdIn Only include historic variable instances which belong to one of the passed and comma-
     * separated tenant ids.
     * @param withoutTenantId Only include historic variable instances that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     * @param variableNameIn Only include historic variable instances which belong to one of the passed and comma-separated variable names.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param deserializeValues Determines whether serializable variable values (typically variables that
     * store custom Java objects) should be deserialized on server side (default
     * `true`).
     *
     * If set to `true`, a serializable variable will be deserialized on server side
     * and transformed to JSON using
     * [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property
     * introspection feature. Note that this requires the Java classes of the
     * variable value to be on the REST API's classpath.
     *
     * If set to `false`, a serializable variable will be returned in its serialized
     * format. For example, a variable that is serialized as XML will be returned as
     * a JSON string containing XML.
     *
     * **Note:** While `true` is the default value for reasons of backward
     * compatibility, we recommend setting this parameter to `false` when developing
     * web applications that are independent of the Java process applications
     * deployed to the engine.
     * @returns HistoricVariableInstanceDto Request successful.
     * @throws ApiError
     */
    public static getHistoricVariableInstances(
        variableName?: string,
        variableNameLike?: string,
        variableValue?: any,
        variableNamesIgnoreCase?: boolean,
        variableValuesIgnoreCase?: boolean,
        variableTypeIn?: string,
        includeDeleted?: boolean,
        processInstanceId?: string,
        processInstanceIdIn?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        executionIdIn?: string,
        caseInstanceId?: string,
        caseExecutionIdIn?: string,
        caseActivityIdIn?: string,
        taskIdIn?: string,
        activityInstanceIdIn?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        variableNameIn?: string,
        sortBy?: 'instanceId' | 'variableName' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
        deserializeValues?: boolean,
    ): CancelablePromise<Array<HistoricVariableInstanceDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/variable-instance',
            query: {
                'variableName': variableName,
                'variableNameLike': variableNameLike,
                'variableValue': variableValue,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
                'variableTypeIn': variableTypeIn,
                'includeDeleted': includeDeleted,
                'processInstanceId': processInstanceId,
                'processInstanceIdIn': processInstanceIdIn,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'executionIdIn': executionIdIn,
                'caseInstanceId': caseInstanceId,
                'caseExecutionIdIn': caseExecutionIdIn,
                'caseActivityIdIn': caseActivityIdIn,
                'taskIdIn': taskIdIn,
                'activityInstanceIdIn': activityInstanceIdIn,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'variableNameIn': variableNameIn,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
                'deserializeValues': deserializeValues,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\`
                parameter is supplied, but no \`sortBy\`. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Variable Instances (POST)
     * Queries for historic variable instances that fulfill the given parameters.
     * This method is slightly more powerful than the
     * [Get Variable Instances](https://docs.camunda.org/manual/7.18/reference/rest/history/variable-instance/get-variable-instance-query/)
     * method because it allows filtering by variable values of the different
     * types `String`, `Number` or `Boolean`.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param deserializeValues Determines whether serializable variable values (typically variables that
     * store custom Java objects) should be deserialized on server side (default
     * `true`).
     *
     * If set to `true`, a serializable variable will be deserialized on server side
     * and transformed to JSON using
     * [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property
     * introspection feature. Note that this requires the Java classes of the
     * variable value to be on the REST API's classpath.
     *
     * If set to `false`, a serializable variable will be returned in its serialized
     * format. For example, a variable that is serialized as XML will be returned as
     * a JSON string containing XML.
     *
     * **Note:** While `true` is the default value for reasons of backward
     * compatibility, we recommend setting this parameter to `false` when developing
     * web applications that are independent of the Java process applications
     * deployed to the engine.
     * @param requestBody
     * @returns HistoricVariableInstanceDto Request successful.
     * @throws ApiError
     */
    public static queryHistoricVariableInstances(
        firstResult?: number,
        maxResults?: number,
        deserializeValues?: boolean,
        requestBody?: HistoricVariableInstanceQueryDto,
    ): CancelablePromise<Array<HistoricVariableInstanceDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/variable-instance',
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
                'deserializeValues': deserializeValues,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\`
                parameter is supplied, but no \`sortBy\`. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Variable Instance Count
     * Queries for the number of historic variable instances that fulfill the given
     * parameters.
     * Takes the same parameters as the
     * [Get Variable Instances](https://docs.camunda.org/manual/7.18/reference/rest/history/variable-instance/get-variable-instance-query/)
     * method.
     * @param variableName Filter by variable name.
     * @param variableNameLike Restrict to variables with a name like the parameter.
     * @param variableValue Filter by variable value. Is treated as a `String` object on server side.
     * @param variableNamesIgnoreCase Match the variable name provided in `variableName` and `variableNameLike` case-
     * insensitively. If set to `true` **variableName** and **variablename** are
     * treated as equal.
     * @param variableValuesIgnoreCase Match the variable value provided in `variableValue` case-insensitively. If set to `true`
     * **variableValue** and **variablevalue** are treated as equal.
     * @param variableTypeIn Only include historic variable instances which belong to one of the passed and comma-
     * separated variable types. A list of all supported variable types can be found
     * [here](https://docs.camunda.org/manual/7.18/user-guide/process-engine/variables/#supported-variable-values).
     * **Note:** All non-primitive variables are associated with the type
     * 'serializable'.
     * @param includeDeleted Include variables that has already been deleted during the execution.
     * @param processInstanceId Filter by the process instance the variable belongs to.
     * @param processInstanceIdIn Only include historic variable instances which belong to one of the passed and comma-separated process instance ids.
     * @param processDefinitionId Filter by the process definition the variable belongs to.
     * @param processDefinitionKey Filter by a key of the process definition the variable belongs to.
     * @param executionIdIn Only include historic variable instances which belong to one of the passed and and comma-separated execution ids.
     * @param caseInstanceId Filter by the case instance the variable belongs to.
     * @param caseExecutionIdIn Only include historic variable instances which belong to one of the passed and and comma-separated case execution ids.
     * @param caseActivityIdIn Only include historic variable instances which belong to one of the passed and and comma-separated case activity ids.
     * @param taskIdIn Only include historic variable instances which belong to one of the passed and and comma-separated task ids.
     * @param activityInstanceIdIn Only include historic variable instances which belong to one of the passed and and comma-separated activity instance ids.
     * @param tenantIdIn Only include historic variable instances which belong to one of the passed and comma-
     * separated tenant ids.
     * @param withoutTenantId Only include historic variable instances that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     * @param variableNameIn Only include historic variable instances which belong to one of the passed and comma-separated variable names.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getHistoricVariableInstancesCount(
        variableName?: string,
        variableNameLike?: string,
        variableValue?: any,
        variableNamesIgnoreCase?: boolean,
        variableValuesIgnoreCase?: boolean,
        variableTypeIn?: string,
        includeDeleted?: boolean,
        processInstanceId?: string,
        processInstanceIdIn?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        executionIdIn?: string,
        caseInstanceId?: string,
        caseExecutionIdIn?: string,
        caseActivityIdIn?: string,
        taskIdIn?: string,
        activityInstanceIdIn?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        variableNameIn?: string,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/variable-instance/count',
            query: {
                'variableName': variableName,
                'variableNameLike': variableNameLike,
                'variableValue': variableValue,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
                'variableTypeIn': variableTypeIn,
                'includeDeleted': includeDeleted,
                'processInstanceId': processInstanceId,
                'processInstanceIdIn': processInstanceIdIn,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'executionIdIn': executionIdIn,
                'caseInstanceId': caseInstanceId,
                'caseExecutionIdIn': caseExecutionIdIn,
                'caseActivityIdIn': caseActivityIdIn,
                'taskIdIn': taskIdIn,
                'activityInstanceIdIn': activityInstanceIdIn,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'variableNameIn': variableNameIn,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Variable Instance Count (POST)
     * Queries for historic variable instances that fulfill the given parameters.
     * This method takes the same message body as the
     * [Get Variable Instances (POST)](https://docs.camunda.org/manual/7.18/reference/rest/history/variable-instance/post-variable-instance-query/)
     * method and therefore it is more powerful regarding variable values
     * than the
     * [Get Variable Instance Count](https://docs.camunda.org/manual/7.18/reference/rest/history/variable-instance/get-variable-instance-query-count/)
     * method.
     * @param requestBody
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryHistoricVariableInstancesCount(
        requestBody?: HistoricVariableInstanceQueryDto,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/variable-instance/count',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Delete Variable Instance
     * Deletes a historic variable instance by id.
     * @param id The id of the variable instance.
     * @returns void
     * @throws ApiError
     */
    public static deleteHistoricVariableInstance(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/history/variable-instance/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Variable with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Variable Instance
     * Retrieves a historic variable by id.
     * @param id The id of the variable instance.
     * @param deserializeValues Determines whether serializable variable values (typically variables that
     * store custom Java objects) should be deserialized on server side (default
     * `true`).
     *
     * If set to `true`, a serializable variable will be deserialized on server side
     * and transformed to JSON using
     * [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property
     * introspection feature. Note that this requires the Java classes of the
     * variable value to be on the REST API's classpath.
     *
     * If set to `false`, a serializable variable will be returned in its serialized
     * format. For example, a variable that is serialized as XML will be returned as
     * a JSON string containing XML.
     *
     * **Note:** While `true` is the default value for reasons of backward
     * compatibility, we recommend setting this parameter to `false` when developing
     * web applications that are independent of the Java process applications
     * deployed to the engine.
     * @returns HistoricVariableInstanceDto Request successful.
     * @throws ApiError
     */
    public static getHistoricVariableInstance(
        id: string,
        deserializeValues?: boolean,
    ): CancelablePromise<HistoricVariableInstanceDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/variable-instance/{id}',
            path: {
                'id': id,
            },
            query: {
                'deserializeValues': deserializeValues,
            },
            errors: {
                404: `Variable with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Variable Instance (Binary)
     * Retrieves the content of a historic variable by id. Applicable for variables that
     * are serialized as binary data.
     * @param id The id of the variable instance.
     * @returns binary Request successful.
     * @throws ApiError
     */
    public static getHistoricVariableInstanceBinary(
        id: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/variable-instance/{id}/data',
            path: {
                'id': id,
            },
            errors: {
                400: `Variable with given id exists but is not a binary variable. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Variable with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
