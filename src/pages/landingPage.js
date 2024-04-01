import React from "react";
import './landingPage.css';

export const landingPage = () => {
    return (
    <div>
        <div className="bold-text">
            <p class="text-6xl font-bold text-yellow-300">The ultimate</p>
            <p class="text-6xl font-bold">car wash experience</p>
        </div>
        <button class="flex-1 font-bold text-3xl bg-yellow-300">  Get Started</button>
    </div>
    );
}

export default landingPage();