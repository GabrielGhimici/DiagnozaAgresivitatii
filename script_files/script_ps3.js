window.onload =  myMain;

function myMain() {
	document.getElementById("meniu_princ").onclick = function (){
			showMyMenu();
		}
	var param = location.search.substring(1).split("&");
	var temp 
	temp = param[0].split("=");
	var sex = unescape(temp[1]);
	var q = [];
	for (i=1; i<=29; i++){
		temp = param[i].split("=");
		q[i]= parseInt(unescape(temp[1]));
	}
	var agr_fiz = q[2] + q[6] + q[10] + q[14] + q[18] + q[22] + q[25] + q[27] + q[29];
	var furie = q[1] + q[4] + q[8] + q[12] + q[16] + q[20] + q[23];
	var agr_vb = q[3] + q[7] + q[11] + q[15] + q[19];
	var ostilitate = q[5] + q[9] + q[13] + q[17] + q[21] + q[24] + q[26] + q[28];
	var total = agr_fiz + furie + ostilitate + agr_vb;
	var t_c = document.getElementById("text_continut");
	var cont = document.getElementById("container");
	var div_detalii = document.createElement('div');
	t_c.insertBefore(div_detalii,cont);
	div_detalii.setAttribute('id','div_detalii');
	div_detalii.style.width = "95%";
	div_detalii.style.marginLeft = "auto";
	div_detalii.style.marginRight = "auto";
	var par_det = document.createElement('p');
	div_detalii.appendChild(par_det);
	par_det.setAttribute('id','paragraf_detalii');
	par_det.style.width = "95%";
	par_det.style.marginLeft = "auto";
	par_det.style.marginReft = "auto";
	par_det.style.textAlign = "justify";
	par_det.style.textIndent = "40px";
	par_det.style.fontWeight = "bold";
	var t = document.createTextNode("Testul a luat sfârșit, vă mulțumim pentru timpul acordat. Acesta măsoară următorii patru factori ai agrsivității: agresivitate fizică, agresivitate verbală, furie și ostilitate, vizibil mai jos. Rezultatele sunt însoțite de feed-back și de un grafic ce dă o privire de ansamblu asupra rezultatelor totale.");     
	par_det.appendChild(t);  
	var h = document.createElement("h1");
	t_c.insertBefore(h,cont);
	h.style.width = "100%";
	h.style.textAlign = "center";
	var t = document.createTextNode("Agresivitate Fizică");     
	h.appendChild(t);  
	var div_agrf = document.createElement('div');
	div_agrf.setAttribute('id', 'agr_fizica');
	t_c.insertBefore(div_agrf,cont);
	div_agrf.style.width = "60%";
	div_agrf.style.marginLeft = "auto";
	div_agrf.style.marginRight = "auto";
	div_agrf.style.boxShadow = "5px 5px 15px rgba(10,10,10,0.7)";
	div_agrf.style.minWidth = "100px";
	div_agrf.style.padding = "10px"
	if(sex=="Masculin"){
		var canv = GrDrawComp(9,45,24.3,agr_fiz,"Agresivitate Fizică")
		Ins_CnvToImg(canv,"agr_fiz","agr_fizica");
	}else if(sex=="Feminin"){
		var canv = GrDrawComp(9,45,17.9,agr_fiz,"Agresivitate Fizică")
		Ins_CnvToImg(canv,"agr_fiz","agr_fizica");
	}
	var but_agrf = document.createElement('input');
	but_agrf.setAttribute('id', 'but_agr_fizica');
	but_agrf.setAttribute('type', 'button');
	but_agrf.setAttribute('value', 'Feed-Back');
	but_agrf.style.background = "linear-gradient(rgb(42,101,131),rgb(58,140,182),rgb(42,101,131))";
	but_agrf.style.border = "none";
	but_agrf.style.boxShadow = "3px 3px 10px rgb(10,10,10)";
	but_agrf.style.marginTop = "10px";
	but_agrf.style.marginBottom = "10px";
	but_agrf.style.padding = "10px 12px";
	but_agrf.style.minWidth = "100px";
	but_agrf.style.width = "20%";
	but_agrf.style.marginLeft = "auto";
	but_agrf.style.marginRight = "auto";
	but_agrf.style.textShadow = "1px 1px rgb(12,12,12)";
	but_agrf.style.fontWeight = "900";
    but_agrf.style.textAlign = "center";
	but_agrf.style.color = "rgb(178,178,178)";
	but_agrf.addEventListener('click', function(event){
										add_pop_up(event);
										if (sex == "Masculin") FB_AF(agr_fiz,24.3);
										else if (sex == "Feminin") FB_AF(agr_fiz,17.9);
										setTimeout(function(){
											close_pop_up();
											},90000)
	},false);
	t_c.insertBefore(but_agrf,cont);
	var h1 = document.createElement("h1");
	t_c.insertBefore(h1,cont);
	h1.style.width = "100%";
	h1.style.textAlign = "center";
	var t1 = document.createTextNode("Agresivitate Verbală");     
	h1.appendChild(t1);  
	var div_agrv = document.createElement('div');
	div_agrv.setAttribute('id', 'agr_verb');
	t_c.insertBefore(div_agrv,cont);
	div_agrv.style.width = "60%";
	div_agrv.style.marginLeft = "auto";
	div_agrv.style.marginRight = "auto";
	div_agrv.style.boxShadow = "5px 5px 15px rgba(10,10,10,0.7)";
	div_agrv.style.minWidth = "100px";
	div_agrv.style.padding = "10px"
	if(sex=="Masculin"){
		var canv = GrDrawComp(5,25,15.2,agr_vb,"Agresivitate Verbală")
		Ins_CnvToImg(canv,"agr_verbala","agr_verb");
	}else if(sex=="Feminin"){
		var canv = GrDrawComp(5,25,13.5,agr_vb,"Agresivitate Verbală")
		Ins_CnvToImg(canv,"agr_verbala","agr_verb");
	}
	var but_agrv = document.createElement('input');
	but_agrv.setAttribute('id', 'but_agr_verbala');
	but_agrv.setAttribute('type', 'button');
	but_agrv.setAttribute('value', 'Feed-Back');
	but_agrv.style.background = "linear-gradient(rgb(42,101,131),rgb(58,140,182),rgb(42,101,131))";
	but_agrv.style.border = "none";
	but_agrv.style.boxShadow = "3px 3px 10px rgb(10,10,10)";
	but_agrv.style.marginTop = "10px";
	but_agrv.style.marginBottom = "10px";
	but_agrv.style.padding = "10px 12px";
	but_agrv.style.minWidth = "100px";
	but_agrv.style.width = "20%";
	but_agrv.style.marginLeft = "auto";
	but_agrv.style.marginRight = "auto";
	but_agrv.style.textShadow = "1px 1px rgb(12,12,12)";
	but_agrv.style.fontWeight = "900";
    but_agrv.style.textAlign = "center";
	but_agrv.style.color = "rgb(178,178,178)";
	but_agrv.addEventListener('click', function(event){
										add_pop_up(event)
										if (sex == "Masculin") FB_AV(agr_vb,15.2);
										else if (sex == "Feminin") FB_AV(agr_vb,13.5);
										setTimeout(function(){
											close_pop_up();
										},90000)
	},false);
	t_c.insertBefore(but_agrv,cont);
	var h2 = document.createElement("h1");
	t_c.insertBefore(h2,cont);
	h2.style.width = "100%";
	h2.style.textAlign = "center";
	var t2 = document.createTextNode("Furie");     
	h2.appendChild(t2);  
	var div_fr = document.createElement('div');
	div_fr.setAttribute('id', 'furie');
	t_c.insertBefore(div_fr,cont);
	div_fr.style.width = "60%";
	div_fr.style.marginLeft = "auto";
	div_fr.style.marginRight = "auto";
	div_fr.style.boxShadow = "5px 5px 15px rgba(10,10,10,0.7)";
	div_fr.style.minWidth = "100px";
	div_fr.style.padding = "10px"
	if(sex=="Masculin"){
		var canv = GrDrawComp(7,35,17,furie,"       Furie      ")
		Ins_CnvToImg(canv,"furie","furie");
	}else if(sex=="Feminin"){
		var canv = GrDrawComp(7,35,16.7,furie,"       Furie      ")
		Ins_CnvToImg(canv,"furie","furie");
	}
	var but_fr = document.createElement('input');
	but_fr.setAttribute('id', 'but_furie');
	but_fr.setAttribute('type', 'button');
	but_fr.setAttribute('value', 'Feed-Back');
	but_fr.style.background = "linear-gradient(rgb(42,101,131),rgb(58,140,182),rgb(42,101,131))";
	but_fr.style.border = "none";
	but_fr.style.boxShadow = "3px 3px 10px rgb(10,10,10)";
	but_fr.style.marginTop = "10px";
	but_fr.style.marginBottom = "10px";
	but_fr.style.padding = "10px 12px";
	but_fr.style.minWidth = "100px";
	but_fr.style.width = "20%";
	but_fr.style.marginLeft = "auto";
	but_fr.style.marginRight = "auto";
	but_fr.style.textShadow = "1px 1px rgb(12,12,12)";
	but_fr.style.fontWeight = "900";
    but_fr.style.textAlign = "center";
	but_fr.style.color = "rgb(178,178,178)";
	but_fr.addEventListener('click', function(event){
										add_pop_up(event)
										if (sex == "Masculin") FB_F(furie,17);
										else if (sex == "Feminin") FB_F(furie,16.7);
										setTimeout(function(){
											close_pop_up();
										},90000)
	},false);
	t_c.insertBefore(but_fr,cont);
	var h3 = document.createElement("h1");
	t_c.insertBefore(h3,cont);
	h3.style.width = "100%";
	h3.style.textAlign = "center";
	var t3 = document.createTextNode("Ostilitate");     
	h3.appendChild(t3);  
	var div_ost = document.createElement('div');
	div_ost.setAttribute('id', 'ost');
	t_c.insertBefore(div_ost,cont);
	div_ost.style.width = "60%";
	div_ost.style.marginLeft = "auto";
	div_ost.style.marginRight = "auto";
	div_ost.style.boxShadow = "5px 5px 15px rgba(10,10,10,0.7)";
	div_ost.style.minWidth = "100px";
	div_ost.style.padding = "10px"
	if(sex=="Masculin"){
		var canv = GrDrawComp(8,40,21.3,furie,"    Ostilitate    ")
		Ins_CnvToImg(canv,"ost","ost");
	}else if(sex=="Feminin"){
		var canv = GrDrawComp(8,40,20.2,furie,"    Ostilitate     ")
		Ins_CnvToImg(canv,"ost","ost");
	}
	var but_ost = document.createElement('input');
	but_ost.setAttribute('id', 'but_ost');
	but_ost.setAttribute('type', 'button');
	but_ost.setAttribute('value', 'Feed-Back');
	but_ost.style.background = "linear-gradient(rgb(42,101,131),rgb(58,140,182),rgb(42,101,131))";
	but_ost.style.border = "none";
	but_ost.style.boxShadow = "3px 3px 10px rgb(10,10,10)";
	but_ost.style.marginTop = "10px";
	but_ost.style.marginBottom = "10px";
	but_ost.style.padding = "10px 12px";
	but_ost.style.minWidth = "100px";
	but_ost.style.width = "20%";
	but_ost.style.marginLeft = "auto";
	but_ost.style.marginRight = "auto";
	but_ost.style.textShadow = "1px 1px rgb(12,12,12)";
	but_ost.style.fontWeight = "900";
    but_ost.style.textAlign = "center";
	but_ost.style.color = "rgb(178,178,178)";
	but_ost.addEventListener('click', function(event){
										add_pop_up(event)
										if (sex == "Masculin") FB_O(agr_vb,21.3);
										else if (sex == "Feminin") FB_O(agr_vb,20.2);
										setTimeout(function(){
											close_pop_up();
										},90000)
	},false);
	t_c.insertBefore(but_ost,cont);
	var h4 = document.createElement("h1");
	t_c.insertBefore(h4,cont);
	h4.style.width = "100%";
	h4.style.textAlign = "center";
	var t4 = document.createTextNode("Total");     
	h4.appendChild(t4);  
	var div_tot = document.createElement('div');
	div_tot.setAttribute('id', 'tot');
	t_c.insertBefore(div_tot,cont);
	div_tot.style.width = "60%";
	div_tot.style.marginLeft = "auto";
	div_tot.style.marginRight = "auto";
	div_tot.style.boxShadow = "5px 5px 15px rgba(10,10,10,0.7)";
	div_tot.style.minWidth = "100px";
	div_tot.style.padding = "10px"
	if(sex=="Masculin"){
		var canv = GrDrawTot(29,145,77.8,total);
		Ins_CnvToImg(canv,"tot","tot");
	}else if(sex=="Feminin"){
		var canv = GrDrawTot(8,40,68.2,total);
		Ins_CnvToImg(canv,"tot","tot");
	}
	var but_tot = document.createElement('input');
	but_tot.setAttribute('id', 'but_tot');
	but_tot.setAttribute('type', 'button');
	but_tot.setAttribute('value', 'Feed-Back');
	but_tot.style.background = "linear-gradient(rgb(42,101,131),rgb(58,140,182),rgb(42,101,131))";
	but_tot.style.border = "none";
	but_tot.style.boxShadow = "3px 3px 10px rgb(10,10,10)";
	but_tot.style.marginTop = "10px";
	but_tot.style.marginBottom = "10px";
	but_tot.style.padding = "10px 12px";
	but_tot.style.minWidth = "100px";
	but_tot.style.width = "20%";
	but_tot.style.marginLeft = "auto";
	but_tot.style.marginRight = "auto";
	but_tot.style.marginBottom = "100px";
	but_tot.style.textShadow = "1px 1px rgb(12,12,12)";
	but_tot.style.fontWeight = "900";
    but_tot.style.textAlign = "center";
	but_tot.style.color = "rgb(178,178,178)";
	but_tot.addEventListener('click', function(event){
										add_pop_up(event)
										if (sex == "Masculin") FB_T(total,77.8);
										else if (sex == "Feminin") FB_T(total,68.2);
										setTimeout(function(){
											close_pop_up();
										},10000)
	},false);
	t_c.insertBefore(but_tot,cont);
}
function FB_T(t,norm){
	if( t > norm ) {
			var x = document.getElementById('fb');
			x.innerHTML = "Ai obținut un scor de "+t+", iar valoare normală este de "+norm+".";
			var fb1 = document.getElementById('fb1');
			fb1.innerHTML = "";
	} else if( t <= norm ) {
			var x = document.getElementById('fb');
			x.innerHTML = "Ai obținut un scor de "+t+", iar valoare normală este de "+norm+".";
			var fb1 = document.getElementById('fb1');
			fb1.innerHTML = "";
	}
}
function FB_AF(agf,norm){
	if( agf > norm ) {
			var x = document.getElementById('fb');
			x.innerHTML = "Ai obținut un scor de "+agf+", iar valoare normală este de "+norm+".";
			var fb1 = document.getElementById('fb1');
			fb1.innerHTML = "Apari drept persoană impulsivă, cu tendința de a-ți descărca nervii pe cei din jur, manifești un nivel mare de reactivitate ceea ce-ți creează dificultăți în a-ți controla tendințele agresive și ieșirile violente. Încearcă să întârzii, să amâni reacția și să actionezi numai după o judecată rațională, trebuie să conștientizezi că agresivitatea fizică nu este o metodă de rezolvare a unui conflict și că violenței nu trebuie răpuns cu violență. Nu există motive ce justifică practicarea violenței, ceea ce te face răspunzător ăentru orice acțiune agresivă. Violența fizică poate fi consecința resentimentului, a dorinței de răzbunare, poate opri un conflict deschis însă nu îl poate stinge. Încearcă să reziști celor ce te provoacă pentru că forța psihică este proporțională cu rezistența la provocări și cu stăpânirea de sine și aceasta crește valoarea propriei personalități. Violența se întoarce împotriva ta ca violență sau sancțiune socială. Nu trebuie minimizate posibilele consecințe negative ale unui act violent pentru tine și pentru cei din jur - poți provova suferință celor apropiați fară a ținti acest lucru. Manifestările violente îi îndepărtează pe cei din jur și nu vei reuși să stabilești relații umane bazate pe încredere, stimă și ajutor. Răul odată făcut nu se uită!"; 
	} else if( agf <= norm ) {
			var x = document.getElementById('fb');
			x.innerHTML = "Ai obținut un scor de "+agf+", iar valoare normală este de "+norm+".";
			var fb1 = document.getElementById('fb1');
			fb1.innerHTML = "Atingi un nivel de agresivitate tolerat în general în relațiile inter-personale. Dai dovadă de stăpânire de sine, fiind în general greu de provocat,nu uzezi prioritar forța fizică în rezolvarea conflictelor, fapt ce te va ține departe de consecințele sociale și materiale negative ale agresivității și violenței. Acționând astfel, ceilalți vor manifesta încredere în deciziile tale și în mijloacele pe care le alegi în rezolvarea situațiilor sociale critice."; 
	}
}
function FB_AV(agv,norm){
	if( agv > norm ) {
			var x = document.getElementById('fb');
			x.innerHTML = "Ai obținut un scor de "+agv+", iar valoare normală este de "+norm+".";
			var fb1 = document.getElementById('fb1');
			fb1.innerHTML = "Comunicarea cu ceilalți(cunoștințe, prieteni) îți este perturbată de multe ori de răbufniri violente. Te adresezi folosind cuvinte și expresii tăioase, uneori vulgare, jignitoare pe un fond paraverbal cu care nu te poți mândri - ton ridicat, răstit, gesturi urâte, etc. Asigură-te că judeci corecrt înainte să fii categoric intr-o discuție, iar dacă vei considera că oponentul se înșeală nu e cazul să îl înjosești - este posibil să aibă o idee chiar mai bună. Lipsa de toleranță împiedică orice progres, implicit pe cel personal. Argumentarea într-un conflict trebuie să respecte aspectul logic: utilizează forța argumentelor nu argumentul forței."; 
	} else if( agv <= norm ) {
			var x = document.getElementById('fb');
			x.innerHTML = "Ai obținut un scor de "+agv+", iar valoare normală este de "+norm+".";
			var fb1 = document.getElementById('fb1');
			fb1.innerHTML = "Relațiile cu ceilalți, inclusiv comunicarea au aspect pozitiv, constructiv. Reușești să-ți păstrezi calmul și coerența chiar într-o discuție tensionată, utilizezi adecvat limbajul, ceea ce denotă competență personală în comunicare. Poți suprima nevoia de dejecție ceea ce este binevenit în relațiile cu ceilalți. Riscul de a leza persoanele din jurul tău scade proprțional cu controlul asupra reacțiilor la provocări."; 
	}
}
function FB_F(f,norm){
	if( f > norm ) {
			var x = document.getElementById('fb');
			x.innerHTML = "Ai obținut un scor de "+f+", iar valoare normală este de "+norm+".";
			var fb1 = document.getElementById('fb1');
			fb1.innerHTML = "Te caracterizează instabilitatea emoțională manifestată uneori prin ieșiri explozive. Comportamentul tău este unul ostentativ, faci presiuni asupra celor din jur prin faptul că îți arăți iritarea. Acționezi deseori impulsiv, sub presiunea moementului, ar trebui sa pui judecata înaintea acțiunii. Canalizează-ți energia nervoasă spre activități specifice vârstei, valorizate pozitiv în societate(învățare, sport, etc.), astfel cei obține performanțe remarcabile și aprecierea celor din jur. Exersează autocontrolul, urmărește-ți aspirațiile, fă-ți din dezvoltarea personașă o preocupare permanentă și astfel vei minimiza posibilitatea neplăcerilor viitoare datorate aspectului impulsiv al personalității."; 
	} else if( f <= norm ) {
			var x = document.getElementById('fb');
			x.innerHTML = "Ai obținut un scor de "+f+", iar valoare normală este de "+norm+".";
			var fb1 = document.getElementById('fb1');
			fb1.innerHTML = "Ești o persoană la care rațiunea se împacă bine cu afectele. Primatul afectului, al furiei întunecă rațiunea fapt pe care cu probabilitate mare îl cunoști deja. Reușești să-ți stăpânești emoțiile și să-ți controlezi furia."; 
	}
}
function FB_O(o,norm){
	if( o > norm ) {
			var x = document.getElementById('fb');
			x.innerHTML = "Ai obținut un scor de "+o+", iar valoare normală este de "+norm+".";
			var fb1 = document.getElementById('fb1');
			fb1.innerHTML = "Ești o persoană suspicioasă ce manifestă neîncredere față de ceilalți, neîncredere în natura umană, resentiment(ciudă, silă); este prudent să nu investești încrederea oricând, oricum și în orice persoană, însă a pleca de la premisa că ceilalți nu vor decât să îți facă rău sau să se folosească de tine în scopuri personale, a te subestima, a generaliza asupra mizeriei umane este neproductiv sub aspect afectiv și social. Nu orice gest trebuie interpretat ca agresiv, abuziv sau meschin. O cunoaștere corectă a mediului social, a modelelor acceptate de conduită, a persoanelor cu care relaționezi și a propriei persoane ar putea reduce starea de neîncredere și suspiciune ce se află la baza comportamentului ostil, agresiv . Poți urmări și imita pentru început persoane cu comportament și atitudini deschise către ceilalți, care acționează cu diplomație, respect pentru semeni, iar rezultatele pozitive nu vor întârzia să apară."; 
	} else if( o <= norm ) {
			var x = document.getElementById('fb');
			x.innerHTML = "Ai obținut un scor de "+o+", iar valoare normală este de "+norm+".";
			var fb1 = document.getElementById('fb1');
			fb1.innerHTML = "Ai o percepție corectă și realistă a mediului social, îți cunoști rolul și status-ul, capacitățile, fapt ce-ți premite să iei decizii adecvate situației, în general tolerate de cei din jur. Rezonanța afectivă a acțiunilor și întâmplărilor are nuanțe pozitive,trăirile de sen negativ precum invidia, gelozia, dezgustul, deconsiderarea și suspiciunea dață de ceilalți fiind rare în universul tău afectiv. Aceste însușiri personale îți permit contacte și relații sociale deschise, productive. Ești capbil să-ți urmărești scopurile și să-i atragi în activitate pe ceilalți fără ate pierde în judecăți neproductive și nesemnificative referitoare la calitățile personale ale celorlalți."; 
	}
}
function showMyMenu() {
	var x=document.getElementById("meniu_l");
	var y=document.getElementById("meniu_princ");
	x.style.display = "block";
	y.style.marginBottom = "5px";
}
function Ins_CnvToImg(canvas,comp,sect){
	var cnv = canvas.toDataURL("image/png");
	var x = document.getElementById(sect);
	var oImg = document.createElement("img");
	oImg.setAttribute('src', cnv);
	oImg.setAttribute('alt', 'na');
	oImg.setAttribute('id', 'Imagine'+comp);
	oImg.style.width = "100%";
	oImg.style.position = "relative";
	oImg.style.marginLeft = "auto";
	oImg.style.marginRight = "auto";
	x.appendChild(oImg);
		
}
function add_pop_up(ev){
	var but = ev.target;
	var x_but = getOffsetLeft(but);
	var y_but = getOffsetTop(but);
	var pop_up = document.getElementById("container");
	var h = but.offsetHeight;
	var w = but.offsetWidth;
	var x_pu = x_but+Math.floor(w/2);
	var y_pu = y_but+h+10;
	pop_up.style.left = x_pu+"px";
	pop_up.style.top = y_pu+"px";
	pop_up.style.display = "block"
	window.addEventListener('resize', function(event){
											 close_pop_up();
										});
		
}
function close_pop_up(){
	var x = document.getElementById("container");
	x.style.display = "none";
}
function getOffsetLeft( elem )
{
    var offsetL = 0;
    do {
      if ( !isNaN( elem.offsetLeft ) )
      {
          offsetL += elem.offsetLeft;
      }
    } while( elem = elem.offsetParent );
    return offsetL;
}
function getOffsetTop( elem )
{
    var offsetT = 0;
    do {
      if ( !isNaN( elem.offsetTop ) )
      {
          offsetT += elem.offsetTop;
      }
    } while( elem = elem.offsetParent );
    return offsetT;
}
function GrDrawComp(val_min,val_max,val_norm,val_ob,componenta){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "lightgrey";
	ctx.fillRect(0,0,700,450);
	ctx.beginPath();
	ctx.lineWidth="3";
	ctx.strokeStyle="black"; // ox
	ctx.moveTo(69,350);
	ctx.lineTo(680,350);
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // oy
	ctx.moveTo(70,15);
	ctx.lineTo(70,351); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // gradeLine1
	ctx.moveTo(65,284);
	ctx.lineTo(75,284); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="1";	
	ctx.strokeStyle="black"; // gradeLineGr1
	ctx.moveTo(75,284);
	ctx.lineTo(680,284); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // gradeLine2
	ctx.moveTo(65,218);
	ctx.lineTo(75,218); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="1";	
	ctx.strokeStyle="black"; // gradeLineGr2
	ctx.moveTo(75,218);
	ctx.lineTo(680,218); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // gradeLine3
	ctx.moveTo(65,152);
	ctx.lineTo(75,152); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="1";	
	ctx.strokeStyle="black"; // gradeLineGr3
	ctx.moveTo(75,152);
	ctx.lineTo(680,152);
	ctx.stroke();	
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // gradeLine4
	ctx.moveTo(65,86);
	ctx.lineTo(75,86); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="1";	
	ctx.strokeStyle="black"; // gradeLineGr4
	ctx.moveTo(75,86);
	ctx.lineTo(680,86); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // gradeLine5
	ctx.moveTo(65,20);
	ctx.lineTo(75,20); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="1";	
	ctx.strokeStyle="black"; // gradeLineGr5
	ctx.moveTo(75,20);
	ctx.lineTo(680,20); 
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.font = "bold 15px Arial";
	ctx.fillText("10",40,290);  // grade1
	ctx.font = "bold 15px Arial";
	ctx.fillText("20",40,224);  // grade2
	ctx.font = "bold 15px Arial";
	ctx.fillText("30",40,158);  // grade3
	ctx.font = "bold 15px Arial";
	ctx.fillText("40",40,92);  // grade4
	ctx.font = "bold 15px Arial";
	ctx.fillText("50",40,26);  // grade5
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // temp1
	ctx.moveTo(223,355);
	ctx.lineTo(223,345); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // temp2
	ctx.moveTo(375,355);
	ctx.lineTo(375,345); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // temp3
	ctx.moveTo(527,355);
	ctx.lineTo(527,345);
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // temp4
	ctx.moveTo(680,355);
	ctx.lineTo(680,345);
	ctx.stroke();
	ctx.fillStyle = "darkcyan";
	ctx.fillRect(109,350-val_min*6.6,76,val_min*6.6);
	ctx.fillStyle = "darkcyan";
	ctx.fillRect(261,350-val_max*6.6,76,val_max*6.6);
	ctx.fillStyle = "darkcyan";
	ctx.fillRect(413,350-val_norm*6.6,76,val_norm*6.6);
	ctx.fillStyle = "darkcyan";
	ctx.fillRect(565,350-val_ob*6.6,76,val_ob*6.6);
	ctx.fillStyle = "black";
	ctx.font = "bold 16px Arial";
	ctx.fillText("Val. Minima: "+val_min,95,370);  // label1
	ctx.font = "bold 16px Arial";
	ctx.fillText("Val. Maxima: "+val_max,243,370);  // label2
	ctx.font = "bold 16px Arial";
	ctx.fillText("Val. Normala: "+val_norm,383,370);  // label3
	ctx.font = "bold 16px Arial";
	ctx.fillText("Val. Obtinuta: "+val_ob,543,370);  // label4
	ctx.font = "bold 25px Arial";
	ctx.fillText(componenta,270,420);  // titlu
	return canvas;
}
function GrDrawTot(val_min,val_max,val_norm,val_ob){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "lightgrey";
	ctx.fillRect(0,0,700,450);
	ctx.beginPath();
	ctx.lineWidth="3";
	ctx.strokeStyle="black"; // ox
	ctx.moveTo(69,350);
	ctx.lineTo(680,350);
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // oy
	ctx.moveTo(70,15);
	ctx.lineTo(70,351); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // gradeLine1
	ctx.moveTo(65,284);
	ctx.lineTo(75,284); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="1";	
	ctx.strokeStyle="black"; // gradeLineGr1
	ctx.moveTo(75,284);
	ctx.lineTo(680,284); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // gradeLine2
	ctx.moveTo(65,218);
	ctx.lineTo(75,218); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="1";	
	ctx.strokeStyle="black"; // gradeLineGr2
	ctx.moveTo(75,218);
	ctx.lineTo(680,218); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // gradeLine3
	ctx.moveTo(65,152);
	ctx.lineTo(75,152); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="1";	
	ctx.strokeStyle="black"; // gradeLineGr3
	ctx.moveTo(75,152);
	ctx.lineTo(680,152); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // gradeLine4
	ctx.moveTo(65,86);
	ctx.lineTo(75,86); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="1";	
	ctx.strokeStyle="black"; // gradeLineGr4
	ctx.moveTo(75,86);
	ctx.lineTo(680,86); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // gradeLine5
	ctx.moveTo(65,20);
	ctx.lineTo(75,20); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="1";	
	ctx.strokeStyle="black"; // gradeLineGr5
	ctx.moveTo(75,20);
	ctx.lineTo(680,20); 
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.font = "bold 15px Arial";
	ctx.fillText("30",40,290);  // grade1
	ctx.font = "bold 15px Arial";
	ctx.fillText("60",40,224);  // grade2
	ctx.font = "bold 15px Arial";
	ctx.fillText("90",40,158);  // grade3
	ctx.font = "bold 15px Arial";
	ctx.fillText("120",35,92);  // grade4
	ctx.font = "bold 15px Arial";
	ctx.fillText("150",35,26);  // grade5
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // temp1
	ctx.moveTo(223,355);
	ctx.lineTo(223,345); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // temp2
	ctx.moveTo(375,355);
	ctx.lineTo(375,345); 
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // temp3
	ctx.moveTo(527,355);
	ctx.lineTo(527,345);
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth="3";	
	ctx.strokeStyle="black"; // temp4
	ctx.moveTo(680,355);
	ctx.lineTo(680,345);
	ctx.stroke();
	ctx.fillStyle = "darkcyan";
	ctx.fillRect(109,350-val_min*2.2,76,val_min*2.2);
	ctx.fillStyle = "darkcyan";
	ctx.fillRect(261,350-val_max*2.2,76,val_max*2.2);
	ctx.fillStyle = "darkcyan";
	ctx.fillRect(413,350-val_norm*2.2,76,val_norm*2.2);
	ctx.fillStyle = "darkcyan";
	ctx.fillRect(565,350-val_ob*2.2,76,val_ob*2.2);
	ctx.fillStyle = "black";
	ctx.font = "bold 16px Arial";
	ctx.fillText("Val. Minima: "+val_min,95,370);  // label1
	ctx.font = "bold 16px Arial";
	ctx.fillText("Val. Maxima: "+val_max,237,370);  // label2
	ctx.font = "bold 16px Arial";
	ctx.fillText("Val. Normala: "+val_norm,385,370);  // label3
	ctx.font = "bold 16px Arial";
	ctx.fillText("Val. Obtinuta: "+val_ob,537,370);  // label4
	ctx.font = "bold 25px Arial";
	ctx.fillText("Valori totale",270,420);  // titlu
	return canvas;
}
