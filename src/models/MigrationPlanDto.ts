/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MigrationInstructionDto } from './MigrationInstructionDto';
import type { VariableValueDto } from './VariableValueDto';

export type MigrationPlanDto = {
    /**
     * The id of the source process definition for the migration.
     */
    sourceProcessDefinitionId?: string | null;
    /**
     * The id of the target process definition for the migration.
     */
    targetProcessDefinitionId?: string | null;
    /**
     * A list of migration instructions which map equal activities. Each
     * migration instruction is a JSON object with the following properties:
     */
    instructions?: Array<MigrationInstructionDto> | null;
    /**
     * A map of variables which will be set into the process instances' scope.
     * Each key is a variable name and each value a JSON variable value object.
     */
    variables?: Record<string, VariableValueDto> | null;
};

