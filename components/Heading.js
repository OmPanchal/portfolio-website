const Heading = ({ children, className, ...props }) => {
  return (
    <div className={`${className} md:text-5xl text-2xl`} {...props}>
      {children}
    </div>
  );
};

export default Heading;
