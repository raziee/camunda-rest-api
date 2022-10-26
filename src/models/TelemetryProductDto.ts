/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TelemetryInternalsDto } from './TelemetryInternalsDto';

export type TelemetryProductDto = {
    /**
     * The name of the product (i.e., Camunda BPM Runtime).
     */
    name?: string | null;
    /**
     * The version of the process engine (i.e., 7.X.Y).
     */
    version?: string | null;
    /**
     * The edition of the product (i.e., either community or enterprise).
     */
    edition?: string | null;
    /**
     * Internal data and metrics collected by the product.
     */
    internals?: Record<string, TelemetryInternalsDto> | null;
};

