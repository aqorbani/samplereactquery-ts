import { Link } from "react-router";
import { useUsersData } from "../hooks/queries";

const UsersPage = () => {
  const { data, isLoading, isError, error, refetch } = useUsersData();

  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <h3>HomePage</h3>
      <button onClick={() => refetch() as any}>fetch</button>
      <h4>users list</h4>
      {isError && <p>{error.message}</p>}
      <ul>
        {data?.data.map((user: any) => (
          <li key={user.id} style={{ color: "red" }}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
