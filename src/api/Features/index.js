import yaml from "js-yaml";
import Document from "../Document/Document";
let features = {};

if (!window.mock) {
  Document.factory({ type: "Configuration", name: "ee" })
    .read()
    .then((val) => {
      let json = {};

      try {
        json = yaml.load(val?.Yaml);
        if (json.Features?.length)
          for (const key of json.Features) features[key] = true;
      } catch (e) {
        console.log("Error fetching configuration", e);
      }

      console.log(
        "EE: " +
          (json.Version ?? "2.4.0 (assumed)") +
          "\nFEATURES: " +
          Object.keys(features).join(","),
      );
    });
}

const Features = {
  get: (key) => features[key],
  set: (key, value) => {
    features[key] = value;
  },
  enable: (key) => {
    features[key] = true;
  },
  disable: (key) => {
    features[key] = false;
  },
};

globalThis.Features = Features;

export default Features;
