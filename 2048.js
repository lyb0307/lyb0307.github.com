// JavaScript Document
var numbers=new Array();
var score_txt=document.getElementById("score_text");
var score=0;
var table=document.getElementById("tb");

function printTable(){
var i,j;
for (i=0;i<4;i++)
	for (j=0;j<4;j++){
		if (numbers[i][j]!=0) table.rows[i].cells[j].innerText=numbers[i][j];
			else table.rows[i].cells[j].innerText="";	
	};
score_txt.innerHTML=score;
};

function addNumber(){
	var r=parseInt(16*Math.random());
	while (numbers[parseInt(r/4)][r%4]!=0){
		r=parseInt(16*Math.random());
	};
	numbers[parseInt(r/4)][r%4]=2;
};

var i,j;
for (i=0;i<4;i++) numbers[i]=new Array();
for (i=0;i<4;i++)
	for (j=0;j<4;j++){
		numbers[i][j]=0;
	};
addNumber();
addNumber();
printTable();
document.onkeydown=KeyDown; 

function  KeyDown(){
	var keycode1=event.keyCode;
	var i,j,k;
	
	if (keycode1==37){
		for (i=0;i<4;i++)
			for (j=0;j<4;j++){
				if (numbers[i][j]==0) continue;
				k=j+1;
				while (k<4 && numbers[i][k]==0) k=k+1;
				if (k<4 && numbers[i][j]==numbers[i][k]){
					numbers[i][j]=numbers[i][j]*2;
					score=score+numbers[i][j];
					numbers[i][k]=0;
				};
				k=j;
				while(k>0 && numbers[i][k-1]==0) k=k-1;
				if (k>=0 && numbers[i][k]==0){
					numbers[i][k]=numbers[i][j];
					numbers[i][j]=0;
				};
			};
		addNumber();
		printTable();
	};
	
	if (keycode1==38){
		for (i=0;i<4;i++)
			for (j=0;j<4;j++){
				if (numbers[j][i]==0) continue;
				k=j+1;
				while (k<4 && numbers[k][i]==0) k=k+1;
				if (k<4 && numbers[j][i]==numbers[k][i]){
					numbers[j][i]=numbers[j][i]*2;
					score=score+numbers[j][i];
					numbers[k][i]=0;
				};
				k=j;
				while(k>0 && numbers[k-1][i]==0) k=k-1;
				if (k>=0 && numbers[k][i]==0){
					numbers[k][i]=numbers[j][i];
					numbers[j][i]=0;
				};
			};
		addNumber();
		printTable();
	};
	
	if (keycode1==39){
		for (i=0;i<4;i++)
			for (j=3;j>=0;j--){
				if (numbers[i][j]==0) continue;
				k=j-1;
				while (k>=0 && numbers[i][k]==0) k=k-1;
				if (k>=0 && numbers[i][j]==numbers[i][k]){
					numbers[i][j]=numbers[i][j]*2;
					score=score+numbers[i][j];
					numbers[i][k]=0;
				};
				k=j;
				while(k<3 && numbers[i][k+1]==0) k=k+1;
				if (k<=3 && numbers[i][k]==0){
					numbers[i][k]=numbers[i][j];
					numbers[i][j]=0;
				};
			};
		addNumber();
		printTable();
	};
	
	if (keycode1==40){
		for (i=0;i<4;i++)
			for (j=3;j>=0;j--){
				if (numbers[j][i]==0) continue;
				k=j-1;
				while (k>=0 && numbers[k][i]==0) k=k-1;
				if (k>=0 && numbers[j][i]==numbers[k][i]){
					numbers[j][i]=numbers[j][i]*2;
					score=score+numbers[j][i];
					numbers[k][i]=0;
				};
				k=j;
				while(k<3 && numbers[k+1][i]==0) k=k+1;
				if (k<=3 && numbers[k][i]==0){
					numbers[k][i]=numbers[j][i];
					numbers[j][i]=0;
				};
			};
		addNumber();
		printTable();
	};
};
