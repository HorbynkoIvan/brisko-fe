/** @jsxImportSource @emotion/react */
// import React from "react";
// import { css } from "@emotion/react";

import { Box, Container, IconButton } from "@mui/material";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { ReactNode } from "react";

interface Props {
  url: string;
  children: ReactNode;
}

export const SectionBackground = ({ url, children }: Props) => (
  <Box
    component="section"
    sx={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: "80vh",
      minHeight: 500,
      maxHeight: 1300,
    }}
  >
    <Container
      sx={{
        mt: 4,
        mb: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${url})`,
          backgroundColor: "#7fc7d9", // Average color of the background image.
          backgroundPosition: "center",
          zIndex: -2,
        }}
      />
      <IconButton
        aria-label="arrow down"
        sx={{ position: "absolute", bottom: 32 }}
        color="secondary"
      >
        <ArrowDownwardRoundedIcon sx={{ fontSize: "40px" }} />
      </IconButton>
    </Container>
  </Box>
);
