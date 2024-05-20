import { getSession } from "@auth0/nextjs-auth0";
import { setTimeout } from "timers/promises";

export default async function UserProfile() {
  const session = await getSession();
  await setTimeout(5000);
  return (
    
    <div className="top-60 flex items-end justify-end">
      {!!session?.user && (
        <div className='flex items-center justify-center mr-4'>
          <div className="px-4 py-3 flex flex-col" role="none">
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
          <div>
            <a href="/api/auth/logout">Logout</a>
          </div>
        </div>
      )}
    </div>
  );
}
