import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";

const UserDetails = () => {
  const { id } = useParams();

  const fetchUserDetails = ({ queryKey }: { queryKey: any }) => {
    const response = axios.get(
      "https://jsonplaceholder.typicode.com/users/" + queryKey[1]
    );
    return response;
  };

  const { data } = useQuery({
    queryKey: ["users", id],
    queryFn: fetchUserDetails,
  });

  return <div>UserDetails - {data?.data.name}</div>;
};

export default UserDetails;
