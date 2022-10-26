/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MigrationInstructionDto } from './MigrationInstructionDto';

export type MigrationInstructionValidationReportDto = {
    instruction?: MigrationInstructionDto;
    /**
     * A list of instruction validation report messages.
     */
    failures?: Array<string> | null;
};

