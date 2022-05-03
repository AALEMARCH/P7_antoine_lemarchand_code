import React, { useState } from "react";
import ProfilUpdate from "./ProfilUpdate";
import { Button } from "react-bootstrap";

const ProfilUpdateBtn = () => {
  const [profilUpdateBtn, setProfilUpdateBtn] = useState();

  const profilUpdateModals = (e) => {
    if (e.target.id === "ok") {
      setProfilUpdateBtn(true);
    } else if (e.target.id === "ko") {
      setProfilUpdateBtn(false);
    }
  };

  return (
    <div>
      <div className="button-update--container">
        <Button
          variant="outline-danger"
          onClick={profilUpdateModals}
          id="ok"
          className="button-update--size"
        >
          modifier le profile
        </Button>{" "}
        <Button variant="outline-danger" onClick={profilUpdateModals} id="ko">
          X
        </Button>{" "}
      </div>
      {profilUpdateBtn && <ProfilUpdate />}
    </div>
  );
};

export default ProfilUpdateBtn;
