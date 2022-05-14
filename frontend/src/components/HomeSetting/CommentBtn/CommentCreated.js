import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Api from "../../../Api/users";
import { useNavigate } from "react-router-dom";

const CommentCreated = (post) => {
  //Initialisation de l'état du commentaire
  const [newComment, setNewComment] = useState({
    content: "",
    attachment: "",
  });

  //Préparation a la navigation
  let navigate = useNavigate();

  const handleCommentCreated = async (e) => {
    e.preventDefault();

    //Préparation des données du formulaire
    const formData = new FormData();
    formData.append("content", newComment.content);
    formData.append("attachment", newComment.attachment);

    //Récupération des données de l'API
    await Api.post(`comments/${post.post.id}`, formData, {})
      .then((res, req) => {
        console.log(res);
        navigate("*");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Evenement au click si il y a un fichier ou non
  const handleComment = (e) => {
    if (e.target.name !== "attachment") {
      setNewComment({ ...newComment, [e.target.name]: e.target.value });
    } else {
      setNewComment({
        ...newComment,
        attachment: e.target.files[0],
      });
    }
  };

  return (
    <Form
      onSubmit={handleCommentCreated}
      method="post"
      encType="multipart/form-data"
      className="form-comment"
    >
      <div className="commentPublication-container">
        <Form.Group className="mb-3 content-container">
          <Form.Label htmlFor="content">Commenter : </Form.Label>
          <Form.Control
            type="text"
            placeholder="Contenu de la publication"
            onChange={(e) => handleComment(e)}
            value={newComment.content}
            id="content"
            name="content"
            className="content-area"
          />
        </Form.Group>
        <div className="sendCommentBtn-container">
          <Button
            variant="outline-danger"
            type="submit"
            className="sending-comment"
          >
            <i className="fa-solid fa-paper-plane iconSendComment"></i>
          </Button>
        </div>
      </div>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="attachment">
          <i className="fa-solid fa-image iconSendPictures"></i>
        </Form.Label>
        <Form.Control
          id="attachment"
          name="attachment"
          type="file"
          onChange={(e) => handleComment(e)}
          className="test-inputSend"
        />
      </Form.Group>
    </Form>
  );
};

export default CommentCreated;
