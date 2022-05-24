/** @jsxImportSource @emotion/react */
// import React from "react";
// import { css } from "@emotion/react";

import { SectionBackground } from "../../common/components";

import { ShowcaseContent } from "./components/ShowcaseContent";

const cars = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1511787532829-ff2eb827cf4c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1558486821-98eb591961e6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2918",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1592461051628-2ae171481b82?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1572865758723-e73f58a675fb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1564233859784-ed4d28bd9cc3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474",
  },
  {
    id: 6,
    url: "",
  },
];

export const Showcase = () => (
  <SectionBackground url={cars[4].url}>
    <ShowcaseContent />
  </SectionBackground>
);
