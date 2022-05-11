import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdatePost = (post) => {
  let navigate = useNavigate();

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    attachment: "",
  });

  const handlCommentUpdated = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", newPost.title);
    formData.append("content", newPost.content);
    formData.append("attachment", newPost.attachment);

    axios
      .put(
        `${process.env.REACT_APP_API_URL}api/posts/update/${post.post.post.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        }
      )
      .then((res, req) => {
        console.log(res);
        navigate("/Profil");
        navigate("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
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
      action=""
      onSubmit={handlCommentUpdated}
      method="put"
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
          type="file"
          name="attachment"
          onChange={(e) => handlePost(e)}
          width="30%"
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
