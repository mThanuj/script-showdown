import Button from "@mui/material/Button";
import { Google } from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoginLogo from "../../public/login.svg";

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/api/auth/login/google";
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <Paper
        elevation={6}
        sx={{
          width: "75%",
          height: "75%",
          display: "flex",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "50%",
            bgcolor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 4,
          }}
        >
          <img
            src={LoginLogo}
            alt="Login Logo"
            className="max-h-full max-w-full object-contain"
          />
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            p: 6,
            bgcolor: "background.default",
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="text.primary">
            Welcome Back
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Sign in to continue
          </Typography>
          <Button
            onClick={handleGoogleLogin}
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<Google />}
            sx={{
              px: 5,
              py: 1.5,
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
              borderRadius: "10px",
            }}
          >
            Login with Google
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default Login;
