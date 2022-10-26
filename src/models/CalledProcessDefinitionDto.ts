/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProcessDefinitionDto } from './ProcessDefinitionDto';

export type CalledProcessDefinitionDto = ({
    /**
     * Ids of the CallActivities which call this process.
     */
    calledFromActivityIds?: Array<string> | null;
    /**
     * The id of the calling process definition
     */
    callingProcessDefinitionId?: string | null;
} & ProcessDefinitionDto);

