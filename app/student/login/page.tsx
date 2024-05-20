// pages/student/signup.js
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const StudentSignupPage = () => {
  useEffect(() => {
    async function checkSession() {
      const session = await getSession();
      if (session?.user) {
        redirect("/dashboard");
      }
    }
    checkSession();
  }, []);

  // Add your student signup form JSX here

  <a href="/api/auth/login">
            Login here
           </a>

  // return <div>Student Signup Page</div>;
};

export default StudentSignupPage;
