import React from "react";

import { Login } from "components/Forms/Login";

import "./Home.css";

export const Home = () => (
  <main>
    <h1>Home!</h1>
    <div className="hero">
      <Login />
    </div>
    <section>
      <h2>Where does it come from?</h2>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and
        Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
        of ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
        section 1.10.32.
      </p>
    </section>
  </main>
);
