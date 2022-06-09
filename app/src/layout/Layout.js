import React from "react";
import { Header } from "./Header";
 
export const Layout = ({ children }) => (
    <div className="layout">
      <Header />
      <div>  {children}</div>
    </div>
  );
  