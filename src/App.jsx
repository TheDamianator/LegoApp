import React from "react";
import { Grid } from "@mui/material";
import LegoCard from "./Components/LegoCard";
import AddLegoSet from "./Components/AddLegoSet";

function App() {
  const [legosets, setLegosets] = React.useState([]);

  return (
    <>
      <AddLegoSet setLegosets={setLegosets} />

      <Grid container spacing={2}>
        {legosets.map((legoset) => (
          <Grid item key={legoset.id} xs={12} sm={6} md={4}>
            <LegoCard
              mt={2}
              legoset={legoset}
              index={legosets.findIndex((set) => set.id === legoset.id)}
              legosets={legosets}
              setLegosets={setLegosets}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
