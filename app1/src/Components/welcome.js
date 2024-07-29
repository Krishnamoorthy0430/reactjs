import { Component } from "react";

class Welcome extends Component
{
    constructor(props)
    {
        super(props);
        console.log(props);
    }
    render()
    {
        return <div><br></br>
            <h1 style={this.props}>Welcome Home</h1>
        </div>
    }
}
export default Welcome;