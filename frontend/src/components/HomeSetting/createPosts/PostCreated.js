import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { addPost, getPost, getPosts } from "../../../Api/posts";

const PostCreated = () => {
  const [posts, setPosts] = useState(null);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    attachment: "",
  });

  const handlePosts = () => {
    getPosts()
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePostCreated = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", newPost.title);
    formData.append("content", newPost.content);
    formData.append("attachment", newPost.attachment);

    await addPost(formData)
      .then((res, req) => {
        console.log(res);
        handlePosts();
        window.location = "/home";
      })
      .catch((err) => console.log(err));
  };

  const handlePost = (e) => {
    if (e.target.name !== "attachment") {
      setNewPost({ ...newPost, [e.target.name]: e.target.value });
    } else {
      setNewPost({
        ...newPost,
        attachment: e.target.files[0],
      });
    }
  };

  return (
    <Form
      onSubmit={handlePostCreated}
      method="post"
      encType="multipart/form-data"
    >
      <Form.Group className="mb-3">
        <Form.Label htmlFor="title">Titre : </Form.Label>
        <Form.Control
          type="text"
          placeholder="Titre de la publication"
          onChange={(e) => handlePost(e)}
          value={newPost.title}
          id="title"
          name="title"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="content">Contenu : </Form.Label>
        <Form.Control
          type="text"
          placeholder="Contenu de la publication"
          onChange={(e) => handlePost(e)}
          value={newPost.content}
          id="content"
          name="content"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="attachment">Images : </Form.Label>
        <Form.Control
          id="attachment"
          name="attachment"
          type="file"
          width="30%"
          onChange={(e) => handlePost(e)}
        />
      </Form.Group>
      <Button variant="outline-danger" type="submit">
        Envoyer la publication
      </Button>
    </Form>
  );
};

export default PostCreated;
