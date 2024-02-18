import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "../features/authentication/useSignup";
import { useLogin } from "../features/authentication/useLogin";

function Form({ type }) {
  const [student, setStudent] = useState(true);
  const [instructor, setInstructor] = useState(false);
  const { signUp, isLoading: isLoadingSingUp } = useSignup();
  const { login, isLoading: isLoadingLogin } = useLogin();
  const { register, handleSubmit, setValue, reset } = useForm();

  const onSubmitSignup = (data) => {
    const signUpData = {
      email: data.email,
      password: data.password,
      fullName: data.fullName,
      department: data.department,
      type: student ? "student" : "instructor",
      ...(student && { studentData: { level: data.level, courses: data.courses } }),
      ...(instructor && { instructorData: { level: data.level, qualification: data.qualification, courses: data.courses } })
    };

    signUp(signUpData, {
      onSuccess: reset,
    });
  };

  const onSubmitLogin = ({ email, password }) => {
    login(
      { email, password },
      {
        onSuccess: reset,
      }
    );
  };

  const onSubmit = type === "login" ? onSubmitLogin : onSubmitSignup;

  return (
    <div>
      <div className="flex flex-col gap-2 justify-center py-10">
        <div className="shadow-lg p-6 flex flex-col items-center gap-6">
          <div className="flex flex-col gap-8">
            <h1 className="text-xl text-gray-700 font-bold">
              {type === "login" ? "Sign in to your account" : "Sign up"}
            </h1>
          </div>
          <div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            {type === "signup" && (
              <div className="flex flex-col">
                <label className="pl-1 text-gray-500 ">Signup As:</label>
                <div className="flex items-center gap-2 pt-3">
                  <input
                    type="radio"
                    id="student"
                    name="role"
                    checked={student}
                    onChange={() => { setStudent(true); setInstructor(false); }}
                  />
                  <label htmlFor="student">Student</label>
                  <input
                    type="radio"
                    id="instructor"
                    name="role"
                    checked={instructor}
                    onChange={() => { setInstructor(true); setStudent(false); }}
                  />
                  <label htmlFor="instructor">Instructor</label>
                </div>
              </div>
              
            )}</form>
            
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            {type === "signup" && (
              <div className="flex flex-col">
                <label className="pl-1 text-gray-500 pt-3" htmlFor="fullName">
                  Full Name
                </label>
                
                <input
                  className="border-2 py-2 px-4 rounded-md"
                  type="text"
                  placeholder="Enter your Full Name"
                  id="fullName"
                  {...register("fullName", { required: "This field is required" })}
                />
              </div>
            )}
            {type === "signup" && (
              <div className="flex flex-col">
                <label className="pl-1 text-gray-500" htmlFor="department">
                  Department
                </label>
                <input
                  className="border-2 py-2 px-4 rounded-md"
                  type="text"
                  placeholder="Enter your department"
                  id="department"
                  {...register("department", { required: "This field is required" })}
                />
              </div>
            )}
            {type === "signup" && (
              <div className="flex flex-col">
                <label className="pl-1 text-gray-500" htmlFor="level">
                  Level
                </label>
                <select
                  className="border-2 py-2 px-4 rounded-md"
                  id="level"
                  {...register("level", { required: "This field is required" })}
                >
                  <option value="undergrad">Undergraduate</option>
                  <option value="grad">Graduate</option>
                </select>
              </div>
            )}
            {type === "signup" && (
              <div className="flex flex-col">
                <label className="pl-1 text-gray-500" htmlFor="courses">
                  Courses
                </label>
                <input
                  className="border-2 py-2 px-4 rounded-md"
                  type="text"
                  placeholder="Enter your courses"
                  id="courses"
                  {...register("courses", { required: "This field is required" })}
                />
              </div>
            )}
            {type === "signup" && instructor && (
              <div className="flex flex-col">
                <label className="pl-1 text-gray-500" htmlFor="qualification">
                  Qualification
                </label>
                <input
                  className="border-2 py-2 px-4 rounded-md"
                  type="text"
                  placeholder="Enter your qualification"
                  id="qualification"
                  {...register("qualification", { required: "This field is required" })}
                />
              </div>
            )}
            <div className="flex flex-col">
              <label className="pl-1 text-gray-500" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 py-2 px-4 rounded-md"
                type="email"
                placeholder="Enter your email"
                id="email"
                {...register("email", { required: "This field is required" })}
              />
            </div>
            <div className="flex flex-col">
              <label className="pl-1 text-gray-500" htmlFor="password">
                Password
              </label>
              <input
                className="border-2 py-2 px-4 rounded-md mb-2"
                type="password"
                placeholder="Enter your password"
                autoComplete="username"
                id="password"
                {...register("password", { required: "This field is required" })}
              />
              {type === "login" && (
                <Link to={"/password-recovery"} className="text-sm text-blue-400 pl-2">
                  Forgot Password?
                </Link>
              )}
            </div>
            {type === "login" && (
              <div className="flex gap-3">
                <input type="checkbox" className="mb-[-10px]" />
                <span className="pt-6">Remember me</span>
                <button
        
                  className='border-[2px] border-blue-500 rounded-md'>
                  <div className='flex gap-[20px] items-center py-3 px-2'>
                    <img
                      className='w-[35px] h-[35px]'
                      src='/Images/google_logo.png'
                      alt='google-logo'
                    />
                    <span className='text-blue-400'>Continue with google</span>
                  </div>
                </button>
                
                
              </div>
            )}
            <input type="hidden" value={`${type}`} {...register("type", { required: "This field is required" })} />
            <button className="border-1 px-32 bg-blue-700 rounded-md py-2 text-white">
              {type === "login" ? "Login" : "Create Account"}
            </button>
            {type === "signup" && (
              <span className="text-sm">
                Already have an account?{" "}
                <Link className="text-blue-400 pl-2" to={"/login"}>
                  Sign In
                </Link>
              </span>
            )}
            <p className='text-center text-blue-400'>
                &copy; 2023 CourseCraft. All rights reserved
              </p>
          </form>
        </div>
      </div>
    </div>
    </div>  
  );
}

export default Form;
