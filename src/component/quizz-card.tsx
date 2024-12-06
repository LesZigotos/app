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
            <div className="relative rounded-lg overflow-hidden shadow box-border lg:max-w-[40vw]">
                <div className="absolute inset-0">
                    <img
                        src="/ocean1.jpg"
                        alt="Ocean background"
                        width={600}
                        height={300}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-dark/50" />
                </div>

                <div className="relative bg-white rounded-lg p-12 mt-[150px]">
                    {!isSubmitted ? (
                        <div className="space-y-6">
                            <h2 className="text-center text-lg font-medium leading-relaxed">
                                L&apos;océan produit une grande partie de l&apos;oxygène que nous respirons. Selon vous, quel pourcentage de l&apos;oxygène mondial provient de l&apos;océan ?
                            </h2>
                            <div className="space-y-3">
                                {options.map((value) => (
                                    <div
                                        key={value}
                                        className={`flex items-center space-x-2 rounded-3xl p-4 transition-colors ease-in-out cursor-pointer ${selectedAnswer === value ? 'bg-primary-dark' : 'hover:bg-primary-light hover:bg-opacity-20'
                                            }`}
                                        onClick={() => setSelectedAnswer(value)}
                                    >
                                        <div className={`w-4 h-4 rounded-full border-1 border hover:border-white bg-white flex items-center justify-center ${selectedAnswer === value ? 'border-white' : 'border-primary-dark'
                                            }`}>
                                        </div>
                                        <label className={`flex-grow cursor-pointer transition-colors ease-in-out  ${selectedAnswer === value ? 'text-white' : ''}`}>
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

                            {selectedAnswer == correctAnswer && (
                                <p className="text-center text-lg">
                                    Bien joué ! C'est la bonne réponse. Houra, Yipi
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
    )
}