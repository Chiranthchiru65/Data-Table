import DataTable from "./DataTable";

function App() {
  return (
    <>
      <div className="p5 h-screen bg-gray-300 p-4 ">
        <h1 className="text-xl mb-2">Data Table</h1>
        <DataTable />
        <table className="w-full border-4 border-gray-700 ">
          <thead className="bg-gray-200 border-b-4 border-gray-700">
            <tr>
              <th className=" p-3 text-sm tracking-wide text-left">No.</th>
              <th className=" p-3 text-sm tracking-wide text-left">
                First Name
              </th>
              <th className=" p-3 text-sm tracking-wide text-left">
                Last Name
              </th>
              <th className=" p-3 text-sm tracking-wide text-left">Age</th>
              <th className=" p-3 text-sm tracking-wide text-left">Sex</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 text-sm font-bold text-blue-500">1</td>
              <td className="p-3 text-sm text-gray-700">chiranth</td>
              <td className="p-3 text-sm text-gray-700">
                Nataraj hira kj jllajsdfj lkjadf jlkjdfj jlkdsjf kjdflja dj
              </td>
              <td className="p-3 text-sm text-gray-700">25</td>
              <td className="p-3 text-sm text-gray-700">M</td>
            </tr>
            <tr>
              <td className="p-3 text-sm font-bold text-blue-500">1</td>
              <td className="p-3 text-sm text-gray-700">chiranth</td>
              <td className="p-3 text-sm text-gray-700">
                Nataraj hira kj jllajsdfj lkjadf jlkjdfj jlkdsjf kjdflja dj
              </td>
              <td className="p-3 text-sm text-gray-700">25</td>
              <td className="p-3 text-sm text-gray-700">M</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 text-sm font-bold text-blue-500">1</td>
              <td className="p-3 text-sm text-gray-700">chiranth</td>
              <td className="p-3 text-sm text-gray-700">
                Nataraj hira kj jllajsdfj lkjadf jlkjdfj jlkdsjf kjdflja dj
              </td>
              <td className="p-3 text-sm text-gray-700">25</td>
              <td className="p-3 text-sm text-gray-700">M</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
