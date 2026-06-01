import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {NewsSection} from '../data/newsData';
import {TopicBadge} from './TopicBadge';

type Props = {
  section: NewsSection;
};

export const NewsCard: React.FC<Props> = ({section}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const startFrame = section.start * fps;
  const localFrame = frame - startFrame;
  const slide = interpolate(localFrame, [0, 10, section.duration * fps - 8, section.duration * fps], [90, 0, 0, -70], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scale = interpolate(localFrame, [0, 9, 18], [0.92, 1.04, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(localFrame, [0, 8, section.duration * fps - 8, section.duration * fps], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${slide}px) scale(${scale})`,
        position: 'absolute',
        inset: '240px 54px 260px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 34,
      }}
    >
      <TopicBadge topic={section.topic} accent={section.accent} emoji={section.emoji} />
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: 760,
          padding: '58px 48px',
          borderRadius: 54,
          background: `linear-gradient(145deg, rgba(255,255,255,0.13), rgba(255,255,255,0.045)), radial-gradient(circle at 15% 0%, ${section.accent}55, transparent 42%)`,
          border: '2px solid rgba(255,255,255,0.22)',
          boxShadow: '0 32px 90px rgba(0,0,0,0.48)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -110,
            width: 320,
            height: 320,
            borderRadius: 999,
            background: `${section.accent}33`,
            filter: 'blur(12px)',
          }}
        />
        <div
          style={{
            color: section.accent,
            fontSize: 76,
            fontWeight: 1000,
            lineHeight: 1.02,
            textTransform: 'uppercase',
            letterSpacing: -2,
            textShadow: `0 0 34px ${section.accent}55`,
          }}
        >
          {section.headline}
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 28, marginTop: 48}}>
          {section.bullets.map((bullet, index) => {
            const bulletOpacity = interpolate(localFrame, [12 + index * 6, 22 + index * 6], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const bulletX = interpolate(localFrame, [12 + index * 6, 22 + index * 6], [48, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });

            return (
              <div
                key={bullet}
                style={{
                  opacity: bulletOpacity,
                  transform: `translateX(${bulletX}px)`,
                  display: 'flex',
                  gap: 18,
                  alignItems: 'flex-start',
                  color: '#FFFFFF',
                  fontSize: 40,
                  fontWeight: 800,
                  lineHeight: 1.15,
                }}
              >
                <span style={{color: section.accent}}>●</span>
                <span>{bullet}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
