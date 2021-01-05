// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

const address =(words.get('address1'));
const pathoname=(words.get('pathoname1'));
const sex=(words.get('sex1'));
const doctorname=(words.get('doctorname1'));

const name1 = (words.get('name1'));
const patientid = (words.get('patientid1'));
const phone1= (words.get('phone1'));
const age1  = (words.get('age1'));
const pathophone= (words.get('phonepatho'));
const age=`${age1}/${sex}`;
const receivedate  = (words.get('receivedate'));
const printdate  = (words.get('printdate'));
const Direct  = (words.get('direct'));
const indirect  = (words.get('indirect'));
const totalb=Number(indirect)+Number(Direct);
var totalbf =totalb.toFixed(2);
const sgot  = (words.get('sgot'));
const sgpt = (words.get('sgpt'));
const  gamma = (words.get('gamma'));
const  alp = (words.get('alp'));
const  ldh = (words.get('ldh'));
const  albumin= (words.get('albumin'));
const  globulin=(words.get('globulin'));
const totalp=Number(albumin)+Number(globulin);
const ratio=Number(albumin)/Number(globulin);
var ratiof = ratio.toFixed(2);

var primaryr =new Array('Range_1','Range_2','Range_3','Range_4')
var primaryu =new Array('Unit_1','Unit_2','Unit_3','Unit_4')
var primaryv =new Array('Value_1','Value_2','Value_3','Value_4')
var primaryp =new Array('Parameter_1','Parameter_2','Parameter_3','Parameter_4' )

var dlcr =new Array('Range_5','Range_6','Range_7','Range_8')
var dlcv =new Array('Value_5','Value_6','Value_7','Value_8')
var dlcp =new Array('Parameter_5','Parameter_6','Parameter_7','Parameter_8')
var rbctabler =new Array('Range_9','Range_10','Range_11','Range_12')
var rbctablev =new Array('Value_9','Value_10','Value_11','Value_12')
var rbctablep =new Array('Parameter_9','Parameter_10','Parameter_11','Parameter_12')

var i=0;
var j=0;
var k=0;
var rbccheck=0;
var haemocheck=0;
var plateletscheck=0;
var wbccheck=0;
var neutrocheck=0;
var monocheck=0;
var lymphocheck=0;
var eosinocheck=0;
var pcvcheck=0;
var mchcheck=0;
var mchccheck=0;
var mcvcheck=0;
console.log(primaryr[i]);
console.log(dlcv[j]);

const nameChange=document.getElementById("Shubham_Jain");
const AgeChange = document.getElementById("ID22M");
//const RegNoChange = document.getElementById("Reg_No__dv");
const doctornameChange = document.getElementById("Dr_MediPort");
const DateChange = document.getElementById("ID22012020");
const PhoneNoChange= document.getElementById("ID7987418952");
const addresschange= document.getElementById("Danish_Kunj_BhopalMP");
const pathonamechange=document.getElementById("Darsh_Pathology");
const pathoname2change=document.getElementById("Darsh_Pathology_dy");
const patientidchange=document.getElementById("ID123456");
const pathophonechange=document.getElementById("ID91-7987418952");
const directchange=document.getElementById("ID04_co");
const Indirectchange=document.getElementById("ID04_cn");
const Totalbchange=document.getElementById("ID04");
const sgotchange=document.getElementById("ID212");
const sgptchange=document.getElementById("ID153");
const gammachange=document.getElementById("ID100");
const alpchange=document.getElementById("ID208");
const ldhchange=document.getElementById("ID397");
const totalpchange=document.getElementById("ID04_dg");
const albuminchange=document.getElementById("ID04_dm");
const globulinchange=document.getElementById("ID04_dl");
const ratiochange=document.getElementById("ID04_dq");


nameChange.innerHTML = name1;
pathonamechange.innerHTML=pathoname;
PhoneNoChange.innerHTML=phone1;
addresschange.innerHTML=address;
doctornameChange.innerHTML =doctorname;
pathoname2change.innerHTML=pathoname;
patientidchange.innerHTML = patientid ; 
AgeChange.innerHTML =age;
DateChange.innerHTML = printdate;
pathophonechange.innerHTML=pathophone;
directchange.innerHTML=Direct;
Indirectchange.innerHTML=indirect;
Totalbchange.innerHTML=totalbf;
sgotchange.innerHTML=sgot;
sgptchange.innerHTML=sgpt;
gammachange.innerHTML=gamma;
alpchange.innerHTML=alp;
ldhchange.innerHTML=ldh;
totalpchange.innerHTML=totalp;
albuminchange.innerHTML=albumin;
globulinchange.innerHTML=globulin;
ratiochange.innerHTML=ratiof;



if(Direct >0.3){
  document.getElementById("ID04_co").style.color="red";

}else{
  document.getElementById("ID04_co").style.color="green";

}


