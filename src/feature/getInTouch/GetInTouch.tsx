/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FormEvent, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";

export const GetInTouch = () => {
  const [open, setOpen] = useState(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(true);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Container component="section" sx={{ mt: 10, display: "flex" }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "warning.main",
              py: 8,
              px: 3,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 400 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                }}
                align="center"
              >
                // CONTACT US
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                align="center"
                sx={{
                  fontWeight: 700,
                }}
              >
                Get In Touch
              </Typography>

              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <TextField
                    placeholder="Your name"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    sx={{ width: "48%", mt: 2 }}
                  />
                  <TextField
                    placeholder="Your phone"
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                    sx={{ width: "48%", mt: 2 }}
                  />
                </Box>

                <TextField
                  placeholder="Your email"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  sx={{ width: "100%", mt: 2 }}
                />
                <TextField
                  placeholder="Subject"
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                  sx={{ width: "100%", mt: 2 }}
                />
                <TextareaAutosize
                  minRows={3}
                  aria-label="empty textarea"
                  placeholder="Your comment..."
                  css={css`
                    width: 100%;
                    margin-top: 16px;
                    border-radius: 4px;
                  `}
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{ width: "100%", mt: 1 }}
                >
                  Keep me updated
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80"
            alt="call to action"
            sx={{
              position: "absolute",
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        // closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  );
};
