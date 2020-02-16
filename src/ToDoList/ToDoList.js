import React, { Component } from 'react';
import {Formulario} from './styles';

/* export default function ToDoList(){

    const [tarefa, updateTarefa] = useState('');

    return(
        <div>
            <h1>Lista do que fazer hoje:</h1>

            <ul>
                {this.state.tarefa.map(tarefa=> <li key={tarefa}>{tarefa}</li>)}
            </ul>

            <input 
                type='text' 
                onChange={this.inputMudanca} 
                value={tarefa} 
                placeholder="Digite uma tarefa"
            />              
            
            <button 
                type='submit' 
                onClick={''} >
                    Enviar
            </button>

        </div>
    )
};
*/

class ToDoList extends Component {

    state = {
        novaTarefa: '',
        tarefas: [
        
        ],
        tarefaEditada: ''
    }

handleInputChange = e => {
    this.setState({novaTarefa: e.target.value});
}

handleSubmit = e => {
    e.preventDefault();
    this.setState({tarefas: [...this.state.tarefas, this.state.novaTarefa]});
}

handleDelete = (tarefa) =>{
    this.setState({
        tarefas: this.state.tarefas.filter(t => t !== tarefa)
    })
}

handleEdit = (tarefa, tarefaEditada) => {
    console.log('agora vc edita')

    this.setState({  })
    if (tarefa !== tarefaEditada){
        return <input type='text' onChange={this.handleInputChange} value={this.state.tarefa} />
    }else {
        return this.setState({tarefas:[...this.state.tarefas]})   
    }
    
}

render (){
    return  (
        <Formulario>
            
            <h1>Lista de tarefas:</h1>

                <form onSubmit={this.handleSubmit}>
                    <ul>
                        {this.state.tarefas.map(tarefa => (
                        <li key={tarefa}>
                             {tarefa}
                             <button onClick={()=>this.handleDelete(tarefa)} type= "button">X</button>
                             <button onClick={()=>this.handleEdit(tarefa)}  type= "button">Editar</button>
                             
                        </li>
                        ))}
                    </ul>
                    <input type='text' onChange={this.handleInputChange} value={this.state.novaTarefa} placeholder="Digite uma tarefa"/>

                    <button type='submit'>Enviar</button>
                </form>
                
        </Formulario>
    )
    }
};

export default ToDoList;