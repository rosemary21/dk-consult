import React from "react";

type SkeletonLoaderProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
};

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = "w-full",
  height = "h-4",
  borderRadius = "rounded",
}) => {
  return (
    <div
      className={`${width} ${height} ${borderRadius} bg-gray-200 animate-pulse`}
    />
  );
};

export default SkeletonLoader;
