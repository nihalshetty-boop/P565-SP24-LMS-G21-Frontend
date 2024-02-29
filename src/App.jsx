// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './pages/firstpage.jsx';
import Login from "./pages/login";
import Signup from "./pages/signup";
import PasswordRecovery from "./pages/passwordrecovery";


function App() {

  const [user, setUser] = useState(null);

  const login = async() => {
    await supabase.auth.signIn({
      provider: "google"
    });
  }

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user)
    //console.log(session);
    const {data:authListener} = supabase.auth.onAuthStateChange((_event, session) => {
      switch (event) {
        case "SIGNED_IN":
          setUser(session?.user);
          break;
        case "SIGNED_OUT":
          setUser(null);
          break;
        default:
          break;
      }
    });

    return () => {
      authListener.unsubscribe();
    };
     
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element ={<FirstPage/>} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='password-recovery' element={<PasswordRecovery />} />
      </Routes>
  
    
    </BrowserRouter>
  );
}

export default App;
