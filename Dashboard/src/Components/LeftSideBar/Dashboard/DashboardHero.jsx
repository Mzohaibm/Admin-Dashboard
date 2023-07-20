import {
  faBookBookmark,
  faDiamond,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../Styles/dashboard.css";
const DashboardHero = () => {
  return (
    <div className="w-11/12 mx-auto md:my-12 my-8">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-16 sm:gap-12 gap-8">
        <div className="weekly_sale p-6 text-white">
          <div className="flex justify-between items-center ">
            <h2 className="text-xl font-bold">Weekly Sales</h2>
            <FontAwesomeIcon
              className="text-xl font-medium"
              icon={faUniversalAccess}
            />
          </div>
          <h1 className="text-3xl font-bold py-4">$ 15,000</h1>
          <h3 className="text-xl font-medium py-6">Increased by 12%</h3>
        </div>
        <div className="weekly_orders p-6 text-white">
          <div className="flex justify-between items-center ">
            <h2 className="text-xl font-bold">Weekly Orders</h2>
            <FontAwesomeIcon
              className="text-xl font-medium"
              icon={faBookBookmark}
            />
          </div>
          <h1 className="text-3xl font-bold py-4">45,599</h1>
          <h3 className="text-xl font-medium py-6">Decreased by 60%</h3>
        </div>{" "}
        <div className="visitor_online p-6 text-white">
          <div className="flex justify-between items-center ">
            <h2 className="text-xl font-bold">Weekly Sales</h2>
            <FontAwesomeIcon className="text-xl font-medium" icon={faDiamond} />
          </div>
          <h1 className="text-3xl font-bold py-4">$ 15,000</h1>
          <h3 className="text-xl font-medium py-6">Increased by 60%</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
