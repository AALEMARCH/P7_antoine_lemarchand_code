import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { addPost } from "../../../Api/posts";
import { useNavigate } from "react-router-dom";

const PostCreated = () => {
  //Initialisation de l'état du post
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    attachment: "",
  });

  //Préparation a la navigation
  let navigate = useNavigate();

  const handlePostCreated = async (e) => {
    e.preventDefault();

    //Préparation des données du formulaire
    const formData = new FormData();
    formData.append("title", newPost.title);
    formData.append("content", newPost.content);
    formData.append("attachment", newPost.attachment);

    //Récupération des données de l'API
    await addPost(formData)
      .then((res, req) => {
        console.log(res);
        navigate("/Profil");
        navigate("/Home");
      })
      .catch((err) => console.log(err));
  };

  //Evenement au click si il y a un fichier ou non
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
