import CreateUserForm from "@/components/CreateUserForm";
import ListUser from "@/components/ListUser";
import UpdateUserForm from "@/components/UpdateUserForm";
import useGetUsers from "@/hooks/useGetUsers";

export default function Home() {
  const { users, setUsers } = useGetUsers();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="space-y-4 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          User Management App
        </h1>

        {/* Create user */}
        <CreateUserForm setUsers={setUsers} users={users} />

        {/* Update user */}
        <UpdateUserForm setUsers={setUsers} users={users} />

        {/* Display users */}
        <ListUser setUsers={setUsers} users={users} />
      </div>
    </main>
  );
}
