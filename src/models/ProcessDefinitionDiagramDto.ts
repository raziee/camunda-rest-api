/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProcessDefinitionDiagramDto = {
    /**
     * The id of the process definition.
     */
    id?: string | null;
    /**
     * An escaped XML string containing the XML that this definition was deployed with.
     * Carriage returns, line feeds and quotation marks are escaped.
     */
    bpmn20Xml?: string | null;
};

