"use client";
import EntityPageLoading from "@/components/EntityPageloading";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const { data, isPending, error } = authClient.useSession();

  console.log("data from ", data);

  useEffect(() => {
    if (!isPending && !data?.user) {
      router.push("/sign-in");
    }
  }, [data?.user, isPending, router]);

  if (isPending) {
    return <EntityPageLoading />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Error loading session: {error.message}</p>
      </div>
    );
  }

  if (!data?.user) {
    return <EntityPageLoading />; // Show loading while redirecting
  }

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/sign-in");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Dashboard
            </h1>
            <p className="text-md text-gray-600 mt-1">
              Welcome back,{" "}
              <span className="font-semibold text-blue-600">
                {data?.user.name || data?.user.email}
              </span>
              . Here is your summary.
            </p>
            {/* Display additional user information */}
            <div className="mt-2 text-sm text-gray-500">
              {data?.user.name && <p>Name: {data?.user.name}</p>}
              <p>Email: {data?.user.email}</p>
              {data?.user.image && (
                <div className="mt-2">
                  <img
                    src={data.user.image}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              )}
            </div>
          </div>
          <Link
            href="/sign-in"
            onClick={handleLogout}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all transform hover:scale-105 text-center"
          >
            Sign Out
          </Link>
        </header>

        <main>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
              <h3 className="text-gray-500 font-semibold text-sm uppercase tracking-wider">
                Profile Views
              </h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">1,420</p>
              <p className="text-sm text-green-500 mt-1">+12% this month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
              <h3 className="text-gray-500 font-semibold text-sm uppercase tracking-wider">
                Connections
              </h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">89</p>
              <p className="text-sm text-green-500 mt-1">+5 this month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
              <h3 className="text-gray-500 font-semibold text-sm uppercase tracking-wider">
                Account Status
              </h3>
              <p className="text-3xl font-bold text-green-500 mt-2">Active</p>
              <p className="text-sm text-gray-500 mt-1">No issues detected</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
              <h3 className="text-gray-500 font-semibold text-sm uppercase tracking-wider">
                Pending Tasks
              </h3>
              <p className="text-3xl font-bold text-yellow-500 mt-2">3</p>
              <p className="text-sm text-gray-500 mt-1">Awaiting action</p>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Recent Activity
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 px-4 font-semibold text-sm text-gray-600">
                      Date
                    </th>
                    <th className="py-3 px-4 font-semibold text-sm text-gray-600">
                      Event
                    </th>
                    <th className="py-3 px-4 font-semibold text-sm text-gray-600">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-600">2023-10-27</td>
                    <td className="py-3 px-4 text-gray-800">
                      Successful login from new device
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-600">2023-10-26</td>
                    <td className="py-3 px-4 text-gray-800">
                      Password updated
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-600">2023-10-25</td>
                    <td className="py-3 px-4 text-gray-800">
                      Profile information updated
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                        Info
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
