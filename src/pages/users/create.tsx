import React, { FC } from "react";
import { ActionFunction, Form } from "react-router-dom";
import StyledInput from "../../components/styled/StyledInput";

const CreateUserPage: FC = () => {
  return (
    <Form
      method="post"
      action="/users/create"
      className="grid max-w-3xl mx-auto"
    >
      <label htmlFor="">Name</label>
      <StyledInput type="text" name="name" placeholder="Bob" />
      <label htmlFor="">Username</label>
      <StyledInput type="text" name="username" placeholder="bobus2" />
      <label htmlFor="">Email</label>
      <StyledInput type="email" name="email" placeholder="email@example.com" />
      <label htmlFor="">Phone</label>
      <StyledInput type="text" name="phone" placeholder="493-170-9623 x156" />
      <label htmlFor="">Address</label>

      <div className="grid grid-cols-2 gap-4 mb-2">
        <StyledInput type="text" name="city" placeholder="City" />
        <StyledInput type="text" name="street" placeholder="Street" />
      </div>
      <button
        type="submit"
        className="rounded-sm px-2 py-1 block bg-blue-500 text-white"
      >
        Create
      </button>
    </Form>
  );
};

export default CreateUserPage;
export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries([...form])),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
