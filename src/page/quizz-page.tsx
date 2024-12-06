import { useState } from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import VitalityIndicatorsBox from "../component/vitality-indicators-box";
import QuizComponent from "../component/quiz-component";

function QuizzPage() {
  const [vitalityIndicators, setVitalityIndicators] = useState({
    heartRate: 80,
    immuneSystem: 70,
    bodyTemperature: 36.6,
    ph: 7.4,
    bloodPressure: 120,
    respiratory: 90,
    fertility: 85,
  });

  const [recentChanges, setRecentChanges] = useState({
    heartRate: 0,
    immuneSystem: 0,
    bodyTemperature: 0,
    ph: 0,
    bloodPressure: 0,
    respiratory: 0,
    fertility: 0,
  });

  return (
    <div className="h-full bg-gray overflow-scroll text-primary-darker">
      <div className="flex max-lg:flex-col justify-around items-center p-12 gap-12">
        <div className="flex flex-col justify-center">
          <VitalityIndicatorsBox
            indicators={vitalityIndicators}
            recentChanges={recentChanges}
          />
          <img src="/perso.png" className="max-lg:max-w-[400px]" />
        </div>
        <div>
          <QuizComponent
            vitalityIndicators={vitalityIndicators}
            setVitalityIndicators={setVitalityIndicators}
            setRecentChanges={setRecentChanges}
          />
        </div>
      </div>
    </div>
  );
}

export default QuizzPage;
