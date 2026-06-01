import React from 'react';
import {Sequence} from 'remotion';
import {newsSections, FPS} from '../data/newsData';
import {NewsCard} from '../components/NewsCard';

export const NewsBlock: React.FC = () => {
  return (
    <>
      {newsSections.map((section) => (
        <Sequence
          key={section.topic}
          from={section.start * FPS}
          durationInFrames={section.duration * FPS}
        >
          <NewsCard section={{...section, start: 0}} />
        </Sequence>
      ))}
    </>
  );
};
