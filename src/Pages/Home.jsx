// import React from "react";

// const Home = () => {
//   return (
//     <div className="home">
//       <header>
//         <h1>Pyramidon</h1>
//       </header>
//       <main>
//         {" "}
//         <h1>Experiencing new way of Interacting</h1>
//         <h4>
//           Create your own virtual world and make your interactions more human
//         </h4>{" "}
//       </main>
//       <footer>&copy; {new Date().getFullYear} My Homepage</footer>
//     </div>
//   );
// };

// export default Home;
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Pyramidon</h1>
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
          <button>Refister Free</button>
          <button>Try Now</button>
        </div>
      </main>
      <footer>&copy; {new Date().getFullYear()} My Homepage</footer>
    </div>
  );
};

export default Home;
