import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import OtpInput from "otp-input-react";
//import { auth } from "../lib/helper/firebaseClient";
import { FirebaseApp } from "../lib/helper/firebaseClient";
import { toast, Toaster } from "react-hot-toast";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
//import { useHistory } from "react-router-dom";

const auth = getAuth(FirebaseApp);
export default class DuoAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      phoneno: "",
      verifybutton: false,
      verifyotp: false,
      otp: "",
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
    //this.onSignInSubmit = this.onSignInSubmit.bind(this);
    this.handleSendPush = this.handleSendPush.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  DuoAuthPage() {
    // const [username, setUsername] = useState('');
    // const [passphrase, setPassphrase] = useState('');
    // const [passcode, setPasscode] = useState('');
    // const [rememberMe, setRememberMe] = useState(false);
    // const navigate = useNavigate();
    // //const history = useHistory();
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [otp, setOtp] = useState("");
    // const [loading, setLoading] = useState(false);

    const handleSendPush = async () => {
      // Add logic to handle sending a push notification for authentication
      console.log('Sending push notification...');
      window.recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
        'size': 'invisible',
        callback: (response) => {
          sendOTP();
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA challenge again.
          // ...
        },
      }, auth
      );

      const sendOTP = async () => {
        try {
          console.log("inside try ")
          //onOTPSend() {
            const phoneNumber = "+1" + phoneno;
            const appVerifier = window.recaptchaVerifier;
            console.log("phone number is ", phoneNumber)
            //const appVerifier = window.RecaptchaVerifier(auth, phoneNumber, appVerifier);

            // Send OTP to the provided phone number
            const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
            console.log("confirmation result is ", confirmationResult)
            // Save the confirmation result to use for OTP verification
            window.confirmationResult = confirmationResult;
      
            // Prompt user to enter OTP after sending OTP
            console.log("OTP sent successfully!");
          //} 
        } catch (error) {
          console.error("Error sending OTP:", error);
          // Handle error while sending OTP
        }
      };
    };

    const handleSubmit = async (e) => {
      // e.preventDefault();
      // // const authData = { username, passphrase, passcode, rememberMe };
      // // try {
      // //   const response = await verifyDuoAuth(authData);
      // //   if (response.success) {
      // //     navigate('/dashboard'); // Navigate to the dashboard
      // //   } else {
      // //     alert('Authentication failed. Please try again.');
      // //   }
      // // } catch (error) {
      // //   console.error('Error during authentication:', error);
      // // }
      // try {
      //   setLoading(true);
      //   // Verify the entered OTP
      //   await window.confirmationResult
      //   .confirm(otp)
      //   .then((result) => {
      //     const user = result.user;
      //     console.log("OTP verified successfully!");
      //   }) 
      //   setLoading(false);
      //   // If OTP verification is successful, redirect user to dashboard
      //   navigate('/dashboard');
      // } catch (error) {
      //   setLoading(false);
      //   console.error("Error verifying OTP:", error);
      //   // Handle error while verifying OTP
      //   alert("Invalid OTP. Please try again.");
      // }
      window.confirmationResult
      .confirm(this.state.otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        alert("OTP verified successfully!");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.error("Error verifying OTP:", error);
        alert("Invalid OTP. Please try again.");
      });
    };

    return (
      <div className='min-h-screen flex items-center justify-center py-20 bg-[#e1eaef]'>
        <div className='flex flex-col gap-6 bg-[#bee1e6] shadow-xl p-10 rounded-lg'>
          <h2 className="text-2xl font-bold text-center text-gray-800">Two-Step (Duo)</h2>
          <div className="space-y-6">
          <div id="recaptcha-container"></div>
            <button
              type="button"
              className='w-full py-2 bg-[#0fa3b1] text-white rounded-lg border-2 border-[#bee1e6] hover:bg-[#bee1e6] hover:text-[#0fa3b1] hover:border-[#0fa3b1] flex justify-center items-center transition-colors duration-300'
              onClick={handleSendPush}
            >
              Send Me a Push
            </button>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Passcode:</h3>
              <input
                type="text"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode here"
                className='w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#0fa3b1] transition-colors'
              />
            </div>
            <div className="flex items-center justify-center">
              <input 
                id="rememberMe" 
                type="checkbox" 
                checked={rememberMe} 
                onChange={(e) => setRememberMe(e.target.checked)} 
                className="form-checkbox h-5 w-5 text-[#0fa3b1]"
              />
              {/* <label htmlFor="rememberMe" className="ml-2 text-gray-900">
                Remember me for 7 days
              </label> */}
            </div>
            <button
              onClick={handleSubmit}
              className='w-full py-2 mt-4 bg-[#0fa3b1] text-white rounded-lg border-2 border-[#bee1e6] hover:bg-[#bee1e6] hover:text-[#0fa3b1] hover:border-[#0fa3b1] flex justify-center items-center transition-colors duration-300'
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    );
  }
  
}
// Replace with your actual API call for authentication
async function verifyDuoAuth(authData) {
  console.log('Verifying authentication with:', authData);
  // Simulate an API call response
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 1000);
  });
}



