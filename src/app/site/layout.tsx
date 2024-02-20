import React from "react";
import Navigation from "../../components/site/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="h-full">
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <main className="h-full">
        <Navigation />
        {children}
      </main>
    </ClerkProvider>
    // </div>
  );
};

export default layout;
