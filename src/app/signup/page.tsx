"use client"

import { signIn, signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
const SignUpPage = () => {

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>
    ) =>{
     e.preventDefault()
     const formData = new FormData(e.target)
     const user = Object.fromEntries(formData.entries()) as {name: string, email:string, image:string, password:string};
     console.log(user);
     const { data, error } = await signUp.email({
       ...user,
       callbackURL: '/',
     })
      if(data){
          toast.success("Sing Up Successful")
          console.log(data);
          redirect("/")
      }
      if(error){
         toast.error(error.message   ?? "Something went wrong")
        
        console.log(error);
      }
    }
   const handleGoogleSignUp = async () =>{
    const data = await signIn.social({
      provider: 'google',
    })
    console.log(data);
   }

     const handleGithubSignIn = async () =>{
    const data = await signIn.social({
      provider: 'github'
    })
    console.log(data);
  }


  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center mt-5">
        <h2 className="text-2xl font-bold text-red-500">সাইন আপ</h2>
      
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-box w-md">

           <label className="label">নাম</label>
          <input
            name="name"
            type="text"
            className="input w-md"
            placeholder="Name"
          />

          <label className="label">ImageURL</label>
          <input
            name="image"
            type="url"
            className="input w-md"
            placeholder="Image"
          />

          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
          />

          <button type="submit" className="btn text-white bg-red-700 mt-4 ">
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
      <button onClick={handleGoogleSignUp} className="btn">Sign Up With Google</button>
      <button onClick={handleGithubSignIn} className="btn">Sign in With Github</button>
    </div>
  );
};

export default SignUpPage;
