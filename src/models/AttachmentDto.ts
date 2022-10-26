/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LinkableDto } from './LinkableDto';

export type AttachmentDto = ({
    /**
     * The id of the task attachment.
     */
    id?: string | null;
    /**
     * The name of the task attachment.
     */
    name?: string | null;
    /**
     * The description of the task attachment.
     */
    description?: string | null;
    /**
     * The id of the task to which the attachment belongs.
     */
    taskId?: string | null;
    /**
     * Indication of the type of content that this attachment refers to.
     * Can be MIME type or any other indication.
     */
    type?: string | null;
    /**
     * The url to the remote content of the task attachment.
     */
    url?: string | null;
    /**
     * The time the variable was inserted.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    createTime?: string | null;
    /**
     * The time after which the attachment should be removed by the History Cleanup job.
     * [Default format](https://docs.camunda.org/manual/7.18/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    removalTime?: string | null;
    /**
     * The process instance id of the root process instance that initiated the process containing the task.
     */
    rootProcessInstanceId?: string | null;
} & LinkableDto);

