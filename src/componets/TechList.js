import React, { Component } from "react";
import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    newTech: "",
    techs: []
  };
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };
  handleSubmit = e => {
    //preventDefault evita que a pagina recarege totalmente
    e.preventDefault(); //console.log(this.state.newTech);

    //quando formos manipular arry devemos recriar  todo array acrescentando o novo
    //valor
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };
  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  //Executado assim que o component aparecer em tela
  componentDidMount() {
    const techs = localStorage.getItem("techs");
    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  //Executa sempre que houver alteraçoes nas props ou estado
  //esse metodo recebe como primeiro parametro prevProps e segundo parametro
  //prevState
  //como não iremos utilizar o primeiro parametro passamos um underline _
  componentDidUpdate(_, prevState) {
    //verifica se o estado anterior esta diferente de agora
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  //Execultado quando o componente deixa de existir
  componentWillUnmount() {}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
export default TechList;
