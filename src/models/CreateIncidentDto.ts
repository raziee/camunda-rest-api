/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateIncidentDto = {
    /**
     * A type of the new incident.
     */
    incidentType?: string | null;
    /**
     * A configuration for the new incident.
     */
    configuration?: string | null;
    /**
     * A message for the new incident.
     */
    message?: string | null;
};

