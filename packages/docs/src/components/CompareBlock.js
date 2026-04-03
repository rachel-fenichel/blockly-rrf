import React from 'react';

export default function CompareBlock({ variant, children }) {
  return <p className={`compare-${variant}`}>{children}</p>;
}
