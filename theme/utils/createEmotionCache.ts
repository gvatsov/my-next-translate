import createCache from "@emotion/cache";
import { Direction } from "@mui/material";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const createEmotionCache = (direction?: Direction) => {
  if (direction === "rtl") {
    return createCache({
      key: "muirtl",
      prepend: true,
      stylisPlugins: [prefixer, rtlPlugin],
    });
  } else {
    return createCache({
      key: "mui",
      prepend: true,
    });
  }
};

export default createEmotionCache;
