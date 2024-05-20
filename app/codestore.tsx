<nav className="fixed top-0 z-50 w-full bg-gray-800 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">

            <div className="relative">
              {/* Avatar button */}
              <button
                type="button"
                onClick={toggleUserMenu}
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded={isUserMenuOpen ? "true" : "false"}
                data-dropdown-toggle="dropdown-user"
              >
                <span className="sr-only">Open user menu</span>
                {/* Avatar image */}
                <Image
                  className="w-8 h-8 rounded-full"
                  src={avatar}
                  alt="user photo"
                />
              </button>

              {/* Dropdown menu */}
              <div
                className={`absolute right-0 ${
                  isUserMenuOpen ? "block" : "hidden"
                } z-50 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                id="dropdown-user"
              >
                 {!!session?.user && (
        <div className="px-4 py-3" role="none">
          <p className="text-sm text-gray-900 dark:text-white" role="none">
            Neli Abba
          </p>
          <p
            className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
            role="none"
          >
            {session.user.email}
          </p>
        </div>
      )}
                 {/* <Suspense fallback="Loading user!!!">
        <UserProfile />
      </Suspense> */}
                {/* <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    Neli Abba
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    efoneli@gmail.com
                  </p>
                </div> */}
                <ul className="py-1" role="none">
                  <li>
                    <Link
                      href="/page/logout"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

<nav className="fixed top-0 z-50 w-full bg-gray-800 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
<div className="px-3 py-3 lg:px-5 lg:pl-3">
  <div className="flex items-center justify-between">

    <div className="relative">
      {/* Avatar button */}
      <button
        type="button"
        onClick={toggleUserMenu}
        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        aria-expanded={isUserMenuOpen ? "true" : "false"}
        data-dropdown-toggle="dropdown-user"
      >
        <span className="sr-only">Open user menu</span>
        {/* Avatar image */}
        <Image
          className="w-8 h-8 rounded-full"
          src={avatar}
          alt="user photo"
        />
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute right-0 ${
          isUserMenuOpen ? "block" : "hidden"
        } z-50 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
        id="dropdown-user"
      >
        


        <div className="px-4 py-3" role="none">
          <p
            className="text-sm text-gray-900 dark:text-white"
            role="none"
          >
            Neli Abba
          </p>
          <p
            className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
            role="none"
          >
            efoneli@gmail.com
          </p>
        </div>
        <ul className="py-1" role="none">
          <li>
            <Link
              href="/page/logout"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</nav>








// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// interface Course {
//   id: number;
//   title: string;
//   prerequisites: string;
//   imageUrl: string;
//   description: string;
//   categoryId: number;
//   courseId: number;
// }

// // Define a type for the category object
// interface Category {
//   id: number;
//   name: string;
// }

// export default function CategoryDetails({
//   params,
// }: {
//   params: { categoryId: string };
// }) {
//   const router = useRouter();
//   const [courses, setCourses] = useState<Course[]>([]);

//   useEffect(() => {
//     const fetchCategoryData = async () => {
//       try {
//         // Fetch categories from API
//         const response = await axios.get<Category[]>("http://localhost:3030/categories");

//         // Extract categories from the response data
//         const categories: Category[] = response.data;

//         console.log("Fetched categories:", categories); // Log fetched categories
//         console.log("params.categoryId:", params.categoryId); // Log the categoryId from params

//         // Find the category based on the categoryId from params (case-insensitive)
//         const category = categories.find((cat: Category) =>
//           cat.name.toLowerCase() === params.categoryId.toLowerCase()
//         );

//         if (!category) {
//           console.error("Category not found");
//           return;
//         }

//         const categoryId = category.id;
//         console.log(categoryId, "catid");

//         // Fetch courses for the selected category
//         const coursesResponse = await axios.get<Course[]>(
//           `http://localhost:3030/courses?categoryId=${categoryId}`
//         );

//         console.log("Fetched courses:", coursesResponse.data); // Log fetched courses

//         setCourses(coursesResponse.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchCategoryData();
//   }, [params.categoryId]);

//   const handleCourseChange = (course: Course) => {
//     console.log(course);
//     router.push(`/dashboard/categories/${params.categoryId}/courses/${course.id}`);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl mb-4">{params.categoryId.toUpperCase()}</h1>
//       <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {courses.map((course, index) => (
//           <div
//             key={index}
//             className="border rounded-md p-6 flex flex-col items-center justify-center hover:scale-105"
//           >
//             <button onClick={() => handleCourseChange(course)} className="">
//               <Image
//                 src={course.imageUrl}
//                 alt={course.title}
//                 height={200}
//                 width={200}
//                 className=""
//               />
//               <h2 className="text-xl text-white font-semibold mb-2">
//                 {course.title}
//               </h2>
//               <p className="text-gray-700">{course.prerequisites}</p>
//             </button>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }




"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Course {
  id: number;
  title: string;
  prerequisites: string;
  imageUrl: string;
  description: string;
  categoryId: number;
  courseId: number;
}

interface Category {
  id: number;
  categoryId:number;
  name: string;
}

export default function CategoryDetails() {
  const params = useParams();
  const [courses, setCourses] = useState<Course[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get<Category[]>("http://localhost:3030/categories");
        const categories: Category[] = response.data;

        const categoryIdParam = Array.isArray(params.categoryId)
          ? params.categoryId[0]
          : params.categoryId;

        const category = categories.find((cat: Category) =>
          cat.name.toLowerCase() === categoryIdParam.toLowerCase()
        );

        if (!category) {
          console.error("Category not found");
          return;
        }

        setCategoryName(category.name);
        const categoryId = category.id;

        const coursesResponse = await axios.get<Course[]>(
          `http://localhost:3030/courses?categoryId=${categoryId}`
        );

        setCourses(coursesResponse.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCategoryData();
  }, [params.categoryId]);

  return (
    <div className="min-h-screen w-full h-full flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">Courses for {categoryName}</h2>
      {courses.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <li key={course.courseId} className="bg-white rounded-lg shadow-lg p-4">
              <Link href={`/dashboard/categories/${params.categoryId}/courses/${course.id}`} passHref>
                <div>
                  {/* <Image
                    src={course.imageUrl}
                    alt={course.title}
                    width={200}
                    height={150}
                    className="object-cover rounded-t-lg"
                  /> */}
                  <h3 className="text-xl font-semibold mt-2">{course.title}</h3>
                  <p className="text-gray-700 mt-1">{course.description}</p>
                  <p className="text-gray-500 mt-1">Prerequisites: {course.prerequisites}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No courses available for this category.</p>
      )}
    </div>
  );
}
