/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VersionDto } from '../models/VersionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VersionService {

    /**
     * Get Rest API version
     * Retrieves the version of the Rest API.
     * @returns VersionDto Request successful.
     * @throws ApiError
     */
    public static getRestApiVersion(): CancelablePromise<VersionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/version',
        });
    }

}
