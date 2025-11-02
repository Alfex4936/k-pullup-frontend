import cn from "@lib/cn";

export interface IconProps {
  size?: number | string;
  color?: "primary" | "black";
  className?: string;
  link?: boolean;
}

export const iconColorMap = {
  primary: "fill-primary",
  black: "fill-black",
};

export const iconStrokeColorMap = {
  primary: "stroke-primary",
  black: "stroke-black",
};

interface BaseIconProps extends IconProps {
  viewBox?: string;
  children: React.ReactNode;
}

/**
 * Base icon component that wraps SVG icons with common styling and props
 */
const BaseIcon = ({
  size = 25,
  color = "primary",
  className,
  viewBox = "0 0 24 24",
  children,
}: BaseIconProps) => {
  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn("dark:fill-grey-light", iconColorMap[color], className)}
    >
      {children}
    </svg>
  );
};

export default BaseIcon;
