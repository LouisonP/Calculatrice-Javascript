var touches = document.querySelectorAll('#calculette span');

var operateurs = ['/', 'x', '-', '+'];

var decimaleAjoute = false;

for(var i = 0; i < touches.length; i++) {
	touches[i].onclick = function(e) {
	
		
		var ecran = document.querySelector('.ecran');
		var valeurEcran = ecran.innerHTML;
        var valeurBouton = this.innerHTML;
        
		if(valeurBouton == 'C') {
			
		
			ecran.innerHTML = '';
			decimaleAjoute = false;
		
		} else	if(valeurBouton == '=') {
      			
			var calcul = valeurEcran;
			
			var dernierCaractere = valeurEcran[valeurEcran.length - 1];
			
            calcul = calcul.replace(/x/g, '*');
            
			if(operateurs.indexOf(dernierCaractere) > -1 
			|| dernierCaractere == '.') {
				calcul = calcul.replace(/.$/, '');
			}
		
			if(calcul) {
				ecran.innerHTML = eval(calcul);
			}
			decimaleAjoute = false;

		} else if (operateurs.indexOf(valeurBouton) > -1) {		 
			
		
			var dernierCaractere = valeurEcran[valeurEcran.length - 1];
			
			if (valeurEcran == '-' 
			&& valeurBouton == '+') {
				ecran.innerHTML = '';
			} 
        
			else if (valeurEcran == ''
			&& valeurBouton == '-') {				
				ecran.innerHTML = valeurBouton;
			} 
		
			else if (valeurEcran != '' 
			&& operateurs.indexOf(dernierCaractere) == -1) {
				ecran.innerHTML += valeurBouton;
			}
			
			
			if (operateurs.indexOf(dernierCaractere) > -1 
			&& valeurEcran.length > 1) {
			
				ecran.innerHTML = valeurEcran.replace(/.$/, valeurBouton);
			}
			
			decimaleAjoute =false;
		
		} else if (valeurBouton == '.') {
		
			
			if(!decimaleAjoute) {
				ecran.innerHTML += valeurBouton;
				decimaleAjoute = true;
			}
		} else {
   		
			ecran.innerHTML += valeurBouton;
		}
	
		e.preventDefault();
	} 
}
