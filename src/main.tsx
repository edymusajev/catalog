import { PluginContext } from "apyf";
import { CatalogBrowser } from "./CatalogBrowser";

const fusionApiPlugin = (context: PluginContext) => {
  return {
    onload: () => {
      const catalogBrowserTab = {
        id: "apyhub-catalog",
        type: "extension",
        meta: {
          icon: "book-image",
          content: <CatalogBrowser />,
        },
      };

      context.registerSidebarTab("left", catalogBrowserTab);
    },
    onunload: () => {
      console.log("hello plugin unloaded");
    },
  };
};

export default fusionApiPlugin;
