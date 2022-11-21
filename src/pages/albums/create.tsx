import React, { FC, Suspense } from "react";
import { ActionFunction, Await, Form, useLoaderData } from "react-router-dom";
import Select from "../../components/select/Select";
import StyledInput from "../../components/styled/StyledInput";
import { User } from "../../types/user";
import { loader as usersLoader } from "../users/";

const CreateAlbumPage: FC = () => {
  const { userPromise } = useLoaderData() as ReturnType<typeof usersLoader>;
  return (
    <Form
      method="post"
      action="/albums/create"
      className="grid max-w-3xl mx-auto"
    >
      <label htmlFor="">Owner</label>
      <Suspense>
        <Await resolve={userPromise}>
          {(users) => (
            <Select
              options={users.map(({ id, name }: User) => ({
                key: id,
                value: name,
              }))}
            />
          )}
        </Await>
      </Suspense>
      <label htmlFor="">Title</label>
      <StyledInput
        type="text"
        name="title"
        placeholder="Beautiful name for album"
      />
      <button
        type="submit"
        className="rounded-sm px-2 py-1 block bg-blue-500 text-white"
      >
        Create
      </button>
    </Form>
  );
};

export default CreateAlbumPage;
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
