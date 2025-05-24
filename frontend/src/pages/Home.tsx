import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Winner from "/winner.svg";

const features = [
  {
    icon: <StarIcon fontSize="large" color="primary" />,
    title: "Elite Competitions",
    description:
      "Challenge yourself with curated tournaments against top talent.",
  },
  {
    icon: <EmojiEventsIcon fontSize="large" color="secondary" />,
    title: "Real Rewards",
    description: "Earn badges, prizes, and global recognition.",
  },
  {
    icon: <CelebrationIcon fontSize="large" color="action" />,
    title: "Champion’s Hall",
    description: "Get featured among legends and inspire others.",
  },
];

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #eef2ff, #ffffff)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 8 }}
        >
          <Stack spacing={2} flex={1}>
            <Typography variant="h3" fontWeight={700} color="primary">
              Enter the Arena of Champions
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Join our elite platform where your skills are tested and victories
              are celebrated.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<RocketLaunchIcon />}
              onClick={() => (window.location.href = "/dashboard")}
              sx={{ borderRadius: 2, py: 1.5, mt: 2 }}
            >
              Get Started
            </Button>
          </Stack>
          <Box
            component="img"
            src={Winner}
            alt="Winner"
            sx={{ width: { xs: "100%", md: "50%" }, borderRadius: 2 }}
          />
        </Stack>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={600}
          color="primary"
          sx={{ mb: 4 }}
        >
          Why Join Us?
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="center"
        >
          {features.map((feature) => (
            <Card
              key={feature.title}
              elevation={3}
              sx={{
                flex: 1,
                borderRadius: 3,
                textAlign: "center",
                p: 3,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                {feature.icon}
                <Typography variant="h6" fontWeight={700} sx={{ mt: 1 }}>
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
