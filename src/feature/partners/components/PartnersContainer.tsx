import { ReactNode } from "react";
import { Box, Container, Typography } from "@mui/material";

interface Props {
  children: ReactNode;
}

export const PartnersContainer = ({ children }: Props) => (
  <>
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "secondary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h2" sx={{ mb: 14 }}>
          Partners
        </Typography>
        {children}
      </Container>
    </Box>
  </>
);
