/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import {
  Button,
  // Link,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import Layout from "../components/Layout";
import useStyles from "../utils/styles";
// import NextLink from "next/link";
import { useRouter } from "next/router";
import { Store } from "../utils/store";
import { Controller, useForm } from "react-hook-form";
import CheckoutWizard from "../components/CheckoutWizard";

export default function Shipping() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const router = useRouter();
  // const { redirect } = router.query;
  const { state, dispatch } = useContext(Store);
  const { userInfo, cart: {shippingAddress} } = state;
  useEffect(() => {
    if (!userInfo) {
      router.push("/login?redirect=/shipping");
    }
    setValue('fullName', shippingAddress.fullName)
    setValue('address', shippingAddress.address)
    setValue('city', shippingAddress.city)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const classes = useStyles();
  const submitHandler = ({ fullName, address, city}) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, address, city},
    });
    Cookies.set("shippingAddress", {
      fullName,
      address,
      city,
    });
    router.push("/payment");
  };
  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1}/>
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <Typography component="h1" variant="h1">
          Shipping Address
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 3,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Full Name"
                  error={Boolean(errors.fullName)}
                  helperText={
                    errors.fullName
                      ? errors.fullName.type === "minLength"
                        ? "Full Name  must be longer than 3"
                        : "Full Name is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 3,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="address"
                  label="Address"
                  error={Boolean(errors.address)}
                  helperText={
                    errors.address
                      ? errors.address.type === "minLength"
                        ? "Address  must be longer than 3"
                        : "Address is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 3,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="city"
                  label="City"
                  error={Boolean(errors.city)}
                  helperText={
                    errors.city
                      ? errors.city.type === "minLength"
                        ? "City  must be longer than 3"
                        : "City is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>

          <ListItem>
            <Button variant="contained" type="submit" color="primary" fullWidth>
              Continue
            </Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
