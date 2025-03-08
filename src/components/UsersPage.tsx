import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";

const UsersPage = () => {

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    // gcTime: 5000,
    // staleTime: 10000,
    // refetchOnMount: false,
    enabled: false,
  });

  function getUsers() {
    const response = axios.get("https://jsonplaceholder.typicode.com/users");
    return response;
  }
  console.log(data?.data, isLoading);
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
