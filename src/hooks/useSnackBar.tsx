import { useEffect, useRef, useState } from "react";

export default function useSnackBar() {
  const [viewText, setViewText] = useState<string>("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setViewText(viewText);
    timer.current = setTimeout(() => {
      setViewText("");
    }, 2200);
  }, [viewText]);

  return { viewText, setViewText };
}
