import {useCurrentFrame, useVideoConfig} from 'remotion';

export const useSceneProgress = (startFrame: number, durationFrames: number) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const sceneFrame = frame - startFrame;

  return {
    frame,
    sceneFrame,
    durationInFrames,
    progress: Math.min(1, Math.max(0, sceneFrame / durationFrames)),
    isActive: sceneFrame >= 0 && sceneFrame <= durationFrames,
  };
};
