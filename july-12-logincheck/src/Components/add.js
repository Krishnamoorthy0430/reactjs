import { Component } from "react";

class Add extends Component
{
    constructor(props)
    {
        super(props);
        this.state={number1:'0',number2:'0',sum:''};
        this.fnUpdate=this.fnUpdate.bind(this);
        this.fnAdd=this.fnAdd.bind(this);
    }
    fnAdd()
    {
       var num1 = parseInt(this.state.number1);
       var num2 = parseInt(this.state.number2);
        var sum = num1 + num2;
        this.setState({sum: sum})
       
    }
    fnUpdate(event)
    {
        this.setState({[event.target.name]:event.target.value})
    }
    render()
    {
        return <div>
            Number 1 : <input type="number" name="number1" onChange={this.fnUpdate}/> <br/><br/>
            Number 2 : <input type="number" name="number2" onChange={this.fnUpdate}/> <br/><br/>
            <input type="button" value={'Add'} onClick={this.fnAdd}/><br/><br/>
            <div>
               Sum : {this.state.sum}
            </div>
        </div>
    }
}
export default Add;