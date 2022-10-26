/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type MigrationPlanGenerationDto = {
    /**
     * The id of the source process definition for the migration.
     */
    sourceProcessDefinitionId?: string | null;
    /**
     * The id of the target process definition for the migration.
     */
    targetProcessDefinitionId?: string | null;
    /**
     * A boolean flag indicating whether instructions between events should be configured
     * to update the event triggers.
     */
    updateEventTriggers?: boolean | null;
    /**
     * A map of variables which will be set into the process instances' scope.
     * Each key is a variable name and each value a JSON variable value object.
     */
    variables?: Record<string, VariableValueDto> | null;
};

