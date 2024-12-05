import { ReactNode } from "react";

interface VitalityIndicatorsRowProps {
    icon: ReactNode;
    title: string;
    value: number;
    suffix?: string;
}

function VitalityIndicatorsRow(props: VitalityIndicatorsRowProps) {

    return (
        <div className="flex justify-between">
            <div className="flex gap-2">
                {props.icon}
                <p>
                    {props.title}
                </p>
            </div>
            <div className="flex gap-2">
                <p>
                    {props.value}
                </p>
                {props.suffix ??
                    <p>
                        {props.suffix}
                    </p>
                }

            </div>

        </div>
    )
}

export default VitalityIndicatorsRow
