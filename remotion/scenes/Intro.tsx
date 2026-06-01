import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors} from '../data/newsData';

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const zoom = spring({frame, fps, config: {damping: 10, stiffness: 150}});
  const subtitleY = interpolate(frame, [12, 24], [70, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const subtitleOpacity = interpolate(frame, [12, 22], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 70,
      }}
    >
      <div
        style={{
          transform: `scale(${0.72 + zoom * 0.28}) rotate(${interpolate(frame, [0, 12], [-2, 0], {extrapolateRight: 'clamp'})}deg)`,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            marginBottom: 34,
            padding: '16px 24px',
            borderRadius: 22,
            background: colors.alert,
            color: colors.white,
            fontSize: 34,
            fontWeight: 1000,
            letterSpacing: 2,
            boxShadow: `0 0 56px ${colors.alert}`,
          }}
        >
          🚨 ALERTA NEWS
        </div>
        <div
          style={{
            color: colors.white,
            fontSize: 116,
            fontWeight: 1000,
            lineHeight: 0.94,
            letterSpacing: -5,
            textTransform: 'uppercase',
            textShadow: `0 0 58px ${colors.blue}`,
          }}
        >
          🚨 BRASIL E<br />MUNDO AGORA
        </div>
        <div
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
            marginTop: 36,
            color: 'rgba(255,255,255,0.9)',
            fontSize: 43,
            fontWeight: 800,
            lineHeight: 1.12,
          }}
        >
          Resumo rápido das principais notícias
        </div>
      </div>
    </div>
  );
};
