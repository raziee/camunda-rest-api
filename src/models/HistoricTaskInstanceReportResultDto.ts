/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HistoricTaskInstanceReportResultDto = {
    /**
     * The name of the task. It is only available when the `groupBy` parameter is set to `taskName`.
     * Else the value is `null`.
     *
     * **Note:** This property is only set for a historic task report object.
     * In these cases, the value of the `reportType` query parameter is `count`.
     */
    taskName?: string | null;
    /**
     * The number of tasks which have the given definition.
     *
     * **Note:** This property is only set for a historic task report object.
     * In these cases, the value of the `reportType` query parameter is `count`.
     */
    count?: number | null;
    /**
     * The key of the process definition.
     *
     * **Note:** This property is only set for a historic task report object.
     * In these cases, the value of the `reportType` query parameter is `count`.
     */
    processDefinitionKey?: string | null;
    /**
     * The id of the process definition.
     *
     * **Note:** This property is only set for a historic task report object.
     * In these cases, the value of the `reportType` query parameter is `count`.
     */
    processDefinitionId?: string | null;
    /**
     * The name of the process definition.
     *
     * **Note:** This property is only set for a historic task report object.
     * In these cases, the value of the `reportType` query parameter is `count`.
     */
    processDefinitionName?: string | null;
    /**
     * Specifies a span of time within a year.
     * **Note:** The period must be interpreted in conjunction with the returned `periodUnit`.
     *
     * **Note:** This property is only set for a duration report object.
     * In these cases, the value of the `reportType` query parameter is `duration`.
     */
    period?: number | null;
    /**
     * The unit of the given period. Possible values are `MONTH` and `QUARTER`.
     *
     * **Note:** This property is only set for a duration report object.
     * In these cases, the value of the `reportType` query parameter is `duration`.
     */
    periodUnit?: HistoricTaskInstanceReportResultDto.periodUnit | null;
    /**
     * The smallest duration in milliseconds of all completed process instances which
     * were started in the given period.
     *
     * **Note:** This property is only set for a duration report object.
     * In these cases, the value of the `reportType` query parameter is `duration`.
     */
    minimum?: number | null;
    /**
     * The greatest duration in milliseconds of all completed process instances which were
     * started in the given period.
     *
     * **Note:** This property is only set for a duration report object.
     * In these cases, the value of the `reportType` query parameter is `duration`.
     */
    maximum?: number | null;
    /**
     * The average duration in milliseconds of all completed process instances which were
     * started in the given period.
     *
     * **Note:** This property is only set for a duration report object.
     * In these cases, the value of the `reportType` query parameter is `duration`.
     */
    average?: number | null;
};

export namespace HistoricTaskInstanceReportResultDto {

    /**
     * The unit of the given period. Possible values are `MONTH` and `QUARTER`.
     *
     * **Note:** This property is only set for a duration report object.
     * In these cases, the value of the `reportType` query parameter is `duration`.
     */
    export enum periodUnit {
        MONTH = 'MONTH',
        QUARTER = 'QUARTER',
    }


}

