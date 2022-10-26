/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { HistoricDetailDto } from '../models/HistoricDetailDto';
import type { HistoricDetailQueryDto } from '../models/HistoricDetailQueryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricDetailService {

    /**
     * Get Historic Details
     * Queries for historic details that fulfill the given parameters.
     * The size of the result set can be retrieved by using the
     * [Get Historic Detail Count](https://docs.camunda.org/manual/7.18/reference/rest/history/detail/get-detail-query-count/) method.
     * @param processInstanceId Filter by process instance id.
     * @param processInstanceIdIn Only include historic details which belong to one of the passed comma-separated process instance ids.
     * @param executionId Filter by execution id.
     * @param taskId Filter by task id.
     * @param activityInstanceId Filter by activity instance id.
     * @param caseInstanceId Filter by case instance id.
     * @param caseExecutionId Filter by case execution id.
     * @param variableInstanceId Filter by variable instance id.
     * @param variableTypeIn Only include historic details where the variable updates belong to one of the passed comma-separated
     * list of variable types. A list of all supported variable types can be found
     * [here](https://docs.camunda.org/manual/7.18/user-guide/process-engine/variables/#supported-variable-values).
     * **Note:** All non-primitive variables are associated with the type `serializable`.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids.
     * @param withoutTenantId Only include historic details that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     * @param userOperationId Filter by a user operation id.
     * @param formFields Only include `HistoricFormFields`. Value may only be `true`, as `false` is the default behavior.
     * @param variableUpdates Only include `HistoricVariableUpdates`. Value may only be `true`, as `false` is the default behavior.
     * @param excludeTaskDetails Excludes all task-related `HistoricDetails`, so only items which have no task id set will be selected.
     * When this parameter is used together with `taskId`, this call is ignored and task details are not excluded.
     * Value may only be `true`, as `false` is the default behavior.
     * @param initial Restrict to historic variable updates that contain only initial variable values.
     * Value may only be `true`, as `false` is the default behavior.
     * @param occurredBefore Restrict to historic details that occured before the given date (including the date).
     * Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
     * @param occurredAfter Restrict to historic details that occured after the given date (including the date).
     * Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
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
     * @returns HistoricDetailDto Request successful.
     * @throws ApiError
     */
    public static getHistoricDetails(
        processInstanceId?: string,
        processInstanceIdIn?: string,
        executionId?: string,
        taskId?: string,
        activityInstanceId?: string,
        caseInstanceId?: string,
        caseExecutionId?: string,
        variableInstanceId?: string,
        variableTypeIn?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        userOperationId?: string,
        formFields?: boolean,
        variableUpdates?: boolean,
        excludeTaskDetails?: boolean,
        initial?: boolean,
        occurredBefore?: string,
        occurredAfter?: string,
        sortBy?: 'processInstanceId' | 'variableName' | 'variableType' | 'variableRevision' | 'formPropertyId' | 'time' | 'occurrence' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
        deserializeValues?: boolean,
    ): CancelablePromise<Array<HistoricDetailDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/detail',
            query: {
                'processInstanceId': processInstanceId,
                'processInstanceIdIn': processInstanceIdIn,
                'executionId': executionId,
                'taskId': taskId,
                'activityInstanceId': activityInstanceId,
                'caseInstanceId': caseInstanceId,
                'caseExecutionId': caseExecutionId,
                'variableInstanceId': variableInstanceId,
                'variableTypeIn': variableTypeIn,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'userOperationId': userOperationId,
                'formFields': formFields,
                'variableUpdates': variableUpdates,
                'excludeTaskDetails': excludeTaskDetails,
                'initial': initial,
                'occurredBefore': occurredBefore,
                'occurredAfter': occurredAfter,
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
     * Get Historic Details (POST)
     * Queries for historic details that fulfill the given parameters. This method is slightly more
     * powerful than the [Get Historic Details](https://docs.camunda.org/manual/7.18/reference/rest/history/detail/get-detail-query/)
     * method because it allows sorting by multiple parameters. The size of the result set can be retrieved by
     * using the [Get Historic Detail Count](https://docs.camunda.org/manual/7.18/reference/rest/history/detail/get-detail-query-count/)
     * method.
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
     * @returns HistoricDetailDto Request successful.
     * @throws ApiError
     */
    public static queryHistoricDetails(
        firstResult?: number,
        maxResults?: number,
        deserializeValues?: boolean,
        requestBody?: HistoricDetailQueryDto,
    ): CancelablePromise<Array<HistoricDetailDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/detail',
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
     * Get Historic Detail Count
     * Queries for the number of historic details that fulfill the given parameters.
     * Takes the same parameters as the [Get Historic
     * Details](https://docs.camunda.org/manual/7.18/reference/rest/history/detail/get-detail-query/)
     * method.
     * @param processInstanceId Filter by process instance id.
     * @param processInstanceIdIn Only include historic details which belong to one of the passed comma-separated process instance ids.
     * @param executionId Filter by execution id.
     * @param taskId Filter by task id.
     * @param activityInstanceId Filter by activity instance id.
     * @param caseInstanceId Filter by case instance id.
     * @param caseExecutionId Filter by case execution id.
     * @param variableInstanceId Filter by variable instance id.
     * @param variableTypeIn Only include historic details where the variable updates belong to one of the passed comma-separated
     * list of variable types. A list of all supported variable types can be found
     * [here](https://docs.camunda.org/manual/7.18/user-guide/process-engine/variables/#supported-variable-values).
     * **Note:** All non-primitive variables are associated with the type `serializable`.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids.
     * @param withoutTenantId Only include historic details that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     * @param userOperationId Filter by a user operation id.
     * @param formFields Only include `HistoricFormFields`. Value may only be `true`, as `false` is the default behavior.
     * @param variableUpdates Only include `HistoricVariableUpdates`. Value may only be `true`, as `false` is the default behavior.
     * @param excludeTaskDetails Excludes all task-related `HistoricDetails`, so only items which have no task id set will be selected.
     * When this parameter is used together with `taskId`, this call is ignored and task details are not excluded.
     * Value may only be `true`, as `false` is the default behavior.
     * @param initial Restrict to historic variable updates that contain only initial variable values.
     * Value may only be `true`, as `false` is the default behavior.
     * @param occurredBefore Restrict to historic details that occured before the given date (including the date).
     * Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
     * @param occurredAfter Restrict to historic details that occured after the given date (including the date).
     * Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., 2013-01-23T14:42:45.000+0200.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getHistoricDetailsCount(
        processInstanceId?: string,
        processInstanceIdIn?: string,
        executionId?: string,
        taskId?: string,
        activityInstanceId?: string,
        caseInstanceId?: string,
        caseExecutionId?: string,
        variableInstanceId?: string,
        variableTypeIn?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        userOperationId?: string,
        formFields?: boolean,
        variableUpdates?: boolean,
        excludeTaskDetails?: boolean,
        initial?: boolean,
        occurredBefore?: string,
        occurredAfter?: string,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/detail/count',
            query: {
                'processInstanceId': processInstanceId,
                'processInstanceIdIn': processInstanceIdIn,
                'executionId': executionId,
                'taskId': taskId,
                'activityInstanceId': activityInstanceId,
                'caseInstanceId': caseInstanceId,
                'caseExecutionId': caseExecutionId,
                'variableInstanceId': variableInstanceId,
                'variableTypeIn': variableTypeIn,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'userOperationId': userOperationId,
                'formFields': formFields,
                'variableUpdates': variableUpdates,
                'excludeTaskDetails': excludeTaskDetails,
                'initial': initial,
                'occurredBefore': occurredBefore,
                'occurredAfter': occurredAfter,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.`,
            },
        });
    }

    /**
     * Get Historic Detail
     * Retrieves a historic detail by id.
     * @param id The id of the detail.
     * @param deserializeValue Determines whether serializable variable values (typically
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
     * @returns HistoricDetailDto Request successful.
     * @throws ApiError
     */
    public static historicDetail(
        id: string,
        deserializeValue?: boolean,
    ): CancelablePromise<HistoricDetailDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/detail/{id}',
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
     * Get Historic Detail (Binary)
     * Retrieves the content of a historic variable update by id. Applicable for byte
     * array and file variables.
     * @param id The id of the historic variable update.
     * @returns binary Request successful.
     * @throws ApiError
     */
    public static historicDetailBinary(
        id: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/detail/{id}/data',
            path: {
                'id': id,
            },
            errors: {
                400: `Detail with given id exists but is not a binary variable. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Detail with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
