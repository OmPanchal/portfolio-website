import Link from "next/link";
import HomeHeading from "./HomeHeading";

const HomeSidebarLink = ({
  href,
  name,
  selected = false,
  children,
  ...props
}) => {
  return (
    <Link href={href} {...props}>
      <HomeHeading
        className={`${selected ? "md:text-6xl text-3xl font-bold" : "transition-all hover:md:text-6xl duration-300"}`}
      >
        {children}
      </HomeHeading>
    </Link>
  );
};

export default HomeSidebarLink;
