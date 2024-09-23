import { useEffect, useState } from "react";
import { fetcherWithAxios } from "./FetcherWithAxios";
import LoadingSpinner from "./LoadingSpinner";
import ErrorPage from "./Error";
import UserNotFound from "./UserNotFound";
// for alternate rows 1 = white another bg-gray-50
function DataTable() {
  const [users, setUsers] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const userData = await fetcherWithAxios("https://dummyjson.com/users");

        setUsers(userData.users);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  //   handling search click

  function handleSearchClick() {
    if (searchVal === "") {
      window.alert("Search input empty. Please enter a valid input");
      return;
    }

    const filterBySearch = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchVal.toLowerCase())
    );

    setUsers(filterBySearch);

    setSearchVal("");
  }
  console.log(error);
  return (
    <>
      {error && <ErrorPage message={error.message} />}
      <div className="p5 h-full bg-gray-100 p-4  ">
        {/* search bar */}
        <div className="flex justify-between p-4 items-center">
          <h1 className="text-xl mb-2 font-bold ">Data Table</h1>
          <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative">
              <input
                className="w-full bg-white placeholder:text-slate-600 text-slate-700 text-sm border border-slate-900 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-lg focus:shadow"
                placeholder="Search by name..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
              />
              <button
                onClick={handleSearchClick}
                className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
        {/* search bar end  */}
        <div className="overflow-auto rounded-lg shadow-2xl">
          <table className="w-full  ">
            <thead className="bg-gray-100 border-b-2 border-gray-400">
              <tr>
                {users.length === 0 && <th></th>}
                <th className="border border-slate-300 w-15 p-3 text-sm tracking-wide text-left">
                  No.
                </th>
                <th className="border border-slate-300 w-20 p-3 text-sm tracking-wide text-left">
                  First Name
                </th>
                <th className="border border-slate-300 w-20 p-3 text-sm tracking-wide text-left">
                  Last Name
                </th>
                <th className="border border-slate-300  p-3 text-sm tracking-wide text-left">
                  Email
                </th>
                <th className="border border-slate-300  p-3 text-sm tracking-wide text-left">
                  Phone
                </th>
                <th className="border border-slate-300  p-3 text-sm tracking-wide text-left">
                  Birth Date
                </th>

                <th className="border border-slate-300  p-3 text-sm tracking-wide text-left">
                  Age
                </th>
                <th className="border border-slate-300  p-3 text-sm tracking-wide text-left">
                  Gender
                </th>
              </tr>
            </thead>
            {/* if loading is true -> loading */}
            {/* when isLoading is true && when there's no error which makes it true */}
            {/* load the table */}
            {/* if error is true error */}

            {isLoading && <LoadingSpinner />}

            {!isLoading && !error && (
              <tbody className="divide-y  divide-gray-200  ">
                {users.length === 0 ? (
                  <UserNotFound searchVal={searchVal} />
                ) : (
                  users.map((user) => (
                    <tr key={crypto.randomUUID()} className="bg-white">
                      <td className="border border-slate-300 p-3 text-sm font-bold text-blue-500 ">
                        {user.id}
                      </td>
                      <td className="border border-slate-300 p-3 text-sm text-gray-700 whitespace-nowrap">
                        {user.firstName}
                      </td>
                      <td className="border border-slate-300 p-3 text-sm text-gray-700 whitespace-nowrap">
                        {user.lastName}
                      </td>
                      <td className="border border-slate-300 p-3 text-sm text-gray-700 whitespace-nowrap">
                        {user.email}
                      </td>
                      <td className="border border-slate-300 p-3 text-sm text-gray-700 whitespace-nowrap">
                        {user.phone}
                      </td>
                      <td className="border border-slate-300 p-3 text-sm text-gray-700 whitespace-nowrap">
                        {user.birthDate}
                      </td>
                      <td className="border border-slate-300 p-3 text-sm text-gray-700 whitespace-nowrap">
                        {user.age}
                      </td>
                      <td className="border border-slate-300 p-3 text-sm text-gray-700 whitespace-nowrap">
                        {user.gender}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}

export default DataTable;
