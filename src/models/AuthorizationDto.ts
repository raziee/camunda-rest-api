/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthorizationDto = {
    /**
     * The id of the authorization.
     */
    id?: string | null;
    /**
     * The type of the authorization (0=global, 1=grant, 2=revoke). See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/authorization-service.md#authorization-type)
     * for more information about authorization types.
     */
    type?: number | null;
    /**
     * An array of Strings holding the permissions provided by this authorization.
     */
    permissions?: Array<string> | null;
    /**
     * The id of the user this authorization has been created for. The value `*`
     * represents a global authorization ranging over all users.
     */
    userId?: string | null;
    /**
     * The id of the group this authorization has been created for.
     */
    groupId?: string | null;
    /**
     * An integer representing the resource type. See the
     * [User Guide](https://docs.camunda.org/manual/7.18/user-guide/process-engine/authorization-service/#resources)
     * for a list of integer representations of resource types.
     */
    resourceType?: number | null;
    /**
     * The resource Id. The value `*` represents an authorization ranging over all
     * instances of a resource.
     */
    resourceId?: string | null;
    /**
     * The removal time indicates the date a historic instance
     * authorization is cleaned up. A removal time can only be assigned to a historic
     * instance authorization. Can be `null` when not related to a historic instance
     * resource or when the removal time strategy is end and the root process instance
     * is not finished. Default format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    removalTime?: string | null;
    /**
     * The process instance id of the root process instance the historic
     * instance authorization is related to. Can be `null` if not related to a historic instance
     * resource.
     */
    rootProcessInstanceId?: string | null;
};

