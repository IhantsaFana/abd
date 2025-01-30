import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="card bg-white rounded-lg shadow-md overflow-hidden text-center">
      <div className="px-6 py-4">
        {children}
      </div>
    </div>
  );
};

export default Card;
