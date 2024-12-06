import QuizCard from "../component/quizz-card"
import VitalityIndicatorsBox from "../component/vitality-indicators-box"

function QuizzPage() {

    return (
        <div className="h-full bg-gray overflow-scroll text-primary-darker" >
            <div className="flex max-lg:flex-col justify-around items-center p-12 gap-12">
                <div className="flex flex-col justify-center">
                    <VitalityIndicatorsBox />
                    <img src='/perso.png' className="max-lg:max-w-[400px]" />
                </div>
                <div>
                    <QuizCard />
                </div>
            </div>
        </div>
    )
}

export default QuizzPage
