import { Fab, useScrollTrigger } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { animateScroll as scroll } from "react-scroll";

import { useStyles } from "../theme";

type Props = {
  toggleTheme: any;
  type: string | any;
};

const ToggleThemeButton = ({ toggleTheme, type }: Props) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleScrollTop = () => {
    scroll.scrollToTop();
  };

  const transition = (delay = 0.5) => ({
    type: "spring",
    stiffness: 200,
    damping: 30,
    duration: 5,
    delay,
    ease: "easeOut",
  });

  const slideOutVariants = {
    visible: (trigger: boolean) => ({
      x: trigger ? -60 : 0,
      opacity: trigger ? 1 : 0,
      transition,
    }),
  };

  return (
    <AnimatePresence>
      <div className={classes.themeBtnAbsolute}>
        <motion.div
          custom={trigger}
          animate="visible"
          variants={slideOutVariants}
          style={{
            position: "absolute",
          }}
        >
          <Fab
            onClick={handleScrollTop}
            sx={{
              color: "#fff",
              backgroundColor: "#3636ac",
              backgroundImage:
                "linear-gradient(129deg, #3636ac 0%, #430745 100%)",
            }}
            size="medium"
          >
            <ArrowUpwardIcon />
          </Fab>
        </motion.div>
        <Fab
          onClick={toggleTheme}
          sx={{
            background:
              type === "light"
                ? "linear-gradient(90deg, #d53369 0%, #daae51 100%)"
                : "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
            color: "#fff",
            "&:hover": {
              background:
                type === "light"
                  ? "linear-gradient(90deg, #c92a5f 0%, #b9913b 100%)"
                  : "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
            },
          }}
          size="medium"
        >
          {type === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </Fab>
      </div>
    </AnimatePresence>
  );
};

export default ToggleThemeButton;