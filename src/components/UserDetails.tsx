import { useParams } from "react-router";
import { useUserDetails } from "../hooks/queries";

const UserDetails = () => {
  const { id } = useParams();

  if (!id) {
    return <p>user not found</p>;
  }

  const { data } = useUserDetails(id);

  return <div>UserDetails - {data?.data.name}</div>;
};

export default UserDetails;
