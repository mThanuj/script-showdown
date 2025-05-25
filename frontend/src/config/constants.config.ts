import { Code, GolfCourseRounded, SportsGolf } from "@mui/icons-material";

export const modes = [
  {
    icon: Code,
    name: "Compete in Algorithms",
    description: "1v1 match in any Language—test your algorithms live.",
    href: "/gameplay?mode=1",
  },
  {
    icon: GolfCourseRounded,
    name: "Code Golf",
    description: "Compete to solve challenges with minimal code.",
    href: "/gameplay?mode=2",
  },
  {
    icon: SportsGolf,
    name: "Debug Duel",
    description: "Find bugs fastest in head-to-head competitions.",
    href: "/gameplay?mode=3",
  },
];
