import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import success from "../assets/Images/success.png";

export default function Spacecreated() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      navigate("/invitePeople");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`verification${visible ? " visible" : ""}`}>
      <div className="align-center">
        <div>
          <section className="verificationsuccess">
            <img src={success} alt="Success" />
          </section>
        </div>
        <h3>Your space is created</h3>
      </div>
    </div>
  );
}
