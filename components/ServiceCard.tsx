import { FunctionComponent } from "react";
import { IService } from "../type";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className="flex items-center p-2 space-x-4 flex-row ">
      <div className="basis-1/8">
        <Icon className="w-12 h-12 text-primary " />
      </div>
      <div>
        <h5 className="font-bold">{title}</h5>
        <div className="basis-1/2">
          <p dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
