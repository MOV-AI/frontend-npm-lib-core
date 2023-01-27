import { SubscriberLoadParam, SubscriberUpdateParam } from "./common";

export interface RobotStatus {
  active_flow?: string;
  nodes_lchd?: Array<string>;
  persistent_nodes_lchd?: Array<string>;
  active_states?: Array<string>;
  core_lchd?: Array<string>;
  locks?: Array<string>;
  timestamp?: number;
  active_scene?: string;
}

export interface RobotParameter {
  [name: string]: { Value: string | number | boolean | object };
}

export interface Alert {
  action?: string;
  alert_info?: string;
  alert_name?: string;
  callback?: string;
}

export interface Alerts { [name: string]: Alert }

export interface RobotModel {
  IP?: string | null;
  Status?: RobotStatus;
  RobotName?: string;
  Parameter?: RobotParameter;
  Online?: boolean;
  Alerts?: Alerts;
}

export interface CachedRobots {
  [robotID: string]: RobotModel;
}

export interface RobotMap {
  Robot: CachedRobots;
}

export interface UpdateRobotParam extends SubscriberUpdateParam {
  key: RobotMap;
}

export interface LoadRobotParam extends SubscriberLoadParam {
  value: RobotMap;
}

//========================================================================================
/*                                                                                      *
 *                                         Tasks                                        *
 *                                                                                      */
//========================================================================================

export interface Tasks {
  currentTask: string;
  previousTask: string;
}

//========================================================================================
/*                                                                                      *
 *                                         Logs                                         *
 *                                                                                      */
//========================================================================================

export interface Logger {
  status: number;
  timeout?: ReturnType<typeof setTimeout>;
  time: number;
}

export interface LogData {
  time: number;
  fleet: string;
  funcName?: string;
  level: string;
  message: string;
  module: string;
  robot: string;
  service: string;
  stdout: string;
}

export interface Log {
  robot: string;
  count: number;
  limit: number;
  offset: number;
  data: Array<LogData>;
}

export interface LogTag {
  label: string;
  key: string;
}

export interface LogLevel {
  value: string;
  label: string;
}

export type TimestampQuery = number | "";

export interface LogQueryParam {
  level: { selected: Array<string>; list: Array<LogLevel> };
  service: { selected: Array<string> };
  tag: { selected: Array<LogTag> };
  searchMessage: string;
  date: { from: TimestampQuery; to: TimestampQuery };
  robot: { selected: Array<string> };
  limit: number;
}
