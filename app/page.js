"use client";

import {
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const page = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [age, setAge] = useState(10);
  const [details, setdetails] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      title,
      age,
      details,
      date: new Date().toLocaleDateString(),
    };
    console.log(data);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth={"lg"} sx={{ pt: 12 }}>
        <Paper sx={{ p: 4 }}>
          <form noValidate onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="title"
                  variant="outlined"
                  required
                  fullWidth
                  id="tirle"
                  label="Task Title"
                  autoFocus
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="title"
                  variant="outlined"
                  required
                  fullWidth
                  multiline
                  rows={10}
                  id="title"
                  label="Task Title"
                  autoFocus
                  value={details}
                  onChange={(e) => setdetails(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  name="Status"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={(e) => setAge(e.target.value)}
                  fullWidth
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select> */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default page;
