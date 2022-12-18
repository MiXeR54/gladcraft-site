import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

export const SnowFlakes = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? <Snowfall /> : null;
};
