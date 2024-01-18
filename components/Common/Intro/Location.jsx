import { DETAILS } from "../../../constants/constants";
import { getObjectKeys } from "../../../utils/utils";

const Location = () => {
  const keys = getObjectKeys(DETAILS);
  return (
    <div className="flex flex-col space-y-1 pt-3">
      {keys.map((key, index) => {
        return (
          <div key={index} className="flex items-center justify-between">
            <span className="text-Gray900 text-[14px] font-bold">{key}</span>
            <span className="text-[14px] text-Gray900">{DETAILS[key]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Location;
