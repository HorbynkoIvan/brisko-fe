import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  imgSrc: string;
  description: string;
}

export const PartnersBox = ({ title, description, imgSrc }: Props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      px: 2,
    }}
  >
    <Box
      component="img"
      src={imgSrc}
      alt="suitcase"
      sx={{
        height: 55,
        my: 4,
      }}
    />
    <Typography variant="h5" align="center">
      {title}
    </Typography>
    <p>{description}</p>
  </Box>
);
