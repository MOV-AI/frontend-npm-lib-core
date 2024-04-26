export * from "./api";
export * from "./models";

import RobotManager from "./api/RobotManager/RobotManager";

export const robotManager = new RobotManager();
