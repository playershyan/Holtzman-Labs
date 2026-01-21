import { useEffect, useState } from 'react';

/**
 * Custom hook for animating number count-ups
 * Based on NerdyStats.tsx pattern
 * Respects prefers-reduced-motion accessibility setting
 *
 * @param target - The final number to count up to
 * @param duration - Animation duration in milliseconds (default: 900ms)
 * @returns The current animated number value
 */
export function useAnimatedNumber(target: number, duration = 900): number {
  const [n, setN] = useState(0);

  useEffect(() => {
    // Check for reduced motion preference (accessibility)
    if (typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target);
      return;
    }

    let start = 0;
    const steps = Math.max(6, Math.floor(duration / 50));
    const increment = Math.max(1, Math.floor(target / steps));
    let mounted = true;

    const tick = () => {
      start += increment;
      if (!mounted) return;
      if (start >= target) {
        setN(target);
        return;
      }
      setN(start);
      setTimeout(tick, 50);
    };

    tick();
    return () => {
      mounted = false;
    };
  }, [target, duration]);

  return n;
}
