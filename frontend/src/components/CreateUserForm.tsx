import { apiUrl } from "@/const";
import { User } from "@/models";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
};

function CreateUserForm({ users, setUsers }: Props) {
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/users`, newUser);
      setUsers([response.data, ...users]);
      setNewUser({ name: "", email: "" });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form onSubmit={createUser} className="p-4 bg-blue-100 rounded shadow">
      <input
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        className="mb-2 w-full p-2 border border-gray-300 rounded"
      />
      <input
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        className="mb-2 w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add User
      </button>
    </form>
  );
}

export default CreateUserForm;
