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
          Amanha: <span>R$ {responseValue[1].toFixed(2)}</span>
        </p>
        <p>
          Em 15 dias: <span>R$ {responseValue[15].toFixed(2)}</span>
        </p>
        <p>
          Em 30 dias: <span>R$ {responseValue[30].toFixed(2)}</span>
        </p>
        <p>
          Em 90 dias: <span>R$ {responseValue[90].toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};
