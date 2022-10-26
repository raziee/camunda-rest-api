/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActivityInstanceIncidentDto } from './ActivityInstanceIncidentDto';
import type { TransitionInstanceDto } from './TransitionInstanceDto';

/**
 * A JSON object corresponding to the Activity Instance tree of the given process instance.
 */
export type ActivityInstanceDto = {
    /**
     * The id of the activity instance.
     */
    id?: string | null;
    /**
     * The id of the parent activity instance, for example a sub process instance.
     */
    parentActivityInstanceId?: string | null;
    /**
     * The id of the activity.
     */
    activityId?: string | null;
    /**
     * The name of the activity
     */
    activityName?: string | null;
    /**
     * The type of activity (corresponds to the XML element name in the BPMN 2.0, e.g., 'userTask')
     */
    activityType?: string | null;
    /**
     * The id of the process instance this activity instance is part of.
     */
    processInstanceId?: string | null;
    /**
     * The id of the process definition.
     */
    processDefinitionId?: string | null;
    /**
     * A list of child activity instances.
     */
    childActivityInstances?: Array<ActivityInstanceDto> | null;
    /**
     * A list of child transition instances.
     * A transition instance represents an execution waiting in an asynchronous continuation.
     */
    childTransitionInstances?: Array<TransitionInstanceDto> | null;
    /**
     * A list of execution ids.
     */
    executionIds?: Array<string> | null;
    /**
     * A list of incident ids.
     */
    incidentIds?: Array<string> | null;
    /**
     * A list of JSON objects containing incident specific properties:
     * * `id`: the id of the incident
     * * `activityId`: the activity id in which the incident occurred
     */
    incidents?: Array<ActivityInstanceIncidentDto> | null;
};

