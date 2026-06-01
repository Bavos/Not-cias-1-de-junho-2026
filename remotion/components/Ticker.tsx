import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors, newsSections} from '../data/newsData';

const tickerText = newsSections
  .map((section) => `${section.topic}: ${section.headline}`)
  .join('   •   ');

export const Ticker: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const translateX = interpolate(frame, [0, durationInFrames], [1080, -3600], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 96,
        height: 72,
        overflow: 'hidden',
        background: `linear-gradient(90deg, ${colors.alert}, ${colors.blue})`,
        borderTop: '2px solid rgba(255,255,255,0.35)',
        borderBottom: '2px solid rgba(255,255,255,0.25)',
        zIndex: 15,
      }}
    >
      <div
        style={{
          transform: `translateX(${translateX}px)`,
          whiteSpace: 'nowrap',
          color: colors.white,
          fontSize: 32,
          fontWeight: 900,
          lineHeight: '72px',
          letterSpacing: 0.6,
          textTransform: 'uppercase',
        }}
      >
        {tickerText}   •   {tickerText}
      </div>
    </div>
  );
};
