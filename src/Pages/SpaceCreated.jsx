import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import success from "../assets/Images/success.png";

export default function Spacecreated() {
  const navigate = useNavigation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      navigate("/another-page");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

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
