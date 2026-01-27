import { GET_HELP_URL, USER_GUIDE_URL, PLATFORM_GUIDE_URL } from "./urls";

export const MENUBAR_ITEMS = [
  {
    label: "Try Out Platform",
    href: PLATFORM_GUIDE_URL,
    isNew: true,
  },
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
  // {
  //   label: "Bounty Program",
  //   href: REWARD_BOUNTY_URL,
  //   highlight: true,
  // },
];
