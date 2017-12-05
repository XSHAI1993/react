
//引入 react
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import AsyncLoader from "./AsyncLoader";
import axios from 'axios';



export default class BasicExample extends React.Component {
  render() {
    return (
      <Router>
        <div id="content">
          <div className="header" id="header">
          
            <nav className="nav container">
                    <div className="nav-box">
                    
                          <Link to="/logo" className="Logo">
                           <span></span>
                          </Link>
                          <Link to="/" className="bd">首页</Link>
                          <Link to="/sheji">设计服务</Link>
                          <Link to="/counter">计时</Link>
                          <Link to="/myzu">设计师</Link>
                           
                          <Login />
                                                       
                    </div>
            </nav>
          
          </div>
          
          <Route exact path="/" render={() => <Home />}/>
          
          <Route  path="/sheji" render={() => <AsyncLoader path="SheJi.js"/>}/>
          <Route path="/myzu" render={() => <AsyncLoader path="Myindex.js"/>}/>
          <Route path="/counter" render={() => <AsyncLoader path="Counter.js"/>}/>
          <Footer />
        </div>
      </Router>
    );
  }
}


const Topics = ({ match }) => (
  <div className="content-main container">
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/props-v-state`}>
           点击我
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
    	
      <h3>请你选择一个路由</h3>
      
    )}/>
  </div>
)
const Topic = ({ match }) => (
	
  <div>
    <h3>这个路由参数是:{match.params.topicId}</h3>
  </div>
  
)

export  class Login extends React.Component{
	constructor (props){
		super(props);
		this.state = {name:"登录",
		              zhuce:"注册"
		}
	}
	
  
	render (){
		
		return (
			
			<div className="fr lz-box">
			<Link to="/login" className="login">{this.state.name}</Link>
			<Link to="/zhuce" className="zhuce">{this.state.zhuce}</Link>
			</div>
			
		)
		
	}
	
}

export class Home extends React.Component {
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
                  <span>分类:</span>
                  <Link to="/myzu">全部</Link>
                  <Link to="/" style={{fontSize:"13px"}}>LOGO/品牌</Link>
                  <Link to="/">平面设计</Link>
                  <Link to="/">UI 设计</Link>
                  <Link to="/">绘画/插画</Link>
                  <Link to="/">工业/产品设计</Link>
                  <Link to="/">影视/动画</Link>
                  <Link to="/">摄影</Link>
                  <Link to="/">服装设计</Link>
                  <Link to="/">室内设计</Link>
                  <Link to="/">造型设计</Link>
                  <Link to="/">私家定制</Link>
                  <Link to="/">其它</Link>
                </nav>
                </div>
             </div>
             <div className="search-bottom search-box">
               <div className="search-name">
                  <nav className="search-nav">
                  <span>子类:</span>
                  <Link to="/">明信片</Link>
                  <Link to="/">海报/易拉宝</Link>
                  <Link to="/">宣传册/宣传单页</Link>
                  <Link to="/">产品包装</Link>
                  <Link to="/">封面设计</Link>
                  <Link to="/">其它平面设计</Link>
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
			posts:[],
			pages:[1,2,3,4,5,6,7,8,9]
		}
	}
	
	componentDidMount (){
		
	axios.get('./api/shuju.json','json')
	
	.then(res => {
		
	const posts = res.data;
	this.setState({posts});
	
	console.log(posts)
		
	})
		
	}
	
	render (){
		return(
			<div className="result clearfix">
			   <div className="ui four cards clearfix">
			      <div className="ui service link card">
			         <Link to="/">
			            <img src="./img/280x280 (1).gif" />
			         </Link>
			         <div className="title">
			          
			              封面设计
			          
			         </div>
			         <footer className="footer">
			            <span className="price">价格面议</span>
			            <p className="tip">提供可选拓展</p>
			         </footer>
			      </div>
			      <div className="ui service link card">
			         <Link to="/">
			            <img src="./img/280x280 (8).jpg" />
			         </Link>
			         <div className="title">
			          
			              封面设计
			          
			         </div>
			         <footer className="footer">
			            <span className="price">价格面议</span>
			            <p className="tip">提供可选拓展</p>
			         </footer>
			      </div>
			      <div className="ui service link card">
			         <Link to="/">
			            <img src="./img/280x280 (2).jpg" />
			         </Link>
			         <div className="title">			          
			              封面设计		          
			         </div>
			         <footer className="footer">
			            <span className="price">价格面议</span>
			            <p className="tip">提供可选拓展</p>
			         </footer>
			      </div>
			      <div className="ui service link card">
			         <Link to="/">
			            <img src="./img/280x280 (3).jpg" />
			         </Link>
			         <div className="title">
			          
			              封面设计
			          
			         </div>
			         <footer className="footer">
			            <span className="price">价格面议</span>
			            <p className="tip">提供可选拓展</p>
			         </footer>
			      </div>
			      
          {this.state.posts.map (post =>
          	
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
			</div>
		)
	}
	
}





export class Footer extends React.Component{
	  constructor(props){
	  	super(props);
	  	this.state = {};
	  }
	  
	  render (){
	  	return(
	  		<footer className="site footer-box">
			     <div className="links container">
			         <h2 className="ui-header">花瓣美思，花瓣网旗下网站</h2>
			         <div className="row">
			            <div className="cloum">
			                <label>
			                   花瓣美思
			                </label>
                   <div>
                                            <Link to="/" className="footer-link">
			                   关于美思
			                </Link>
			                                      <Link to="/" className="footer-link">
			                   雇主问题
			                </Link>
			                                      <Link to="/" className="footer-link">
			                  设计师问题
			                </Link>
			                                      <Link to="/" className="footer-link">
			                  使用帮助
			                </Link>
                   </div>
			            </div>
			            			            <div className="cloum">
			                <label>
			                   平台战略合作伙伴
			                </label>
                   <div>
                                            <Link to="/" className="footer-link">
			                   中华世纪坛创意新媒体联盟
			                </Link>
			                                      <Link to="/" className="footer-link">
			                   视觉中国
			                </Link>
			                                      <Link to="/" className="footer-link">
			                  腾讯风铃
			                </Link>
			                                      <Link to="/" className="footer-link">
			                  ixdc
			                </Link>
			                			                 <Link to="/" className="footer-link">
			                  红星奖
			                </Link>
                   </div>
			            </div>
			            			            <div className="cloum">
			                <label>
			                  联系与合作
			                </label>
                   <div>
                                            <Link to="/" className="footer-link">
			                   关于美思
			                </Link>
			                                      <Link to="/" className="footer-link">
			                   雇主问题
			                </Link>
			                                      <Link to="/" className="footer-link">
			                  设计师问题
			                </Link>
			                                      <Link to="/" className="footer-link">
			                  使用帮助
			                </Link>
                   </div>
			            </div>
			            			            <div className="cloum">
			                <label>
			                   移动客户端
			                </label>
                   <div>
                                            <Link to="/" className="footer-link">
			                   关于美思
			                </Link>
			                                      <Link to="/" className="footer-link">
			                   雇主问题
			                </Link>
			                                      <Link to="/" className="footer-link">
			                  设计师问题
			                </Link>
			                                      <Link to="/" className="footer-link">
			                  使用帮助
			                </Link>
                   </div>
			            </div>
			         </div>
			     </div>
			     <div className="copyright">
			        <div className="container">
			            Copyright© Huaban.com 2016 | 浙B2-20110282 浙ICP备05049240
			        </div>
			     </div>
			  </footer>
	  	)
	  }
}

import $ from 'jquery';

$('#header').height(54);
