/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { VariableInstanceDto } from '../models/VariableInstanceDto';
import type { VariableInstanceQueryDto } from '../models/VariableInstanceQueryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VariableInstanceService {

    /**
     * Get Variable Instances
     * Query for variable instances that fulfill given parameters. Parameters may be the
     * properties of variable instances, such as the name or type. The size
     * of the result set can be retrieved by using the [Get Variable Instance
     * Count](https://docs.camunda.org/manual/7.18/reference/rest/variable-instance/get-query-count/)
     * method.
     * @param variableName Filter by variable instance name.
     * @param variableNameLike Filter by the variable instance name. The parameter can include the wildcard `%` to
     * express like-strategy such as: starts with (`%`name), ends with (name`%`) or
     * contains (`%`name`%`).
     * @param processInstanceIdIn Only include variable instances which belong to one of the passed and comma-separated
     * process instance ids.
     * @param executionIdIn Only include variable instances which belong to one of the passed and comma-separated
     * execution ids.
     * @param caseInstanceIdIn Only include variable instances which belong to one of the passed and comma-separated case instance ids.
     * @param caseExecutionIdIn Only include variable instances which belong to one of the passed and comma-separated case execution ids.
     * @param taskIdIn Only include variable instances which belong to one of the passed and comma-separated task
     * ids.
     * @param batchIdIn Only include variable instances which belong to one of the passed and comma-separated
     * batch ids.
     * @param activityInstanceIdIn Only include variable instances which belong to one of the passed and comma-separated
     * activity instance ids.
     * @param tenantIdIn Only include variable instances which belong to one of the passed and comma-separated
     * tenant ids.
     * @param variableValues Only include variable instances that have the certain values.
     * Value filtering expressions are comma-separated and are structured as
     * follows:
     *
     * A valid parameter value has the form `key_operator_value`.
     * `key` is the variable name, `operator` is the comparison operator to be used
     * and `value` the variable value.
     *
     * **Note:** Values are always treated as `String` objects on server side.
     *
     * Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` -
     * greater than;
     * `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or
     * equal to;
     * `like`.
     * `key` and `value` may not contain underscore or comma characters.
     * @param variableNamesIgnoreCase Match all variable names provided in `variableValues` case-insensitively. If set to `true`
     * **variableName** and **variablename** are treated as equal.
     * @param variableValuesIgnoreCase Match all variable values provided in `variableValues` case-insensitively. If set to
     * `true` **variableValue** and **variablevalue** are treated as equal.
     * @param variableScopeIdIn Only include variable instances which belong to one of passed scope ids.
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
     * @returns VariableInstanceDto Request successful.
     * @throws ApiError
     */
    public static getVariableInstances(
        variableName?: string,
        variableNameLike?: string,
        processInstanceIdIn?: string,
        executionIdIn?: string,
        caseInstanceIdIn?: string,
        caseExecutionIdIn?: string,
        taskIdIn?: string,
        batchIdIn?: string,
        activityInstanceIdIn?: string,
        tenantIdIn?: string,
        variableValues?: string,
        variableNamesIgnoreCase?: boolean,
        variableValuesIgnoreCase?: boolean,
        variableScopeIdIn?: string,
        sortBy?: 'variableName' | 'variableType' | 'activityInstanceId' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
        deserializeValues?: boolean,
    ): CancelablePromise<Array<VariableInstanceDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/variable-instance',
            query: {
                'variableName': variableName,
                'variableNameLike': variableNameLike,
                'processInstanceIdIn': processInstanceIdIn,
                'executionIdIn': executionIdIn,
                'caseInstanceIdIn': caseInstanceIdIn,
                'caseExecutionIdIn': caseExecutionIdIn,
                'taskIdIn': taskIdIn,
                'batchIdIn': batchIdIn,
                'activityInstanceIdIn': activityInstanceIdIn,
                'tenantIdIn': tenantIdIn,
                'variableValues': variableValues,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
                'variableScopeIdIn': variableScopeIdIn,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
                'deserializeValues': deserializeValues,
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
     * Get Variable Instances (POST)
     * Query for variable instances that fulfill given parameters through a JSON object.
     * This method is slightly more powerful than the
     * [Get Variable Instances](https://docs.camunda.org/manual/7.18/reference/rest/variable-
     * instance/get-query/) method because it allows filtering by multiple
     * variable instances of types `String`, `Number` or `Boolean`.
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
     * @returns VariableInstanceDto Request successful.
     * @throws ApiError
     */
    public static queryVariableInstances(
        firstResult?: number,
        maxResults?: number,
        deserializeValues?: boolean,
        requestBody?: VariableInstanceQueryDto,
    ): CancelablePromise<Array<VariableInstanceDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/variable-instance',
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
                'deserializeValues': deserializeValues,
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
     * Get Variable Instance Count
     * Query for the number of variable instances that fulfill given parameters. Takes the
     * same parameters as the [Get Variable
     * Instances](https://docs.camunda.org/manual/7.18/reference/rest/variable-instance/get-query/)
     * method.
     * @param variableName Filter by variable instance name.
     * @param variableNameLike Filter by the variable instance name. The parameter can include the wildcard `%` to
     * express like-strategy such as: starts with (`%`name), ends with (name`%`) or
     * contains (`%`name`%`).
     * @param processInstanceIdIn Only include variable instances which belong to one of the passed and comma-separated
     * process instance ids.
     * @param executionIdIn Only include variable instances which belong to one of the passed and comma-separated
     * execution ids.
     * @param caseInstanceIdIn Only include variable instances which belong to one of the passed and comma-separated case instance ids.
     * @param caseExecutionIdIn Only include variable instances which belong to one of the passed and comma-separated case execution ids.
     * @param taskIdIn Only include variable instances which belong to one of the passed and comma-separated task
     * ids.
     * @param batchIdIn Only include variable instances which belong to one of the passed and comma-separated
     * batch ids.
     * @param activityInstanceIdIn Only include variable instances which belong to one of the passed and comma-separated
     * activity instance ids.
     * @param tenantIdIn Only include variable instances which belong to one of the passed and comma-separated
     * tenant ids.
     * @param variableValues Only include variable instances that have the certain values.
     * Value filtering expressions are comma-separated and are structured as
     * follows:
     *
     * A valid parameter value has the form `key_operator_value`.
     * `key` is the variable name, `operator` is the comparison operator to be used
     * and `value` the variable value.
     *
     * **Note:** Values are always treated as `String` objects on server side.
     *
     * Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` -
     * greater than;
     * `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or
     * equal to;
     * `like`.
     * `key` and `value` may not contain underscore or comma characters.
     * @param variableNamesIgnoreCase Match all variable names provided in `variableValues` case-insensitively. If set to `true`
     * **variableName** and **variablename** are treated as equal.
     * @param variableValuesIgnoreCase Match all variable values provided in `variableValues` case-insensitively. If set to
     * `true` **variableValue** and **variablevalue** are treated as equal.
     * @param variableScopeIdIn Only include variable instances which belong to one of passed scope ids.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getVariableInstancesCount(
        variableName?: string,
        variableNameLike?: string,
        processInstanceIdIn?: string,
        executionIdIn?: string,
        caseInstanceIdIn?: string,
        caseExecutionIdIn?: string,
        taskIdIn?: string,
        batchIdIn?: string,
        activityInstanceIdIn?: string,
        tenantIdIn?: string,
        variableValues?: string,
        variableNamesIgnoreCase?: boolean,
        variableValuesIgnoreCase?: boolean,
        variableScopeIdIn?: string,
        sortBy?: 'variableName' | 'variableType' | 'activityInstanceId' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/variable-instance/count',
            query: {
                'variableName': variableName,
                'variableNameLike': variableNameLike,
                'processInstanceIdIn': processInstanceIdIn,
                'executionIdIn': executionIdIn,
                'caseInstanceIdIn': caseInstanceIdIn,
                'caseExecutionIdIn': caseExecutionIdIn,
                'taskIdIn': taskIdIn,
                'batchIdIn': batchIdIn,
                'activityInstanceIdIn': activityInstanceIdIn,
                'tenantIdIn': tenantIdIn,
                'variableValues': variableValues,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
                'variableScopeIdIn': variableScopeIdIn,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if an invalid operator for variable
                comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Variable Instance Count (POST)
     * Query for the number of variable instances that fulfill given parameters. This
     * method takes the same message body as the
     * [Get Variable Instances POST](https://docs.camunda.org/manual/7.18/reference/rest/variable-
     * instance/post-query/) method and therefore it is slightly more
     * powerful than the [Get Variable Instance
     * Count](https://docs.camunda.org/manual/7.18/reference/rest/variable-instance/get-query-count/)
     * method.
     * @param requestBody
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryVariableInstancesCount(
        requestBody?: VariableInstanceQueryDto,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/variable-instance/count',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if an invalid operator for variable
                comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Variable Instance
     * Retrieves a variable by id.
     * @param id The id of the variable instance.
     * @param deserializeValue Determines whether serializable variable values (typically variables that store custom Java objects)
     * should be deserialized on server side (default `true`).
     *
     * If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON
     * using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature.
     * Note that this requires the Java classes of the variable value to be on the REST API's classpath.
     *
     * If set to `false`, a serializable variable will be returned in its serialized format.
     * For example, a variable that is serialized as XML will be returned as a JSON string containing XML.
     *
     * **Note:**  While `true` is the default value for reasons of backward compatibility, we recommend setting this
     * parameter to `false` when developing web applications that are independent of the Java process
     * applications deployed to the engine.
     * @returns VariableInstanceDto Request successful.
     * @throws ApiError
     */
    public static getVariableInstance(
        id: string,
        deserializeValue?: boolean,
    ): CancelablePromise<VariableInstanceDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/variable-instance/{id}',
            path: {
                'id': id,
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
     * Get Variable Instance (Binary)
     * Retrieves the content of a variable by id. Applicable for byte array and file
     * variables.
     * @param id The id of the variable instance.
     * @returns binary Request successful. For binary variables or files without any MIME type information, a byte stream is returned.
     * File variables with MIME type information are returned as the saved type. Additionally, for file
     * variables the Content-Disposition header will be set.
     * @throws ApiError
     */
    public static getVariableInstanceBinary(
        id: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/variable-instance/{id}/data',
            path: {
                'id': id,
            },
            errors: {
                400: `Variable with given id exists but does not serialize as binary data. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Variable with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
