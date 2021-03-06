import * as React from "react";
import { Radio } from "antd";
import { AnyAction } from "redux";
import { RadioChangeEvent } from "antd/lib/radio";

interface RadioButtonsProps {
    options: string[];
    value: string;
    onChange: (value: any) => AnyAction;
    title: string;
}

export default class RadioButtons extends React.Component<RadioButtonsProps> {
    constructor(props: RadioButtonsProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: RadioChangeEvent) {
        const { onChange } = this.props;
        onChange(e.target.value).toString();
    }

    render() {
        const { options, value, title } = this.props;

        const radioStyle = {
            display: "block",
            height: "30px",
            lineHeight: "30px",
        };

        return (
            <div>
                <h4>{title}</h4>

                <Radio.Group onChange={this.handleChange} value={value}>
                    {options.map((ele) => (
                        <Radio style={radioStyle} value={ele} key={ele}>
                            {ele}
                        </Radio>
                    ))}
                </Radio.Group>
            </div>
        );
    }
}
