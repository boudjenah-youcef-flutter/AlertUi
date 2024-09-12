import { ReactNode } from "react";
import "./index.scss"; 
import { X } from "lucide-react";

interface Iprops {
  title: string;
  icon: ReactNode;
  alertType: string;
  children?: ReactNode; 
}

const Alert = ({ title, icon, alertType , children }: Iprops) => {
  return (
    <div className={alertType}>
      <div className="alert-header">
        <div className="titleicon">
          {icon}
          <div className="title">
            <h3>{title}</h3>
          </div>
        </div>
        <X />
      </div>
      <div className="alert-body">
        {children || (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            aliquid deleniti rem, ab, quidem quos a amet, molestiae minus ullam
            vel ut. Id libero, perspiciatis ratione quasi veritatis rerum
            architecto!
          </p>
        )}
      </div>
    </div>
  );
};

export default Alert;
