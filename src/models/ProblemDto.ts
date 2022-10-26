/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProblemDto = {
    /**
     * The message of the problem.
     */
    message?: string | null;
    /**
     * The line where the problem occurred.
     */
    line?: number | null;
    /**
     * The column where the problem occurred.
     */
    column?: number | null;
    /**
     * The main element id where the problem occurred.
     */
    mainElementId?: string | null;
    /**
     * A list of element id affected by the problem.
     */
    elementIds?: Array<string> | null;
};

