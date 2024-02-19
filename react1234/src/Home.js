import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render()
    {
        return(  <div>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
           </head><form>
        <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
            </div>
        )
    }
}
export default Home;