export type IconProps = {
  size?: number;
  width?: number;
  height?: number;
  active?: boolean;
  color?: string;
  color2?: string;
  className?: string;
} & React.SVGProps<SVGSVGElement>;
export type IconType = React.FC<IconProps>;

export type RouteType = {
  path: string;
  Icon: undefined | IconType;
  showIn: string[];
  label: string;
  type: "link" | "hash";
  activeIn: string[];
  subRoutes: undefined | object;
};
