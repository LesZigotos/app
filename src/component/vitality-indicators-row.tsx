import { ReactNode } from "react";

interface VitalityIndicatorsRowProps {
  icon: ReactNode;
  title: string;
  value: number;
  recentChange?: number;
  suffix?: string;
}

function VitalityIndicatorsRow({
  icon,
  title,
  value,
  recentChange,
  suffix,
}: VitalityIndicatorsRowProps) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        {icon}
        <p className="text-base font-light">{title}</p>
      </div>
      <div className="flex gap-2">
        <p>{value}</p>
        {recentChange !== undefined && recentChange !== 0 && (
          <p
            className={`text-sm ${
              recentChange > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {recentChange > 0 ? `+${recentChange}` : `${recentChange}`}
          </p>
        )}
        {suffix && <p className="font-light">{suffix}</p>}
      </div>
    </div>
  );
}

export default VitalityIndicatorsRow;
