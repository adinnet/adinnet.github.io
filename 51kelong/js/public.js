// 招贤纳士
function Showjobslist(sid)
{ 
objdiv = document.getElementById("jobslist"+sid);
obja = document.getElementById("aw"+sid);
obja.style.cursor="pointer";
if(objdiv.style.display == "none"){
	objdiv.style.display = "block";
	obja.innerHTML = "收起";
	}
else{
	objdiv.style.display = "none";
	obja.innerHTML = "展开";
	}
}

function showsol(id){
  window.open("/SolutionView.asp?id="+id,"");
 }
 
function showabout(id){
  window.open("/aboutview.asp?id="+id,"_blank");
 } 
 
function showcase(id){
  window.open("/caseview.asp?id="+id,"_blank");
 } 
 
function showtech(id){
  window.open("/techview.asp?id="+id,"_blank");
 } 

// 菜单
function Shownavover(id)
	{ 
		objdiv = document.getElementById("navover"+id);
		objdiv.style.display = "block";
		objdiv = document.getElementById("nav"+id);
	}
function Shownavout(id)
	{ 
		objdiv = document.getElementById("navover"+id);
		objdiv.style.display = "none";
		objdiv = document.getElementById("nav"+id);
	}
	
	
// 右边菜单

function Showsidenav(id)
{ 
objdiv = document.getElementById("sidenav"+id);
if(objdiv.style.display == "none"){
	objdiv.style.display = "block";
	}
else{
	objdiv.style.display = "none";
	}
}

////显示隐藏TAB标签对象
function changetab_objdiv(event_obj,div_obj,now_i,total_num,the_class,other_class)
{
	for(var i=1;i<=total_num;i++)
	{
		if(document.getElementById(event_obj+i))
		{
			var the_eobj=document.getElementById(event_obj+i);
			if(now_i==i)
			{
				the_eobj.className=the_class;
			}
			else
			{
				if(other_class)
				{
					the_eobj.className=other_class;
				}
				else
				{
					the_eobj.className="";
				}
			}
		}
		if(document.getElementById(div_obj+i))
		{
			var item_obj=document.getElementById(div_obj+i);
			if(now_i==i)
			{
				item_obj.style.display="";
			}
			else
			{		
				item_obj.style.display="none";
			}
		}
	}
}