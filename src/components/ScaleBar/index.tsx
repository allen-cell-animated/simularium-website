import * as React from "react";
import ScaleBarImage from "../../assets/scale-bar.svg";

const styles = require("./style.css");

interface ScaleBarProps {
    label: string;
}

const ScaleBar = (scaleBarProps: ScaleBarProps) => {
    const { label } = scaleBarProps;
    const scaleBarNode = label ? (
        <div className={styles.container}>
            <div className={styles.text}>{label}</div>
            <img src={ScaleBarImage} />
        </div>
    ) : (
        <div />
    );

    return scaleBarNode;
};
export default ScaleBar;
