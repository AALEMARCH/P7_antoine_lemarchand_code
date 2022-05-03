import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const PostCreated = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [attachment, setAttachment] = useState("");

  const handlePostCreated = async (e) => {
    e.preventDefault();

    await axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      url: `${process.env.REACT_APP_API_URL}api/posts/`,
      // withCredentials: true,
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
    <Form
      onSubmit={handlePostCreated}
      method="post"
      encType="multipart/form-data"
      action="/images"
    >
      <Form.Group className="mb-3">
        <Form.Label htmlFor="title">Titre : </Form.Label>
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
          id="attachment"
          name="attachment"
          type="file"
          onChange={(e) => setAttachment(e.target.value)}
          // value={attachment}
          // accept=".jpg, .jpeg, .png, .gif"
        />
      </Form.Group>
      <Button variant="outline-danger" type="submit">
        Envoyer la publication
      </Button>
    </Form>
  );
};

export default PostCreated;
