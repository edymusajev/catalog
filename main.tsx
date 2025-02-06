import React from "react";
import { PluginContext } from "apyf";
// import { CatalogBrowser } from "./src/CatalogBrowser";

const fusionApiPlugin = (context: PluginContext) => {
  return {
    onload: () => {
      console.log("SHOULD BE RIGHT");

      const catalogBrowserTab = {
        id: "catalog-browser",
        icon: "smile",
        title: "Catalog Browser",
        content: <div>hello 123</div>,
      };

      context.registerSidebarTab("left", catalogBrowserTab);
    },
    onunload: () => {
      console.log("hello plugin unloaded");
    },
  };
};

export default fusionApiPlugin;
