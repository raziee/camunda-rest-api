/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { CreateFilterDto } from '../models/CreateFilterDto';
import type { FilterDto } from '../models/FilterDto';
import type { ResourceOptionsDto } from '../models/ResourceOptionsDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FilterService {

    /**
     * Get Filters
     * Queries for a list of filters using a list of parameters. The size of the result
     * set can be retrieved
     * by using the [Get Filter Count](https://docs.camunda.org/manual/7.18/reference/rest/filter/get-query-count/) method.
     * @param filterId Filter by the id of the filter.
     * @param resourceType Filter by the resource type of the filter, e.g., `Task`.
     * @param name Filter by the name of the filter.
     * @param nameLike Filter by the name that the parameter is a substring of.
     * @param owner Filter by the user id of the owner of the filter.
     * @param itemCount If set to `true`, each filter result will contain an `itemCount` property
     * with the number of items matched by the filter itself.
     * @param sortBy Sort the results lexicographically by a given criterion.
     * Must be used in conjunction with the sortOrder parameter.
     * @param sortOrder Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
     * Must be used in conjunction with the sortBy parameter.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns FilterDto Request successful.
     * @throws ApiError
     */
    public static getFilterList(
        filterId?: string,
        resourceType?: string,
        name?: string,
        nameLike?: string,
        owner?: string,
        itemCount?: boolean,
        sortBy?: 'filterId' | 'resourceType' | 'name' | 'owner',
        sortOrder?: 'asc' | 'desc',
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<FilterDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/filter',
            query: {
                'filterId': filterId,
                'resourceType': resourceType,
                'name': name,
                'nameLike': nameLike,
                'owner': owner,
                'itemCount': itemCount,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `
                Returned if some of the query parameters are invalid, for example if
                a \`sortOrder\`
                parameter is supplied, but no \`sortBy\` is specified. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Filter Resource Options
     * The OPTIONS request allows you to check for the set of available operations
     * that the currently authenticated user can perform on the `/filter` resource.
     * Whether the user can perform an operation or not may depend on various
     * factors, including the users authorizations to interact with this
     * resource and the internal configuration of the process engine.
     * @returns ResourceOptionsDto Request successful.
     * @throws ApiError
     */
    public static filterResourceOptions(): CancelablePromise<ResourceOptionsDto> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/filter',
        });
    }

    /**
     * Get Filter Count
     * Retrieves the number of filters that fulfill a provided query. Corresponds to the
     * size of the result set when using the
     * [Get Filters](https://docs.camunda.org/manual/7.18/reference/rest/filter/get-query/) method.
     * @param filterId Filter by the id of the filter.
     * @param resourceType Filter by the resource type of the filter, e.g., `Task`.
     * @param name Filter by the name of the filter.
     * @param nameLike Filter by the name that the parameter is a substring of.
     * @param owner Filter by the user id of the owner of the filter.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getFilterCount(
        filterId?: string,
        resourceType?: string,
        name?: string,
        nameLike?: string,
        owner?: string,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/filter/count',
            query: {
                'filterId': filterId,
                'resourceType': resourceType,
                'name': name,
                'nameLike': nameLike,
                'owner': owner,
            },
            errors: {
                400: `
                Returned if some of the query parameters are invalid, for example if
                a \`sortOrder\`parameter is supplied, but no \`sortBy\`, or if an invalid operator
                for variable comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Create Filter
     * Creates a new filter.
     * @param requestBody
     * @returns FilterDto Request successful.
     * @throws ApiError
     */
    public static createFilter(
        requestBody?: CreateFilterDto,
    ): CancelablePromise<FilterDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/filter/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `
                Filter was invalid. See
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
                403: `
                The authenticated user is unauthorized to create a new filter. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Delete Filter
     * Deletes a filter by id.
     * @param id The id of the filter to be deleted.
     * @returns void
     * @throws ApiError
     */
    public static deleteFilter(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/filter/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `
                The authenticated user is unauthorized to delete this filter.
                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
                404: `
                Filter cannot be found. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Get Single Filter
     * Retrieves a single filter by id, according to the `Filter` interface in the engine.
     * @param id The id of the filter to be retrieved.
     * @param itemCount If set to `true`, each filter result will contain an `itemCount`
     * property with the number of items matched by the filter itself.
     * @returns FilterDto Request successful.
     * @throws ApiError
     */
    public static getSingleFilter(
        id: string,
        itemCount?: boolean,
    ): CancelablePromise<FilterDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/filter/{id}',
            path: {
                'id': id,
            },
            query: {
                'itemCount': itemCount,
            },
            errors: {
                403: `The authenticated user is unauthorized to read this filter.
                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Filter with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Filter Resource Options
     * The OPTIONS request allows you to check for the set of available operations
     * that the currently authenticated user can perform on the `/filter` resource.
     * Whether the user can perform an operation or not may depend on various
     * factors, including the users authorizations to interact with this
     * resource and the internal configuration of the process engine.
     * @param id The id of the filter to be checked.
     * @returns ResourceOptionsDto Request successful.
     * @throws ApiError
     */
    public static filterResourceOptionsSingle(
        id: string,
    ): CancelablePromise<ResourceOptionsDto> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/filter/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update Filter
     * Updates an existing filter.
     * @param id The id of the filter to be updated.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateFilter(
        id: string,
        requestBody?: CreateFilterDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/filter/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `
                Filter was invalid. See
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
                403: `
                The authenticated user is unauthorized to update this filter.
                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
                404: `
                Filter cannot be found. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Execute Filter Count
     * Executes the saved query of the filter by id and returns the count.
     * @param id The id of the filter to execute.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static executeFilterCount(
        id: string,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/filter/{id}/count',
            path: {
                'id': id,
            },
            errors: {
                403: `
                The authenticated user is unauthorized to read this filter. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
                404: `
                Filter with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Execute Filter Count (POST)
     * Executes the saved query of the filter by id and returns the count. This method is
     * slightly more powerful then the [Get Execute Filter Count](https://docs.camunda.org/manual/7.18/reference/rest/filter/get-execute-count/)
     * method because it allows to extend the saved query of the filter.
     * @param id The id of the filter to execute.
     * @param requestBody A JSON object which corresponds to the type of the saved query of the filter, i.e., if the resource type of the filter is Task the body should form a valid task query corresponding to the Task resource.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static postExecuteFilterCount(
        id: string,
        requestBody?: any,
    ): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/filter/{id}/count',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `
                The extending query was invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
                403: `
                The authenticated user is unauthorized to read this filter. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
                404: `
                Filter with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Execute Filter List
     * Executes the saved query of the filter by id and returns the result list.
     * @param id The id of the filter to execute.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @returns any Request successful. A JSON array containing JSON objects corresponding to the matching entity interface in the engine. This depends on the saved query in the filter. Therefore it is not possible to specify a generic result format, i.e., if the resource type of the filter is Task the result will correspond to the Task interface in the engine.
     * @throws ApiError
     */
    public static executeFilterList(
        id: string,
        firstResult?: number,
        maxResults?: number,
    ): CancelablePromise<Array<any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/filter/{id}/list',
            path: {
                'id': id,
            },
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                403: `
                The authenticated user is unauthorized to read this filter.
                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
                404: `
                Filter with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Execute Filter List (POST)
     * Executes the saved query of the filter by id and returns the result list. This
     * method is slightly more powerful then the
     * [Get Execute FilterList](https://docs.camunda.org/manual/7.18/reference/rest/filter/get-execute-list/) method
     * because it allows to extend the saved query of the filter.
     * @param id The id of the filter to execute.
     * @param firstResult Pagination of results. Specifies the index of the first result to return.
     * @param maxResults Pagination of results. Specifies the maximum number of results to return.
     * Will return less results if there are no more results left.
     * @param requestBody A JSON object which corresponds to the type of the saved query of the filter, i.e., if the resource type of the filter is Task the body should form a valid task query corresponding to the Task resource.
     * @returns any Request successful. A JSON array containing JSON objects corresponding to the matching entity interface in the engine. This depends on the saved query in the filter. Therefore it is not possible to specify a generic result format, i.e., if the resource type of the filter is Task the result will correspond to the Task interface in the engine.
     * @throws ApiError
     */
    public static postExecuteFilterList(
        id: string,
        firstResult?: number,
        maxResults?: number,
        requestBody?: any,
    ): CancelablePromise<Array<any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/filter/{id}/list',
            path: {
                'id': id,
            },
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `
                The extending query was invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
                403: `
                The authenticated user is unauthorized to read this filter.
                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
                404: `
                Filter with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Execute Filter Single Result
     * Executes the saved query of the filter by id and returns the single result.
     * @param id The id of the filter to execute.
     * @returns any Request successful. A JSON object corresponding to the matching entity interface in the engine. This depends on the saved query in the filter. Therefore it is not possible to specify a generic result format, i.e., if the resource type of the filter is Task the result will correspond to the Task interface in the engine.
     * @throws ApiError
     */
    public static executeFilterSingleResult(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/filter/{id}/singleResult',
            path: {
                'id': id,
            },
            errors: {
                400: `
                The executed filter returned more than one single result. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
                403: `
                The authenticated user is unauthorized to read this filter.
                See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
                404: `
                Filter with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

    /**
     * Execute Filter Single Result (POST)
     * Executes the saved query of the filter by id and returns the single result. This method is slightly more
     * powerful then the [Get Execute Filter Single Result](https://docs.camunda.org/manual/7.18/reference/rest/filter/get-execute-single-result/)
     * method because it allows to extend the saved query of the filter.
     * @param id The id of the filter to execute.
     * @param requestBody A JSON object which corresponds to the type of the saved query of the filter, i.e., if the resource type of the filter is Task the body should form a valid task query corresponding to the Task resource.
     * @returns any Request successful. A JSON object corresponding to the corresponding entity interface in the engine. This depends on the saved query in the filter. Therefore it is not possible specify a generic result format, i.e., if the resource type of the filter is Task the result will correspond to the Task interface in the engine.
     * @throws ApiError
     */
    public static postExecuteFilterSingleResult(
        id: string,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/filter/{id}/singleResult',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `
                The executed filter returned more than one single result or the
                extending query was invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
                403: `
                The authenticated user is unauthorized to read this filter. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
                404: `
                Filter with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.
                `,
            },
        });
    }

}
