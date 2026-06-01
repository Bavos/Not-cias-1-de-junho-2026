import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors} from '../data/newsData';

export const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const width = interpolate(frame, [0, durationInFrames - 1], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: 54,
        right: 54,
        bottom: 60,
        height: 18,
        borderRadius: 999,
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.14)',
      }}
    >
      <div
        style={{
          width: `${width}%`,
          height: '100%',
          borderRadius: 999,
          background: `linear-gradient(90deg, ${colors.alert}, ${colors.yellow}, ${colors.blue})`,
          boxShadow: `0 0 28px ${colors.blue}`,
        }}
      />
    </div>
  );
};
