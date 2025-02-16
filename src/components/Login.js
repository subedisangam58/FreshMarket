import React from 'react';
import './css/Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="container">
            <div class="login-container">
                <div class="logo">
                    <img src="leaf-icon.png" alt="Logo" />
                </div>
                <h1>Welcome back!</h1>
                <p>Please login to access your account</p>
                <form>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" id="email" placeholder="Enter your email address" />
                    </div>
                    <div class="form-group password-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                    </div>
                    <div class="options">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#" class="forgot-password">Forgot password?</a>
                    </div>
                    <button type="submit" class="sign-in-btn">Sign in</button>
                </form>
                <div class="divider">
                    <span>Or continue with</span>
                </div>
                <div class="social-login">
                    <button class="google-btn">Google</button>
                    <button class="facebook-btn">Facebook</button>
                </div>
                <p class="signup-text">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
                <p class="terms-text">
                    By signing in, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </p>
            </div>
        </div>
    )
}
