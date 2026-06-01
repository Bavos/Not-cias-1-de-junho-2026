import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../data/newsData';

export const CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const local = frame;
  const scale = interpolate(local, [0, 9, 16], [0.86, 1.06, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(local, [0, 8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        transform: `scale(${scale})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 58,
      }}
    >
      <div
        style={{
          padding: '62px 46px',
          borderRadius: 58,
          background: `linear-gradient(145deg, rgba(234,67,53,0.24), rgba(66,133,244,0.18)), rgba(255,255,255,0.08)`,
          border: '2px solid rgba(255,255,255,0.26)',
          boxShadow: '0 30px 120px rgba(0,0,0,0.52)',
          textAlign: 'center',
        }}
      >
        <div style={{fontSize: 76, marginBottom: 22}}>📌⚡</div>
        <div
          style={{
            color: colors.white,
            fontSize: 74,
            fontWeight: 1000,
            lineHeight: 1.02,
            letterSpacing: -2.4,
          }}
        >
          Quer o briefing diário em 35 segundos?
        </div>
        <div
          style={{
            marginTop: 32,
            color: 'rgba(255,255,255,0.88)',
            fontSize: 38,
            fontWeight: 800,
            lineHeight: 1.18,
          }}
        >
          Salve, compartilhe e acompanhe as próximas atualizações.
        </div>
      </div>
    </div>
  );
};
