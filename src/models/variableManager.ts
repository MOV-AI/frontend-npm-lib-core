export type RedisVarType = string | boolean | object | number;
export type VarMap = {
  [scope: string]: { ID: { [varname: string]: RedisVarType } };
};
export type CachedVar = { Var: VarMap };
