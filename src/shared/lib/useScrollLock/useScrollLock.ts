import { useEffect } from "react";
import { useLenis } from "lenis/react";

export const useScrollLock = (isLock: boolean) => {

  const lenisHook = useLenis();

  useEffect(() => {
    if (!lenisHook) return;

    if (isLock) {
      lenisHook.stop();
      document.documentElement.classList.add('is-lock');
    } else {
      lenisHook.start();
    }

    return () => {
      document.documentElement.classList.remove('is-lock');
    }


  }, [lenisHook, isLock]);
}