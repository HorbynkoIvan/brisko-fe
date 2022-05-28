import { Grid } from "@mui/material";

import { PartnersBox, PartnersContainer } from "./components";
import { usePartner } from "./hooks";

export const Partners = () => {
  const data = usePartner();

  return (
    <PartnersContainer>
      <Grid container spacing={1}>
        {data.map((partner) => (
          <Grid item md={3} key={partner.id}>
            <PartnersBox
              title={partner.title}
              description={partner.description}
              imgSrc={partner.imgSrc}
            />
          </Grid>
        ))}
      </Grid>
    </PartnersContainer>
  );
};
