/** @jsxImportSource @emotion/react */
// import React from "react";
// import { css } from "@emotion/react";

import { Button, Typography } from "@mui/material";

export const ShowcaseContent = () => (
  <>
    <Typography color="secondary" align="center" variant="h2">
      Work in Takso
    </Typography>
    <Typography
      color="secondary"
      align="center"
      variant="h5"
      sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
      deleniti enim ex facere hic minima nobis quasi sunt, tempora tenetur.
    </Typography>
    <Button
      color="secondary"
      variant="contained"
      size="large"
      sx={{ minWidth: 200 }}
    >
      Join Us
    </Button>
    <Typography variant="body2" color="secondary" sx={{ mt: 2 }}>
      Discover the experience
    </Typography>
  </>
);
