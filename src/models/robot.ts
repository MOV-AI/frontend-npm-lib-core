import { SubscriberLoadParam, SubscriberUpdateParam } from "./common";

export type RobotStatus = {
  active_flow?: string;
  nodes_lchd?: Array<string>;
  persistent_nodes_lchd?: Array<string>;
  active_states?: Array<string>;
  core_lchd?: Array<string>;
  locks?: Array<string>;
  timestamp?: number;
  active_scene?: string;
};

export type RobotParameter = {
  [name: string]: { Value: string | number | boolean | object };
};

export type RobotModel = {
  IP?: string | null;
  Status?: RobotStatus;
  RobotName?: string;
  Parameter?: RobotParameter;
};

export type CachedRobots = {
  [robotID: string]: RobotModel;
};

export type RobotMap = {
  Robot: CachedRobots;
};

export interface UpdateRobotParam extends SubscriberUpdateParam {
  key: RobotMap;
}

export interface LoadRobotParam extends SubscriberLoadParam {
  value: RobotMap;
}

//========================================================================================
/*                                                                                      *
 *                                         Logs                                         *
 *                                                                                      */
//========================================================================================

export type Logger = {
  status: number;
  timeout?: ReturnType<typeof setTimeout>;
  time: number;
};

export type LogData = {
  time: number;
  fleet: string;
  funcName?: string;
  level: string;
  message: string;
  module: string;
  robot: string;
  service: string;
  stdout: string;
};

export type Log = {
  robot: string;
  count: number;
  limit: number;
  offset: number;
  data: Array<LogData>;
};

export type LogTag = { label: string; key: string };

export type LogQueryParam = {
  level: { selected: Array<string>; list: Array<string> };
  service: { selected: Array<string> };
  tag: { selected: Array<LogTag> };
  searchMessage: string;
  date: { from: number; to: number };
  robot: { selected: Array<string> };
  limit: number;
};
