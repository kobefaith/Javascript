function getTimeRemaining(endtime){
	var t = Date.parse(endtime)-Date.parse(new Date());
	var seconds = Math.floor((t/1000)%60);
	var minutes = Math.floor((t/(1000/60)%60);
	var hours = Math.floor((t/(1000/60/60))%24);
	var days = Math.floor(t/(1000*60*60*24));
	return{
		'total':t,
		'days':days,
		'hours':hours,
		'minutes':minutes,
		'seconds':seconds		
	};
}

var div = React.DOM.div;
var hr = React.DOM.hr;
var h2 = React.DOM.h2;

var DividerClass = React.createClass({
	displayName:'Divider',
	render:function(){
		return div({className:"divider"},
		h2(null,"Label Text"),
		hr()
		);
	}
});

<button className="btn btn-save" onClick={this.handleeSaveclick}>Save</button>
var SurveyEditer = React.createClass({
	render:function(){
		return(
		   <div className='survey-editor'>
		     <div className='row'>
			    <aside className='sidebar col-md-3'>
				   <h2>Modules</h2>
				   <DraggableQuestions/>
				</aside>
				<div className='survey-canvas col-md-9'>
				  <div 
				      className={'drop-zone well well-drop-zone'}
					  onDragOver={this.handleDragOver}
					  onDragEnter={this.handleDragEnter}
					  onDragLeave={this.handleDragLeave}
					  onDrop={this.handleDrop}
				   >
				   Drag and drop a module from the left
				   </div>
				</div>
			</div>
		</div>					  
		);
	}
});
this.setState({title:"fantastic survey 2.0"});
handleComplete:function(event){
	this.callMethodOnProps('onCompleted',event.target.value);
}

var AnswerRadioInput = React.createClass({
	render: function(){
		return (
		   <div className="radio">
		      <label>
		           <input type="radio" />
			   	Label Text 				
		      </label>
			</div>
		);
	}
});

















