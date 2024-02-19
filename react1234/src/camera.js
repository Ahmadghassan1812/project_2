import React from 'react';

class Camera extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{borderColor: this.props.color ,borderWidth:'5',borderStyle: 'solid'}}>
                <img src={this.props.src} alt='camera' width={200}/>
                <p>discription: {this.props.discription}</p>
               
                <p>brand: {this.props.brand}</p>
            </div>
        );
    }
}

export default Camera;