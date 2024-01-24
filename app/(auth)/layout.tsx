import { ReactNode } from "react";
import "../globals.css";
interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-[url('/images/WelcomePage.jpg')] bg-cover bg-fixed bg-no-repeat relative h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
