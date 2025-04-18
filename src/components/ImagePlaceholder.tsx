"use client";

import { CSSProperties } from 'react';

interface ImagePlaceholderProps {
  width: number;
  height: number;
  text?: string;
  bgColor?: string;
  textColor?: string;
  style?: CSSProperties;
  className?: string;
}

const ImagePlaceholder = ({
  width,
  height,
  text = 'Placeholder',
  bgColor = '#CBD5E1',
  textColor = '#334155',
  style,
  className
}: ImagePlaceholderProps) => {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden ${className || ''}`}
      style={{
        width,
        height,
        backgroundColor: bgColor,
        color: textColor,
        ...style
      }}
    >
      <span className="text-center font-medium px-4">{text}</span>
    </div>
  );
};

export default ImagePlaceholder;
