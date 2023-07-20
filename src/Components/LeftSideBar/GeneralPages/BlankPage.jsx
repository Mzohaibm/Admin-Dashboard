import { Link } from "react-router-dom";

const BlankPage = () => {
  return (
    <div className="md:my-12 my-8 mx-auto text-center">
      <div className="sm:w/2/3 w-11/12">
        <h1 className="text-9xl font-bold">BlankPage</h1>
        <h2 className="text-2xl font-medium">SORRY! it's blank page</h2>
        <Link className="text-xl font-medium hover:text-purple-600" to="/">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default BlankPage;
