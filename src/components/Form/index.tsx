import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useContext } from "react";

import "./index.css";
import { IRequest } from "../../interfaces/context.interface";
import { ValueContext } from "../../Contexts/value";

export const Form = () => {
  const { request } = useContext(ValueContext);

  const formSchema = yup.object({
    amount: yup.number().required("Campo Obrigatório"),
    installments: yup.number().required("Campo Obrigatório"),
    mdr: yup.number().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequest>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: IRequest) => {
    request(data);
  };

  return (
    <div className="formContainer">
      <h1>Simule sua Antecipação</h1>
      <form className="formSale" onSubmit={handleSubmit(onSubmit)}>
        <label className="labelSale" htmlFor="amount">
          Informe o valor da venda *
        </label>

        <input
          type="number"
          className="inputSale"
          {...register("amount")}
          name="amount"
          min="1000"
        />
        <label className="labelSale" htmlFor="installments">
          Em quantas parcelas *
        </label>
        <input
          type="number"
          className="inputSale"
          {...register("installments")}
          min="1"
          max="12"
        />
        <label className="labelSale" htmlFor="mdr">
          Informe o percentual de MDR *
        </label>
        <input
          type="number"
          className="inputSale"
          {...register("mdr")}
          name="mdr"
          min="1"
          max="100"
        />

        <button className="submitButton" type="submit">
          Simular
        </button>
      </form>
    </div>
  );
};
