import {interpolate, spring} from 'remotion';

export const secondsToFrames = (seconds: number, fps: number) => Math.round(seconds * fps);

export const clampOpacity = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, start + 8, end - 8, end], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

export const punchScale = (frame: number, fps: number, delay = 0) =>
  spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: {
      damping: 12,
      stiffness: 180,
      mass: 0.8,
    },
  });
