/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Call } from "@mui/icons-material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";

import { LanguagePopover } from "../../common/components";

export const Header = () => (
  <>
    <AppBar position="fixed">
      <Container disableGutters>
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6" component="h1">
                Logo
              </Typography>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={1}>
                <Link
                  href="tel:+380500000000"
                  color="inherit"
                  underline="hover"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Call fontSize="small" sx={{ marginRight: "6px" }} />
                  +372 6-214-290
                </Link>
                <IconButton aria-label="facebook" color="secondary">
                  <FacebookRoundedIcon />
                </IconButton>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={1}>
                <IconButton
                  aria-label="fingerprint"
                  color="secondary"
                  sx={{ fontSize: "16px" }}
                >
                  EE
                </IconButton>
                <IconButton
                  aria-label="fingerprint"
                  color="secondary"
                  sx={{ fontSize: "16px" }}
                >
                  EN
                </IconButton>
                <IconButton
                  aria-label="fingerprint"
                  color="secondary"
                  sx={{ fontSize: "16px" }}
                >
                  RU
                </IconButton>
              </Stack>
            </Grid>

            <Grid item>
              <Stack
                direction="row"
                alignItems="center"
                spacing={{ xs: 0.5, sm: 1.5 }}
              >
                <LanguagePopover />
                <Button
                  variant="text"
                  color="info"
                  startIcon={<GroupsRoundedIcon />}
                >
                  Join Us
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  </>
);
