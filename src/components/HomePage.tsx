import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const HomePage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  function getUsers() {
    const response = axios.get("https://jsonplaceholder.typicode.com/users");
    return response;
  }
  console.log(data?.data, isLoading);
  return (
    <div>
      <h3>HomePage</h3>
      <h4>users list</h4>
      {isError && <p>{error.message}</p>}
      <ul>
        {data?.data.map((user: any) => (
          <li key={user.id} style={{ color: "red" }}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
