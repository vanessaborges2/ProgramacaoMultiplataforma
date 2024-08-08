function Titulo(props){
    const nome = props.nome;
    return (
      <h1>Primeiro App React - {nome} {props.sobrenome}</h1>
    );
  }

export default Titulo;