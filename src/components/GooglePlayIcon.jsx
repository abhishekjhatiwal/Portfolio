import React from 'react';

export default function GooglePlayIcon({ size = 20, className = '', monochrome = false }) {
  if (monochrome) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-.989V2.803c.174-.384.385-.724.61-.989zm13.571 6.799L4.856 1.5c-.419-.241-.856-.35-1.247-.314L13.792 12l3.388-3.387zm0 6.774L13.792 12 3.61 22.186c.39.036.827-.073 1.246-.314l12.324-7.113c.725-.418.725-1.096 0-1.514v.142zm4.396-4.144l-4.396-2.63-3.388 3.387 3.388 3.387 4.396-2.63c.725-.418.725-1.096 0-1.514z" />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-.989V2.803c.174-.384.385-.724.61-.989z"
        fill="#00D3FF"
      />
      <path
        d="M17.18 8.613L4.856 1.5c-.419-.241-.856-.35-1.247-.314L13.792 12l3.388-3.387z"
        fill="#00F076"
      />
      <path
        d="M17.18 15.387L13.792 12 3.61 22.186c.39.036.827-.073 1.246-.314l12.324-7.113c.725-.418.725-1.096 0-1.514v.142z"
        fill="#FF3A44"
      />
      <path
        d="M21.576 11.243l-4.396-2.63-3.388 3.387 3.388 3.387 4.396-2.63c.725-.418.725-1.096 0-1.514z"
        fill="#FFAA00"
      />
    </svg>
  );
}
