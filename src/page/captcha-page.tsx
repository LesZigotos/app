import Captcha from "../component/captcha/captcha.tsx";

const CaptchaPage = () => {
    return (
        <>
            <h1 className="text-5xl text-center font-semibold mt-8">GameTCHA</h1>
            <p className="text-xl text-center max-md:text-base max-md:text-center mt-4 font-light">
                Evitez les déchets pendant le temps imparti pour prouver que vous n'êtes pas un robot
            </p>
            <br/>
            <div className="mb-16 flex justify-center">
                <Captcha/>
            </div>
        </>
    );
}

export default CaptchaPage;
