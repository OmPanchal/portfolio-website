import HorizontalScroll from "../HorizontalScroll";

const ProjectsAuthorList = ({ project }) => {
  return (
    <HorizontalScroll className="flex flex-row items-center justify-start max-w-full min-h-max lg:gap-6 gap-4 overflow-x-auto no-scrollbar">
      {project.authors.map((author, idx) => {
        return (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={author.link}
            key={idx}
            className="text-white/80 underline lg:text-xl text-xs min-w-max"
          >
            {author.name}
          </a>
        );
      })}
    </HorizontalScroll>
  );
};

export default ProjectsAuthorList;
