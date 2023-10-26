// import React from "react";
// import img from "./Assets/Dark Mode/Frame.png";
// const Home2 = () => {
//   return (
//     <div className="home2">
//       <header>
//         <h1>Pyramidon</h1>
//         <div className="header-buttons">
//           <button>Login</button>
//           <button>Register Free</button>
//         </div>
//       </header>
//       <main>
//         <h1>Experiencing a new way of Interacting</h1>
//         <h4>
//           Create your own virtual world and make your interactions more human
//         </h4>
//         <div className="main-buttons">
//           <button>Register Free</button>
//           <button>Try Now</button>
//           {/* <div className="element">
//             <img src={img} alt="Description of the image" />
//           </div> */}
//           <div className="element">
//             <img
//               style={{ width: "1200px" }}
//               src={img}
//               alt="Description of the image"
//             />
//           </div>
//         </div>
//         <div>
//           <h1>Meet Our AI assistant</h1>
//           <h3>Our AI assistant will take care of your smooth experience</h3>
//         </div>
//         <div>
//           <h2>Boost your sales in virtual space</h2>
//           <h4>
//             Stop by someone's desk, say hi in the hallway, and bring back water
//             cooler chats. No scheduling required.
//           </h4>
//         </div>
//         <div>
//           <h2>Bring your remote team closer together</h2>
//           <h4>
//             Communicate, collaborate, and feel more connected in a persistent
//             space that reflects your unique team culture.
//           </h4>
//         </div>
//         <div>
//           <h1>Build a culture your remote team loves</h1>
//           <button>Register Free</button>
//           <button>Try Now</button>
//         </div>
//       </main>
//       <footer>&copy; {new Date().getFullYear()} Pyramidon</footer>
//     </div>
//   );
// };
// export default Home2;
import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import img from "./Assets/Dark Mode/Frame.png";
import virtualspace from "./Assets/Dark Mode/boost-your-sale.png";
import remote from "./Assets/Dark Mode/remote team.png";

const Home2 = () => {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="home2">
      <header>
        <h1>Pyramidon</h1>{" "}
        <div>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="features">Features</ToggleButton>
            <ToggleButton value="usecases">Use cases</ToggleButton>
            <ToggleButton value="pricing">Pricing</ToggleButton>
            <ToggleButton value="contact">contact</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="header-buttons">
          <button>Login</button>
          <button>Register Free</button>
        </div>
      </header>
      <main>
        <h1>Experiencing a new way of Interacting</h1>
        <h4>
          Create your own virtual world and make your interactions more human
        </h4>

        <div className="main-buttons">
          <button>Register Free</button>
          <button>Try Now</button>
          <div className="element">
            <img
              style={{ width: "1200px" }}
              src={img}
              alt="Description of the image"
            />
          </div>
        </div>
        <div>
          <h1>Meet Our AI assistant</h1>
          <h3>Our AI assistant will take care of your smooth experience</h3>
        </div>
        {/* <div>
          <h2>Boost your sales in the virtual space</h2>
          <h4>
            Stop by someone's desk, say hi in the hallway, and bring back water
            cooler chats. No scheduling required.
          </h4>
          <div className="virtualspace">
            <img
              style={{ width: "563px" }}
              src={virtualspace}
              alt="Description of the image"
            />
          </div>
        </div> */}
        <div className="contentvirtual">
          <div className="virtualspace">
            <img
              style={{ width: "563px" }}
              src={virtualspace}
              alt="Description of the image"
            />
          </div>
          <div className="right-side">
            <h2>Boost your sales in the virtual space</h2>
            <h4>
              Stop by someone's desk, say hi in the hallway, and bring back
              water cooler chats. No scheduling required.
            </h4>
          </div>
        </div>

        {/* <div className="contentremote">
          <h2>Bring your remote team closer together</h2>
          <h4>
            Communicate, collaborate, and feel more connected in a persistent
            space that reflects your unique team culture.
          </h4>
          <div className="remote">
            <img
              style={{ width: "563px" }}
              src={remote}
              alt="Description of the image"
            />
          </div>
        </div> */}
        <div className="contentremote">
          <div className="left-side">
            <h2>Bring your remote team closer together</h2>
            <h4>
              Communicate, collaborate, and feel more connected in a persistent
              space that reflects your unique team culture.
            </h4>
          </div>
          <div className="right-side">
            <img
              style={{ width: "563px" }}
              src={remote}
              alt="Description of the image"
            />
          </div>
        </div>

        <div>
          <h1>Build a culture your remote team loves</h1>
          <button>Register Free</button>
          <button>Try Now</button>
        </div>
      </main>
      <footer>&copy; {new Date().getFullYear()} Pyramidon</footer>
    </div>
  );
};

export default Home2;
