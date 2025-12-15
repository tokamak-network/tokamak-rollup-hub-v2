import { GET_HELP_URL, USER_GUIDE_URL, REWARD_BOUNTY_URL } from "./urls";

export const MENUBAR_ITEMS = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Discover",
    href: "/discover",
  },
  {
    label: "User Guide",
    href: USER_GUIDE_URL,
  },
  {
    label: "Get Help",
    href: GET_HELP_URL,
  },
  {
    label: "Bounty Program",
    href: REWARD_BOUNTY_URL,
    highlight: true,
  },
];
