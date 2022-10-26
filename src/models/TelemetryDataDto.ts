/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TelemetryProductDto } from './TelemetryProductDto';

export type TelemetryDataDto = {
    /**
     * An id which is unique for each installation of Camunda. It is stored once per database so all
     * engines connected to the same database will have the same installation ID.
     * The ID is used to identify a single installation of Camunda Platform.
     */
    installation?: string | null;
    /**
     * Information about the product collection telemetry data.
     */
    product?: Record<string, TelemetryProductDto> | null;
};

