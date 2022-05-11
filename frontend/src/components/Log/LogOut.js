import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const logOut = () => {
  return (
    <Card
      className="logout-card"
      border="danger"
      style={{ width: "80%", height: "80vh", margin: "2rem auto" }}
    >
      <Card.Header className="logOut-container_header">Déconnexion</Card.Header>
      <Card.Body style={{ height: "90%" }}>
        <div className="logOut-container">
          <img
            src="./img/icon.png"
            alt="logo de l'entreprise groupomania"
            className="logOut-container_img"
          />
        </div>
        <div className="logOut-container_text">
          <Card.Text>
            Vous vous apprêter à vous déconnecter. Êtes-vous sûr de vouloir
            faire Ça?
          </Card.Text>

          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "nav-passive")}
          >
            <Button variant="danger">Se déconnecter</Button>
          </NavLink>
        </div>
      </Card.Body>
    </Card>
  );
};

export default logOut;
