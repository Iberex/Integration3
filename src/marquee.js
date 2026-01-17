import { gsap } from "gsap";

// Marquee effect for vertical-scroll-text
export function startVerticalMarquee() {
  const containers = document.querySelectorAll('.vertical-scroll-text');
  containers.forEach((el) => {
    // Reset transform for accessibility (in case of reduced motion)
    el.style.transform = '';
    // Only animate if user does not prefer reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.to(el, {
        y: "-100%",
        repeat: -1,
        duration: 10,
        ease: "linear",
        modifiers: {
          y: (y) => `translateY(${y})`
        }
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', startVerticalMarquee);
