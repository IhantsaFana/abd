import { ReactNode, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const Card: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div
      className={`card text-gray-600 bg-white rounded-lg shadow-md overflow-hidden text-center ${className}`}
      {...props}
    >
      <div className="px-6 py-4">
        {children}
      </div>
    </div>
  );
};

export default Card;

