/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type MigrationVariableValidationReportDto = ({
    /**
     * A list of variable validation report messages.
     */
    failures?: Array<string> | null;
} & VariableValueDto);

