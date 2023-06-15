import { prompt } from "../prompt";
import telescope from "../index";
import path from "path";
import { writeFileSync } from "fs";
import {
  TelescopeOptions,
  defaultTelescopeOptions,
  TelescopeIncludes,
} from "@osmonauts/types";

export default async (argv) => {
  if (argv.useDefaults) {
    const SKIP = ["aminoEncoding", "packages"];
    Object.keys(defaultTelescopeOptions).forEach((key) => {
      if (SKIP.includes(key)) return;
      argv[key] = defaultTelescopeOptions[key];
    });
  }

  const questions = [
    {
      _: true,
      type: "path",
      name: "protoDirs",
      message: "where is the proto directory?",
      default: "./proto",
    },
    {
      _: true,
      type: "path",
      name: "outPath",
      message: "where is the output directory?",
      default: "./src/codegen",
    },
    {
      type: "confirm",
      name: "includeAminos",
      message: "output amino messages?",
      default: true,
    },
    {
      type: "confirm",
      name: "includeLCDClients",
      message: "output LCD Clients?",
      default: true,
    },
    {
      type: "confirm",
      name: "includeRPCClients",
      message: "output RPC clients?",
      default: true,
    },
  ];

  // Create empy config object
  let conf: TelescopeOptions & TelescopeIncludes = {};
  let configFullPath = path.resolve(".telescope.json");
  if (argv.config) {
    let { config } = argv;
    configFullPath = path.resolve(...config.split("/"));
    // Extract provided protoDirs from argv
    let { protoDirs: extraProtoDirs, ...args } = argv;
    if (!Array.isArray(extraProtoDirs)) {
      extraProtoDirs = [extraProtoDirs];
    }
    try {
      // Read the config JSON
      let json = require(configFullPath);
      // Assign values from config JSON to our empty config object
      Object.assign(conf, json);
      // Override any options with explicitly provided ones
      Object.assign(conf, args);
      // Append provided protoDirs if any
      if (extraProtoDirs) {
        conf.protoDirs = [...(conf.protoDirs ?? []), ...extraProtoDirs];
      }
    } catch (_e) {
      if (path.extname(config).toLowerCase() != ".json") {
        // if not JSON exit.
        throw new Error("Must provide a .json file for --config.");
      } else {
        // New config file to create. copy provided argv to our empty conf object
        console.log("Config will be written to: " + configFullPath);
        Object.assign(conf, argv);
      }
    }
  }
  // Get missing options interactively.
  let {
    protoDirs,
    outPath,
    includeAminos,
    includeLCDClients,
    includeRPCClients,
  } = await prompt(questions, conf);

  if (!Array.isArray(protoDirs)) {
    protoDirs = [protoDirs];
  }
  // remove any duplicate protodirs
  protoDirs = [...new Set(protoDirs)];
  const options = {
    aminoEncoding: {
      enabled: includeAminos,
    },
    lcdClients: {
      enabled: includeLCDClients,
    },
    rpcClients: {
      enabled: includeRPCClients,
    },
  };
  // Write out final config to provided config path.
  writeFileSync(
    configFullPath,
    JSON.stringify(
      {
        protoDirs,
        outPath,
        includeAminos,
        includeLCDClients,
        includeRPCClients,
        options,
      },
      null,
      2
    )
  );

  await telescope({
    protoDirs,
    outPath,
    options,
  });

  console.log(`✨ transpilation successful!`);
};
