/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LinkableDto } from './LinkableDto';

export type CommentDto = ({
    /**
     * The id of the task comment.
     */
    id?: string | null;
    /**
     * The id of the user who created the comment.
     */
    userId?: string | null;
    /**
     * The id of the task to which the comment belongs.
     */
    taskId?: string | null;
    /**
     * The id of the process instance the comment is related to.
     */
    processInstanceId?: string | null;
    /**
     * The time when the comment was created.
     * [Default format]($(docsUrl)/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    time?: string | null;
    /**
     * The content of the comment.
     */
    message?: string | null;
    /**
     * The time after which the comment should be removed by the History Cleanup job.
     * [Default format]($(docsUrl)/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    removalTime?: string | null;
    /**
     * The process instance id of the root process instance that initiated the process
     * containing the task.
     */
    rootProcessInstanceId?: string | null;
} & LinkableDto);

