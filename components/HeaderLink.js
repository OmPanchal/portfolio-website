import Link from "next/link";
import React from "react";
import Text from "./Text";

const HeaderLink = ({ link, label, children, selected, className }) => {
  return (
    <Link
      href={link}
      className={`flex flex-row items-center justify-center gap-2 ${className}`}
    >
      {children}
      <Text className="underline" weight={selected ? "b" : "r"}>
        {label}
      </Text>
    </Link>
  );
};

export default HeaderLink;
