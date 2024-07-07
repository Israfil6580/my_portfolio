import { GoArrowUpRight } from "react-icons/go";

const Education = () => {
  return (
    <div className="min-h-[80vh] container mx-auto mt-20">
      <div className="flex lg:justify-end justify-center mb-12">
        <h1 className="lg:text-6xl text-4xl text-primary font-clash uppercase">
          Learning Curve
        </h1>
        <GoArrowUpRight className="lg:text-6xl text-4xl text-primary" />
      </div>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end font-clash text-primary">
            <time className="font-mono text-xl text-primary">2021</time>
            <div className="lg:text-4xl text-2xl lg:font-medium text-primary">
              Html And Css
            </div>
            curiosity
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 font-clash text-primary">
            <time className="font-mono text-xl text-primary">2022</time>
            <div className="lg:font-medium lg:text-4xl text-2xl text-primary">
              Bootstrap And Javascript
            </div>
            curiosity
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end font-clash text-primary">
            <time className="font-mono text-xl text-primary">2023</time>
            <div className="lg:text-4xl text-2xl lg:font-medium text-primary">
              Git, Github, Tailwind, React
            </div>
            full time
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 font-clash text-primary">
            <time className="font-mono text-xl text-primary">2024</time>
            <div className="lg:text-4xl text-2xl lg:font-medium text-primary">
              Next Js, Firebase, Mongodb, Express
            </div>
            full time
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Education;
