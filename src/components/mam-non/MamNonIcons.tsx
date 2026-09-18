import React from 'react';

export type MamNonIconName =
  | 'sprout'
  | 'calendar'
  | 'calendar-check'
  | 'shield'
  | 'headset'
  | 'settings'
  | 'phone'
  | 'gift'
  | 'rocket'
  | 'play'
  | 'coins'
  | 'child'
  | 'send'
  | 'chart'
  | 'graduation'
  | 'users'
  | 'heart'
  | 'backpack'
  | 'sun'
  | 'home'
  | 'school'
  | 'coffee'
  | 'monitor'
  | 'laptop'
  | 'chat'
  | 'mail'
  | 'grid'
  | 'file'
  | 'touch';

const iconElements: Record<MamNonIconName, React.ReactNode> = {
  sprout: (
    <>
      <path d="M12 21v-9M12 15C5 16 2 12 3 7c6-1 9 3 9 8ZM12 12c0-6 3-10 10-10 0 6-3 10-10 10Z" />
      <path d="m7 11 5 4m5-9-5 6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="17" rx="3" />
      <path d="M7 2v6m10-6v6M3 11h18m-14 4h1m4 0h1m4 0h1M7 18h1m4 0h1" />
    </>
  ),
  'calendar-check': (
    <>
      <rect x="3" y="5" width="18" height="17" rx="3" />
      <path d="M7 2v6m10-6v6M3 11h18m-13 5 3 3 5-5" />
    </>
  ),
  shield: (
    <>
      <path d="m12 2 9 4v6c0 5-5 8-9 10-4-2-9-5-9-10V6l9-4Z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  headset: (
    <>
      <path d="M3 14v-3a9 9 0 0 1 18 0v3M21 17v2c0 2-3 3-7 3" />
      <rect x="2" y="11" width="4" height="8" rx="2" />
      <rect x="18" y="11" width="4" height="8" rx="2" />
      <path d="M11 22h3" />
    </>
  ),
  settings: (
    <>
      <path d="m10 2-.8 3-2 .9-2.8-.7-2 3.6 2 2.2v2l-2 2.2 2 3.6 2.8-.7 2 .9.8 3h4l.8-3 2-.9 2.8.7 2-3.6-2-2.2v-2l2-2.2-2-3.6-2.8.7-2-.9L14 2Z" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  phone: (
    <path d="m8 3 2 5-3 2c1 3 4 6 7 7l2-3 5 2v4c0 1-1 2-2 2C9 22 2 15 2 5c0-1 1-2 2-2Z" />
  ),
  gift: (
    <>
      <rect x="3" y="10" width="18" height="11" rx="1" />
      <path d="M2 6h20v4H2zM12 6v15" />
      <path d="M12 6C4 8 4 0 8 2c2 0 4 4 4 4Zm0 0c8 2 8-6 4-4-2 0-4 4-4 4Z" />
    </>
  ),
  rocket: (
    <>
      <path d="M9 15c1-6 6-11 13-13 0 7-4 13-11 15l-2-2Z" />
      <circle cx="16" cy="8" r="2" />
      <path d="m8 11-4 1-2 5 6-1m5 0-1 6 5-2 1-5M6 18l-3 3m3-5-4 4m6 0-3 3" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8 6 4-6 4Z" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v4c0 4 16 4 16 0V5M4 10v4c0 4 16 4 16 0v-4M4 15v4c0 4 16 4 16 0v-4" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 13h.1m7.9 0h.1M9 16q3 3 6 0M5 9c3 0 6-2 7-5 2 3 4 4 7 4M3 11C0 8 4 4 6 6m15 5c3-3-1-7-3-5" />
    </>
  ),
  send: (
    <path d="M22 2 9 15M22 2l-7 20-6-7-7-6 20-7ZM9 15v6l4-4" />
  ),
  chart: (
    <>
      <rect x="3" y="13" width="4" height="9" rx="1" />
      <rect x="10" y="8" width="4" height="14" rx="1" />
      <rect x="17" y="2" width="4" height="20" rx="1" />
    </>
  ),
  graduation: (
    <path d="m1 8 11-5 11 5-11 5L1 8Zm4 2v7q7 6 14 0v-7m3-1v8" />
  ),
  users: (
    <>
      <circle cx="12" cy="6" r="4" />
      <path d="M5 22v-4a7 7 0 0 1 14 0v4ZM4 3a3 3 0 0 0 0 6M1 19v-5a4 4 0 0 1 3-4M20 3a3 3 0 0 1 0 6m3 10v-5a4 4 0 0 0-3-4" />
    </>
  ),
  heart: (
    <path d="M12 21C-6 10 3-4 12 5c9-9 18 5 0 16Z" />
  ),
  backpack: (
    <>
      <rect x="5" y="6" width="14" height="16" rx="4" />
      <path d="M9 6V4a3 3 0 0 1 6 0v2M5 10H3v9h2m14-9h2v9h-2M8 15h8v5H8zm1-6v2m6-2v2" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2" />
    </>
  ),
  home: (
    <path d="m2 11 10-9 10 9M5 9v13h5v-8h4v8h5V9" />
  ),
  school: (
    <>
      <path d="M8 22V8l4-4 4 4v14M2 22V12l6-4m14 14V12l-6-4M1 22h22M10 22v-6h4v6M12 4V1h5l-1 2h-4" />
      <circle cx="12" cy="10" r="1" />
      <path d="M4 14h1m-1 4h1m14-4h1m-1 4h1" />
    </>
  ),
  coffee: (
    <>
      <path d="M3 8h14v7a7 7 0 0 1-14 0V8Zm14 1h2a3 3 0 0 1 0 6h-2M2 22h18M6 2v3m4-4v4m4-3v3" />
    </>
  ),
  monitor: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="1" />
      <path d="M8 22h8m-4-5v5" />
    </>
  ),
  laptop: (
    <path d="M5 3h14v14H5zM2 21h20l-3-4H5l-3 4Z" />
  ),
  chat: (
    <>
      <path d="M21 11a9 9 0 0 1-13 8l-6 3 2-6A9 9 0 1 1 21 11Z" />
      <path d="M8 11h.1m4 0h.1m4 0h.1" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="1" />
      <path d="m2 5 10 8L22 5" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="3" />
      <rect x="14" y="3" width="7" height="7" rx="3" />
      <rect x="3" y="14" width="7" height="7" rx="3" />
      <rect x="14" y="14" width="7" height="7" rx="3" />
    </>
  ),
  file: (
    <path d="M4 2h11l5 5v15H4V2Zm11 0v6h5M8 12h8m-8 4h8" />
  ),
  touch: (
    <path d="M9 13V5a2 2 0 0 1 4 0v7l4-1 4 3-2 8H9l-6-8a2 2 0 0 1 3-2l3 3M6 3 4 1m12 2 2-2M3 7H1m17 0h3" />
  ),
};

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: MamNonIconName | string;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = '',
  style,
  ...props
}) => {
  const content = iconElements[name as MamNonIconName];

  if (!content) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[MamNonIcons] Unknown icon name: "${name}"`);
    }
    return null;
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className ? `icon ${className}` : 'icon'}
      style={style}
      {...props}
    >
      {content}
    </svg>
  );
};

export interface WavesProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
  style?: React.CSSProperties;
}

export const Waves: React.FC<WavesProps> = ({
  className = '',
  style,
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 1672 190"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      style={style}
      {...props}
    >
      <path
        fill="#eff5dc"
        d="M0 26C80 37 95 112 183 99S333 30 445 64 521 116 630 91 719 22 837 63 1000 136 1101 97 1224 41 1330 82 1523 146 1672 58V190H0Z"
      />
      <path
        fill="#dcefd7"
        d="M0 3C92 32 89 151 232 149S439 91 555 130 670 194 807 148 952 73 1090 107 1208 163 1324 123 1553 53 1672 103V190H0Z"
      />
      <path
        fill="#b8dfbd"
        opacity=".8"
        d="M0 107C127 80 127 200 288 185S475 131 605 162 758 214 874 171 1052 100 1170 137 1430 210 1672 118V190H0Z"
      />
      <path
        fill="#8bccaa"
        opacity=".35"
        d="M0 127C190 97 176 202 331 183S516 143 684 190H0Z"
      />
    </svg>
  );
};