if(indirect>1){
   document.getElementById("ID04_cn").style.color="red";
}else{
  document.getElementById("ID04_cn").style.color="green";

}


if(totalb>1.2){
  document.getElementById("ID04").style.color="red";
  document.getElementById("HIGH").innerHTML="HIGH";
  document.getElementById("HIGH").style.color="red";
  document.getElementById("Elevated_levels_of_bilirubin_j").innerHTML="Elevated levels of bilirubin (jaundice) might indicate<br/>liver damage or disease or certain types of anaemia"
}else{
  document.getElementById("ID04").style.color="green";
    document.getElementById("HIGH").innerHTML="NORMAL";
    document.getElementById("HIGH").style.color="green";
    document.getElementById("Elevated_levels_of_bilirubin_j").innerHTML="Your normal level indicates everything is fine,<br/>which is a good indicator for healthy lifestyle!";


}


var a=0;
if(sgot>35){
  document.getElementById("ID212").style.color="red";
  document.getElementById("Normal").innerHTML="HIGH";
  document.getElementById("Normal").style.color="red";
  document.getElementById("Lownormal_level_indicates_ever").innerHTML="Elevated level may indicate damaged or inflamed<br/>liver cells releasing enzymes into the blood";
   a=1;
}else{
  document.getElementById("ID212").style.color="green";
 
}



if(sgpt>49){
  document.getElementById("ID153").style.color="red";
  document.getElementById("Normal").innerHTML="HIGH";
  document.getElementById("Normal").style.color="red";
  document.getElementById("Lownormal_level_indicates_ever").innerHTML="Elevated level may indicate damaged or inflamed<br/>liver cells releasing enzymes into the blood";
  a=1;
}else{
  document.getElementById("ID153").style.color="green";
}



if(gamma>37){
  document.getElementById("ID100").style.color="red";
  document.getElementById("Normal").innerHTML="HIGH";
  document.getElementById("Normal").style.color="red";
  document.getElementById("Lownormal_level_indicates_ever").innerHTML="Elevated level may indicate damaged or inflamed<br/>liver cells releasing enzymes into the blood";
  a=1;
}else{
   document.getElementById("ID100").style.color="green";
}




if(alp>129){
  document.getElementById("ID208").style.color="red";
  document.getElementById("Normal").innerHTML="HIGH";
  document.getElementById("Normal").style.color="red";
  document.getElementById("Lownormal_level_indicates_ever").innerHTML="Elevated level may indicate damaged or inflamed<br/>liver cells releasing enzymes into the blood";
a=1;
}else{
  document.getElementById("ID208").style.color="green";
}



if(ldh>450){
  document.getElementById("ID397").style.color="red";
  document.getElementById("Normal").innerHTML="HIGH";
  document.getElementById("Normal").style.color="red";
  document.getElementById("Lownormal_level_indicates_ever").innerHTML="Elevated level may indicate damaged or inflamed<br/>liver cells releasing enzymes into the blood";
a=1;
}else{
  document.getElementById("ID397").style.color="green";
}

if(a==0)
{
   document.getElementById("Normal").innerHTML="Low/Normal";
  document.getElementById("Normal").style.color="green";
  document.getElementById("Lownormal_level_indicates_ever").innerHTML="Low/Normal level indicates everything is fine, which<br/>is a good indicator for healthy lifestyle!";
  
}

if(totalp>8.2||totalp<5.7){
  document.getElementById("ID04_dg").style.color="red";

  if(totalp>8.2)
    {document.getElementById("Low").innerHTML="HIGH";
  document.getElementById("Low").style.color="red";
  document.getElementById("Higher_level_may_indicate_dehy").innerHTML=" Higher level may indicate dehydration/ diarrhoea<br/>it could also mean kidney or liver damage";
}
else{
  document.getElementById("Low").innerHTML="LOW";
  document.getElementById("Low").style.color="red";
  document.getElementById("Higher_level_may_indicate_dehy").innerHTML=" Low level could be due to malnutrition or increased<br/>excretion. It can indicate liver/ inflammatory disease";
}
}else{
  document.getElementById("ID04_dg").style.color="green";
document.getElementById("Low").innerHTML="NORMAL";
  document.getElementById("Low").style.color="green";
  document.getElementById("Higher_level_may_indicate_dehy").innerHTML=" Your normal level indicates everything is fine,<br/>which is a good indicator for healthy lifestyle!";
}



if(albumin>4.8||albumin<3.2){
  document.getElementById("ID04_dm").style.color="red";
}else{document.getElementById("ID04_dm").style.color="green";}



if(globulin>3.5||globulin<2.3){
  document.getElementById("ID04_dl").style.color="red";
}else{document.getElementById("ID04_dl").style.color="green";}



if(ratio>2||ratio<1.2){
  document.getElementById("ID04_dq").style.color="red";
}else{document.getElementById("ID04_dq").style.color="green";}





  