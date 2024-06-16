import { preload } from "react-dom";
import MultiStepLoader from "./ui/multi-step-loader";

const Preloader: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <MultiStepLoader loadingStates={[]} />
    </div>
  );
};

export default Preloader;
