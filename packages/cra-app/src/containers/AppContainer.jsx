import React from "react";
import {
  Button,
  View,
  Grid,
  GlobalStyle,
  ThemeProvider,
} from "@monorepo/ui-library";

const AppContainer = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <View>
        <Grid container>
          <Grid item sm={6} lg={6}>
            BLA
          </Grid>
          <Grid item sm={6} lg={6}>
            BLA
          </Grid>
        </Grid>
      </View>
    </ThemeProvider>
  );
};

export default AppContainer;
