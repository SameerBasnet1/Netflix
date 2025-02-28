import React from "react";
import './SignUp.css';
import {useNavigate} from "react-router";
import logo from "../../../assets/logo.jpg";
import netback from "../../../assets/netback.jpg";

const SignUp = () => {
    const backgroundStyle = {
        margin: 0,
        padding: 0,
        backgroundImage: `url(${netback})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
    };
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/signin")
    }
    return (
        <div>
            <div className="sign-up-page" style={backgroundStyle}>
                <div className="sign-up-Netflix-Logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="sign-up-SignIn">
                    <button className="sign-up-SignInBtn" onClick={handleSignIn}>Sign In</button>
                </div>
                <div className="sign-up-Contents">
                    <div className="sign-up-lheader1">
                        <h1>Unlimited movies, TV</h1>
                    </div>
                    <div className="sign-up-lheader2">
                        <h1>shows, and more</h1>
                    </div>
                    <p className="sign-up-p1">Starts at USD 2.99. Cancel anytime.</p>
                    <p className="sign-up-p2">Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <div className="sign-up-EmailContainer">
                    <input type="email" placeholder="Email address" className="sign-up-EmailInput"/>
                    <button className="sign-up-GetStartedBtn">Get Started</button>
                </div>

            </div>
            <div className="sign-up-Trendings">
                <div>
                    <h1>Trending now</h1>
                </div>
                <div>
                    <h1>More Reasons to join</h1>
                </div>
                <div>
                    <div>
                        <h2>Enjoy on your TV</h2>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div>
                        <h2>Download your shows to watch offline</h2>
                        <p>Save your favorites easily and always have something to watch.</p>
                    </div>
                    <div>
                        <h2>Watch everywhere</h2>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div>
                        <h2>Create profiles for kids</h2>
                        <p>Send kids on adventures with their favorite characters in a space made just for them — free with
                            your membership.</p>
                    </div>
                </div>
                <div>
                    <h1>Frequently Asked Questions</h1>
                    <div>
                        <h2>What is Netflix?</h2>
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,
                            anime, documentaries, and more on thousands of internet-connected devices.

                            You can watch as much as you want, whenever you want without a single commercial – all for one
                            low monthly price. There's always something new to discover and new TV shows and movies are added
                            every week!</p>
                    </div>
                    <div>
                        <h2>How much does Netflix cost?</h2>
                        <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed
                            monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts.</p>
                    </div>
                    <div>
                        <h2>Where can I watch?</h2>
                        <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at
                            netflix.com from your personal computer or on any internet-connected device that offers the Netflix
                            app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                            You can also download your favorite shows with the iOS or Android app. Use downloads to watch
                            while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    </div>
                    <div>
                        <h2>How do I cancel?</h2>
                        <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your
                            account online in two clicks. There are no cancellation fees – start or stop your account
                            anytime.</p>
                    </div>
                    <div>
                        <h2>What can I watch on Netflix?</h2>
                        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning
                            Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </div>
                    <div>
                        <h2>Is Netflix good for kids?</h2>
                        <p>The Netflix Kids experience is included in your membership to give parents control while kids
                            enjoy family-friendly TV shows and movies in their own space.

                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating
                            of content kids can watch and block specific titles you don’t want kids to see.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default SignUp;