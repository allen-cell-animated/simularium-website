import React from "react";
import { Waypoint } from "react-waypoint";
import PlotlyPlot from "react-plotly.js";

import { PlotParamsWithKey } from "../../containers/ResultsPanel/types";

interface PlotProps {
    plot: PlotParamsWithKey;
}

const Plot = ({ plot }: PlotProps) => {
    const handleEnterView = () => {
        console.log("handleEnterView:", plot.key);
    };
    const handleLeaveView = () => {
        console.log("handleLeaveView:", plot.key);
    };

    return (
        <Waypoint
            key={plot.key}
            debug={true}
            onEnter={handleEnterView}
            onLeave={handleLeaveView}
        >
            <div>
                <PlotlyPlot
                    key={plot.key}
                    data={plot.data}
                    useResizeHandler={true}
                    layout={plot.layout}
                    // config attributes:
                    // https://github.com/plotly/plotly.js/blob/master/src/plot_api/plot_config.js#L23
                    config={{
                        modeBarButtons: [["resetViews"]],
                        displaylogo: false,
                    }}
                />
            </div>
        </Waypoint>
    );
};

export default Plot;
