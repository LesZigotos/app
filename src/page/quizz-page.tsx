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

  return (
    <div className="h-full bg-gray overflow-scroll text-primary-darker">
      <Header />
      <div className="flex max-lg:flex-col justify-around items-center p-12 gap-12">
        <div className="flex flex-col justify-center">
          <VitalityIndicatorsBox indicators={vitalityIndicators} />
          <img src="/perso.png" className="max-lg:max-w-[400px]" />
        </div>
        <div>
          <QuizComponent
            vitalityIndicators={vitalityIndicators}
            setVitalityIndicators={setVitalityIndicators}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default QuizzPage;
