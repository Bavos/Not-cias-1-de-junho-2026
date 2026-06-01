import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {BreakingNewsHeader} from '../components/BreakingNewsHeader';
import {ProgressBar} from '../components/ProgressBar';
import {Ticker} from '../components/Ticker';
import {colors, DURATION_FRAMES, FPS} from '../data/newsData';
import {CTA} from '../scenes/CTA';
import {Intro} from '../scenes/Intro';
import {NewsBlock} from '../scenes/NewsBlock';
import {Outro} from '../scenes/Outro';

const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const drift = interpolate(frame, [0, durationInFrames], [0, 220]);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at ${22 + drift / 34}% 12%, ${colors.blue}44, transparent 28%), radial-gradient(circle at 82% 76%, ${colors.alert}38, transparent 32%), linear-gradient(180deg, ${colors.background}, #101827 56%, ${colors.background})`,
        fontFamily: 'Inter, Poppins, Arial, sans-serif',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          transform: `translateY(${drift * 0.35}px)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: -180,
          top: 330,
          width: 620,
          height: 620,
          borderRadius: 999,
          border: `46px solid ${colors.yellow}18`,
          transform: `rotate(${frame * 0.25}deg)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: -130,
          bottom: 280,
          width: 420,
          height: 420,
          borderRadius: 80,
          background: `${colors.green}16`,
          transform: `rotate(${frame * -0.18}deg)`,
        }}
      />
    </AbsoluteFill>
  );
};

export const BrazilWorldNews35s: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: colors.background}}>
      <Background />
      <BreakingNewsHeader />
      <Sequence from={0} durationInFrames={3 * FPS}>
        <Intro />
      </Sequence>
      <NewsBlock />
      <Sequence from={33 * FPS} durationInFrames={2 * FPS}>
        <CTA />
        <Outro />
      </Sequence>
      <Ticker />
      <ProgressBar />
    </AbsoluteFill>
  );
};

export const compositionConfig = {
  id: 'BrazilWorldNews35s',
  component: BrazilWorldNews35s,
  durationInFrames: DURATION_FRAMES,
  fps: FPS,
  width: 1080,
  height: 1920,
};
