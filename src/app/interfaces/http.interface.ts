export interface HttpResponse<T> {
  msg: string;
  success: boolean;
  status: number;
  data: T
}