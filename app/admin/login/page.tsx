// pages/admin/signup.js

'use client'
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const AdminSignupPage = () => {
  useEffect(() => {
    async function checkSession() {
      const session = await getSession();
      if (session?.user) {
        redirect("/dashboard");
      }
    }
    checkSession();
  }, []);

  // Add your admin signup form JSX here

  <a href="/api/auth/login">
             Login here
          </a>

  // return <div>Admin Signup Page</div>;
};

export default AdminSignupPage;
