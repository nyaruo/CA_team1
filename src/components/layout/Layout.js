import React from "react";
import Routes from "../Routes";

import { BrowserRouter, Route } from "react-router-dom";

export default function Layout() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className="layout">
            <div className="layout__content">
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
}
