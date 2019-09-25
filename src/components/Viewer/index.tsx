import * as React from "react";
import AgentVizViewer from "agentviz-viewer";

interface ThreeDViewerProps {
    agentSim: any;
    onTimeChange: any;
    time: number;
    handleJsonMeshData: (jsonData: any) => void;
    highlightId: string;
    height: number;
    width: number;
}

interface ThreeDViewerState {
    isPlaying: boolean;
}

class ThreeDViewer extends React.Component<
    ThreeDViewerProps,
    ThreeDViewerState
> {
    constructor(props: ThreeDViewerProps) {
        super(props);
        this.state = {
            isPlaying: true,
        };
    }
    // TODO: remove this.
    // I need to make this an optional prop on the viewer, but for now this handles the type error.
    handleTrajectoryFileInfoChanged(data: any) {
        return;
    }

    render() {
        const {
            agentSim,
            onTimeChange,
            handleJsonMeshData,
            highlightId,
            width,
            height,
        } = this.props;
        return (
            <AgentVizViewer
                height={height}
                width={width}
                devgui={false}
                loggerLevel="debug"
                onTimeChange={onTimeChange}
                agentSimController={agentSim}
                onJsonDataArrived={handleJsonMeshData}
                highlightedParticleType={highlightId}
                onTrajectoryFileInfoChanged={
                    this.handleTrajectoryFileInfoChanged
                }
            />
        );
    }
}

export default ThreeDViewer;