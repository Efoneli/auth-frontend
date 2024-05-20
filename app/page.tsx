"use client"



// import { getSession } from "@auth0/nextjs-auth0";
// import { redirect } from "next/navigation";
// import Image from "next/image";
// import undrawA from "../app/assests/undrawA.svg";

// export default async function Home() {
//   const session = await getSession();
//   if (session?.user) {
//     redirect("/dashboard")
//   }
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="flex items-center justify-between border rounded h-14">
//         <div className="bg-red-500 ">
//           <a href="/api/auth/login">
//             Login here
//           </a>
//         </div>

//         {/* <Image
//           src={undrawA}
//           alt="welcome"
//           className=""
//           height={600}
//           width={350}
//         /> */}
//       </div>
//     </div>
//   );
// }


// // import React from "react";
// // import Link from "next/link";

// // const HomePage = () => {
// //   return (
// //     <div>
// //       <h1>Welcome!</h1>
// //       <div>
// //         <Link href="/admin/login">
// //           Admin login
// //         </Link>
// //       </div>
// //       <div>
// //         <Link href="/student/login">
// //           Student login
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomePage;


'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";

export default function Home() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const [showLoginPrompt, setShowLoginPrompt] = useState(true);
  
  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    }
  }, [isLoading, user, router]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!isLoading && !user && (
        <>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Welcome to WDAT Syllabus app
          </h1>
          <p className="text-lg mb-8">A comprehensive web development
            syllabus app.</p>
          <div className="flex">
            <Link
              href="/api/auth/login"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            >
              Sign In
            </Link>
          </div>
        </>
      )}
    </div>
  </>
  );
}
