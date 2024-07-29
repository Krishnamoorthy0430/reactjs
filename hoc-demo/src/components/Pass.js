import HocBlue from "./HocBlue"

const Pass=(props)=><div>
    <p style={{'color':props.color}}>Password:</p><input type="password" name="password" className="form-control"/><br/>
</div>
export default HocBlue(Pass);