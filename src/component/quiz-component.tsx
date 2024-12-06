import { useEffect, useState } from "react";
import Button from "./buton";

type VitalityIndicators = {
  [key: string]: number;
};

type SelectedImpact = {
  [key: string]: number;
};
interface QuizComponentProps {
  vitalityIndicators: {
    heartRate: number;
    immuneSystem: number;
    bodyTemperature: number;
    ph: number;
    bloodPressure: number;
    respiratory: number;
    fertility: number;
  };
  setVitalityIndicators: (indicators: any) => void;
  setRecentChanges: (changes: any) => void;
}

function QuizComponent({ setVitalityIndicators, setRecentChanges }: QuizComponentProps) {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Erreur lors du chargement des questions :", error));
  }, []);

  const handleSubmit = () => {
    if (!selectedOption) return;

    const currentQuestion = questions[currentQuestionIndex];
    const selectedImpact: SelectedImpact = currentQuestion.options.find((option: any) => option.label === selectedOption)?.impact;

    if (selectedImpact) {
      setVitalityIndicators((prev: VitalityIndicators) => {
        const changes = Object.entries(selectedImpact).reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {} as VitalityIndicators);

        setRecentChanges(changes);

        return {
          ...prev,
          ...Object.entries(selectedImpact).reduce((acc, [key, value]) => {
            acc[key] = (prev[key] || 0) + value;
            return acc;
          }, {} as VitalityIndicators),
        };
      });
    }

    setIsSubmitted(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setSelectedOption("");
    setIsSubmitted(false);
  };

  if (!questions.length) {
    return <div>Chargement des questions...</div>;
  }

  if (currentQuestionIndex >= questions.length) {
    return <div>Quiz Terminé !</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = currentQuestion.options.find((option: any) => option.label === selectedOption)?.correct;

  return (
    <div className="relative rounded-lg overflow-hidden shadow box-border lg:max-w-[40vw]">
      <div className="absolute inset-0">
        <img src="/ocean1.jpg" alt="Background" width={600} height={300} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary-dark/50" />
      </div>

      <div className="relative bg-white rounded-lg p-12 mt-[150px]">
        {!isSubmitted ? (
          <div className="space-y-6">
            <h2 className="text-center text-lg font-medium leading-relaxed">{currentQuestion.question}</h2>
            <div className="space-y-3">
              {currentQuestion.options.map((option: any) => (
                <div
                  key={option.label}
                  className={`flex items-center space-x-2 rounded-3xl p-4 transition-colors ease-in-out cursor-pointer ${
                    selectedOption === option.label ? "bg-primary-dark" : "hover:bg-primary-light hover:bg-opacity-20"
                  }`}
                  onClick={() => setSelectedOption(option.label)}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-1 bg-white flex items-center justify-center ${
                      selectedOption === option.label ? "border-white" : "border-primary-dark"
                    }`}
                  />
                  <label
                    className={`flex-grow cursor-pointer transition-colors ease-in-out ${
                      selectedOption === option.label ? "text-white" : ""
                    }`}
                  >
                    {option.text}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button onClick={handleSubmit} disabled={!selectedOption} label="Valider" />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-center gap-8 text-xl">
              <span className={isCorrect ? "text-green" : "text-red"}>
                {currentQuestion.options.find((option: any) => option.label === selectedOption)?.text}
              </span>
            </div>

            {!isCorrect && (
              <p className="text-center text-lg">
                Ce n&apos;est pas la bonne réponse. <br />
                {currentQuestion.options.find((option: any) => option.label === selectedOption)?.explanation}
              </p>
            )}

            {isCorrect && (
              <p className="text-center text-lg">
                Bien joué ! C&apos;est la bonne réponse ! <br />
                {currentQuestion.options.find((option: any) => option.label === selectedOption)?.explanation}
              </p>
            )}

            <div className="flex justify-center">
              <Button onClick={handleNextQuestion} label="Suivant" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizComponent;
