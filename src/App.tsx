import { useReducedMotion } from "./hooks/useReducedMotion";
import { useEffect, useRef, useState } from "react";
import { MotionConfig } from "framer-motion";
import { JourneyScene } from "./components/scenes/JourneyScene";
import { AudioControl, type MusicHandle } from "./components/ui/AudioControl";
import { CeremonyScenes } from "./components/scenes/CeremonyScenes";
import { EnvelopeScene } from "./components/scenes/EnvelopeScene";
import { ScratchRevealScene } from "./components/scenes/ScratchRevealScene";
import { ClosingScene } from "./components/scenes/ClosingScene";
import { FamilySignOffScene } from "./components/scenes/FamilySignOffScene";
import "./styles/globals.css";
function DownloadPDF() {
  return (
    <div className="pdf-dock">
      <a
        className="pdf-preview"
        href="/Sahil-Keena-Wedding-Card.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Preview the wedding invitation card"
        title="Preview the card"
      >
        <img
          src="/images/card-preview.jpg"
          alt="First page of the printed wedding invitation card"
          width={537}
          height={760}
          loading="lazy"
          decoding="async"
        />
      </a>
      <a
        className="pdf-download"
        href="/Sahil-Keena-Wedding-Card.pdf"
        download="Sahil-Keena-Wedding-Card.pdf"
        aria-label="Download the wedding invitation card as a PDF"
      >
        <span>📄 Download PDF</span>
     
      </a>
    </div>
  );
}
function App() {
  const reduced = useReducedMotion();
  const music = useRef<MusicHandle>(null);
  const [opened, setOpened] = useState(false);
  const [dateRevealed, setDateRevealed] = useState(false);
  const thread = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Browsers with scroll-driven animations draw the reading thread in CSS. Elsewhere
    // (iPhones before iOS 26) it is updated ten times a second and glides between
    // updates, instead of running script on every scrolled frame.
    if (CSS.supports?.("animation-timeline: scroll()")) return;
    const element = thread.current;
    if (!element) return;
    let timer = 0;
    const update = () => {
      timer = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      element.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    const onScroll = () => {
      if (!timer) timer = window.setTimeout(update, 100);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);
  return (
    <MotionConfig reducedMotion={reduced ? "always" : "never"}>
      <div ref={thread} className="reading-thread" />
      <main>
        <EnvelopeScene onSealTap={() => music.current?.startFromSeal()} onOpened={() => setOpened(true)}>
          <ScratchRevealScene
            revealed={dateRevealed}
            onReveal={() => setDateRevealed(true)}
          />
        </EnvelopeScene>
        <div
          inert={!opened}
          style={{ visibility: opened ? "visible" : "hidden" }}
        >
          <JourneyScene />
          <CeremonyScenes />
          <ClosingScene />
          <FamilySignOffScene />
          <DownloadPDF />
        </div>
      </main>
      <AudioControl ref={music} />
    </MotionConfig>
  );
}
export default App;
