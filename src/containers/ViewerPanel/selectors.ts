import { UIDisplayData } from "@aics/simularium-viewer/type-declarations";
import { createSelector } from "reselect";
import {
    getAgentsToHide,
    getHightLightedAgents,
} from "../../state/selection/selectors";
import {
    AgentColorMap,
    VisibilitySelectionMap,
} from "../../state/selection/types";

export const getSelectionStateInfoForViewer = createSelector(
    [getHightLightedAgents, getAgentsToHide],
    (highlightedAgents, hiddenAgents) => ({
        highlightedAgents,
        hiddenAgents,
    })
);

export const convertUIDataToSelectionData = (
    uiData: UIDisplayData
): VisibilitySelectionMap => {
    const returnData: VisibilitySelectionMap = {};
    return uiData.reduce((acc, agent) => {
        acc[agent.name] = [];
        if (agent.displayStates && agent.displayStates.length > 0) {
            acc[agent.name] = [
                "", // unmodified state
                ...agent.displayStates.map((state) => state.name),
            ];
        } else {
            acc[agent.name] = [agent.name];
        }
        return acc;
    }, returnData);
};

export const convertUIDataToColorMap = (
    uiData: UIDisplayData
): AgentColorMap => {
    const returnData: AgentColorMap = {};
    return uiData.reduce((acc, agent) => {
        acc[agent.name] = agent.color;
        return acc;
    }, returnData);
};
