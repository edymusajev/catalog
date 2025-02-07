import { PluginContext } from "apyf";
import React, { useState } from "react";

const BirdGame = (props: { pluginContext: PluginContext }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Bird Game</h1>
      <div>{JSON.stringify(props)}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(props);
        }}
      >
        Click me
      </button>
      <div>{counter}</div>
    </div>
  );
};

const fusionApiPlugin = (context: PluginContext) => {
  return {
    onload: () => {
      const BirdGameWithContext = (props: any) => (
        <BirdGame {...props} pluginContext={context} />
      );

      const testPanel = {
        id: "test-panel",
        icon: "gamepad-2",
        title: "Test Panel",
        content: (
          <div className="p-2 space-y-2">
            <button
              onClick={() => {
                context.addTab("main", {
                  id: "test-panel-2",
                  title: "Test Panel 2",
                  icon: null,
                  props: {
                    content: "coming soon",
                  },
                });
              }}
              className="rounded bg-green-600 p-2"
            >
              And another one
            </button>
          </div>
        ),
      };
      context.registerSidebarTab("left", testPanel);

      context.registerPanel("main", {
        id: "test-panel",
        icon: "heart",
        title: "👾 Minigame",
        content: BirdGameWithContext,
      });
    },
    onunload: () => {
      console.log("hello plugin unloaded");
    },
  };
};

export default fusionApiPlugin;
