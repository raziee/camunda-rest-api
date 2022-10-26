/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CamundaFormRef = {
    /**
     * The key of the Camunda Form.
     */
    key?: string | null;
    /**
     * The binding of the Camunda Form. Can be `latest`, `deployment` or `version`.
     */
    binding?: string | null;
    /**
     * The specific version of a Camunda Form. This property is only set if `binding` is `version`.
     */
    version?: number | null;
};

