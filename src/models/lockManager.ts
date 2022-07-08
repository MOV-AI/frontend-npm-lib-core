export interface LockVar {
  [lock: string]: LockModel;
}

export interface CachedLocks {
  Lock: LockVar;
}

export interface LockModel {
  Value: string;
}
