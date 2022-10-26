/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LinkableDto } from './LinkableDto';

export type ProcessInstanceDto = ({
    /**
     * The id of the process instance.
     */
    id?: string | null;
    /**
     * The id of the process definition that this process instance belongs to.
     */
    definitionId?: string | null;
    /**
     * The business key of the process instance.
     */
    businessKey?: string | null;
    /**
     * The id of the case instance associated with the process instance.
     */
    caseInstanceId?: string | null;
    /**
     * A flag indicating whether the process instance has ended or not. Deprecated: will always be false!
     * @deprecated
     */
    ended?: boolean | null;
    /**
     * A flag indicating whether the process instance is suspended or not.
     */
    suspended?: boolean | null;
    /**
     * The tenant id of the process instance.
     */
    tenantId?: string | null;
} & LinkableDto);

