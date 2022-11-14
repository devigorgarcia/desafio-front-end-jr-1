import { ReactNode } from "react";

export interface IRequest {
  amount: number;
  installments: number;
  mdr: number;
}

export interface IProvider {
  children: ReactNode;
}

export interface IResponse {
  1: number;
  15: number;
  30: number;
  90: number;
}

export interface IContext {
  request: (data: IRequest) => any;
  responseValue: IResponse;
}
