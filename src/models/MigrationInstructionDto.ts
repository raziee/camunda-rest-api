/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MigrationInstructionDto = {
    /**
     * The activity ids from the source process definition being mapped.
     */
    sourceActivityIds?: Array<string> | null;
    /**
     * The activity ids from the target process definition being mapped.
     */
    targetActivityIds?: Array<string> | null;
    /**
     * Configuration flag whether event triggers defined are going to be updated during migration.
     */
    updateEventTrigger?: boolean | null;
};

