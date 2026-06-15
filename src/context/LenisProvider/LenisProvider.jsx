import { useEffect } from "react";
import Lenis from "lenis";

const LenisProvider = ({ children }) => {
    useEffect(() => {

      const lenis = new Lenis();
      
      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      
      requestAnimationFrame(raf);
      return () => lenis.destroy();

    }, []);

    return children;
};

export default LenisProvider;