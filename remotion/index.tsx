import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {compositionConfig} from './compositions/BrazilWorldNews35s';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id={compositionConfig.id}
      component={compositionConfig.component}
      durationInFrames={compositionConfig.durationInFrames}
      fps={compositionConfig.fps}
      width={compositionConfig.width}
      height={compositionConfig.height}
      defaultProps={{}}
    />
  );
};

registerRoot(RemotionRoot);
