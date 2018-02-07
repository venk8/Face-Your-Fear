 window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "ARE YOU SURE";

  (e || window.event).returnValue = confirmationMessage; //Gecko + IE
  return confirmationMessage;                            //Webkit, Safari, Chrome
});




var an=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var res=['-','-','-','-','-','-','-','-','90'];
var pg=1;
z=0;
function change(a,b,c)
{
if(b!=0)
	{pg=(Math.trunc((pg-1)/3)*3)+b;

     set2(b);
	 
	 
	 }	
else if(c!=0)
	{if(c==1)
		pg=pg+1;
	else
		pg=pg-1;
	
	set1((Math.trunc((pg-1)/3))+1);
	if(pg%3==0)
		set2(5);
	else if(pg!=16)
		set2(pg%5);
	
	}
else
	{pg=(3*(a-1))+1;

set2(1);
	set1(a);
	

	}
	

setimg(pg);
setqu(pg);

	hid(pg);
	col(pg);

}


	
function hid(num)
{if(num==15)
	{document.getElementById('rep').style.visibility = "hidden";
document.getElementById('rep1').style.visibility = "visible";
document.getElementById('rep2').style.visibility = "visible";
 }  
 else if(num==1)
 {document.getElementById('rep1').style.visibility = "hidden";
document.getElementById('rep').style.visibility = "visible";
document.getElementById('rep2').style.visibility = "hidden";}
else
{document.getElementById('rep1').style.visibility = "hidden";
document.getElementById('rep').style.visibility = "visible";
document.getElementById('rep2').style.visibility = "visible";}
}
 


function setimg(imgno)
{
	var image=document.getElementById('img');
image.src="image/qnimg"+imgno+".jpg";
}

function col(qo1)
{
	
	z=an[qo1-1];
var a1=document.getElementById('ans1');
var a2=document.getElementById('ans2');
var a3=document.getElementById('ans3');
var a4=document.getElementById('ans4');
var a5=document.getElementById('ans5');

	if(z==0)
	{a1.className="w3-button w3-white w3-border w3-border-green w3-round-large";
	a2.className="w3-button w3-white w3-border w3-border-blue w3-round-large";
	a3.className="w3-button w3-white w3-border w3-border-yellow w3-round-large";
	a4.className="w3-button w3-white w3-border w3-border-orange w3-round-large";
	a5.className="w3-button w3-white w3-border w3-border-red w3-round-large";
	}
	else if(z==1)
	{a1.className="w3-button w3-green w3-border w3-border-green w3-round-large";
	a2.className="w3-button w3-white w3-border w3-border-blue w3-round-large";
	a3.className="w3-button w3-white w3-border w3-border-yellow w3-round-large";
	a4.className="w3-button w3-white w3-border w3-border-orange w3-round-large";
	a5.className="w3-button w3-white w3-border w3-border-red w3-round-large";
	}
	else if(z==2)
	{a1.className="w3-button w3-white w3-border w3-border-green w3-round-large";
	a2.className="w3-button w3-blue w3-border w3-border-blue w3-round-large";
	a3.className="w3-button w3-white w3-border w3-border-yellow w3-round-large";
	a4.className="w3-button w3-white w3-border w3-border-orange w3-round-large";
	a5.className="w3-button w3-white w3-border w3-border-red w3-round-large";
	}
	else if(z==3)
	{a1.className="w3-button w3-white w3-border w3-border-green w3-round-large";
	a2.className="w3-button w3-white w3-border w3-border-blue w3-round-large";
	a3.className="w3-button w3-yellow w3-border w3-border-yellow w3-round-large";
	a4.className="w3-button w3-white w3-border w3-border-orange w3-round-large";
	a5.className="w3-button w3-white w3-border w3-border-red w3-round-large";
	}
	else if(z==4)
	{a1.className="w3-button w3-white w3-border w3-border-green w3-round-large";
	a2.className="w3-button w3-white w3-border w3-border-blue w3-round-large";
	a3.className="w3-button w3-white w3-border w3-border-yellow w3-round-large";
	a4.className="w3-button w3-orange w3-border w3-border-orange w3-round-large";
	a5.className="w3-button w3-white w3-border w3-border-red w3-round-large";
	}

	else
	{
	a1.className="w3-button w3-white w3-border w3-border-green w3-round-large";
	a2.className="w3-button w3-white w3-border w3-border-blue w3-round-large";
	a3.className="w3-button w3-white w3-border w3-border-yellow w3-round-large";
	a4.className="w3-button w3-white w3-border w3-border-orange w3-round-large";
	a5.className="w3-button w3-red w3-border w3-border-red w3-round-large";
	} 
	
}

