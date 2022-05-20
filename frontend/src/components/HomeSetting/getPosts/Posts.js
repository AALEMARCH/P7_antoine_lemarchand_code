import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import { Form, Button } from "react-bootstrap";
import {
  getPosts,
  getPost,
  addPost,
  deletePost,
  updatePost,
} from "../../../Api/posts";
import { UidContext } from "../../Context/AppContext";

//Récupération et mappage des données de l'API, lecture des posts
const Posts = (props) => {
  const userData = useContext(UidContext);
  const date = new Date(props.date).toLocaleDateString();
  const [posts, setPosts] = useState(null);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    attachment: "",
  });

  const handlePosts = () => {
    getPosts()
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!posts) {
      handlePosts();
    }
  }, [posts]);
  console.log(posts);

  console.log(userData);
  const handlePostsByUserId = (userData) => {
    getPost(userData.userData)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", newPost.title);
    formData.append("content", newPost.content);
    formData.append("attachment", newPost.attachment);

    addPost(formData)
      .then((res) => {
        console.log(res.data);
        handlePosts();
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

  const handleDeletePost = (id) => {
    console.log(id);
    deletePost(id)
      .then((res) => {
        console.log(res.data);
        const data = posts.filter((post) => post.id !== id);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdatePost = ({ formData, post }) => {
    console.log(post.id);
    updatePost({ formData, post })
      .then((res, req) => {
        console.log(res.data);
        handlePosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [homeHandle, setHomeHandle] = useState(false);
  const homeHandleModals = (e) => {
    if (e.target.id === "on") {
      setHomeHandle(true);
    } else if (e.target.id === "off") {
      setHomeHandle(false);
    }
  };

  return (
    <>
      {posts ? (
        <>
          <div className="homeHandle">
            <p>
              Aujourd'hui nous sommes le : <br /> {date}
            </p>
            {/* <div className="postCreated"> */}
            <div className="homeHandle_btn">
              <div className="postCreated_container">
                <Button
                  variant="outline-danger"
                  className="homeHandle_btn"
                  onClick={homeHandleModals}
                  id="on"
                >
                  Créer une publication
                </Button>{" "}
                <Button
                  variant="outline-secondary"
                  onClick={homeHandleModals}
                  id="off"
                  className="postBtn_close"
                >
                  X
                </Button>{" "}
              </div>
            </div>
          </div>
          {homeHandle !== false ? (
            <div className="container-form">
              <Form
                action=""
                onSubmit={submitHandler}
                method="post"
                encType="multipart/form-data"
                id="test"
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
            </div>
          ) : null}

          {posts && (
            <>
              <div className="post-container">
                {posts.map((post) => (
                  <Card
                    key={post.id}
                    post={post}
                    handlePostsByUserId={handlePostsByUserId}
                    handleUpdatePost={handleUpdatePost}
                    handleDeletePost={handleDeletePost}
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : null}
    </>
  );
};

export default Posts;
