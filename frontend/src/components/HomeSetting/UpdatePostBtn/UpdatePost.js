import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const UpdatePost = (post) => {
  console.log(post.post.post.id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [attachment, setAttachment] = useState("");

  const handlCommentUpdated = async (e) => {
    e.preventDefault();

    await axios({
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      url: `${process.env.REACT_APP_API_URL}api/posts/update/${post.post.post.id}`,
      withCredentials: true,
      data: {
        title,
        content,
        attachment,
      },
    })
      .then((res, req) => {
        console.log(res);
        window.location = "/home";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form action="" onSubmit={handlCommentUpdated}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="content">Titre : </Form.Label>
        <Form.Control
          type="text"
          placeholder="Titre de la publication"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          id="title"
          name="title"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="content">Contenu : </Form.Label>
        <Form.Control
          type="text"
          placeholder="Contenu de la publication"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          id="content"
          name="content"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="attachment">Images : </Form.Label>
        <Form.Control
          type="file"
          name="attachment"
          onChange={(e) => setAttachment(e.target.value)}
          value={attachment}
          id="attachment"
        />
      </Form.Group>
      <Button variant="outline-danger" type="submit">
        Envoyer la publication
      </Button>
    </Form>
  );
};

export default UpdatePost;
