import BaseIcon, { type IconProps } from "./base-icon";

const ArrowLeftIcon = ({
  size = 25,
  color = "primary",
  className,
}: IconProps) => {
  return (
    <BaseIcon size={size} color={color} className={className} viewBox="0 0 32 32">
      <path d="M11.262,16.714l9.002,8.999  c0.395,0.394,1.035,0.394,1.431,0c0.395-0.394,0.395-1.034,0-1.428L13.407,16l8.287-8.285c0.395-0.394,0.395-1.034,0-1.429  c-0.395-0.394-1.036-0.394-1.431,0l-9.002,8.999C10.872,15.675,10.872,16.325,11.262,16.714z" />
    </BaseIcon>
  );
};

export default ArrowLeftIcon;
