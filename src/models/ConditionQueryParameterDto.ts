/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AnyValue } from './AnyValue';

export type ConditionQueryParameterDto = {
    /**
     * Comparison operator to be used. `notLike` is not supported by all endpoints.
     */
    operator?: ConditionQueryParameterDto.operator | null;
    value?: AnyValue;
};

export namespace ConditionQueryParameterDto {

    /**
     * Comparison operator to be used. `notLike` is not supported by all endpoints.
     */
    export enum operator {
        EQ = 'eq',
        NEQ = 'neq',
        GT = 'gt',
        GTEQ = 'gteq',
        LT = 'lt',
        LTEQ = 'lteq',
        LIKE = 'like',
        NOT_LIKE = 'notLike',
    }


}

