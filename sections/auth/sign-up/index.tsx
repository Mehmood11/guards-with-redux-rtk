"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSignupMutation } from "@/services/auth/auth-api";
import toast from "react-hot-toast";

export default function SignUpSection() {
  //   const router = useRouter();
  const [signUp] = useSignupMutation();
  const [user, setUser] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
    try {
      const res = await signUp(user).unwrap();
      toast.success(res.message || "Signed Up Successfully");
    } catch (error) {
      toast.error("Error");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main", width: 60, height: 60 }}>
          <LockOutlinedIcon sx={{ color: "text.primary" }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="first_name"
            label="First Name"
            name="first_name"
            autoComplete="first_name"
            autoFocus
            value={user.first_name}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="last_name"
            label="Last Name"
            name="last_name"
            autoComplete="last_name"
            autoFocus
            value={user.last_name}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={user.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={user.password}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password_confirmation"
            label="password_confirmation"
            type="password"
            id="password_confirmation"
            autoComplete="password_confirmation"
            value={user.password_confirmation}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign UP
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/sign-up">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link href="/sign-up">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}