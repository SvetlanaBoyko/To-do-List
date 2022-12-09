import { Component } from "react";

export class List extends Component {
    constructor () {
        super();
        this.state = {
            userInput : '',
            toDoList : []
        }
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input) {
        if (input==='') {
            alert('Please enter an item!')
        }
        else {
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({toDoList : listArray, userInput : "" })
        }
        
    }

    deleteItem () {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList : listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <div className="inputList">
            <input type='text' placeholder="What do you need to do?" onChange={(e) => {this.onChangeEvent(e.target.value)}} value = {this.state.userInput} />
            <button onClick={() => this.addItem(this.state.userInput)} className='add'>+</button>
            </div>
            <div className="list">
            <ul className="listOfTasks">
                {this.state.toDoList.map((item,index)=> (
                    <li key={index} onClick={this.crossedWord}>{item}</li>
                ))}
            </ul>
            <button onClick={() => this.deleteItem()} className='delete'>Clear history</button>
            </div>
            </div>
            </form>
        )
    }
}