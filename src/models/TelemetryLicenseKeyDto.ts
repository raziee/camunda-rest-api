/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TelemetryLicenseKeyDto = {
    /**
     * The name of the customer the license was issued for.
     */
    customer?: string | null;
    /**
     * The license type.
     */
    type?: string | null;
    /**
     * The expiration date of the license.
     */
    'valid-until'?: string | null;
    /**
     * Flag that indicates if the license is unlimited.
     */
    unlimited?: boolean | null;
    /**
     * A map of features included in the license.
     */
    features?: Record<string, string>;
    /**
     * The raw license information.
     */
    raw?: string | null;
};

