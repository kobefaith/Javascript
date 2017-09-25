function first(){
	return new Promise((resolve,reject)=>{
		let temp = 'test1';
		setTimeout(function(){
			console.log('11111111111');
			resolve(temp);
		},10000);
	})
}
function second(){
	return new Promise((resolve,reject)=>{
		let temp = 'test2';
		setTimeout(function(){
			console.log('222222222');
			resolve(temp);
		},5000);
	})
}

function third(){
	return new Promise((resolve,reject)=>{
		let temp = 'test3';
		setTimeout(function(){
			console.log('333333333');
			resolve(temp);
		},1000);
	})
}

let fir = first();
let sec = second();
let thir = third();
let start = new Date().getTime();
Promise.all([fir,sec,thir]).then((temp1)=>{	
     console.log('the promise are finished.  '+temp1);
     let end = new Date().getTime();
     console.log('the time consume is  '+(end-start)/1000+' s' );
});
