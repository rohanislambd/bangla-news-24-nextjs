import React from "react";

const singInPage = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center mt-5">
      <h2 className="text-2xl font-bold text-red-500">সাইন ইন</h2>

      <form>
        <fieldset className="fieldset   rounded-box w-md">
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
            সাইন ইন করুন
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default singInPage;
