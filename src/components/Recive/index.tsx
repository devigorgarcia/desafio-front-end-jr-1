import { useContext } from "react";
import { ValueContext } from "../../Contexts/value";
import "./index.css";

export const Recive = () => {
  const { responseValue } = useContext(ValueContext);

  return (
    <div className="reciveContainer">
      <div className="containerDiv">
        <h1>Você Receberá</h1>
        <p>
          Amanha:
          {responseValue[1] ? (
            <span> R$ {responseValue[1].toFixed(2)}</span>
          ) : (
            <span> R$ 0,00</span>
          )}
        </p>
        <p>
          Em 15 dias:{" "}
          {responseValue[15] ? (
            <span> R$ {responseValue[15].toFixed(2)}</span>
          ) : (
            <span> R$ 0,00</span>
          )}
        </p>
        <p>
          Em 30 dias:{" "}
          {responseValue[30] ? (
            <span> R$ {responseValue[30].toFixed(2)}</span>
          ) : (
            <span> R$ 0,00</span>
          )}
        </p>
        <p>
          Em 90 dias:{" "}
          {responseValue[90] ? (
            <span> R$ {responseValue[90].toFixed(2)}</span>
          ) : (
            <span> R$ 0,00</span>
          )}
        </p>
      </div>
    </div>
  );
};
