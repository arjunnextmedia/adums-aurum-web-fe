import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteLoader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Show loader on initial page load
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Show loader on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Route change load time - change this value (800 = 0.8 seconds)

    return () => clearTimeout(timer);
  }, [location.pathname]); // Triggers on every route change

  if (!loading) return null;

  return (
    <>
      <style>
        {`
          .adams-loader-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #ffffff 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            animation: loaderFadeOut 0.6s ease-in-out forwards;
          }

          @keyframes loaderFadeOut {
            to {
              opacity: 0;
              visibility: hidden;
            }
          }

          .loader-main-container {
            text-align: center;
            position: relative;
            z-index: 2;
          }

          .logo-animation-wrapper {
            margin-bottom: 40px;
            animation: logoFloatAnimation 2.5s ease-in-out infinite;
            position: relative;
          }

          @keyframes logoFloatAnimation {
            0%, 100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-12px) scale(1.03);
            }
          }

          .adams-logo-image {
            width: 300px;
            height: auto;
            max-width: 90vw;
            filter: drop-shadow(0 8px 30px rgba(197, 166, 58, 0.5));
            object-fit: contain;
          }

          .golden-spinner-ring {
            width: 110px;
            height: 110px;
            border: 4px solid rgba(197, 166, 58, 0.2);
            border-top-color: #c5a63a;
            border-right-color: #d4af37;
            border-radius: 50%;
            animation: spinnerRotate 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
            margin: 0 auto 25px;
            position: relative;
          }

          .golden-spinner-ring::before {
            content: '';
            position: absolute;
            top: -4px;
            left: -4px;
            right: -4px;
            bottom: -4px;
            border-radius: 50%;
            border: 4px solid transparent;
            border-top-color: rgba(212, 175, 55, 0.4);
            animation: spinnerRotate 2s linear infinite reverse;
          }

          @keyframes spinnerRotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .loading-text-elegant {
            color: #c5a63a;
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 4px;
            text-transform: uppercase;
            animation: textFadeIn 0.8s ease-out, textPulse 2s ease-in-out infinite;
            margin-top: 25px;
            font-family: 'Helvetica Neue', Arial, sans-serif;
          }

          @keyframes textFadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes textPulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.6;
            }
          }

          .loading-animated-dots {
            display: inline-block;
            margin-left: 6px;
          }

          .loading-animated-dots span {
            animation: dotPulse 1.4s ease-in-out infinite;
            display: inline-block;
            font-weight: bold;
          }

          .loading-animated-dots span:nth-child(1) {
            animation-delay: 0s;
          }

          .loading-animated-dots span:nth-child(2) {
            animation-delay: 0.2s;
          }

          .loading-animated-dots span:nth-child(3) {
            animation-delay: 0.4s;
          }

          @keyframes dotPulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.3;
              transform: scale(0.8);
            }
          }

          .elegant-progress-bar-wrapper {
            width: 240px;
            height: 3px;
            background: rgba(197, 166, 58, 0.25);
            margin: 35px auto 0;
            border-radius: 3px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 0 10px rgba(197, 166, 58, 0.15);
          }

          .elegant-progress-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, 
              #b8941e 0%, 
              #c5a63a 25%, 
              #d4af37 50%, 
              #c5a63a 75%, 
              #b8941e 100%
            );
            background-size: 200% 100%;
            animation: progressShimmer 1.8s ease-in-out infinite;
            border-radius: 3px;
            box-shadow: 0 0 20px rgba(197, 166, 58, 0.6);
          }

          @keyframes progressShimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }

          .golden-particles-container {
            position: absolute;
            width: 400px;
            height: 400px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 1;
          }

          .gold-particle {
            position: absolute;
            width: 5px;
            height: 5px;
            background: radial-gradient(circle, #d4af37 0%, #c5a63a 50%, transparent 70%);
            border-radius: 50%;
            opacity: 0.7;
            animation: particleFloat 4s ease-in-out infinite;
          }

          @keyframes particleFloat {
            0%, 100% {
              transform: translateY(0) translateX(0) scale(1);
              opacity: 0.7;
            }
            25% {
              transform: translateY(-40px) translateX(15px) scale(1.2);
              opacity: 0.9;
            }
            50% {
              transform: translateY(-60px) translateX(-10px) scale(0.8);
              opacity: 0.4;
            }
            75% {
              transform: translateY(-30px) translateX(20px) scale(1.1);
              opacity: 0.6;
            }
          }

          .gold-particle:nth-child(1) { 
            top: 15%; 
            left: 15%; 
            animation-delay: 0s; 
            animation-duration: 3.5s;
          }
          .gold-particle:nth-child(2) { 
            top: 35%; 
            left: 75%; 
            animation-delay: 0.7s; 
            animation-duration: 4.2s;
          }
          .gold-particle:nth-child(3) { 
            top: 70%; 
            left: 25%; 
            animation-delay: 1.2s; 
            animation-duration: 3.8s;
          }
          .gold-particle:nth-child(4) { 
            top: 55%; 
            left: 65%; 
            animation-delay: 1.8s; 
            animation-duration: 4.5s;
          }
          .gold-particle:nth-child(5) { 
            top: 25%; 
            left: 45%; 
            animation-delay: 2.3s; 
            animation-duration: 3.2s;
          }
          .gold-particle:nth-child(6) { 
            top: 80%; 
            left: 55%; 
            animation-delay: 0.5s; 
            animation-duration: 4s;
          }
          .gold-particle:nth-child(7) { 
            top: 45%; 
            left: 20%; 
            animation-delay: 1.5s; 
            animation-duration: 3.6s;
          }
          .gold-particle:nth-child(8) { 
            top: 60%; 
            left: 85%; 
            animation-delay: 2s; 
            animation-duration: 4.3s;
          }

          .glow-ring-outer {
            position: absolute;
            width: 200px;
            height: 200px;
            border: 2px solid rgba(197, 166, 58, 0.15);
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: glowPulse 3s ease-in-out infinite;
          }

          .glow-ring-inner {
            position: absolute;
            width: 150px;
            height: 150px;
            border: 1px solid rgba(212, 175, 55, 0.2);
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: glowPulse 3s ease-in-out infinite 0.5s;
          }

          @keyframes glowPulse {
            0%, 100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.4;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.15);
              opacity: 0.2;
            }
          }

          .tagline-text {
            color: rgba(197, 166, 58, 0.85);
            font-size: 13px;
            letter-spacing: 2px;
            margin-top: 15px;
            font-weight: 500;
            animation: textFadeIn 1s ease-out 0.3s both;
            font-family: Arial, sans-serif;
          }
        `}
      </style>

      <div className="adams-loader-overlay">
        <div className="golden-particles-container">
          <div className="gold-particle"></div>
          <div className="gold-particle"></div>
          <div className="gold-particle"></div>
          <div className="gold-particle"></div>
          <div className="gold-particle"></div>
          <div className="gold-particle"></div>
          <div className="gold-particle"></div>
          <div className="gold-particle"></div>
          <div className="glow-ring-outer"></div>
          <div className="glow-ring-inner"></div>
        </div>

        <div className="loader-main-container">
          <div className="logo-animation-wrapper">
            <img
              src="/path/to/your/logo.png"
              alt="Adams Aurum Logo"
              className="adams-logo-image"
            />
          </div>

          <div className="golden-spinner-ring"></div>

          <div className="loading-text-elegant">
            Loading
            <span className="loading-animated-dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </div>

          <div className="elegant-progress-bar-wrapper">
            <div className="elegant-progress-bar-fill"></div>
          </div>

          <div className="tagline-text">Your Legacy, Preserved in Gold</div>
        </div>
      </div>
    </>
  );
};

export default RouteLoader;
