import React from "react";
import Navigation from "../../components/site/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navigation />
      {children}
    </div>
  );
};

export default AuthLayout;
