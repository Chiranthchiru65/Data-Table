import { useEffect } from "react";
// import axios from "axios";
import { fetcherWithAxios } from "./FetcherWithAxios";

function DataTable() {
  useEffect(() => {
    const fetchUsers = async () => {
      //   const rawData = await fetch("https://dummyjson.com/users");
      //   const parsedData = await rawData.json();
      //   console.log(parsedData);

      const userData = await fetcherWithAxios("https://dummyjson.com/users");
      console.log(userData.users);
    };
    fetchUsers();
  }, []);

  return <div></div>;
}

export default DataTable;
