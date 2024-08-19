// import { Contact } from "./contact";
import { Hero } from "./hero";
import { Pages } from "./pages";
import { Support } from "./support";

import "./style.css";

export const IndexContainer = () => {
  return (
    <main className="base-main-container">
      <div className="homepage-container">
        <Hero />
        <Pages />
        <Support />
      </div>
      {/* <Contact /> */}
    </main>
  );
};
