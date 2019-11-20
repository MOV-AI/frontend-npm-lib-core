import { Maybe } from "monet";

const Utils = {};

Utils.ofNull = x => Maybe.fromNull(x);

export default Utils;
