import React from "react";
import { Form, Button } from "react-bootstrap";

const SignUp = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Entrez l'e-mail" />
        <Form.Text className="text-muted">
          Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="tapez votre mot de passe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordTwo">
        <Form.Label>Nom d'utilisateur</Form.Label>
        <Form.Control type="text" placeholder="Nom d'utilisateur" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="J'accepte les conditions générales"
        />
      </Form.Group>
      <Button variant="outline-danger" type="submit">
        Valider inscription
      </Button>
    </Form>
  );
};

export default SignUp;
