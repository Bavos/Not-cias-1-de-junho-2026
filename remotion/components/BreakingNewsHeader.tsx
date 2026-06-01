import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors} from '../data/newsData';

export const BreakingNewsHeader: React.FC<{label?: string}> = ({label = 'AO VIVO • URGENTE'}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const pulse = interpolate(Math.sin((frame / fps) * Math.PI * 4), [-1, 1], [0.72, 1]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 58,
        left: 54,
        right: 54,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 20,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '17px 24px',
          borderRadius: 24,
          background: 'rgba(234,67,53,0.18)',
          border: `2px solid ${colors.alert}`,
          color: colors.white,
          fontSize: 28,
          fontWeight: 900,
          letterSpacing: 1.4,
        }}
      >
        <span
          style={{
            width: 18,
            height: 18,
            borderRadius: 999,
            background: colors.alert,
            opacity: pulse,
            boxShadow: `0 0 24px ${colors.alert}`,
          }}
        />
        {label}
      </div>
      <div
        style={{
          padding: '14px 20px',
          borderRadius: 20,
          background: 'rgba(66,133,244,0.18)',
          color: colors.white,
          fontSize: 24,
          fontWeight: 800,
          border: `2px solid ${colors.blue}`,
        }}
      >
        35s
      </div>
    </div>
  );
};
