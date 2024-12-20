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
            className="w-6"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-primary-darker"
              d="M95.812 29.781a18.002 18.002 0 0 0-12.54 30.91l81.636 81.637-14.543 14.543-73.637-73.637a18.002 18.002 0 0 0-12.916-5.453 18.002 18.002 0 0 0-12.54 30.91l96 96a18.002 18.002 0 1 0 25.456-25.457l-9.636-9.637 14.543-14.543L206 183.418v280.545a18.002 18.002 0 1 0 36 0v-199h28v199a18.002 18.002 0 1 0 36 0V183.418l28.365-28.364 14.543 14.543-9.637 9.637a18.002 18.002 0 1 0 25.457 25.457l96-96a18.002 18.002 0 0 0-13.082-30.902 18.002 18.002 0 0 0-12.375 5.445l-73.636 73.637-14.543-14.543 81.636-81.637a18.002 18.002 0 0 0-13.082-30.902 18.002 18.002 0 0 0-12.375 5.445L270 168.508v78.455h-28v-78.455L108.728 35.234a18.002 18.002 0 0 0-12.916-5.453z"
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
            className="w-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15,16a3,3,0,1,1-4-2.816V5a1,1,0,0,1,2,0v8.184A2.99,2.99,0,0,1,15,16ZM16,5v5.262A7,7,0,0,1,11.984,23a7.194,7.194,0,0,1-.827-.049,7.067,7.067,0,0,1-6.07-5.835A6.986,6.986,0,0,1,8,10.261V5a4,4,0,0,1,8,0Zm-1.5,6.675a1,1,0,0,1-.5-.865V5a2,2,0,0,0-4,0v5.81a1,1,0,0,1-.5.865,5,5,0,1,0,5,0Z" />
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
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <g>
                <path
                  d="M352.213,170.188V39.385h15.369c10.875,0,19.692-8.817,19.692-19.692C387.274,8.817,378.457,0,367.582,0
			c-5.156,0-208.595,0-223.043,0c-10.875,0-19.692,8.817-19.692,19.692c0,10.875,8.817,19.692,19.692,19.692h15.369
			c0,13.039,0,116.914,0,130.804C3.377,266.065,69.779,512,256.06,512C440.663,512,509.517,266.538,352.213,170.188z
			 M208.937,394.321c-9.426,0-17.068-7.642-17.068-17.068c0-9.427,7.642-17.068,17.068-17.068s17.068,7.642,17.068,17.068
			S218.363,394.321,208.937,394.321z M287.13,410.374c-18.293,0-33.123-14.83-33.123-33.123s14.83-33.123,33.123-33.123
			c18.293,0,33.123,14.83,33.123,33.123C320.253,395.546,305.425,410.374,287.13,410.374z M126.658,262.038
			c13.56-26.66,35.277-48.894,62.091-62.959c6.483-3.4,10.545-10.118,10.545-17.438v-24.956h26.134
			c10.875,0,19.692-8.817,19.692-19.692c0-10.875-8.817-19.692-19.692-19.692h-26.134V98.035h26.134
			c10.875,0,19.692-8.817,19.692-19.692c0-10.875-8.817-19.692-19.692-19.692h-26.134V39.385h113.533V181.64
			c0,7.322,4.062,14.038,10.545,17.438c26.815,14.066,48.531,36.3,62.091,62.959H126.658z"
                />
              </g>
            </g>
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
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21,15c0-7.415-8.057-13.543-8.4-13.8a1,1,0,0,0-1.2,0C11.057,1.457,3,7.585,3,15c0,3.649,1.562,8,9,8S21,18.649,21,15Zm-9,6c-4.841,0-7-1.851-7-6C5,9.668,10.205,4.806,12,3.287,13.8,4.8,19,9.657,19,15,19,19.149,16.841,21,12,21Zm0-2a1,1,0,0,1-1,1,4.821,4.821,0,0,1-5-5A1,1,0,0,1,8,15,2.853,2.853,0,0,0,11,18,1,1,0,0,1,12,19Z" />
          </svg>
        }
        value={indicators.bloodPressure || 0}
        recentChange={recentChanges.bloodPressure || 0}
      />
      <VitalityIndicatorsRow
        title="Fonctions respiratoires"
        icon={
          <svg
            className="w-6 fill-none stroke-primary-darker stroke-2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="lungs">
              <path d="M8.12,21.37,6,22.24a3,3,0,0,1-1.19.24H4.66A3.16,3.16,0,0,1,1.5,19.32v-.58a32,32,0,0,1,2-11.25h0A3.39,3.39,0,0,1,6.71,5.3h0a3.38,3.38,0,0,1,3.38,3.38v9.76A3.17,3.17,0,0,1,8.12,21.37Z" />

              <path d="M15.91,21.36l2.27.9a3.32,3.32,0,0,0,1.16.22h0a3.16,3.16,0,0,0,3.16-3.16v-.58a32,32,0,0,0-2-11.25h0A3.39,3.39,0,0,0,17.29,5.3h0a3.38,3.38,0,0,0-3.38,3.38v9.74A3.16,3.16,0,0,0,15.91,21.36Z" />

              <path d="M7.23,11h0A4.77,4.77,0,0,0,12,6.25V.52" />

              <path d="M16.77,11h0A4.77,4.77,0,0,1,12,6.25V.52" />
            </g>
          </svg>
        }
        value={indicators.respiratory || 0}
        recentChange={recentChanges.respiratory || 0}
      />
      <VitalityIndicatorsRow
        title="Fertilité"
        icon={
          <svg
            className="w-6"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490.415 490.415"
          >
            <g>
              <g>
                <path
                  d="M466.967,169.168c-40.3-37.8-106.8-24.3-153.4,21.8c-41.8,43.4-55.8,97.9-35.2,135.1c-9.3,5.4-22,12.8-24.9,14.2
			c-21.8,12.4-44.8,32.4-38.3,73.6c-6.5,12-23.5,40.3-48.7,34.2c-11.4-1-21.8,7.3-22.8,18.7s7.3,21.8,18.7,22.8
			c24.4,3.6,46.6-4.2,66.3-24.9c9.3-9.3,34.4-29,28-71.5c1-5.2,7.3-11.4,17.6-17.6c2.6-1.7,22.7-10.4,35.3-19.6
			c38.7,20.5,89.8,7.5,135.7-34.3C491.467,272.068,506.767,214.168,466.967,169.168z M416.167,292.568c-38.2,33.8-70.1,40-96.4,21.8
			c-19.5-26-8.9-57.7,21.8-93.3c32.3-28.9,73.8-43.6,96.4-21.8C459.167,228.168,443.867,259.868,416.167,292.568z"
                />
                <path
                  d="M133.567,170.468c31.6,15.5,72.9,5.7,108.5-28.2c39.4-41.9,46.9-91.9,16.6-123.3c-35.7-31.6-82.2-22.1-125.4,16.5
			c-29.5,31.6-44.9,73.6-29.8,105.3c-6.4,3.6-13.9,7.5-15.8,8.7c-22.8,12.4-30.1,28-32.1,39.4c-1,6.2,0,20.7,0,21.8
			c-1,4.1-14,19.1-20.7,21.8c-2.2,0.8-7.3,0-11.4,0c-11.4-1-21.8,7.3-22.8,18.7c-1,11.4,7.3,21.8,18.7,22.8
			c19.5,2.7,37.3-3,52.9-19.7c30.3-25.8,22.5-58.1,22.8-59.1C98.267,184.468,119.167,179.668,133.567,170.468z M162.267,64.568
			c20.4-18.7,46.3-30.7,67.4-16.6c13.1,20.3,4,42.3-17.6,65.3c-23.5,19.4-46.3,30.4-67.4,16.6
			C132.467,111.468,140.467,89.268,162.267,64.568z"
                />
              </g>
            </g>
          </svg>
        }
        value={indicators.fertility || 0}
        recentChange={recentChanges.fertility || 0}
      />
    </div>
  );
}

export default VitalityIndicatorsBox;
