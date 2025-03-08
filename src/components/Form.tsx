import { useAddPost } from "../hooks/mutations";

const Form = () => {
  const formData = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  const { data, isPending, mutate } = useAddPost();

  console.log({ data, isPending });
  const sendHandler = () => {
    mutate(formData);
  };

  return (
    <div>
      <h1>Form</h1>
      <button onClick={sendHandler}>send</button>
    </div>
  );
};

export default Form;
