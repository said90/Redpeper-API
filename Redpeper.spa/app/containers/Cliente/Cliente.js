/* eslint-disable object-curly-spacing */
/* eslint-disable react/no-unused-state */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
import React from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
import clienteService from "./../../services/clienteService";

class Cliente extends React.Component {
  state = {
    clientes: []
  };

  async componentDidMount() {
    const { data: clientes } = await clienteService.getClientes();
    this.setState({ clientes });
    console.log(clientes);
  }
  render() {
    const { clientes } = this.state;
    return (
      <div>
        <PapperBlock title="Cartera de Clientes">
          <h1>Clientes</h1>
          <ul>
            {clientes.map(cliente => (
              <li key={cliente.id}>
                id: {cliente.id}, nombres: {cliente.persona.nombres}, apellidos:{" "}
                {cliente.persona.apellidos}
              </li>
            ))}
          </ul>
        </PapperBlock>
      </div>
    );
  }
}

export default Cliente;
