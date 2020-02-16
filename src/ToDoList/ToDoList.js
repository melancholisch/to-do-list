import React, { Component } from 'react';
import {Formulario} from './styles';


class ToDoList extends Component {

    state = {
        novaTarefa: '',
        tarefas: [
        
        ],
        tarefaEditada: '',
        tarefaEditadaIndex: null,
        onEdit: false,
    }

handleInputChange = e => {
    this.setState({novaTarefa: e.target.value});
}

handleEditInput = e => {

}

handleSubmit = e => {
    e.preventDefault();
}

createNew = e => {
    console.log('ola')
    this.setState({tarefas: [...this.state.tarefas, this.state.novaTarefa]});
}

handleDelete = (tarefa) =>{
    this.setState({
        tarefas: this.state.tarefas.filter(t => t !== tarefa)
    })
}

startEdit = (index) => {
    this.setState({onEdit: true, tarefaEditadaIndex: index});
}

handleEditInput = e => {
    this.setState({tarefaEditada: e.target.value});
}

submitEditValue = (event, index) => {
    event.preventDefault();

    const { tarefas } = this.state;
    
    const editTarefas = tarefas.map((tarefa, tarefaIndex) => {
        if(tarefaIndex === index) tarefa = this.state.tarefaEditada
        return tarefa
    });

   this.setState({
        tarefas: editTarefas,
        tarefaEditada: '',
        tarefaEditadaIndex: null,
        onEdit: false
    });
}

render (){
    return  (
        <Formulario>
            
            <h1>Lista de tarefas:</h1>

                <form onSubmit={this.handleSubmit}>
                    <ul>
                        {this.state.tarefas.map((tarefa, index) => (
                        <>
                            <li key={tarefa}>
                                {tarefa}
                                <button onClick={()=>this.handleDelete(tarefa)} type= "button">X</button>
                                <button onClick={()=>this.startEdit(index)}  type= "button">Editar</button>
                                
                            </li>
                            {this.state.onEdit && this.state.tarefaEditadaIndex === index && (
                                <div className="controle-edicao">
                                    <input id="controle-edicao-input" type='text' onChange={e => this.handleEditInput(e)} value={this.state.tarefaEditada} placeholder="Edite sua tarefa"/>
                                    <button id="controle-edicao-botao" type='submit' onClick={e => this.submitEditValue(e, index)} >Enviar</button>
                                </div>
                            )}
                        </>
                        ))}
                    </ul>
                    <input type='text' onChange={this.handleInputChange} value={this.state.novaTarefa} placeholder="Digite uma tarefa" required />
                    <button onClick={e => this.createNew(e)} type='submit'>Enviar</button>
                </form>
                
        </Formulario>
    )
    }
};

export default ToDoList;