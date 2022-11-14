import { createContext, useState } from "react";
import {
  IRequest,
  IProvider,
  IContext,
  IResponse,
} from "../interfaces/context.interface";
import api from "../Api/api";

export const ValueContext = createContext<IContext>({} as IContext);

export const ValuesProvider = ({ children }: IProvider) => {
  const [responseValue, setResponseValue] = useState({} as IResponse);

  const request = async (data: IRequest) => {
    try {
      const response = await api.post("", data);
      setResponseValue(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ValueContext.Provider value={{ request, responseValue }}>
      {children}
    </ValueContext.Provider>
  );
};
