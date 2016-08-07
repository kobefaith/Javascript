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





















