

//组件

import React from 'react';

export default class Myzu extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {color:"yellow"}
	}
	
		
	render() {
		return (
			<div className="content-main container">			
			 <div>
			    <img src="./img/tu.jpg" style={{width:"100%"}} />
			 </div>	
			<div>
			    <img src="./img/tu2.jpg" style={{width:"100%"}} />
			 </div>	
			</div>
		)
	}
	
}

import $ from 'jquery';



