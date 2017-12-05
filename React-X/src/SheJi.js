

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import axios from 'axios';

import $ from 'jquery';

export default class SheJi extends React.Component {
	  constructor (props){
	  	super(props)
	  	this.state = {}
	  }
	
	render (){
		return(
			  <div className="content-main container">
           <div className="nav-search">
             <div className="search-top search-box">
                <div className="search-name">
                <nav className="search-nav">
                  <span>服务:</span>
                  <Link to="/myzu">全部</Link>
                  <Link to="/" style={{fontSize:"13px"}}>设计棒棒哒,棒棒哒</Link>
                </nav>
                </div>
             </div>
           </div>
           <div className="dimension">
               <div className="ui dropdown fl">
                <label>推荐排序</label> <span>></span>
               </div>
               <div className="ui dropdown fl">
                <label>不限项目周期</label> <span>></span>
               </div>
               <div className="fr">
                 <span className="fl">
                   提供加急服务
                 </span>
                 <div className="fr checkbox">
                    <div>
                      <span>
                      
                      </span>
                    </div>
                 </div>
               </div>
           </div>
           <div className="ui divider"></div>
           <Cards />
        </div>
		)
	}
	
}

export class Cards extends React.Component{
	constructor(props){
		super(props);
		this.state={
			 posts: []
		}
		
	}
	
	componentDidMount() {

    axios.get('./api/shuju.json','josn')

      .then(res => {
     
        const posts = res.data;
        this.setState({posts});
        console.log(posts)
      });

    }
	
		
	render (){
		return(
			<div className="result clearfix">
			   <div className="ui four cards clearfix">
                  
            {this.state.posts.map(post =>

                <div className="ui service link card" key={post.id}>
			         <Link to="/">
			            <img src={post.url} />
			         </Link>
			         <div className="title">
			          
			           {post.name}
			          
			         </div>
			         <footer className="footer">
			            <span className="price">{post.price}</span>
			            <p className="tip">{post.p}</p>
			         </footer>
			      </div>

            )}
			      
			   </div> 
			   
			   <Pages />
			   
			</div>
		)
	}
	
}


export class Pages extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			pages:[1,2,3,4,5,6,7]
		};
	}
	
	
	render (){
		
		return(
			    
			  <div className="center">
			       <nav className="page-menu">
			           <Link to="/" className="page-item">
			                <i>
			                &lt;&lt;
			                </i>
			           </Link>
			         
			         {this.state.pages.map(page =>
			         	<Link to="/" className="page-item" key={page}>
			                {page}
			           </Link>
			         )}
			         
			         <span to="/" className="page-item">
                     ...
			         </span>
			         	<Link to="/" className="page-item">		               
			               29		                
			           </Link>
			          <Link to="/" className="page-item">		               
			               30		               
			          </Link>
			          <Link to="/" className="page-item">
			                <i>
			                &gt;
			                </i>
			          </Link>
			          <Link to="/" className="page-item">
			                <i>
			                &gt;&gt;
			                </i>
			          </Link>
			         
			       </nav>
			   </div>
			    
		)
		
	}
	
}