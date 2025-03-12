import React, { useState } from 'react';
import './CustomCaptcha.css';

function CustomCaptcha({ onVerify }) {
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaValue, setCaptchaValue] = useState(generateCaptcha());
  const [errorMessage, setErrorMessage] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');

  function generateCaptcha() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    return captcha;
  }

  const handleChange = (e) => {
    const sanitizedInput = e.target.value.replace(/[^a-zA-Z0-9]/g, ''); // Sanitize input
    setCaptchaInput(sanitizedInput);
  };

  const handleVerify = () => {
    if (captchaInput === captchaValue) {
      onVerify(true);
      setErrorMessage('');
      setVerificationMessage('✅ CAPTCHA verified successfully!');
    } else {
      onVerify(false);
      setErrorMessage('Incorrect CAPTCHA. Please try again.');
      setVerificationMessage('');
      setCaptchaValue(generateCaptcha());
      setCaptchaInput('');
    }
  };

  return (
    <div className="custom-captcha">
      <div className="captcha-value">{captchaValue}</div>
      <input
        type="text"
        id="captchaInput"
        name="captchaInput"
        value={captchaInput}
        onChange={handleChange}
        placeholder="Enter CAPTCHA"
        className="captcha-input"
      />
      <button type="button" onClick={handleVerify} className="captcha-button">Verify</button>
      {errorMessage && <div className="captcha-error">{errorMessage}</div>}
      {verificationMessage && <div className="captcha-success">{verificationMessage}</div>}
    </div>
  );
}

export default CustomCaptcha;
