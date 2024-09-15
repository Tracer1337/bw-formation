#!/usr/bin/env node

import { Command } from "commander";
import { invoke, nodeId } from "./bw.mjs";

const program = new Command();

program.name("bw-formation");

program.command("play").action(() =>
  invoke({
    method: {
      name: "send_command",
      parameters: {
        command: "liberty.command.play_pause",
        parameters: {
          tileID: `${nodeId}/+audiod_plugin_spotify`,
        },
      },
    },
    type: "query",
  })
);

program.command("skip").action(() =>
  invoke({
    method: {
      name: "send_command",
      parameters: {
        parameters: {
          tileID: `${nodeId}/+audiod_plugin_spotify`,
        },
        command: "liberty.command.next_track",
      },
    },
    type: "query",
  })
);

program
  .command("set:bass")
  .argument("<value>", "Value between 0 and 6", parseFloat)
  .action((value) =>
    invoke({
      type: "query",
      method: {
        parameters: {
          property: "liberty.property.gain.bass",
          value: value * 100,
        },
        name: "set_property",
      },
    })
  );

program
  .command("set:treble")
  .argument("<value>", "Value between 0 and 6", parseFloat)
  .action((value) =>
    invoke({
      type: "query",
      method: {
        parameters: {
          property: "liberty.property.gain.treble",
          value: value * 100,
        },
        name: "set_property",
      },
    })
  );

program
  .command("set:volume")
  .argument("<value>", "Value between 0 and 100", parseInt)
  .action((value) =>
    invoke({
      type: "query",
      method: {
        name: "set_volume",
        parameters: {
          source: `${nodeId}/+audiod_plugin_spotify`,
          value: value,
          muted: false,
        },
      },
    })
  );

program.parse();
