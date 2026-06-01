import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors, hashtags} from '../data/newsData';

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const local = frame;
  const y = interpolate(local, [12, 28], [90, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(local, [12, 24], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: 54,
        right: 54,
        bottom: 184,
        opacity,
        transform: `translateY(${y}px)`,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 13,
        zIndex: 30,
      }}
    >
      {hashtags.map((tag, index) => (
        <span
          key={tag}
          style={{
            padding: '12px 17px',
            borderRadius: 18,
            background: index % 2 === 0 ? `${colors.blue}33` : `${colors.yellow}2D`,
            color: colors.white,
            fontSize: 25,
            fontWeight: 900,
            border: '1px solid rgba(255,255,255,0.22)',
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
