import { createSelector } from "reselect";

import { State } from "../types";

import { MetadataStateBranch } from "./types";

// BASIC SELECTORS
export const getMetadata = (state: State) => state.metadata;
export const getGraphData = (state: State) => state.metadata.graphData;
export const getTotalTimeOfCachedSimulation = (state: State) =>
    state.metadata.totalTime;
export const getTimeStepSize = (state: State) => state.metadata.timeStepSize;
export const getAgentIds = (state: State) => state.metadata.agentIds;
// COMPOSED SELECTORS
export const getKeysOfMetadata = createSelector(
    [getMetadata],
    (metadata: MetadataStateBranch): string[] => Object.keys(metadata)
);
