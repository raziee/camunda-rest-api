/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HistoricDetailDto = {
    /**
     * The id of the historic detail.
     */
    id?: string | null;
    /**
     * The type of the historic detail. Either `formField` for a submitted form field
     * value or `variableUpdate` for variable updates.
     */
    type?: string | null;
    /**
     * The key of the process definition that this historic detail belongs to.
     */
    processDefinitionKey?: string | null;
    /**
     * The id of the process definition that this historic detail belongs to.
     */
    processDefinitionId?: string | null;
    /**
     * The id of the process instance the historic detail belongs to.
     */
    processInstanceId?: string | null;
    /**
     * The id of the activity instance the historic detail belongs to.
     */
    activityInstanceId?: string | null;
    /**
     * The id of the execution the historic detail belongs to.
     */
    executionId?: string | null;
    /**
     * The key of the case definition that this historic detail belongs to.
     */
    caseDefinitionKey?: string | null;
    /**
     * The id of the case definition that this historic detail belongs to.
     */
    caseDefinitionId?: string | null;
    /**
     * The id of the case instance the historic detail belongs to.
     */
    caseInstanceId?: string | null;
    /**
     * The id of the case execution the historic detail belongs to.
     */
    caseExecutionId?: string | null;
    /**
     * The id of the task the historic detail belongs to.
     */
    taskId?: string | null;
    /**
     * The id of the tenant that this historic detail belongs to.
     */
    tenantId?: string | null;
    /**
     * The id of user operation which links historic detail with
     * [user operation log](https://docs.camunda.org/manual/7.18/reference/rest/history/user-operation-log/)
     * entries.
     */
    userOperationId?: string | null;
    /**
     * The time when this historic detail occurred. Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    time?: string | null;
    /**
     * The time after which the historic detail should be removed by the History Cleanup job.
     * Default [format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    removalTime?: string | null;
    /**
     * The process instance id of the root process instance that initiated the process
     * containing this historic detail.
     */
    rootProcessInstanceId?: string | null;
    /**
     * The id of the form field.
     *
     * **Note:** This property is only set for a `HistoricVariableUpdate` historic details.
     * In these cases, the value of the `type` property is `formField`.
     */
    fieldId?: string | null;
    /**
     * The submitted form field value. The value differs depending on the form field's type
     * and on the `deserializeValue` parameter.
     *
     * **Note:** This property is only set for a `HistoricVariableUpdate` historic details.
     * In these cases, the value of the `type` property is `formField`.
     */
    fieldValue?: any;
    /**
     * The name of the variable which has been updated.
     *
     * **Note:** This property is only set for a `HistoricVariableUpdate` historic details.
     * In these cases, the value of the `type` property is `variableUpdate`.
     */
    variableName?: string | null;
    /**
     * The id of the associated variable instance.
     *
     * **Note:** This property is only set for a `HistoricVariableUpdate` historic details.
     * In these cases, the value of the `type` property is `variableUpdate`.
     */
    variableInstanceId?: string | null;
    /**
     * The value type of the variable.
     *
     * **Note:** This property is only set for a `HistoricVariableUpdate` historic details.
     * In these cases, the value of the `type` property is `variableUpdate`.
     */
    variableType?: string | null;
    /**
     * The variable's value. Value differs depending on the variable's type
     * and on the deserializeValues parameter.
     *
     * **Note:** This property is only set for a `HistoricVariableUpdate` historic details.
     * In these cases, the value of the `type` property is `variableUpdate`.
     */
    value?: any;
    /**
     * A JSON object containing additional, value-type-dependent properties.
     * For variables of type `Object`, the following properties are returned:
     *
     * * `objectTypeName`: A string representation of the object's type name.
     * * `serializationDataFormat`: The serialization format used to store the variable.
     *
     * **Note:** This property is only set for a `HistoricVariableUpdate` historic details.
     * In these cases, the value of the `type` property is `variableUpdate`.
     */
    valueInfo?: any;
    /**
     * Returns `true` for variable updates that contains the initial values of the variables.
     *
     * **Note:** This property is only set for a `HistoricVariableUpdate` historic details.
     * In these cases, the value of the `type` property is `variableUpdate`.
     */
    initial?: boolean | null;
    /**
     * The revision of the historic variable update.
     *
     * **Note:** This property is only set for a `HistoricVariableUpdate` historic details.
     * In these cases, the value of the `type` property is `variableUpdate`.
     */
    revision?: number | null;
    /**
     * An error message in case a Java Serialized Object
     * could not be de-serialized.
     *
     * **Note:** This property is only set for a `HistoricVariableUpdate` historic details.
     * In these cases, the value of the `type` property is `variableUpdate`.
     */
    errorMessage?: string | null;
};

