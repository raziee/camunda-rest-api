/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DecisionDefinitionDiagramDto = {
    /**
     * The id of the decision definition.
     */
    id?: string | null;
    /**
     * An escaped XML string containing the XML that this decision definition was deployed with.
     * Carriage returns, line feeds and quotation marks are escaped.
     */
    dmnXml?: string | null;
};

