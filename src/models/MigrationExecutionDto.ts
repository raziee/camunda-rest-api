/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MigrationPlanDto } from './MigrationPlanDto';
import type { ProcessInstanceQueryDto } from './ProcessInstanceQueryDto';

export type MigrationExecutionDto = {
    migrationPlan?: MigrationPlanDto;
    /**
     * A list of process instance ids to migrate.
     */
    processInstanceIds?: Array<string> | null;
    processInstanceQuery?: ProcessInstanceQueryDto;
    /**
     * A boolean value to control whether execution listeners should be invoked during
     * migration.
     */
    skipCustomListeners?: boolean | null;
    /**
     * A boolean value to control whether input/output mappings should be executed during
     * migration.
     */
    skipIoMappings?: boolean | null;
};

