/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbstractVendorVersionInformationDto } from './AbstractVendorVersionInformationDto';
import type { TelemetryCountDto } from './TelemetryCountDto';
import type { TelemetryLicenseKeyDto } from './TelemetryLicenseKeyDto';

export type TelemetryInternalsDto = {
    /**
     * Vendor and version of the connected database.
     */
    database?: Record<string, AbstractVendorVersionInformationDto> | null;
    /**
     * Vendor and version of the application server.
     */
    'application-server'?: Record<string, AbstractVendorVersionInformationDto> | null;
    /**
     * Information about the Camunda license key.
     */
    'license-key'?: Record<string, TelemetryLicenseKeyDto> | null;
    /**
     * List of Camunda integrations used (e.g., Camunda Spring Boot Starter, Camunda Run, WildFly/JBoss subsystem, Camunda EJB).
     */
    'camunda-integration'?: Array<string> | null;
    /**
     * The count of executed commands after the last retrieved data.
     */
    commands?: Record<string, TelemetryCountDto> | null;
    /**
     * The collected metrics are the number of root process instance executions started, the number of activity instances started or also known as flow node instances, and the number of executed decision instances and elements.
     */
    metrics?: Record<string, TelemetryCountDto> | null;
    /**
     * The webapps enabled in this installation of Camunda.
     */
    webapps?: Array<string> | null;
    /**
     * Vendor and version of the installed JDK.
     */
    jdk?: Record<string, AbstractVendorVersionInformationDto> | null;
};

