/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type JobConditionQueryParameterDto = {
    /**
     * Comparison operator to be used.
     */
    operator?: JobConditionQueryParameterDto.operator | null;
    /**
     * Date value to compare with.
     */
    value?: string | null;
};

export namespace JobConditionQueryParameterDto {

    /**
     * Comparison operator to be used.
     */
    export enum operator {
        GT = 'gt',
        LT = 'lt',
    }


}

