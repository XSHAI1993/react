

import React from 'react';  // 必须引入
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import BasicExample from './BasicExample';

//import javascript from './javascript';


ReactDOM.render(
  <AppContainer>
  
  <BasicExample/>
    
  </AppContainer>,
  document.getElementById('main')
);

// 添加的代码
import $ from 'jquery';

(function(){

$('.nav-box').delegate('a','click',function(){
	
	$('.nav-box').children().removeClass('bd')
	
	if($(this)[0].className == "Logo"){
		
		var index = $('.nav-box').children()
		
		index[1].className = 'bd';
		
	}else{
		
		$(this).addClass('bd')
		
	}
	
})
		
}())

//$('body').height( $(window).innerHeight() );
 


if ( module.hot ) {
  module.hot.accept();
}

