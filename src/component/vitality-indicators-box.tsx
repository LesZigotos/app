import VitalityIndicatorsRow from "./vitality-indicators-row";

interface VitalityIndicatorsProps {
  indicators: {
    heartRate: number;
    immuneSystem: number;
    bodyTemperature: number;
    ph: number;
    bloodPressure: number;
    respiratory: number;
    fertility: number;
  };
  recentChanges: {
    heartRate: number;
    immuneSystem: number;
    bodyTemperature: number;
    ph: number;
    bloodPressure: number;
    respiratory: number;
    fertility: number;
  };
}

function VitalityIndicatorsBox({
  indicators,
  recentChanges,
}: VitalityIndicatorsProps) {
  return (
    <div className="flex flex-col gap-3 bg-white p-8 rounded-lg shadow">
      <VitalityIndicatorsRow
        title="Rythme cardiaque"
        icon={
          <svg
            className="w-5"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
              className="fill-red"
            />
          </svg>
        }
        value={indicators.heartRate || 0}
        recentChange={recentChanges.heartRate || 0}
      />
      <VitalityIndicatorsRow
        title="Système immunitaire"
        icon={
          <svg
            className="w-5"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
              className="fill-red"
            />
          </svg>
        }
        value={indicators.immuneSystem || 0}
        recentChange={recentChanges.immuneSystem || 0}
      />
      <VitalityIndicatorsRow
        title="Température corporelle"
        icon={
          <svg
            className="w-5"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
              className="fill-red"
            />
          </svg>
        }
        value={indicators.bodyTemperature || 0}
        recentChange={recentChanges.bodyTemperature || 0}
      />
      <VitalityIndicatorsRow
        title="pH"
        icon={
          <svg
            className="w-5"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
              className="fill-red"
            />
          </svg>
        }
        value={indicators.ph || 0}
        recentChange={recentChanges.ph || 0}
      />
      <VitalityIndicatorsRow
        title="Pression arterielle"
        icon={
          <svg
            className="w-5"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
              className="fill-red"
            />
          </svg>
        }
        value={indicators.bloodPressure || 0}
        recentChange={recentChanges.bloodPressure || 0}
      />
      <VitalityIndicatorsRow
        title="Fonctions respiratoires"
        icon={
          <svg
            className="w-5"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
              className="fill-red"
            />
          </svg>
        }
        value={indicators.respiratory || 0}
        recentChange={recentChanges.respiratory || 0}
      />
      <VitalityIndicatorsRow
        title="Fertilité"
        icon={
          <svg
            className="w-5"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
              className="fill-red"
            />
          </svg>
        }
        value={indicators.fertility || 0}
        recentChange={recentChanges.fertility || 0}
      />
    </div>
  );
}

export default VitalityIndicatorsBox;
