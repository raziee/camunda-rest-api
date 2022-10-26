/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConditionQueryParameterDto } from './ConditionQueryParameterDto';

export type VariableQueryParameterDto = ({
    /**
     * Variable name
     */
    name?: string | null;
} & ConditionQueryParameterDto);

