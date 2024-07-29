import HocGreen from "./HocGreen";

const Username=(props)=><div>
    <p style={{'color':props.color}}>Username : </p> <input type="text" name="username" className="form-control" />
</div>
export default HocGreen(Username);