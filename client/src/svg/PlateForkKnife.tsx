const PlateForkKnife = () => {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <circle
        cx="60"
        cy="60"
        r="54"
        stroke="rgba(232,120,12,0.2)"
        stroke-width="1.2"
      />
      <circle
        cx="60"
        cy="60"
        r="42"
        stroke="rgba(232,120,12,0.12)"
        stroke-width="1"
        stroke-dasharray="4 3"
      />
      {/* Fork */}
      <line
        x1="50"
        y1="36"
        x2="50"
        y2="84"
        stroke="rgba(232,120,12,0.32)"
        stroke-width="1.3"
        stroke-linecap="round"
      />
      <line
        x1="47"
        y1="36"
        x2="47"
        y2="50"
        stroke="rgba(232,120,12,0.32)"
        stroke-width="1.1"
        stroke-linecap="round"
      />
      <line
        x1="53"
        y1="36"
        x2="53"
        y2="50"
        stroke="rgba(232,120,12,0.32)"
        stroke-width="1.1"
        stroke-linecap="round"
      />
      <path
        d="M47 50 Q50 56 53 50"
        stroke="rgba(232,120,12,0.28)"
        stroke-width="1"
        fill="none"
      />
      {/* Knife */}
      <line
        x1="70"
        y1="36"
        x2="70"
        y2="84"
        stroke="rgba(232,120,12,0.32)"
        stroke-width="1.3"
        stroke-linecap="round"
      />
      <path
        d="M70 36 Q77 44 77 56 Q77 63 70 66"
        stroke="rgba(232,120,12,0.28)"
        stroke-width="1.1"
        fill="none"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default PlateForkKnife;
