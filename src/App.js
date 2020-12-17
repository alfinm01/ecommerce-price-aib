import React from "react"

import "./App.css"
import "fontsource-roboto"
import "./assets/scss/style.scss"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Backdrop from "@material-ui/core/Backdrop"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import InputLabel from "@material-ui/core/InputLabel"
import Typography from "@material-ui/core/Typography"
import FormControl from "@material-ui/core/FormControl"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 227,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 10,
  },
}))

function App() {
  const classes = useStyles()

  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [disabled, setDisabled] = React.useState(true)
  const [sales, setSales] = React.useState(null)
  const [shippingCost, setShippingCost] = React.useState(null)
  const [productCategory, setProductCategory] = React.useState(null)
  const [orderPriority, setOrderPriority] = React.useState(null)

  const handleChangeInput = (event) => {
    if (event.target.name === "sales") {
      setSales(event.target.value)
    } else if (event.target.name === "shippingCost") {
      setShippingCost(event.target.value)
    } else if (event.target.name === "productCategory") {
      setProductCategory(event.target.value)
    } else if (event.target.name === "orderPriority") {
      setOrderPriority(event.target.value)
    }
  }

  const handlePredict = () => {
    alert("Hai sayang")
    setLoading(true)
  }

  React.useEffect(() => {
    async function checkIsNaN() {
      if (
        (sales && Number.isNaN(Number(sales))) ||
        (shippingCost && Number.isNaN(Number(shippingCost)))
      ) {
        setError(true)
      } else {
        setError(false)
      }
    }
    checkIsNaN()
  }, [sales, shippingCost])

  React.useEffect(() => {
    async function checkDisabled() {
      if (
        !error &&
        sales &&
        shippingCost &&
        productCategory &&
        orderPriority &&
        !loading
      ) {
        setDisabled(false)
      } else {
        setDisabled(true)
      }
    }
    checkDisabled()
  }, [error, sales, shippingCost, productCategory, orderPriority, loading])

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
            <Backdrop
              className={classes.backdrop}
              open={loading}
              style={{ backgroundColor: "rgba(0,0,0,0)" }}
            />
            <Grid container spacing={3} justify="center" my={10}>
              <Typography variant="h6" gutterBottom>
                E-commerce Profit Prediction
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                II4042 AI for Business
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                18217017 - 18217029 - 18217038
              </Typography>
              <Grid item xs={12}>
                <TextField
                  name="sales"
                  label="Sales (Rp)"
                  variant="outlined"
                  onChange={handleChangeInput}
                  error={sales && Number.isNaN(Number(sales))}
                  helperText={
                    sales && Number.isNaN(Number(sales)) ? "Input salah" : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="shippingCost"
                  label="Shipping Cost (Rp)"
                  variant="outlined"
                  onChange={handleChangeInput}
                  error={shippingCost && Number.isNaN(Number(shippingCost))}
                  helperText={
                    shippingCost && Number.isNaN(Number(shippingCost))
                      ? "Input salah"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="product-category-selector">
                    Product Category
                  </InputLabel>
                  <Select
                    name="productCategory"
                    labelId="product-category-selector"
                    label="Product Category"
                    onChange={handleChangeInput}
                  >
                    <MenuItem value="1000">Auto & Accessories</MenuItem>
                    <MenuItem value="0100">Electronic</MenuItem>
                    <MenuItem value="0010">Fashion</MenuItem>
                    <MenuItem value="0001">Home & Furniture</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="order-priority-selector">
                    Order Priority
                  </InputLabel>
                  <Select
                    name="orderPriority"
                    labelId="order-priority-selector"
                    label="Order Priority"
                    onChange={handleChangeInput}
                  >
                    <MenuItem value="1000">Critical</MenuItem>
                    <MenuItem value="0100">High</MenuItem>
                    <MenuItem value="0010">Medium</MenuItem>
                    <MenuItem value="0001">Low</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{ textTransform: "none" }}
                  disabled={disabled}
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
