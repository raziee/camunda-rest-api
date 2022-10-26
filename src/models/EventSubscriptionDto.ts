/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EventSubscriptionDto = {
    /**
     * The id of the event subscription.
     */
    id?: string | null;
    /**
     * The type of the event subscription.
     */
    eventType?: string | null;
    /**
     * The name of the event this subscription belongs to as defined in the process model.
     */
    eventName?: string | null;
    /**
     * The execution that is subscribed on the referenced event.
     */
    executionId?: string | null;
    /**
     * The process instance this subscription belongs to.
     */
    processInstanceId?: string | null;
    /**
     * The identifier of the activity that this event subscription belongs to.
     * This could for example be the id of a receive task.
     */
    activityId?: string | null;
    /**
     * The time this event subscription was created.
     */
    createdDate?: string | null;
    /**
     * The id of the tenant this event subscription belongs to.
     * Can be `null` if the subscription belongs to no single tenant.
     */
    tenantId?: string | null;
};

