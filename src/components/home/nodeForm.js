import React, { PureComponent }from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import SelectField from 'react-md/lib/SelectFields';

// import Container from 'muicss/lib/react/container';
// import Row from 'muicss/lib/react/row';
// import Col from 'muicss/lib/react/col';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class NodeForm extends PureComponent {

  constructor(props){
    super(props);
    this.state={
      message:""
    };
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log("Form submitted");
    alert("Hi Welcome");
    
    this.props.history.push('/home');
  }
  
  render() {
    // let {email,password} = this.state;
    // let {isLoginPending, isLoginSuccess, loginError} = this.props;
    // const SelectInput = ({
    // debugger;
    return(
      <div className="col-md-4">
        <form className = "nodeForm" onSubmit={this.handleSubmit}>

        <label className="label">Node</label>
        <select
          name="select_drop"
          onChange={e=> this.setState({email: e.target.value})}
          className="form-control">
          <option value="">Node A</option>
          <option value="">Node B</option>
          <option value="">Node C</option>
        </select>
       <hr></hr>
       
      <label className="label">Message</label>
        <input type= "text" id = "message" placeholder="Enter message" required onChange={e=> this.setState({message: e.target.value})} /> 
        <br></br>
        <hr></hr>

        <input type= "submit" value ="Save"  className="btn btn-primary" name = "submit"/>
      </form>
      </div>
    );
  }
}


export default NodeForm;