// const App = () => {
//   const [otp, setOtp] = useState("");
//   const [ph, setPh] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showOTP, setShowOTP] = useState(false);
//   const [user, setUser] = useState(null);

//   function onCaptchVerify() { 
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         "recaptcha-container",
//         { 
//           size: "invisible",
//           callback: (response) => {
//             onSignup();
//           },
//           "expired-callback": () => {},
//         },
//         auth
//       );
//     }
//   }

//   function handleSendPush() {
//     setLoading(true);
//     onCaptchVerify();

//     const appVerifier = window.recaptchaVerifier;

//     const formatPh = "+" + ph;

//     signInWithPhoneNumber(auth, formatPh, appVerifier)
//       .then((confirmationResult) => {
//         window.confirmationResult = confirmationResult;
//         setLoading(false);
//         setShowOTP(true);
//         toast.success("OTP sended successfully!");
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }

//   function onOTPVerify() {
//     setLoading(true);
//     window.confirmationResult
//       .confirm(otp)
//       .then(async (res) => {
//         console.log(res);
//         setUser(res.user);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   }

//   return (
//     <section className="bg-emerald-500 flex items-center justify-center h-screen">
//       <div>
//         <Toaster toastOptions={{ duration: 4000 }} />
//         <div id="recaptcha-container"></div>
//         {user ? (
//           <h2 className="text-center text-white font-medium text-2xl">
//             👍Login Success
//           </h2>
//         ) : (
//           <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
//             <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
//               Welcome to <br /> CODE A PROGRAM
//             </h1>
//             {showOTP ? (
//               <>
//                 <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
//                   <BsFillShieldLockFill size={30} />
//                 </div>
//                 <label
//                   htmlFor="otp"
//                   className="font-bold text-xl text-white text-center"
//                 >
//                   Enter your OTP
//                 </label>
//                 <OtpInput
//                   value={otp}
//                   onChange={setOtp}
//                   OTPLength={6}
//                   otpType="number"
//                   disabled={false}
//                   autoFocus
//                   className="opt-container "
//                 ></OtpInput>
//                 <button
//                   onClick={onOTPVerify}
//                   className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
//                 >
//                   {loading && (
//                     <CgSpinner size={20} className="mt-1 animate-spin" />
//                   )}
//                   <span>Verify OTP</span>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
//                   <BsTelephoneFill size={30} />
//                 </div>
//                 <label
//                   htmlFor=""
//                   className="font-bold text-xl text-white text-center"
//                 >
//                   Verify your phone number
//                 </label>
//                 <PhoneInput country={"in"} value={ph} onChange={setPh} />
//                 <button
//                   onClick={onSignup}
//                   className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
//                 >
//                   {loading && (
//                     <CgSpinner size={20} className="mt-1 animate-spin" />
//                   )}
//                   <span>Send code via SMS</span>
//                 </button>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };



