import { FaFutbol } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { NavLink } from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css";

export const Jogo = () => {
  return (
    <div>
      <span className="spa"></span>

      <Link className="" to="/home">
        <button className="loghome">Home</button>
      </Link>

      <div className="container">
        <FaFutbol className="fut"></FaFutbol> 
        <FaFutbol className="fut2"></FaFutbol>
        <p>X</p>
        <div className="time1">
          <input type="text" name="" id="caixaa" placeholder="Time 1" />
        </div>
        <div className="time2">
          <input type="text" name="" id="caixaa" placeholder="Time 2" />
        </div>

        <div className="container-card">
          <div className="txt">
            <br />

            <div className="caixa1">
              <input type="text" name="" id="caixa" placeholder="Horário" />
              <button className="penn">
                <FaPen className="pen"></FaPen>
              </button>
            </div>
            <br />

            <div className="caixa2">
              <input type="text" name="" id="caixa" placeholder="Local" />
              <button className="penn">
                <FaPen className="pen"></FaPen>
              </button>
            </div>
            <br />

            <div className="caixa3">
              <input type="text" name="" id="caixa" placeholder="Data" />
              <button className="penn">
                <FaPen className="pen"></FaPen>
              </button>
            </div>

            <button className="cancel">Cancelar</button>
            <button className="ok">Ok</button>
          </div>
        </div>
      </div>
    </div>
  );
};