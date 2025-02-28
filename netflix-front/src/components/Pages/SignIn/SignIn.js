import React, { useState } from "react";
import './SignIn.css';
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import netback from "../../../assets/netback.jpg";

const SignIn = () => {
    const [remember, setRemember] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword]= useState("")
    const [passwordError, setPasswordError] = useState('');

    const handleChange = (event) => {
        setRemember(event.target.checked);
    };

    const validateEmailOrPhone = (value) => {
        if (!value.trim()) {
            setError("Please enter a valid email or phone number.");
        } else if (/^\d+$/.test(value)) {
            // If it's only numbers, validate as phone number
            if (value.length < 10) {
                setError("Please enter a valid phone number.");
            } else {
                setError("");
            }
        } else {
            // Validate as an email
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                setError("Please enter a valid email.");
            } else {
                setError("");
            }
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        // Clear the error message if the password is longer than 3 characters
        if (value.length > 3) {
            setPasswordError('');
        }
    };

    const handlePasswordBlur = () => {
        // Show error if password is less than 4 characters or if password is empty
        if (password.trim() === "") {
            setPasswordError("Password cannot be empty.");
        } else if (password.length < 4 && password.length > 0) {
            setPasswordError("Your password must contain between 4 and 60 characters.");
        }
    };

    const handlePasswordFocus = () => {
        // Clear error when password input is focused
        if (passwordError) {
            setPasswordError("");
        }
    };

    const backgroundStyle = {
        margin: 0,
        padding: 0,
        backgroundImage: `url(${netback})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "135vh",
    };

    return (
        <div className="sign-in-page" style={backgroundStyle}>
            <div className="sign-in-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="sign-in-container">
                <h1>Sign In</h1>
                <div className="sign-in-box">
                    {/* Email Input */}
                    <div className="sign-in-input-container">
                        <input
                            type="text"
                            id="email"
                            placeholder="Email or mobile number"
                            className="sign-in-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => validateEmailOrPhone(email)}
                        />
                    </div>
                    {/* Error Message */}
                    {error && <p className="error-message">{error}</p>}

                    {/* Password Input */}
                    <div className="sign-in-input-container">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            className="sign-in-input"
                            onChange={handlePasswordChange}
                            onBlur={handlePasswordBlur} // Call blur function to show the error
                            onFocus={handlePasswordFocus} // Clear error on focus
                            placeholder="Password"
                        />
                        {passwordError && <p className="error-message">{passwordError}</p>}
                    </div>
                    <div>
                        <button className="sign-in-btn">Sign In</button>
                    </div>
                    <div><h2 className="sign-in-or">OR</h2></div>
                    <div className="sign-in-code">
                        <button className="sign-in-btn">Use a Sign-In Code</button>
                    </div>
                    <div><h2 className="sign-in-forgot-password">Forgot Password?</h2></div>
                    <div className="sign-in-remember">
                        <label>
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={handleChange}
                            />
                            Remember Me
                        </label>
                    </div>
                    <div className="sign-in-new-user">
                        <p>New to Netflix?{" "}
                            <Link to="/" className="sign-in-signup-link">
                                Sign up now
                            </Link>
                        </p>
                    </div>

                    <div className="sign-in-learn-more">
                        <p>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
                            <span
                                onClick={() => setShowMore(!showMore)}
                                className="sign-in-learn-more-link"
                            >
                                Learn More
                            </span>
                        </p>
                        {showMore && (
                            <p>
                                The information collected by Google reCAPTCHA is subject to the Google{" "}
                                <Link to="/privacypolicy" className="sign-in-privacy-policy">
                                    Privacy Policy
                                </Link>
                                and{" "}
                                <Link to="/termsofservice" className="sign-in-terms-service">
                                    Terms of Service
                                </Link>
                                , and is used for providing, maintaining, and improving the reCAPTCHA service and for general
                                security purposes (it is not used for personalized advertising by Google).
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
