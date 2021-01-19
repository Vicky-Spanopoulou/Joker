function klirosi(){
	var n;
	var i;
	var p=new Array();
	for (i=1; i<=5; i++){
		do{
			n=Math.floor(Math.random()*45)+1;
			console.log(n);
			console.log(p.indexOf(n));
		} while (p.indexOf(n)!= -1);
			p.push(n);
		}
	var ex=document.querySelector("#exada");
		ex.innerHTML=p;
}
function klirosiJkr(){
	var n;
		n=Math.floor(Math.random()*20)+1;
	var jk=document.querySelector("#jkr");
		jk.innerHTML=n;
}
