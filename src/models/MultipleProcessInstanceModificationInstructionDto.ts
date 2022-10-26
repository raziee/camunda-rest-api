/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MultipleProcessInstanceModificationInstructionDto = {
    /**
     * **Mandatory**. One of the following values: `cancel`, `startBeforeActivity`, `startAfterActivity`, `startTransition`.
     *
     * * A cancel instruction requests cancellation of a single activity instance or all instances of one activity.
     * * A startBeforeActivity instruction requests to enter a given activity.
     * * A startAfterActivity instruction requests to execute the single outgoing sequence flow of a given activity.
     * * A startTransition instruction requests to execute a specific sequence flow.
     */
    type: MultipleProcessInstanceModificationInstructionDto.type;
    /**
     * Can be used with instructions of types `startTransition`. Specifies the sequence flow to start.
     */
    activityId?: string | null;
    /**
     * Can be used with instructions of types `startTransition`. Specifies the sequence flow to start.
     */
    transitionId?: string | null;
    /**
     * Can be used with instructions of type cancel. Prevents the deletion of new created activity instances.
     */
    cancelCurrentActiveActivityInstances?: boolean | null;
};

export namespace MultipleProcessInstanceModificationInstructionDto {

    /**
     * **Mandatory**. One of the following values: `cancel`, `startBeforeActivity`, `startAfterActivity`, `startTransition`.
     *
     * * A cancel instruction requests cancellation of a single activity instance or all instances of one activity.
     * * A startBeforeActivity instruction requests to enter a given activity.
     * * A startAfterActivity instruction requests to execute the single outgoing sequence flow of a given activity.
     * * A startTransition instruction requests to execute a specific sequence flow.
     */
    export enum type {
        CANCEL = 'cancel',
        START_BEFORE_ACTIVITY = 'startBeforeActivity',
        START_AFTER_ACTIVITY = 'startAfterActivity',
        START_TRANSITION = 'startTransition',
    }


}

