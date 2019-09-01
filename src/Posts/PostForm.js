import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const PostForm = () => {
  const [formData, setFormData] = useState({ title: "", body: "" });

  const handleInput = e => {
    const newFormData = {};
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData, ...newFormData });
  };

  const { title, body } = formData;

  return (
    <Mutation
      mutation={NEW_POST}
      variables={{
        title,
        body
      }}
    >
      {createPost => (
        <form
          onSubmit={e => {
            e.preventDefault();
            createPost()
              .then(() => {
                setFormData({ title: "", body: "" });
              })
              .catch(error => console.log(error));
          }}
        >
          <input
            type="text"
            name="title"
            onChange={handleInput}
            value={title}
            placeholder="title"
          />
          <input
            type="text"
            name="body"
            onChange={handleInput}
            value={body}
            placeholder="body"
          />
          <button>Submit</button>
        </form>
      )}
    </Mutation>
  );
};

const NEW_POST = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost(data: { status: PUBLISHED, title: $title, body: $body }) {
      title
      body
      id
    }
  }
`;

export default PostForm;
