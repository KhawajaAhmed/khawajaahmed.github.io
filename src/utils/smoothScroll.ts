/**
 * Smooth scroll utility for navigating between sections
 * Uses requestAnimationFrame for better performance
 */

export const smoothScrollTo = (targetId: string): void => {
  // Remove the # from the targetId
  const id = targetId.startsWith('#') ? targetId.substring(1) : targetId;
  const targetElement = document.getElementById(id);
  
  if (!targetElement) return;
  
  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  
  // Adjust this value to control the scroll speed (lower = faster)
  const duration = 800;
  let startTime: number | null = null;
  
  const animateScroll = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Easing function for smoother acceleration/deceleration
    const easeInOutQuad = (t: number): number => {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };
    
    window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };
  
  // Cancel any ongoing scroll animations
  window.cancelAnimationFrame(0);
  requestAnimationFrame(animateScroll);
};
