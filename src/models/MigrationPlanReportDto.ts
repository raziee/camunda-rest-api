/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MigrationInstructionValidationReportDto } from './MigrationInstructionValidationReportDto';
import type { MigrationVariableValidationReportDto } from './MigrationVariableValidationReportDto';

export type MigrationPlanReportDto = {
    /**
     * The list of instruction validation reports. If no validation
     * errors are detected it is an empty list.
     */
    instructionReports?: Array<MigrationInstructionValidationReportDto> | null;
    /**
     * A map of variable reports.
     * Each key is a variable name and each value a JSON object consisting of the variable's type, value,
     * value info object and a list of failures.
     */
    variableReports?: Record<string, MigrationVariableValidationReportDto> | null;
};

