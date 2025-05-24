import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Competition from "/competition.svg";

const features = [
  {
    icon: <StarIcon fontSize="large" color="primary" />,
    title: "Elite Competitions",
    description:
      "Challenge yourself with curated tournaments against top talent.",
    delay: 0.2,
  },
  {
    icon: <EmojiEventsIcon fontSize="large" color="secondary" />,
    title: "Real Rewards",
    description: "Earn badges, prizes, and global recognition.",
    delay: 0.4,
  },
  {
    icon: <CelebrationIcon fontSize="large" color="action" />,
    title: "Champion’s Hall",
    description: "Get featured among legends and inspire others.",
    delay: 0.6,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, ease: "easeOut" },
  }),
};

const Home = () => {
  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #eef2ff, #ffffff)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        {/* Hero Section */}
        <Stack
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 8 }}
        >
          <Stack spacing={2} flex={1}>
            <Typography
              component={motion.h1}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              variant="h3"
              fontWeight={700}
              color="primary"
            >
              Enter the Arena of Champions
            </Typography>
            <Typography
              component={motion.p}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              variant="body1"
              color="text.secondary"
            >
              Join our elite platform where your skills are tested and victories
              are celebrated.
            </Typography>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              variant="contained"
              size="large"
              endIcon={<RocketLaunchIcon />}
              onClick={() => (window.location.href = "/login")}
              sx={{ borderRadius: 2, py: 1.5, mt: 2 }}
            >
              Get Started
            </Button>
          </Stack>
          <Box
            component={motion.img}
            src={Competition}
            alt="Competition"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            sx={{ width: { xs: "100%", md: "50%" }, borderRadius: 2 }}
          />
        </Stack>

        {/* Features Section */}
        <Typography
          component={motion.h2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
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
              component={motion.div}
              custom={feature.delay}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              elevation={3}
              sx={{
                flex: 1,
                borderRadius: 3,
                textAlign: "center",
                p: 3,
                cursor: "default",
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
