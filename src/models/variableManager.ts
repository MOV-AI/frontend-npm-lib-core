export type RedisVarType = string | boolean | object | number;

export interface VarMap {
  [scope: string]: { ID: { [varname: string]: RedisVarType } };
}
export interface CachedVar {
  Var: VarMap;
}
export interface VarGetResult {
  scope: string;
  key: string;
  value: RedisVarType;
  is_date?: boolean;
}
