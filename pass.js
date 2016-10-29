const cat = {
	lower:'abcdefghijklmnopqrstuvwxyz',
	upper:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	number:'0123456789',
	symbol:'!@#$%^&*()-_=+',
	ambiguous:'~`\\|\';:/?><.,'
};

var length,low,upp,num,sym,amb,pool,pass;
pass = '';
pool = '';


const get = function() {
	var e = document.getElementById("len");
	length = e.options[e.selectedIndex].value;
	low = false;
	upp = false;
	num = false;
	sym = false;
	amb = false;
	if (document.getElementById('low').checked) {low = true;}
	if (document.getElementById('upp').checked) {upp = true;}
	if (document.getElementById('num').checked) {num = true;}
	if (document.getElementById('sym').checked) {sym = true;}
	if (document.getElementById('amb').checked) {amb = true;}
	return 0;
}

const arrSetup = function() {
	if (low) {pool += cat.lower;}
	if (upp) {pool += cat.upper;}
	if (num) {pool += cat.number;}
	if (sym) {pool += cat.symbol;}
	if (amb) {pool += cat.ambiguous;}
	return 0;
};

const passCalc = function() {
	for (i=0;i<length;i++) {
		pass += pool.charAt(Math.floor(Math.random() * pool.length) + 1);
	}
};

const main = function() {
	get();
	arrSetup();
	passCalc();
	document.getElementById('passArea').value = pass;
	pass = '';

	return;
}
