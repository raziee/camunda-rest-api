/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MultiFormAttachmentDto = {
    /**
     * The name of the attachment.
     */
    'attachment-name'?: string | null;
    /**
     * The description of the attachment.
     */
    'attachment-description'?: string | null;
    /**
     * The type of the attachment.
     */
    'attachment-type'?: string | null;
    /**
     * The url to the remote content of the attachment.
     */
    url?: string | null;
    /**
     * The content of the attachment.
     */
    content?: Blob | null;
};

