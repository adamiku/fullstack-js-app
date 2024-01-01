import { apiUrl } from "@/const";
import { User } from "@/models";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
};

function UpdateUserForm({ users, setUsers }: Props) {
  const [updateUser, setUpdateUser] = useState({ id: "", name: "", email: "" });

  //update user
  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(`${apiUrl}/users/${updateUser.id}`, {
        name: updateUser.name,
        email: updateUser.email,
      });
      setUpdateUser({ id: "", name: "", email: "" });
      setUsers(
        users.map((user) => {
          if (user.id === parseInt(updateUser.id)) {
            return { ...user, name: updateUser.name, email: updateUser.email };
          }
          return user;
        })
      );
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <form
      onSubmit={handleUpdateUser}
      className="p-4 bg-green-100 rounded shadow"
    >
      <input
        placeholder="User ID"
        value={updateUser.id}
        onChange={(e) => setUpdateUser({ ...updateUser, id: e.target.value })}
        className="mb-2 w-full p-2 border border-gray-300 rounded"
      />
      <input
        placeholder="New Name"
        value={updateUser.name}
        onChange={(e) => setUpdateUser({ ...updateUser, name: e.target.value })}
        className="mb-2 w-full p-2 border border-gray-300 rounded"
      />
      <input
        placeholder="New Email"
        value={updateUser.email}
        onChange={(e) =>
          setUpdateUser({ ...updateUser, email: e.target.value })
        }
        className="mb-2 w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600"
      >
        Update User
      </button>
    </form>
  );
}

export default UpdateUserForm;
