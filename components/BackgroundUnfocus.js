const BackgroundUnfocus = ({ state, setState, className }) => {
  return (
    <>
      {state ? (
        <div
          onClick={() => {
            setState(!state);
          }}
          className={`fixed w-svw h-svh top-0 left-0 ${className}`}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
};

export default BackgroundUnfocus;
