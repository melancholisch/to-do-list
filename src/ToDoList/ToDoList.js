import React, { Component } from 'react';
import {Formulario} from './styles';
import { Checkbox } from '@material-ui/core';

class ToDoList extends Component {

    state = {
        novaTarefa: '',
        tarefas: [
        
        ],
        tarefaEditada: '',
        tarefaEditadaIndex: null,
        onEdit: false
    }

// CARREGANDO OS DADOS 
componentDidMount(){
    const tarefas = localStorage.getItem('tarefas');

    if (tarefas){
        this.setState({tarefas: JSON.parse(tarefas)});
    }
}

// SALVANDO OS DADOS DO LOCAL STORAGE
componentDidUpdate(_, prevState){
    const {tarefas} = this.state;
    
    if(prevState.tarefas !== tarefas){
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }
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
    this.setState({tarefas: [...this.state.tarefas, this.state.novaTarefa],
    novaTarefa: ''
    });
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

submitEditValue = (e, index) => {
    e.preventDefault();

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
                <form onSubmit={this.handleSubmit}>

                    <h1>Lista de tarefas:</h1>

                    <ul>
                        {this.state.tarefas.map((tarefa, index) => (
                        <>
                            <div className="controle-tarefa">
                    
                                <li key={tarefa}> <Checkbox/> {tarefa} </li>
                                
                                <div className="controle-tarefa-botoes">
                                    <button id="controle-excluir-botao" 
                                                onClick={()=>this.handleDelete(tarefa)} 
                                                type= "button">
                                    Excluir</button>

                                    <button id="controle-edicao-botao-editar" 
                                            onClick={()=>this.startEdit(index)}  
                                            type= "button">
                                    Editar</button>
                                </div>
                            </div>
                            {this.state.onEdit && this.state.tarefaEditadaIndex === index && (
                                
                                <div className="controle-edicao">
                                    <input id="controle-edicao-input" 
                                            type='text' 
                                            onChange={e => this.handleEditInput(e)} 
                                            value={this.state.tarefaEditada} 
                                            placeholder="Edite sua tarefa"/>

                                    <button id="controle-edicao-botao-enviar" 
                                            type='submit' 
                                            onClick={e => this.submitEditValue(e, index)} >
                                    Enviar</button>

                                </div>
                            )}
                        </>
                        ))}
                    </ul>

                    <div className="controle-adicao">
                        <input type='text' 
                                onChange={this.handleInputChange} 
                                value={this.state.novaTarefa} 
                                placeholder="Digite uma tarefa" required />

                        <button onClick={e => this.createNew(e)} 
                                type='submit'>
                        Enviar</button>
                    </div>

                </form>
        </Formulario>
    )
    }
};

export default ToDoList;