import { useState } from "react"
import Button from "./buton"

export default function QuizCard() {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const correctAnswer = "70"

  const handleSubmit = () => {
    if (selectedAnswer) {
      setIsSubmitted(true)
    }
  }

  const options = ["20", "50", "70", "90"]

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/ocean1.jpg"
            alt="Ocean background"
            width={600}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative bg-white rounded-lg p-6 mt-[150px]">
          {!isSubmitted ? (
            <div className="space-y-6">
              <h2 className="text-center text-lg font-medium leading-relaxed">
                L&apos;océan produit une grande partie de l&apos;oxygène que nous respirons. Selon vous, quel pourcentage de l&apos;oxygène mondial provient de l&apos;océan ?
              </h2>
              <div className="space-y-3">
                {options.map((value) => (
                  <div
                    key={value}
                    className={`flex items-center space-x-2 border rounded-3xl p-4 hover:bg-slate-50 transition-colors cursor-pointer ${
                      selectedAnswer === value ? 'bg-primary-light bg-opacity-30 border-primary' : ''
                    }`}
                    onClick={() => setSelectedAnswer(value)}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === value ? 'border-primary-light' : 'border-gray'
                    }`}>
                      {selectedAnswer === value && (
                        <div className="w-2 h-2 rounded-full bg-primary-light" />
                      )}
                    </div>
                    <label className="flex-grow cursor-pointer">
                      {value} %
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Button 
                  onClick={handleSubmit}
                  disabled={!selectedAnswer}
                  label="Valider"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-center gap-8 text-xl">
                <span className={selectedAnswer === correctAnswer ? "text-green-600" : "text-red-600"}>
                  {selectedAnswer} %
                </span>
              </div>
              
              {selectedAnswer !== correctAnswer && (
                <p className="text-center text-lg">
                  Votre estimation est loin de la réalité. L&apos;océan est beaucoup plus essentiel à votre respiration que vous ne le pensez !
                </p>
              )}

              <div className="flex justify-center">
                <Button 
                  onClick={() => {
                    setIsSubmitted(false)
                    setSelectedAnswer("")
                  }}
                  label="Suivant"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}