function setqu(no)
{var a=document.getElementById('ques');
var b=document.getElementById('gametitlebox');
	
	if(no==1)
	{a.innerHTML= 'lkhbbnusaninsiujniusjnij linsinl sinis j oh i sdh isnhs jh scih s hs hjs cnsk sljz njs ncjhs cjh sjkc s chsdzkljcn sxjzc djsk njhsjc js cj lknsc js  ohbsubhosb jsnh ws bjhnsoijncijsdnck ajc sdkc kjdsn ksjvnf nsijncijn';
	b.innerHTML='do you fear height..';}
 
 else
{a.innerHTML= 'kjbdfjsvjlnkb,,nl    knsovbkj;wb kboubk ';
b.innerHTML='hI';} 
 }

function set1(no1)
{
	var m1=document.getElementById('l1');
	var m2=document.getElementById('l2');
	var m3=document.getElementById('l3');
	var m4=document.getElementById('l4');
	var m5=document.getElementById('l5');
	
	if(no1==1)
	{m1.className="w3-button w3-circle w3-teal";
     m2.className="w3-button w3-circle w3-black";
	 m3.className="w3-button w3-circle w3-black";
	 m4.className="w3-button w3-circle w3-black";
	 m5.className="w3-button w3-circle w3-black";	
		
	}
	else if(no1==2)
	{m2.className="w3-button w3-circle w3-teal";
     m1.className="w3-button w3-circle w3-black";
	 m3.className="w3-button w3-circle w3-black";
	 m4.className="w3-button w3-circle w3-black";
	 m5.className="w3-button w3-circle w3-black";	
		
	}
	else if(no1==3)
	{m3.className="w3-button w3-circle w3-teal";
     m2.className="w3-button w3-circle w3-black";
	 m1.className="w3-button w3-circle w3-black";
	 m4.className="w3-button w3-circle w3-black";
	 m5.className="w3-button w3-circle w3-black";	
		
	}
	else if(no1==4)
	{m4.className="w3-button w3-circle w3-teal";
     m2.className="w3-button w3-circle w3-black";
	 m3.className="w3-button w3-circle w3-black";
	 m1.className="w3-button w3-circle w3-black";
	 m5.className="w3-button w3-circle w3-black";	
		
	}
	else
	{m5.className="w3-button w3-circle w3-teal";
     m2.className="w3-button w3-circle w3-black";
	 m3.className="w3-button w3-circle w3-black";
	 m4.className="w3-button w3-circle w3-black";
	 m1.className="w3-button w3-circle w3-black";	
		
	}
}


function set2(no2)
{
	var l1=document.getElementById('s1');
	var l2=document.getElementById('s2');
	var l3=document.getElementById('s3');
	
if(no2==2)
{l1.className="w3-button w3-circle w3-teal";
l2.className="w3-button w3-circle w3-disable";
l3.className="w3-button w3-circle w3-teal";
}
else if(no2==1)
{l1.className="w3-button w3-circle w3-disable";
l2.className="w3-button w3-circle w3-teal";
l3.className="w3-button w3-circle w3-teal";
}
else 
{l1.className="w3-button w3-circle w3-teal";
l2.className="w3-button w3-circle w3-teal";
l3.className="w3-button w3-circle w3-disable";
}
}
	

function save(n)
{an[pg-1]=n;
col(pg);
}

function sub()
{
	var re=an[0]+an[1]+an[5];
	document.getElementById('show1').style.display="none";
	var x1=document.getElementById('fin1');
	var x2=document.getElementById('fin2');
	var x3=document.getElementById('fin3');
	var x4=document.getElementById('fin4');
	var x5=document.getElementById('fin5');
	var x6=document.getElementById('fin6');
	var x7=document.getElementById('fin7');
	var x8=document.getElementById('fin8');
	var x9=document.getElementById('fin9');
	
	
	
	
	x1.innerHTML=res[0];
	x2.innerHTML=res[1];
	x3.innerHTML=res[2];
	x4.innerHTML=res[3];
	x5.innerHTML=res[4];
	x6.innerHTML=res[5];
	x7.innerHTML=res[6];
	x8.innerHTML=res[7];
	x9.innerHTML=res[8];
	
	document.getElementById('show2').style.display="block";
	//document.getElementById('show2').innerHTML = re;//
	
	} 
	
function win(n)
{var a=confirm("do you want to quit!");
if(a==true&&n==1)
{window.location.href= "index.php";
}
else if(a==true&&n==2)
{window.location.href= "credits.html";
}
}
	
