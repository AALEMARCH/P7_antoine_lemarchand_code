import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const CommentCreated = (post) => {
  console.log(post.post.post.id);
  const [content, setContent] = useState("");
  const [attachment, setAttachment] = useState("");

  const handlCommentCreated = async (e) => {
    e.preventDefault();

    await axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      url: `${process.env.REACT_APP_API_URL}api/comments/${post.post.post.id}`,
      withCredentials: true,
      data: {
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
    <Form action="" onSubmit={handlCommentCreated}>
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

export default CommentCreated;
