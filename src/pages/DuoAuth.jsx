// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function DuoAuthPage() {
//   const [username, setUsername] = useState('');
//   const [passphrase, setPassphrase] = useState('');
//   const [passcode, setPasscode] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const handleSendPush = async () => {
//     console.log('Sending push notification...');
//     // Add logic to handle sending a push notification for authentication
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const authData = { username, passphrase, passcode, rememberMe };
//     try {
//       const response = await verifyDuoAuth(authData);
//       if (response.success) {
//         navigate('/dashboard'); // Navigate to the dashboard
//       } else {
//         alert('Authentication failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during authentication:', error);
//     }
//   };

//   return (
//     <div className='min-h-screen flex items-center justify-center py-20 bg-[#e1eaef]'>
//       <div className='flex flex-col gap-6 bg-[#bee1e6] shadow-xl p-10 rounded-lg'>
//         <h2 className="text-2xl font-bold text-center text-gray-800">Two-Step (Duo)</h2>
//         <div className="space-y-6">
//           <button
//             type="button"
//             className='w-full py-2 bg-[#0fa3b1] text-white rounded-lg border-2 border-[#bee1e6] hover:bg-[#bee1e6] hover:text-[#0fa3b1] hover:border-[#0fa3b1] flex justify-center items-center transition-colors duration-300'
//             onClick={handleSendPush}
//           >
//             Send Me a Push
//           </button>
//           <div>
//             <h3 className="text-lg font-medium text-gray-800">Passcode:</h3>
//             <input
//               type="text"
//               value={passcode}
//               onChange={(e) => setPasscode(e.target.value)}
//               placeholder="Enter passcode here"
//               className='w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#0fa3b1] transition-colors'
//             />
//           </div>
//           <div className="flex items-center justify-center">
//             <input 
//               id="rememberMe" 
//               type="checkbox" 
//               checked={rememberMe} 
//               onChange={(e) => setRememberMe(e.target.checked)} 
//               className="form-checkbox h-5 w-5 text-[#0fa3b1]"
//             />
//             <label htmlFor="rememberMe" className="ml-2 text-gray-900">
//               Remember me for 7 days
//             </label>
//           </div>
//           <button
//             onClick={handleSubmit}
//             className='w-full py-2 mt-4 bg-[#0fa3b1] text-white rounded-lg border-2 border-[#bee1e6] hover:bg-[#bee1e6] hover:text-[#0fa3b1] hover:border-[#0fa3b1] flex justify-center items-center transition-colors duration-300'
//           >
//             Verify
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Replace with your actual API call for authentication
// async function verifyDuoAuth(authData) {
//   console.log('Verifying authentication with:', authData);
//   // Simulate an API call response
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ success: true }), 1000);
//   });
// }

// export default DuoAuthPage;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "/src/features/authentication/UserAuthContext";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Phone Auth</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="US"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Send Otp
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Verify
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default PhoneSignUp;