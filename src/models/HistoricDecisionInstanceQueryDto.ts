/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A historic decision instance query which defines a list of historic decision instances
 */
export type HistoricDecisionInstanceQueryDto = {
    /**
     * Filter by decision instance id.
     */
    decisionInstanceId?: string | null;
    /**
     * Filter by decision instance ids. Must be a comma-separated list of decision instance ids.
     */
    decisionInstanceIdIn?: Array<string> | null;
    /**
     * Filter by the decision definition the instances belongs to.
     */
    decisionDefinitionId?: string | null;
    /**
     * Filter by the decision definitions the instances belongs to. Must be a
     * comma-separated list of decision definition ids.
     */
    decisionDefinitionIdIn?: Array<string> | null;
    /**
     * Filter by the key of the decision definition the instances belongs to.
     */
    decisionDefinitionKey?: string | null;
    /**
     * Filter by the keys of the decision definition the instances belongs to. Must be a comma-
     * separated list of decision definition keys.
     */
    decisionDefinitionKeyIn?: Array<string> | null;
    /**
     * Filter by the name of the decision definition the instances belongs to.
     */
    decisionDefinitionName?: string | null;
    /**
     * Filter by the name of the decision definition the instances belongs to, that the parameter
     * is a substring of.
     */
    decisionDefinitionNameLike?: string | null;
    /**
     * Filter by the process definition the instances belongs to.
     */
    processDefinitionId?: string | null;
    /**
     * Filter by the key of the process definition the instances belongs to.
     */
    processDefinitionKey?: string | null;
    /**
     * Filter by the process instance the instances belongs to.
     */
    processInstanceId?: string | null;
    /**
     * Filter by the case definition the instances belongs to.
     */
    caseDefinitionId?: string | null;
    /**
     * Filter by the key of the case definition the instances belongs to.
     */
    caseDefinitionKey?: string | null;
    /**
     * Filter by the case instance the instances belongs to.
     */
    caseInstanceId?: string | null;
    /**
     * Filter by the activity ids the instances belongs to.
     * Must be a comma-separated list of acitvity ids.
     */
    activityIdIn?: Array<string> | null;
    /**
     * Filter by the activity instance ids the instances belongs to.
     * Must be a comma-separated list of acitvity instance ids.
     */
    activityInstanceIdIn?: Array<string> | null;
    /**
     * Filter by a comma-separated list of tenant ids. A historic decision instance must have one
     * of the given tenant ids.
     */
    tenantIdIn?: Array<string> | null;
    /**
     * Only include historic decision instances that belong to no tenant. Value may only be
     * `true`, as `false` is the default behavior.
     */
    withoutTenantId?: boolean | null;
    /**
     * Restrict to instances that were evaluated before the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-
     * dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     */
    evaluatedBefore?: string | null;
    /**
     * Restrict to instances that were evaluated after the given date.
     * By [default](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-
     * dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     */
    evaluatedAfter?: string | null;
    /**
     * Restrict to instances that were evaluated by the given user.
     */
    userId?: string | null;
    /**
     * Restrict to instances that have a given root decision instance id.
     * This also includes the decision instance with the given id.
     */
    rootDecisionInstanceId?: string | null;
    /**
     * Restrict to instances those are the root decision instance of an evaluation.
     * Value may only be `true`, as `false` is the default behavior.
     */
    rootDecisionInstancesOnly?: boolean | null;
    /**
     * Filter by the decision requirements definition the instances belongs to.
     */
    decisionRequirementsDefinitionId?: string | null;
    /**
     * Filter by the key of the decision requirements definition the instances belongs to.
     */
    decisionRequirementsDefinitionKey?: string | null;
    /**
     * Include input values in the result.
     * Value may only be `true`, as `false` is the default behavior.
     */
    includeInputs?: boolean | null;
    /**
     * Include output values in the result.
     * Value may only be `true`, as `false` is the default behavior.
     */
    includeOutputs?: boolean | null;
    /**
     * Disables fetching of byte array input and output values.
     * Value may only be `true`, as `false` is the default behavior.
     */
    disableBinaryFetching?: boolean | null;
    /**
     * Disables deserialization of input and output values that are custom objects.
     * Value may only be `true`, as `false` is the default behavior.
     */
    disableCustomObjectDeserialization?: boolean | null;
};

