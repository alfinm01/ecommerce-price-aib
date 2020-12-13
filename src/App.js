import React from "react"

import "./App.css"
import "fontsource-roboto"
import "./assets/scss/style.scss"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

function App() {
  const handlePredict = () => {
    alert("Hai sayang")
  }

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r s" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Container>
            <Grid container spacing={3} justify="center" my={10}>
              <Typography variant="h6" gutterBottom>
                E-commerce Product Price Prediction
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                II4042 AI for Business
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                18217017 - 18217029 - 18217038
              </Typography>
              <Grid item xs={12}>
                <TextField label="Param 1" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Param 2" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Param 3" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{ textTransform: "none" }}
                  onClick={handlePredict}
                >
                  Predict
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default App
