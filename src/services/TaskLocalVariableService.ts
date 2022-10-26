/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MultiFormVariableBinaryDto } from '../models/MultiFormVariableBinaryDto';
import type { PatchVariablesDto } from '../models/PatchVariablesDto';
import type { VariableValueDto } from '../models/VariableValueDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TaskLocalVariableService {

    /**
     * Get Local Task Variables
     * Retrieves all variables of a given task by id.
     * @param id The id of the task to retrieve the variables from.
     * @param deserializeValues Determines whether serializable variable values (typically variables that store custom Java objects)
     * should be deserialized on the server side (default `true`).
     *
     * If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON
     * using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature.
     * Note that this requires the Java classes of the variable value to be on the REST API's classpath.
     *
     * If set to `false`, a serializable variable will be returned in its serialized format.
     * For example, a variable that is serialized as XML will be returned as a JSON string containing XML.
     *
     * **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this
     * parameter to `false` when developing web applications that are independent of the Java process
     * applications deployed to the engine.
     * @returns VariableValueDto Request successful.
     * @throws ApiError
     */
    public static getTaskLocalVariables(
        id: string,
        deserializeValues: boolean = true,
    ): CancelablePromise<Record<string, VariableValueDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/localVariables',
            path: {
                'id': id,
            },
            query: {
                'deserializeValues': deserializeValues,
            },
            errors: {
                500: `Task id is \`null\` or does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Update/Delete Local Task Variables
     * Updates or deletes the variables in the context of a task. Updates precede deletions. So, if a variable is
     * updated AND deleted, the deletion overrides the update.
     * @param id The id of the task to set variables for.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static modifyTaskLocalVariables(
        id: string,
        requestBody?: PatchVariablesDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/localVariables',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The variable value or type is invalid. For example the value could not be parsed to an \`Integer\` value
                or the passed variable type is not supported. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `Update or delete could not be executed because the task is \`null\` or does not exist.. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Delete Local Task Variable
     * Removes a local variable from a task by id.
     * @param id The id of the task to delete the variable from.
     * @param varName The name of the variable to be removed.
     * @returns void
     * @throws ApiError
     */
    public static deleteTaskLocalVariable(
        id: string,
        varName: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/task/{id}/localVariables/{varName}',
            path: {
                'id': id,
                'varName': varName,
            },
            errors: {
                500: `Task id is \`null\` or does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Local Task Variable
     * Retrieves a variable from the context of a given task by id.
     * @param id The id of the task to retrieve the variable from.
     * @param varName The name of the variable to get
     * @param deserializeValue Determines whether serializable variable values (typically variables that store custom Java objects)
     * should be deserialized on the server side (default `true`).
     *
     * If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON
     * using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature.
     * Note that this requires the Java classes of the variable value to be on the REST API's classpath.
     *
     * If set to `false`, a serializable variable will be returned in its serialized format.
     * For example, a variable that is serialized as XML will be returned as a JSON string containing XML.
     *
     * Note: While `true` is the default value for reasons of backward compatibility, we recommend setting this
     * parameter to `false` when developing web applications that are independent of the Java process
     * applications deployed to the engine.
     * @returns VariableValueDto Request successful.
     * @throws ApiError
     */
    public static getTaskLocalVariable(
        id: string,
        varName: string,
        deserializeValue: boolean = true,
    ): CancelablePromise<VariableValueDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/localVariables/{varName}',
            path: {
                'id': id,
                'varName': varName,
            },
            query: {
                'deserializeValue': deserializeValue,
            },
            errors: {
                404: `Variable with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `Task id is \`null\` or does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Update Local Task Variable
     * Sets a variable in the context of a given task.
     * @param id The id of the task to set the variable for.
     * @param varName The name of the variable to set.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static putTaskLocalVariable(
        id: string,
        varName: string,
        requestBody?: VariableValueDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/task/{id}/localVariables/{varName}',
            path: {
                'id': id,
                'varName': varName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The variable name, value or type is invalid, for example if the value could not be parsed to an \`Integer\`
                value or the passed variable type is not supported or a new transient variable has the name that is
                already persisted. See the [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `The variable name is \`null\`, or the Task id is \`null\` or does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Local Task Variable (Binary)
     * Retrieves a binary variable from the context of a given task by id. Applicable for byte array and file
     * variables.
     * @param id The id of the task to retrieve the variable for.
     * @param varName The name of the variable to retrieve.
     * @returns binary Request successful.
     * For binary variables or files without any MIME type information, a byte stream is returned.
     * File variables with MIME type information are returned as the saved type.
     * Additionally, for file variables the Content-Disposition header will be set.
     * @throws ApiError
     */
    public static getTaskLocalVariableBinary(
        id: string,
        varName: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/localVariables/{varName}/data',
            path: {
                'id': id,
                'varName': varName,
            },
            errors: {
                400: `Variable with given id exists but is not a binary variable.See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Variable with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Update Local Task Variable (Binary)
     * Sets the serialized value for a binary variable or the binary value for a file variable.
     * @param id The id of the task to retrieve the variable for.
     * @param varName The name of the variable to retrieve.
     * @param formData For binary variables a multipart form submit with the following parts:
     * @returns void
     * @throws ApiError
     */
    public static setBinaryTaskLocalVariable(
        id: string,
        varName: string,
        formData?: MultiFormVariableBinaryDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/localVariables/{varName}/data',
            path: {
                'id': id,
                'varName': varName,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `The variable value or type is invalid, for example if no filename is set. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `Variable name is \`null\`, or the Task id is \`null\` or does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.18/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
