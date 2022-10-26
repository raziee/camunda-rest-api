/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HistoricDecisionInputInstanceDto = {
    /**
     * The id of the decision input value.
     */
    id?: string | null;
    /**
     * The id of the decision instance the input value belongs to.
     */
    decisionInstanceId?: string | null;
    /**
     * The id of the clause the input value belongs to.
     */
    clauseId?: string | null;
    /**
     * The name of the clause the input value belongs to.
     */
    clauseName?: string | null;
    /**
     * An error message in case a Java Serialized Object could not be de-serialized.
     */
    errorMessage?: string | null;
    /**
     * The value type of the variable.
     */
    type?: string | null;
    /**
     * The time the variable was inserted.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    createTime?: string | null;
    /**
     * The time after which the entry should be removed by the History Cleanup job.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    removalTime?: string | null;
    /**
     * The process instance id of the root process instance that initiated the process
     * containing this entry.
     */
    rootProcessInstanceId?: string | null;
    /**
     * The variable's value. Value differs depending on the variable's type
     * and on the `disableCustomObjectDeserialization` parameter.
     */
    value?: any;
    /**
     * A JSON object containing additional, value-type-dependent
     * properties.
     *
     * For variables of type `Object`, the following properties are
     * returned:
     *
     * * `objectTypeName`: A string representation of the object's type
     * name.
     *
     * * `serializationDataFormat`: The serialization format used to store
     * the variable.
     */
    valueInfo?: any;
};

