import { iconMap } from "../../utils/iconLoader";

const Icon = ({ name, className, ...props }) => {
  const SvgIcon = iconMap[name];

  if (!SvgIcon) {
    console.warn(`❌ Icon "${name}" not found in icons folder.`);
    return null;
  }

  return <SvgIcon className={className} {...props} />;
};

export default Icon;
