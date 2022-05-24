export interface HttpErrorResponse extends Error {
  error: any | null;
  ok: boolean;
  statusText: string;
  status: number;
}
