import { useEffect, useRef, useState } from "react";

export default function useSnackBar() {
  const [viewText, setViewText] = useState<string>("");
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setViewText(viewText);
    timer.current = setTimeout(() => {
      setViewText("");
    }, 3000);
  }, [viewText]);

  return { viewText, setViewText };
}
