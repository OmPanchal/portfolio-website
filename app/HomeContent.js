import React from "react";
import Heading from "./Heading";
import SocialRack from "./SocialRack";
import Text from "./Text";

const HomeContent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-8 gap-8">
        <div className="flex flex-col items-center gap-2">
          <Heading>Om_Panchal</Heading>
          <SocialRack />
        </div>
      </div>
      <Text className="lg:max-w-180 max-w-150 font-[space-mono-r]">
        Welcome to my website!!!
      </Text>
    </>
  );
};

export default HomeContent;
