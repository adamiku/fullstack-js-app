import { apiUrl } from "@/const";
import { User } from "@/models";
import axios from "axios";
import { useEffect, useState } from "react";

function useGetUsers() {
  const [users, setUsers] = useState<User[]>([]);

  //fetch users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users`);
        setUsers(response.data.reverse());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { users, setUsers };
}

export default useGetUsers;
