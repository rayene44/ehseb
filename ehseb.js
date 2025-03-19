t=Array()
function ehseb(){
    if(t1!="")
t1=document.getElementById("t1").value;
p1=document.getElementById("p1");
p1.innerHTML=t1
t[0]=t1
}
function ehseb2(){
    t2=document.getElementById("t2").value;
    t3=document.getElementById("t3").value;
    p2=document.getElementById("p2");
    if((t2!="")&&(t3!=""))
        p2=document.getElementById("p2");
        p2.innerHTML=(Number(t2)+(Number(t3)*2))
        t[1]=Number(t2)+(Number(t3)*2)}
        function ehseb3(p3){
            t4=document.getElementById("t4").value;
            t5=document.getElementById("t5").value;
            t6=document.getElementById("t6").value;
            if((t4!="")&&(t5!=""))
                p3=document.getElementById("p3");
                p3.innerHTML=((Number(t4)+Number(t5)+(Number(t6)*2))/4)*3
    t[2]=((Number(t4)+Number(t5)+(Number(t6)*2))/4)*3
            }
 function ehseb4(){
            t7=document.getElementById("t7").value;
            t8=document.getElementById("t8").value;
            t9=document.getElementById("t9").value;
            if(((t7!="")&&(t8!=""))&&(t9!="")){
                p4=document.getElementById("p4");
                p4.innerHTML=((Number(t7)+Number(t8)+(Number(t9)*2))/4)*3
                t[3]=((Number(t7)+Number(t8)+(Number(t9)*2))/4)*3}
                else{
                alert("erreur")
                }
            }
function ehseb5(){
             t10=document.getElementById("t10").value;
                    t11=document.getElementById("t11").value;
                    t12=document.getElementById("t12").value;
                    if((t10!="")&&(t11!="")&&(t12!="")){
                        p5=document.getElementById("p5");
                        p5.innerHTML=((Number(t10)+Number(t11)+(Number(t12)*2))/4)*3
                        t[4]=((Number(t10)+Number(t11)+(Number(t12)*2))/4)*3}
                    }
function ehseb6(p6){
  t13=document.getElementById("t13").value;
 t14=document.getElementById("t14").value;
t15=document.getElementById("t15").value;
if((t13!="")&&(t14!="")&&(t15!=""))
 p6=document.getElementById("p6");
 p6.innerHTML=((Number(t13)+Number(t14)+(Number(t15)*2))/4)
t[5]=((Number(t13)+Number(t14)+(Number(t15)*2))/4)
}
 function ehseb7(p7){
    t16=document.getElementById("t16").value;
   t17=document.getElementById("t17").value;
  t18=document.getElementById("t18").value;
  if((t16!="")&&(t17!="")&&(t18!=""))
        p7=document.getElementById("p7");
        p7.innerHTML=((Number(t16)+Number(t17)+(Number(t18)*2))/4)
        t[6]=((Number(t16)+Number(t17)+(Number(t18)*2))/4)
}
   function ehseb8(p8){
    t19=document.getElementById("t19").value;
   t20=document.getElementById("t20").value;
  t21=document.getElementById("t21").value;
  if((t19!="")&&(t20!="")&&(t21!=""))
   p8=document.getElementById("p8");
   p8.innerHTML=((Number(t19)+Number(t20)+(Number(t21)*2))/4)
t[7]=((Number(t19)+Number(t20)+(Number(t21)*2))/4)
}
   function ehseb9(p9){
    t22=document.getElementById("t22").value;
   t23=document.getElementById("t23").value;
  if((t22!="")&&(t23!="")&&(t23!=""))
   p9=document.getElementById("p9");
   p9.innerHTML=(Number(t22)+(Number(t23))*2)/3
t[8]=(Number(t22)+(Number(t23))*2)/3
}
   function ehseb10(p10){
    t25=document.getElementById("t25").value;
   t26=document.getElementById("t26").value;
  if((t25!="")&&(t26!="")&&(t26!=""))
   p10=document.getElementById("p10");
   p10.innerHTML=((Number(t25)+Number(t26))/2)
   t[9]=((Number(t25)+Number(t26))/2)
}
   function moyene(){
    somme=Number(t[0])+Number(t[1])+Number(t[2])+Number(t[3])+Number(t[4])+Number(t[5])+Number(t[6])+Number(t[7])+Number(t[8])+Number(t[9])
    p11=document.getElementById("p11");
    p11.innerHTML=somme/18;
   }