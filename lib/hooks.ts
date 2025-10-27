import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSessionContext } from "@/context/ActiveSessionContext";
import { SectionName } from "@/lib/types";

export function useSectionInView(
  sectionName: SectionName,
  threshold: number = 0.75
) {
  const { ref, inView } = useInView({
    threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSessionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
