import { useEffect, useState } from "react";
import { fetcherWithAxios } from "./FetcherWithAxios";
// for alternate rows 1 = white another bg-gray-50
function DataTable() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await fetcherWithAxios("https://dummyjson.com/users");
        setUsers(userData.users);
        //   console.log(users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p5 h-full bg-gray200 p-4  ">
      <h1 className="text-xl mb-2">Data Table</h1>
      {/* search bar */}

      <div className="overflow-auto rounded-lg shadow-2xl">
        <table className="w-full  ">
          <thead className="bg-gray-100 border-b-2 border-gray-400">
            <tr>
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
          <tbody className="divide-y  divide-gray-200  ">
            {users.map((user) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
