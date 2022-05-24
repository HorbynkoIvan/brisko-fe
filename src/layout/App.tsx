import React from "react";

import { GetInTouch, Header, OurPartners, Showcase } from "../feature";

export const App = () => (
  <>
    <Header />
    <main>
      <Showcase />
      <OurPartners />
      <GetInTouch />
    </main>
  </>
);
