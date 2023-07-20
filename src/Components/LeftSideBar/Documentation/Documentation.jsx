import { Link } from "react-router-dom";

const Documentation = () => {
  return (
    <div className="md:my-12 my-8 mx-auto text-center">
      <div className="sm:w/2/3 w-11/12">
        <h1 className="text-9xl font-bold">Docs</h1>
        <a
          className="text-xl font-medium hover:text-purple-900"
          href="http://bootstrapdash.com/demo/purple-react-free/documentation/documentation.html
"
          target="blank"
        >
          Click here to read Documentation
        </a>
        <br />
        <Link className="text-xl font-medium hover:text-purple-600" to="/">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};
export default Documentation;
//
