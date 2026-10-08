"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const UserInfo = () => {
  const { data: session } = useSession();
  const user = session?.user;
  // console.log(user);

  const handleSignOut =async () =>{
    await signOut()
  }



  return (
    <div  className="flex justify-end gap-2">
      {user ? (
        <div className="flex flex-col items-center gap-4">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <Image
                alt="profile image"
                src={user?.image as string}
                height={200}
                width={200}
              />
             
            </div>
          </div>
          <h2>{user?.name}</h2>
         <button onClick={handleSignOut} className="btn btn-error btn-xs text-white">Sign Out</button>
        </div>
      ) : (
        <div className="">
          <button className="btn">সাইন ইন</button>
          <button className="btn bg-red-500 text-white">সাইন আপ</button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
