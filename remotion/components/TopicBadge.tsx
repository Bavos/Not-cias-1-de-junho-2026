import React from 'react';

export const TopicBadge: React.FC<{topic: string; accent: string; emoji?: string}> = ({
  topic,
  accent,
  emoji,
}) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        alignSelf: 'flex-start',
        padding: '13px 22px',
        borderRadius: 999,
        background: `${accent}22`,
        border: `2px solid ${accent}`,
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 900,
        letterSpacing: 0.4,
        textTransform: 'uppercase',
        boxShadow: `0 0 42px ${accent}55`,
      }}
    >
      <span>{emoji}</span>
      <span>{topic}</span>
    </div>
  );
};
