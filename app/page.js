"use client";

import {
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("due");
  const [details, setdetails] = useState("");

  const [tasks, setTasks] = useState([
    {
      title: "Dine out",
      details: "Find if any restrurant serves that potato dish",
      description: "Pending",
      date: new Date().toLocaleDateString(),
    },
  ]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.length && !description.length && !details.length) {
      toast.error("Inko to aata hi nahi hai!  🎙️", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const data = {
      title,
      description,
      details,
      date: new Date().toLocaleDateString(),
    };

    setTasks((tasks) => [...tasks, data]);
    setTitle("");
    setdetails("");
    setDescription("due");

    toast.success("Task added ✅", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((elem, idx) => idx !== id));
  };

  const renderTasks = tasks.map((elem, idx) => {
    return (
      <Grid item md={6} xs={12} key={idx}>
        <Paper elevation={4} sx={{ p: 2 }}>
          <Typography variant="h5" component="h2">
            {elem.title}
          </Typography>
          <Typography variant="h7" component="h5">
            {elem.details}
          </Typography>
          <Typography variant="h7" component="h5">
            {elem.description}
          </Typography>
          <Grid container spacing={2} justifyContent={"flex-end"}>
            <Grid item>
              <Tooltip title="edit">
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Delete" onClick={() => handleDelete(idx)}>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Container maxWidth={"xl"} sx={{ mt: 3.5, pb: 5 }}>
        <Paper sx={{ p: 4, pt: 0, mb: 5 }}>
          <Typography sx={{ py: 3 }} variant="h3" component={"h2"}>
            Add Tasks
          </Typography>
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
                  minRows = {15}
                  // rows={10}
                  id="title"
                  label="Task Title"
                  // autoFocus
                  value={details}
                  onChange={(e) => setdetails(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Description
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={description}
                    label="Description"
                    onChange={(e) => setDescription(e.target.value)}
                  >
                    <MenuItem value={"due"}>Due</MenuItem>
                    <MenuItem value={"pending"}>Pending</MenuItem>
                    <MenuItem value={"completed"}>Completed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} mt={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ p: 2 }}
                >
                  Add Task
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
        <Paper sx={{ p: 4, pt: 4, pb: 1 }}>
          <Typography variant="h4" component={"h2"} mb={3}>
            Your Tasks
          </Typography>
          <Grid container spacing={2} mb={4}>
            {renderTasks}
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default page;
