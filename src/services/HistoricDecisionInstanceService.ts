/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchDto } from '../models/BatchDto';
import type { CountResultDto } from '../models/CountResultDto';
import type { DeleteHistoricDecisionInstancesDto } from '../models/DeleteHistoricDecisionInstancesDto';
import type { HistoricDecisionInstanceDto } from '../models/HistoricDecisionInstanceDto';
import type { SetRemovalTimeToHistoricDecisionInstancesDto } from '../models/SetRemovalTimeToHistoricDecisionInstancesDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricDecisionInstanceService {

    /**
     * Get Historic Decision Instances
     * Queries for historic decision instances that fulfill the given parameters.
     * The size of the result set can be retrieved by using the
     * [Get Historic Decision Instance Count](https://docs.camunda.org/manual/7.18/reference/rest/history/decision-instance/get-decision-instance-query-count/)
     * method.
     * @param decisionInstanceId Filter by decision instance id.
     * @param decisionInstanceIdIn Filter by decision instance ids. Must be a comma-separated list of decision instance ids.
     * @param decisionDefinitionId Filter by the decision definition the instances belongs to.
     * @param decisionDefinitionIdIn Filter by the decision definitions the instances belongs to. Must be a
     * comma-separated list of decision definition ids.
     * @param decisionDefinitionKey Filter by the key of the decision definition the instances belongs to.
     * @param decisionDefinitionKeyIn Filter by the keys of the decision definition the instances belongs to. Must be a comma-
     * separated list of decision definition keys.
     * @param decisionDefinitionName Filter by the name of the decision definition the instances belongs to.
     * @param decisionDefinitionNameLike Filter by the name of the decision definition the instances belongs to, that the parameter
     * is a substring of.
     * @param processDefinitionId Filter by the process definition the instances belongs to.
     * @param processDefinitionKey Filter by the key of the process definition the instances belongs to.
     * @param processInstanceId Filter by the process instance the instances belongs to.
     * @param caseDefinitionId Filter by the case definition the instances belongs to.
     * @param caseDefinitionKey Filter by the key of the case definition the instances belongs to.
     * @param caseInstanceId Filter by the case instance the instances belongs to.
     * @param activityIdIn Filter by the activity ids the instances belongs to.
     * Must be a comma-separated list of acitvity ids.
     * @param activityInstanceIdIn Filter by the activity instance ids the instances belongs to.
     * Must be a comma-separated list of acitvity instance ids.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A historic decision instance must have one
     * of the given tenant ids.
     * @param withoutTenantId Only include historic decision instances that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     * @param evaluatedBefore Restrict to instances that were evaluated before the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-
     * dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param evaluatedAfter Restrict to instances that were evaluated after the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-
     * dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param userId Restrict to instances that were evaluated by the given user.
     * @param rootDecisionInstanceId Restrict to instances that have a given root decision instance id.
     * This also includes the decision instance with the given id.
     * @param rootDecisionInstancesOnly Restrict to instances those are the root decision instance of an evaluation.
     * Value may only be `true`, as `false` is the default behavior.
     * @param decisionRequirementsDefinitionId Filter by the decision requirements definition the instances belongs to.
     * @param decisionRequirementsDefinitionKey Filter by the key of the decision requirements definition the instances belongs to.
     * @param includeInputs Include input values in the result.
     * Value may only be `true`, as `false` is the default behavior.
     * @param includeOutputs Include output values in the result.
     * Value may only be `true`, as `false` is the default behavior.
     * @param disableBinaryFetching Disables fetching of byte array input and output values.
     * Value may only be `true`, as `false` is the default behavior.
     * @param disableCustomObjectDeserialization Disables deserialization of input and output values that are custom objects.
     * Value may only be `true`, as `false` is the default behavior.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns HistoricDecisionInstanceDto Request successful.
     * @throws ApiError
     */
    public static getHistoricDecisionInstances(
        decisionInstanceId?: string,
        decisionInstanceIdIn?: string,
        decisionDefinitionId?: string,
        decisionDefinitionIdIn?: string,
        decisionDefinitionKey?: string,
        decisionDefinitionKeyIn?: string,
        decisionDefinitionName?: string,
        decisionDefinitionNameLike?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        processInstanceId?: string,
        caseDefinitionId?: string,
        caseDefinitionKey?: string,
        caseInstanceId?: string,
        activityIdIn?: string,
        activityInstanceIdIn?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        evaluatedBefore?: string,
        evaluatedAfter?: string,
        userId?: string,
        rootDecisionInstanceId?: string,
        rootDecisionInstancesOnly?: boolean,
        decisionRequirementsDefinitionId?: string,
        decisionRequirementsDefinitionKey?: string,
        includeInputs?: boolean,
        includeOutputs?: boolean,
        disableBinaryFetching?: boolean,
        disableCustomObjectDeserialization?: boolean,
        sortBy?: 'evaluationTime' | 'tenantId',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<HistoricDecisionInstanceDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/decision-instance',
            query: {
                'decisionInstanceId': decisionInstanceId,
                'decisionInstanceIdIn': decisionInstanceIdIn,
                'decisionDefinitionId': decisionDefinitionId,
                'decisionDefinitionIdIn': decisionDefinitionIdIn,
                'decisionDefinitionKey': decisionDefinitionKey,
                'decisionDefinitionKeyIn': decisionDefinitionKeyIn,
                'decisionDefinitionName': decisionDefinitionName,
                'decisionDefinitionNameLike': decisionDefinitionNameLike,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processInstanceId': processInstanceId,
                'caseDefinitionId': caseDefinitionId,
                'caseDefinitionKey': caseDefinitionKey,
                'caseInstanceId': caseInstanceId,
                'activityIdIn': activityIdIn,
                'activityInstanceIdIn': activityInstanceIdIn,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'evaluatedBefore': evaluatedBefore,
                'evaluatedAfter': evaluatedAfter,
                'userId': userId,
                'rootDecisionInstanceId': rootDecisionInstanceId,
                'rootDecisionInstancesOnly': rootDecisionInstancesOnly,
                'decisionRequirementsDefinitionId': decisionRequirementsDefinitionId,
                'decisionRequirementsDefinitionKey': decisionRequirementsDefinitionKey,
                'includeInputs': includeInputs,
                'includeOutputs': includeOutputs,
                'disableBinaryFetching': disableBinaryFetching,
                'disableCustomObjectDeserialization': disableCustomObjectDeserialization,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
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
     * Get Historic Decision Instance Count
     * Queries for the number of historic decision instances that fulfill the given parameters.
     * Takes the same parameters as the
     * [Get Historic Decision Instances](https://docs.camunda.org/manual/7.18/reference/rest/history/decision-instance/get-decision-instance-query/)
     * method.
     * @param decisionInstanceId Filter by decision instance id.
     * @param decisionInstanceIdIn Filter by decision instance ids. Must be a comma-separated list of decision instance ids.
     * @param decisionDefinitionId Filter by the decision definition the instances belongs to.
     * @param decisionDefinitionIdIn Filter by the decision definitions the instances belongs to. Must be a
     * comma-separated list of decision definition ids.
     * @param decisionDefinitionKey Filter by the key of the decision definition the instances belongs to.
     * @param decisionDefinitionKeyIn Filter by the keys of the decision definition the instances belongs to. Must be a comma-
     * separated list of decision definition keys.
     * @param decisionDefinitionName Filter by the name of the decision definition the instances belongs to.
     * @param decisionDefinitionNameLike Filter by the name of the decision definition the instances belongs to, that the parameter
     * is a substring of.
     * @param processDefinitionId Filter by the process definition the instances belongs to.
     * @param processDefinitionKey Filter by the key of the process definition the instances belongs to.
     * @param processInstanceId Filter by the process instance the instances belongs to.
     * @param caseDefinitionId Filter by the case definition the instances belongs to.
     * @param caseDefinitionKey Filter by the key of the case definition the instances belongs to.
     * @param caseInstanceId Filter by the case instance the instances belongs to.
     * @param activityIdIn Filter by the activity ids the instances belongs to.
     * Must be a comma-separated list of acitvity ids.
     * @param activityInstanceIdIn Filter by the activity instance ids the instances belongs to.
     * Must be a comma-separated list of acitvity instance ids.
     * @param tenantIdIn Filter by a comma-separated list of tenant ids. A historic decision instance must have one
     * of the given tenant ids.
     * @param withoutTenantId Only include historic decision instances that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     * @param evaluatedBefore Restrict to instances that were evaluated before the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-
     * dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param evaluatedAfter Restrict to instances that were evaluated after the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-
     * dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     * @param userId Restrict to instances that were evaluated by the given user.
     * @param rootDecisionInstanceId Restrict to instances that have a given root decision instance id.
     * This also includes the decision instance with the given id.
     * @param rootDecisionInstancesOnly Restrict to instances those are the root decision instance of an evaluation.
     * Value may only be `true`, as `false` is the default behavior.
     * @param decisionRequirementsDefinitionId Filter by the decision requirements definition the instances belongs to.
     * @param decisionRequirementsDefinitionKey Filter by the key of the decision requirements definition the instances belongs to.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getHistoricDecisionInstancesCount(
        decisionInstanceId?: string,
        decisionInstanceIdIn?: string,
        decisionDefinitionId?: string,
        decisionDefinitionIdIn?: string,
        decisionDefinitionKey?: string,
        decisionDefinitionKeyIn?: string,
        decisionDefinitionName?: string,
        decisionDefinitionNameLike?: string,
        processDefinitionId?: string,
        processDefinitionKey?: string,
        processInstanceId?: string,
        caseDefinitionId?: string,
        caseDefinitionKey?: string,
        caseInstanceId?: string,
        activityIdIn?: string,
        activityInstanceIdIn?: string,
        tenantIdIn?: string,
        withoutTenantId?: boolean,
        evaluatedBefore?: string,
        evaluatedAfter?: string,
        userId?: string,
        rootDecisionInstanceId?: string,
        rootDecisionInstancesOnly?: boolean,
        decisionRequirementsDefinitionId?: string,
        decisionRequirementsDefinitionKey?: string,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/decision-instance/count',
            query: {
                'decisionInstanceId': decisionInstanceId,
                'decisionInstanceIdIn': decisionInstanceIdIn,
                'decisionDefinitionId': decisionDefinitionId,
                'decisionDefinitionIdIn': decisionDefinitionIdIn,
                'decisionDefinitionKey': decisionDefinitionKey,
                'decisionDefinitionKeyIn': decisionDefinitionKeyIn,
                'decisionDefinitionName': decisionDefinitionName,
                'decisionDefinitionNameLike': decisionDefinitionNameLike,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processInstanceId': processInstanceId,
                'caseDefinitionId': caseDefinitionId,
                'caseDefinitionKey': caseDefinitionKey,
                'caseInstanceId': caseInstanceId,
                'activityIdIn': activityIdIn,
                'activityInstanceIdIn': activityInstanceIdIn,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'evaluatedBefore': evaluatedBefore,
                'evaluatedAfter': evaluatedAfter,
                'userId': userId,
                'rootDecisionInstanceId': rootDecisionInstanceId,
                'rootDecisionInstancesOnly': rootDecisionInstancesOnly,
                'decisionRequirementsDefinitionId': decisionRequirementsDefinitionId,
                'decisionRequirementsDefinitionKey': decisionRequirementsDefinitionKey,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Delete Async (POST)
     * Delete multiple historic decision instances asynchronously (batch).
     * At least `historicDecisionInstanceIds` or `historicDecisionInstanceQuery`
     * has to be provided. If both are provided then all instances matching query
     * criterion and instances from the list will be deleted.
     * @param requestBody
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static deleteAsync(
        requestBody?: DeleteHistoricDecisionInstancesDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/decision-instance/delete',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, i.e. neither
                \`historicDecisionInstanceIds\` nor \`historicDecisionInstanceQuery\` is
                present. See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Set Removal Time Async (POST)
     * Sets the removal time to multiple historic decision instances asynchronously
     * (batch).
     *
     * At least `historicDecisionInstanceIds` or
     * `historicDecisionInstanceQuery` has to be provided. If both are
     * provided, all instances matching query criterion and instances from the list
     * will be updated with a removal time.
     * @param requestBody
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static setRemovalTimeAsyncHistoricDecisionInstance(
        requestBody?: SetRemovalTimeToHistoricDecisionInstancesDto,
    ): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/decision-instance/set-removal-time',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request was unsuccessfull due to a bad user request. This occurs if
                some of the query parameters are invalid, e. g. if neither
                historicDecisionInstances nor historicDecisionInstanceQuery is
                present or if no mode is specified.

                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Historic Decision Instance
     * Retrieves a historic decision instance by id, according to the
     * `HistoricDecisionInstance` interface in the engine.
     * @param id The id of the historic decision instance to be retrieved.
     * @param includeInputs Include input values in the result.
     * Value may only be `true`, as `false` is the default behavior.
     * @param includeOutputs Include output values in the result.
     * Value may only be `true`, as `false` is the default behavior.
     * @param disableBinaryFetching Disables fetching of byte array input and output values.
     * Value may only be `true`, as `false` is the default behavior.
     * @param disableCustomObjectDeserialization Disables deserialization of input and output values that are custom objects.
     * Value may only be `true`, as `false` is the default behavior.
     * @returns HistoricDecisionInstanceDto Request successful.
     * @throws ApiError
     */
    public static getHistoricDecisionInstance(
        id: string,
        includeInputs?: boolean,
        includeOutputs?: boolean,
        disableBinaryFetching?: boolean,
        disableCustomObjectDeserialization?: boolean,
    ): CancelablePromise<HistoricDecisionInstanceDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/decision-instance/{id}',
            path: {
                'id': id,
            },
            query: {
                'includeInputs': includeInputs,
                'includeOutputs': includeOutputs,
                'disableBinaryFetching': disableBinaryFetching,
                'disableCustomObjectDeserialization': disableCustomObjectDeserialization,
            },
            errors: {
                404: `Historic decision instance with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
