import { apiUrl } from "@/const";
import { User } from "@/models";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import CardComponent from "./Card";

type Props = {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
};

function ListUser({ users, setUsers }: Props) {
  //delete user
  const deleteUser = async (userId: number) => {
    try {
      await axios.delete(`${apiUrl}/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="space-y-2">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
        >
          <CardComponent card={user} />
          <button
            onClick={() => deleteUser(user.id)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Delete User
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListUser;
