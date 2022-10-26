/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RestartProcessInstanceModificationInstructionDto = {
    /**
     * **Mandatory**. One of the following values: `startBeforeActivity`, `startAfterActivity`, `startTransition`.
     *
     * * A `startBeforeActivity` instruction requests to enter a given activity.
     * * A `startAfterActivity` instruction requests to execute the single outgoing sequence flow of a given activity.
     * * A `startTransition` instruction requests to execute a specific sequence flow.
     */
    type: RestartProcessInstanceModificationInstructionDto.type;
    /**
     * **Can be used with instructions of types** `startBeforeActivity`
     * and `startAfterActivity`. Specifies the sequence flow to start.
     */
    activityId?: string | null;
    /**
     * **Can be used with instructions of types** `startTransition`.
     * Specifies the sequence flow to start.
     */
    transitionId?: string | null;
};

export namespace RestartProcessInstanceModificationInstructionDto {

    /**
     * **Mandatory**. One of the following values: `startBeforeActivity`, `startAfterActivity`, `startTransition`.
     *
     * * A `startBeforeActivity` instruction requests to enter a given activity.
     * * A `startAfterActivity` instruction requests to execute the single outgoing sequence flow of a given activity.
     * * A `startTransition` instruction requests to execute a specific sequence flow.
     */
    export enum type {
        START_BEFORE_ACTIVITY = 'startBeforeActivity',
        START_AFTER_ACTIVITY = 'startAfterActivity',
        START_TRANSITION = 'startTransition',
    }


}

