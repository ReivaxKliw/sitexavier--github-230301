// _________________________________
//déclaration des variables utilisées dans le code


// __________________________________
const studyFeesAndInsurance = 1.2555 // 25,55% taxe et frais :etude de sol, bureau de controle, thermique, SPS, assurance décennale et RC  
// __________________________________
// déclaration des valeurs pour les feuilles de calcul
const inputCostGroundByRegion= 65; //prix fixé à 65 e pour l'instant. Il faudra aprés faire une demande de la région de construction et prendre un prix moyen de la région
// constante de coût VRDgit 
const ratioBuilding1WithTaxAndFee = 94*studyFeesAndInsurance; //94 euros/m²avec taxes et hors terrain de construit si le ration (voirie+Bâtiment)/terrain est <65%
const ratioBuilding2WithTaxAndFee = 78.5 *studyFeesAndInsurance; //78.5 euros/m²avec taxes et hors terrain de construit si le ratio (voirie+Bâtiment)/terrain est >65% 
const ratioRoadAndUtilities1WithTaxAndFee = 95.5*studyFeesAndInsurance; //95.5 euros/m² avec taxes et hors terrain si le ratio (voirie+Bâtiment)/terrain est <65% 
const ratioRoadAndUtilities2WithTaxAndFee = 55.5*studyFeesAndInsurance; //55.5 euros/m² avec taxes et hors terrain si le ratio (voirie+Bâtiment)/terrain est >65% 
const ratioPlantations1WithTaxAndFee = 9.75*studyFeesAndInsurance; //9.75 euros/m²avec taxes et hors terrain pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est <65% 
const ratioPlantations2WithTaxAndFee = 10.80*studyFeesAndInsurance; //10.80 euros/m² avec taxes et hors terrain pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est >65% 
const ratioFencing1WithTaxAndFee = 4.75*studyFeesAndInsurance; //4.75 euros/m² avec taxes et hors terrain pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est <65% 
const ratioFencing2WithTaxAndFee = 3.25*studyFeesAndInsurance; //3.25 euros/m² avec taxes et hors terrain pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est >65% const costRoadAndUtilitiesWithTaxesOffGround = 87;//ratio coût des VRD entreprise uniquement pour la cour +taxes PC hors marge constructeur

// ratio du calcul du devis bâtiment HORS TERRAIN
// constante de coût Hall
const costHallCompanyWithTaxesOffGround = 206.45*studyFeesAndInsurance;//ratio coût du hall entreprise de construction +taxes PC hors marge constructeur
const costHeightAbove7WithTaxesOffGround = 14*studyFeesAndInsurance;//ratio coût par métre supplémentaire au dessus de 7 m à ajouter à costHallCompanyWithTaxesOffGround

// constante de coût Bureaux
const costOfficesCompanyInsideOpenSpaceWithTaxesOffGround = 710*studyFeesAndInsurance; //ratio coût des bureaux entreprise de construction intérieur et OpenSpace+taxes PC et Maitrise d'Oeuvre à 12% hors marge constructeur
const costOfficesCompanyOutsideOpenSpaceWithTaxesOffGround = 749.01*studyFeesAndInsurance; //ratio coût des bureaux entreprise de construction extérieur et OpenSpace+taxes PC et Maitrise d'Oeuvre à 12% hors marge constructeur
const costOfficesCompanyInsidePartitionedWithTaxesOffGround = 830.07*studyFeesAndInsurance; //ratio coût des bureaux entreprise de construction intérieur et Cloisonnée+taxes PC et Maitrise d'Oeuvre à 12% hors marge constructeur
const costOfficesCompanyOutsidePartitionedWithTaxesOffGround = 867.79*studyFeesAndInsurance; //ratio coût des bureaux entreprise de construction extérieur et Cloisonnée+taxes PC et Maitrise d'Oeuvre à 12% hors marge constructeur


// constante de coût SPECIFICITES
const costSoilReinforcementWithTaxesOffGround = 19.87*studyFeesAndInsurance ; // 20 e/m² avec taxes et hors terrain pour des colonnes réalisées sur l'ensemble du bâtiment à une moyenne de 7m
const addedValueOverHeadCraneOnPolesWithTaxesOffGround = 120*studyFeesAndInsurance; // 126 euros/ml avec taxes et hors terrain sur la base d'un HEA 300(90kg/ml) passé en HEA 400(127,4kg/ml) à 3e du kg 
//const addedValueOverHeadCraneRacewayWithTaxesOffGround = 285*studyFeesAndInsurance ;// 285 eurosavec taxes et hors terrain par ml (HEA300 +carré plein 2,5x2,5) considéré à la charge du fournisseur de pont
const addedValueOverHeadCraneFondationWithTaxesOffGround = 933*studyFeesAndInsurance; // 933 euros avec taxes et hors terrainpar plus value de fondations sous poteau de pont roulant
const costDockShelterWithTaxesOffGround =11000*studyFeesAndInsurance; //euros par unitéavec taxes et hors terrain ( voir ratio 11000 de matériel quai et 4000 de Gros Oeuvre quai )
const costconcreteWorkDockShelterWithTaxesOffGround = 4000*studyFeesAndInsurance; //euros par unité avec taxes et hors terrain
const costSectionalDoorsWithTaxesOffGround = 5000*studyFeesAndInsurance; //euros par unité avec taxes et hors terrain
const costBlueRate = 5000;// coût d'un tarif bleu
const costYellowRate = 10000;// coût d'un tarif jaune
const costGreenRate = 15000;// coût d'un tarif vert 15000 Enedis (+ 45000 de transfo pour l'elctricien autre constante)
const costGreenRateAddedValueElectricityWithTaxesOffGround = 45000*studyFeesAndInsurance;// coût du transfo à la charge du lot Electricité euros par unité avec taxes et hors terrain
const ratioPartitionInsideSidingPanelWithTaxesOffGround = 90*studyFeesAndInsurance;// 90 e/m² pour cloison de division intérieure du hall avec taxes et hors terrain
const ratioElectricHeatingHallWithTaxesOffGround = 4*studyFeesAndInsurance //NON UTILISE // 4e/m² de plancher construit pour le chauffage electrique avec taxes et hors terrain
const ratioGasHeatingHallWithTaxesOffGround = 9.22*studyFeesAndInsurance;// e/m² pour chauffage aérotherme gaz avec taxes et hors terrain
const ratioFireNetworkHallWithTaxesOffGround = 5*studyFeesAndInsurance  // 5e/m² de plancher construit pour le réseau RIA avec taxes et hors terrain
const costElevatorWithTaxesOffGround = 35000*studyFeesAndInsurance;// Prix d'un ascenseur comprenant la cabine et la colonne avec taxes et hors terrain
const costStairWithTaxesOffGround = 20000*studyFeesAndInsurance;// Prix d'un escalier avec taxes et hors terrain
// ________________________________
// Action en fonction du terrain : je posséde ou pas le terrain
const ground = document.getElementById('choice1');
const noGround = document.getElementById('choice2');

function selectGround() {
        if (ground.checked===true){
          console.log(ground.value);// on log pour vérifier que l'on a bien le retour aprés le check
     }
     else if (noGround.checked===true){
          console.log(noGround.value);// on log pour vérifier que l'on a bien le retour aprés le check
     }
};
// __________________________________
// Questions si le client posséde le terrain ou pas
function redirectionGround(){
    if (ground.checked === true){ 
          
document.body.innerHTML= `
<header>
<nav>
    <ul>
        <li id="logo"><a href="#">AMO : le site des maîtres d'ouvrage</a>  </li>
        <li><a href="#contact">Nous contacter</a>  </li>
        <li><a href="#s'identifier">s'identifier</a>  </li>
    </ul>
</nav>
</header>
<section id="imagePrincipale"> 

<h2>Devis si je connais mon terrain : <div class=titre1>complétez les éléments ci-dessous</div> </h2> 

<!-- METHODE avec onclick pour récupération des données -->

<div class=questionProject>
<label for="inputAreaGround">Quelle est la <b>surface de votre terrain</b>:</label>
<input type="text" placeholder="surface en m²" id="inputAreaGround"> m² <br>
</div>

<div class="questionProject">
<label for="inputCostGround">Quel est le <b>coût de votre terrain</b>:</label>
<input type="text" placeholder="prix en euros" id="inputCostGround"> euros HT <br>
</div>
<!-- bouton valider  -->
        <div class="button">
        <button type="submit" onclick="dataForCost()">valider la réponse</button>
        </div>
</section>        
`;
        inputAreaGround = document.getElementById("inputAreaGround").value;
        inputCostGround = document.getElementById("inputCostGround").value;
          }
 else{
      dataForCost();

 }};

 let inputAreaGround;
 function dataForCost(){
          
     if (typeof (inputAreaGround)=='undefined'){
          inputAreaGround=0}
          else {
               inputAreaGround = document.getElementById("inputAreaGround").value
          }; 

     if (typeof (inputCostGround)=='undefined'){
          inputCostGround=0}
          else {
               inputCostGround = document.getElementById("inputCostGround").value
          }; 

     console.log(inputAreaGround);//retour de inputAreaGround?
     // console.log(inputCostGround);//retour de inputAreaGround?

 document.body.innerHTML= `
 <header>
 <nav>
     <ul>
         <li id="logo"><a href="#">AMO : le site des maîtres d'ouvrage</a>  </li>
         <li><a href="#contact">Nous contacter</a>  </li>
         <li><a href="#s'identifier">s'identifier</a>  </li>
     </ul>
 </nav>
</header>
 <section id="imagePrincipale"> 
 <h2> QUESTIONS GENERALES</h2>
<div class="questionProject">
<label for="inputAreaStorage">Quelle est la surface d'atelier ou de stockage (hors bureaux) dont vous avez besoin:</label>
<input type="text" placeholder="surface en m²" id="inputAreaStorage"> m² <br>
</div>

<div class="questionProject">
<label for="inputHeightHall">Quelle est la <b>hauteur intérieure du bâtiment projeté</b>:</label>
<input type="text" placeholder="hauteur en m" id="inputHeightHall"> m <br>
</div>

<h2> QUESTIONS CONCERNANTS LES BUREAUX</h2>
<div class="questionProject">
<label for="positionOfficesInside"> Souhaitez-vous la réalisation de vos bureaux dans le volume du Hall <b>(à l'intérieur)</b> ?</label>
          <select id="choiceOfficesInside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="clercks">Calcul du nombre de poste de travail : Combien de <b>personnes travaillent dans les bureaux intérieurs </b> ? </label>
          <input type="text" placeholder="nombre" id="inputClercksOfficesInside"> employés dans les bureaux intérieurs<br>
          </label>
          <label for="partitionedOfficesInside"> Envisagez-vous la réalisation de bureaux type Open Space pour les employés?  :</label>
          <select id="choiceOpenspaceOfficesInside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="choiceShowroomInside"> Dans ces bureaux, souhaitez-vous la réalisation d'un showroom, d'un studio, atelier...  ?</label>
          <select id="choiceShowroomInside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="choiceShowroomInside">Le cas échéant, quelle est la surface de showroom nécessaire ? </label>
          <input type="text" placeholder="nombre" id="inputAreaShowroomInside"> m²<br>
          </label>
          <label for="socialRoomOfficesInside">Souhaitez-vous la réalisation de locaux sociaux (vestiaires, refectoire) dans ces bureaux ?</label>
          <select id="choiceSocialRoomOfficesInside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="inputWorkersOfficesInside">Pour combien de personnes ? </label>
          <input type="text" placeholder="nombre" id="inputWorkersOfficesInside"> personne(s)<br>
          </label>
          </div>
          <br>
          <br>
<label for="positionOfficesOutside"> Souhaitez-vous la réalisation de vos bureaux en dehors du volume du Hall <b>(à l'extérieur)</b> ?</label>
          <select id="choiceOfficesOutside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="clercks">Calcul du nombre de poste de travail : Combien de <b>personnes travaillent dans les bureaux extérieurs</b> ? </label>
          <input type="text" placeholder="nombre" id="inputClercksOfficesOutside"> employés dans les bureaux extérieurs<br>
          </label>
          <label for="partitionedOfficesOutside"> Envisagez-vous la réalisation de bureaux type Open Space pour les employés?  :</label>
          <select id="choiceOpenspaceOfficesOutside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="choiceShowroomOutside"> Dans ces bureaux, souhaitez-vous la réalisation d'un showroom, d'un studio, atelier...  ?</label>
          <select id="choiceShowroomOutside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="choiceShowroomOutside">Le cas échéant, quelle est la surface de showroom nécessaire ? </label>
          <input type="text" placeholder="nombre" id="inputAreaShowroomOutside"> m²<br>
          </label>
          <label for="socialRoomOfficesOutside">Souhaitez-vous la réalisation de locaux sociaux (vestiaires, refectoire) dans ces bureaux ?</label>
          <select id="choiceSocialRoomOfficesOutside">
          <option value="no"> non</option>
          <option value="yes"> oui</option>
          </select>
          <br>
          <label for="inputWorkersOfficesOutside">Pour combien de personnes ? </label>
          <input type="text" placeholder="nombre" id="inputWorkersOfficesOutside"> personne(s)<br>
          </label>
          </div>
<h2> SPECIFITES DU BATIMENT</h2>
<div class="questionProject">
<label for="badSoil"> Votre terrain a t'il besoin de renforcement de sol ? (voir conclusion de l'étude de sol) :</label>
          <select id="selectStudySoil">
               <option value="no"> non</option>
               <option value="yes"> oui</option>
               <option value="iDontKnow"> Je ne sais pas</option>
          </select>
</div>

<div class="questionProject">
<label for="partitionInside">Il y a t'il une cloison de recoupement dans le hall ? (cloison toute hauteur qui sépare le volume):</label>
          <select id="selectPartitionInside">
               <option value="no"> non</option>
               <option value="yes"> oui</option>
          </select>
               <label for="inputPartitionInside">si oui indiquez le Nombre: </label>
               <input type="text" id="inputPartitionInside" name="partitionInside" placeholder="indiquez le nombre" > unité(s)
          <br>
          <br>
<label for="overHeadCrane"> Avez - vous besoin d'équiper le bâtiment en pont roulant ?:</label>
          <select id="choiceOverHeadCrane">
               <option value="no"> non</option>
               <option value="yes"> oui</option>
          </select>
          </br>
          <label for="overHeadCrane">Si oui combien de pont roulant ?: (nécessaire pour le renfort de charpente, le renfort de fondations mais fourniture ponts et rail hors calcul bâtiment) </label>
           <input type="text" id="inputNumberOverHeadCrane" name="overHeadCrane" placeholder="indiquez le nombre de pont" > unité(s)
           <br>
</div>

<div class="questionProject">
<label for="dockShelter"> Avez-vous besoin de quais de déchargement ?:</label>
          <select id="choiceDockShelter">
               <option value="no"> non</option>
               <option value="yes"> oui</option>
          </select>
          <br>
          <label for="dockShelter">Si oui Combien de quai avez-vous besoin ?: </label>
           <input type="text" id="inputNumberDockShelter" name="dockShelter" placeholder="indiquez le nombre de quai(s)" > unité(s)
           <br>
</div>
<div class="questionProject">
<label for="floorSectionalDoor"> Avez-vous besoin de porte de plein pied (accés camion à niveau) ?:</label>
          <select id="choiceFloorSectionalDoor">
               <option value="no"> non</option>
               <option value="yes"> oui</option>
          </select>
          <br>
          <label for="floorSectionalDoor">Si oui Combien de portes avez-vous besoin ?: </label>
           <input type="text" id="inputNumberFloorSectionalDoor" name="floorSectionalDoor" placeholder="indiquez le nombre de porte(s)" > unité(s)
           <br>
</div>
</div>
<div class="questionProject">
<label for="inputAreaRoadAndUtilitiesStorageOutdoor"> Avez-vous besoin d'une cour de stockage ?:</label>
          <select id="choiceAreaStorageOutdoor">
               <option value="no"> non</option>
               <option value="yes"> oui</option>
          </select>
          <br>
          <label for="inputAreaRoadAndUtilitiesStorageOutdoor">Si oui Combien de surface de stockage extérieur avez-vous besoin ?: </label>
           <input type="text" id="inputAreaRoadAndUtilitiesStorageOutdoor" name="inputAreaRoadAndUtilitiesStorageOutdoor" placeholder="indiquez la surface" > m²
           <br>
</div>

<div class="questionProject">
<label for="electricity"> Quel sont le(s) type(s) de compteur(s) électrique(s) installé(s) ?:</label>
          <br>
        <input type="checkbox" id="choiceBlueRate" name="blueRate">
        <label for="choiceBlueRate"> tarif Bleu < à 36 kVA (~36kW)</label>
        <label for="inputBlueRate"> / indiquez le Nombre(si vous divisez votre bâtiment par exemple): </label>
        <input type="text" id="inputBlueRate" name="BlueRate" placeholder="indiquez le nombre" > unité(s)
        <br>
        <input type="checkbox" id="choiceYellowRate" name="yellowRate">
        <label for="choiceYellowRate"> tarif Jaune > à 36 kVA (~36kW) et < à 250 kVA (~250kW)</label>
        <label for="inputYellowRate"> /indiquez le Nombre (si vous divisez votre bâtiment par exemple): </label>
        <input type="text" id="inputYellowRate" name="YellowRate" placeholder="indiquez le nombre" > unité(s)
        <br>
        <input type="checkbox" id="choiceGreenRate" name="greenRate">
        <label for="choiceGreenRate"> tarif Vert > à 250 kVA (~250kW) </label>

</div>

<div class="questionProject">
<label for="heating"> Voulez vous chauffer le Hall ?:</label>
          <select id="selectHeatingHall">
               <option value="no"> non</option>
               <option value="yes"> oui</option>
          </select>
</div>

<div class="questionProject">
<label for="fireNetwork">Le hall est équipé d'un RIA (Réseau Incendie Armé), si vous ne le souhaitez pas vous pouvez indiquer "non":</label>
          <select id="selectFireNetworkHall">
               <option value="yes"> oui</option>
               <option value="no"> non</option>
          </select>
</div>

<div class="questionProject">
<label for="icpe">  Votre bâtiment est il classé ICPE (installation classée pour l'environnement) pour les rubriques 1510 et 2663 ( à vérifier) et au seuil supérieur de non classé ? :</label>
          <select id="selectIcpe">
               <option value="no"> non</option>
               <option value="yes"> oui</option>
               <option value="iDontKnow"> Je ne sais pas</option>
          </select>
</div>

<div class="questionProject">
<button type="button2" onclick="getAreas()">Valider</button>
</div>
</section>
`;

}
;

// récupération des données

function getAreas() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
     // _____________________________________________________________________________
     // TEXTE DES ERREURS

     const inputWorkersOfficesInside =  Number(document.getElementById("inputWorkersOfficesInside").value);
     const inputWorkersOfficesOutside =  Number(document.getElementById("inputWorkersOfficesOutside").value);
     const choiceBlueRate = document.getElementById('choiceBlueRate');
     const choiceYellowRate = document.getElementById('choiceYellowRate');
     const choiceGreenRate = document.getElementById('choiceGreenRate');
     
        // if (inputWorkersOfficesOutside==0 &&inputWorkersOfficesInside==0){
     //          alert("vous n'avez pas indiqué de données pour les locaux sociaux de votre projet, il faut des vestiaires pour le personnel hors administratif");
     //          event.stopPropagation();
     //      }
          // if (choiceBlueRate.checked===false && choiceYellowRate.checked===false && choiceGreenRate.checked===false){
     //     alert("vous n'avez pas indiqué la puissance de raccordement électrique de votre bâtiment");
     //     event.stopPropagation();
        // }     
     // ___________________________________________ 
     //SURFACE DES BUREAUX
     // récupération des données
          const choiceOfficesInside = document.getElementById('choiceOfficesInside');
          const choiceOfficesOutside = document.getElementById('choiceOfficesOutside');
          // const inputWorkersOfficesInside > récupéré dans texte des erreurs
          // const inputWorkersOfficesOutside > récupéré dans texte des erreurs
          const inputClercksOfficesInside =  Number(document.getElementById("inputClercksOfficesInside").value);
          const inputClercksOfficesOutside =  Number(document.getElementById("inputClercksOfficesOutside").value);
          const choiceOpenspaceOfficesOutside = document.getElementById('choiceOpenspaceOfficesOutside');
          const choiceOpenspaceOfficesInside = document.getElementById('choiceOpenspaceOfficesInside');
     
          let inputAreaShowroomInside = Number(document.getElementById("inputAreaShowroomInside").value);
          let inputAreaShowroomOutside = Number(document.getElementById("inputAreaShowroomOutside").value);
          let officesDimensionsInside;
          let officesDimensionsOutside;
          let officesAdministrationInsideDimensions ;
          let officesAdministrationOutsideDimensions;
     
     //CALCUL DE LA SURFACE DES BUREAUX ADMINISTRATIFS
          //bureaux intérieurs Openspace 
          if (choiceOfficesInside.value==="yes"){
          if (choiceOpenspaceOfficesInside.value==="yes"){
               officesAdministrationInsideDimensions = ((inputClercksOfficesInside-3)*10+(3)*20)*1.5;//calcul de dimensionnement des bureaux basé sur 10m² par personne pour les open space mais 3 bureaux fermés de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
          }
          //bureaux intérieurs Cloisonnés
          if (choiceOpenspaceOfficesInside.value==="no"){
               officesAdministrationInsideDimensions = ((inputClercksOfficesInside-3)*15+(3)*20)*1.5;//calcul de dimensionnement des bureaux basé sur 15m² par personne pour les bureaux fermés mais 3 bureaux de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
          }
          }
          if (choiceOfficesInside.value==="no"){
               officesAdministrationInsideDimensions = 0;
          }
          //bureaux extérieurs Openspace 
          if (choiceOfficesOutside.value==="yes"){
          if (choiceOpenspaceOfficesOutside.value==="yes"){
               officesAdministrationOutsideDimensions = ((inputClercksOfficesOutside-3)*10+(3)*20)*1.5;//calcul de dimensionnement des bureaux basé sur 10m² par personne pour les open space mais 3 bureaux fermés de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
          }
          //bureaux extérieurs Cloisonnés
          if (choiceOpenspaceOfficesOutside.value==="no"){
               officesAdministrationOutsideDimensions = ((inputClercksOfficesOutside-3)*15+(3)*20)*1.5;//calcul de dimensionnement des bureaux basé sur 15m² par personne pour les bureaux fermés mais 3 bureaux de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
          }
          }
          if (choiceOfficesOutside.value==="no"){
               officesAdministrationOutsideDimensions = 0;
          };

     //CALCUL DE LA SURFACE DES LOCAUX SOCIAUX
     
          const officesSocialDimensionsInside = (inputWorkersOfficesInside)*10;//les locaux sociaux nombre de travailleurs * 10m²
          const officesSocialDimensionsOutside = (inputWorkersOfficesOutside)*10; //les locaux sociaux nombre de travailleurs * 10m²

    
     // SURFACE BUREAUX ; SURFACE BOX ET CONSTRUITE AU SOL Prise en compte de bureaux réalisé en étage si leur surface est supérieure à 200 m² et qu'ils sont positionnés à l'intérieur et augmentation de la variable areaBuilding
     let areaBuilding; // surface au sol avec les bureaux donc si les bureaux sont extérieurs plus de surface
     let areaBox;// surface de la boite si bur ext = surf Hall, si ils sont intérieurs = ils sont compris dans la surface de la boite
     let addedValueStair; // calcul de la plus value escalier

     //Bureaux Intérieur avec locaux sociaux intérieurs
     if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="no"&& choiceSocialRoomOfficesInside.value ==="yes"){
          officesDimensionsInside=(officesAdministrationInsideDimensions+officesSocialDimensionsInside+inputAreaShowroomInside);
          officesDimensionsOutside=0;
          if (officesDimensionsInside <= 200){ 
          areaBuilding = Number(document.getElementById("inputAreaStorage").value)+officesDimensionsInside;
          areaBox= Number(document.getElementById("inputAreaStorage").value)+officesDimensionsInside;
          
          }
          else if (officesDimensionsInside > 200){
          areaBuilding = Number(document.getElementById("inputAreaStorage").value)+officesDimensionsInside/2;
          areaBox = Number(document.getElementById("inputAreaStorage").value)+officesDimensionsInside/2;
          addedValueStair=1*costStairWithTaxesOffGround;
          }
     }
     //Bureaux Intérieur sans locaux sociaux intérieurs
    else if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="no"&& choiceSocialRoomOfficesInside.value ==="no"){
          officesDimensionsInside=(officesAdministrationInsideDimensions+officesSocialDimensionsInside);
          officesDimensionsOutside=0;
          if (officesDimensionsInside <= 200){ 
          areaBuilding = Number(document.getElementById("inputAreaStorage").value)+officesDimensionsInside;
          areaBox = Number(document.getElementById("inputAreaStorage").value)+officesDimensionsInside;
          }
          else if (officesDimensionsInside > 200){ 
          areaBuilding = Number(document.getElementById("inputAreaStorage").value)+officesDimensionsInside/2;
          areaBox = Number(document.getElementById("inputAreaStorage").value)+officesDimensionsInside/2;
          addedValueStair=1*costStairWithTaxesOffGround;
          }
     }
     //Bureaux Extérieur avec locaux sociaux extérieurs
     else if (choiceOfficesInside.value==="no" && choiceOfficesOutside.value==="yes"&& choiceSocialRoomOfficesOutside.value ==="yes"){
          officesDimensionsInside=0;
          officesDimensionsOutside=(officesAdministrationOutsideDimensions+officesSocialDimensionsOutside+inputAreaShowroomOutside);
          if (officesDimensionsOutside <= 200){ 
          areaBuilding = Number(document.getElementById("inputAreaStorage").value)+officesDimensionsOutside;
          areaBox = Number(document.getElementById("inputAreaStorage").value);
          }
          else if (officesDimensionsOutside > 200){ 
          areaBuilding = Number(document.getElementById("inputAreaStorage").value)+officesDimensionsOutside/2;
          areaBox = Number(document.getElementById("inputAreaStorage").value);
          addedValueStair=1*costStairWithTaxesOffGround;
          }
     }
     //Bureaux Extérieurs sans locaux sociaux extérieur
     else if (choiceOfficesInside.value==="no" && choiceOfficesOutside.value==="yes"&& choiceSocialRoomOfficesOutside.value ==="no"){
          officesDimensionsInside=0;
          officesDimensionsOutside=(officesAdministrationOutsideDimensions+inputAreaShowroomOutside);
          if (officesDimensionsOutside <= 200){ 
          areaBuilding = Number(document.getElementById("inputAreaStorage").value)+officesDimensionsOutside;
          areaBox = Number(document.getElementById("inputAreaStorage").value);
          }
          else if (officesDimensionsOutside > 200){ 
          areaBuilding = Number(document.getElementById("inputAreaStorage").value)+officesDimensionsOutside/2;
          areaBox = Number(document.getElementById("inputAreaStorage").value);
          addedValueStair=1*costStairWithTaxesOffGround;
          }
     }
     //Bureaux Intérieur + Extérieurs avec locaux sociaux intérieurs
     else if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="yes"&& choiceSocialRoomOfficesInside.value ==="yes"&&choiceSocialRoomOfficesOutside.value ==="no"){
          officesDimensionsInside=(officesAdministrationInsideDimensions+officesSocialDimensionsInside+inputAreaShowroomInside);
          officesDimensionsOutside=(officesAdministrationOutsideDimensions+inputAreaShowroomOutside);
          if (officesDimensionsInside <= 200 && officesDimensionsOutside<= 200){ 
               areaBuilding = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside+officesDimensionsOutside;
               areaBox = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside;
          }
          else if (officesDimensionsInside > 200 && officesDimensionsOutside<= 200){ 
               areaBuilding = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside/2+officesDimensionsOutside;
               areaBox = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside/2;
               addedValueStair=2*costStairWithTaxesOffGround;
          }
          else if (officesDimensionsInside <= 200 && officesDimensionsOutside>200){ 
               areaBuilding = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside+officesDimensionsOutside/2;
               areaBox = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside;
               addedValueStair=1*costStairWithTaxesOffGround;
          }
          else if (officesDimensionsInside > 200 && officesDimensionsOutside>200){ 
               areaBuilding = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside/2+officesDimensionsOutside/2;
               areaBox = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside/2;
               addedValueStair=2*costStairWithTaxesOffGround;
          }
     }
     //Bureaux Intérieur + Extérieurs avec locaux sociaux extérieurs
     else if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="yes"&& choiceSocialRoomOfficesInside.value ==="no"&&choiceSocialRoomOfficesOutside.value ==="yes"){
          officesDimensionsInside=(officesAdministrationInsideDimensions+inputAreaShowroomInside);
          officesDimensionsOutside=(officesAdministrationOutsideDimensions+officesSocialDimensionsOutside+inputAreaShowroomOutside);
          if (officesDimensionsInside <= 200 && officesDimensionsOutside<= 200){ 
               areaBuilding = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside+officesDimensionsOutside;
               areaBox = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside;
          }
          else if (officesDimensionsInside > 200 && officesDimensionsOutside<= 200){ 
               areaBuilding = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside/2+officesDimensionsOutside;
               areaBox = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside/2;
               addedValueStair=1*costStairWithTaxesOffGround;
          }
          else if (officesDimensionsInside <= 200 && officesDimensionsOutside>200){ 
               areaBuilding = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside+officesDimensionsOutside/2;
               areaBox = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside;
               addedValueStair=1*costStairWithTaxesOffGround;
          }
          else if (officesDimensionsInside > 200 && officesDimensionsOutside>200){ 
               areaBuilding = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside/2+officesDimensionsOutside/2;
               areaBox = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside/2;
               addedValueStair=2*costStairWithTaxesOffGround;
          }
     }
     //Bureaux Intérieur + Extérieur avec locaux sociaux intérieurs + Extérieurs
     else if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="yes"&&choiceSocialRoomOfficesInside.value ==="yes"&& choiceSocialRoomOfficesOutside.value ==="yes"){
          officesDimensionsInside=(officesAdministrationInsideDimensions+officesSocialDimensionsInside +inputAreaShowroomInside);
          officesDimensionsOutside=(officesAdministrationOutsideDimensions+officesSocialDimensionsOutside+inputAreaShowroomOutside);
          if (officesDimensionsInside <= 200 && officesDimensionsOutside<= 200){ 
               areaBuilding = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside+officesDimensionsOutside;
               areaBox = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside;
          }
          else if (officesDimensionsInside > 200 && officesDimensionsOutside<= 200){ 
               areaBuilding = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside/2+officesDimensionsOutside;
               areaBox = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside/2;
               addedValueStair=1*costStairWithTaxesOffGround;
          }
          else if (officesDimensionsInside <= 200 && officesDimensionsOutside>200){ 
               areaBuilding = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside+officesDimensionsOutside/2;
               areaBox = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside;
               addedValueStair=1*costStairWithTaxesOffGround;
          }
          else if (officesDimensionsInside > 200 && officesDimensionsOutside>200){ 
               areaBuilding = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside/2+officesDimensionsOutside/2;
               areaBox = Number(document.getElementById("inputAreaStorage").value)+ officesDimensionsInside/2;
               addedValueStair=2*costStairWithTaxesOffGround;
          }
     }
     else{
          officesDimensionsInside=0;
          officesDimensionsOutside=0;
          areaBuilding = Number(document.getElementById("inputAreaStorage").value);
          areaBox = Number(document.getElementById("inputAreaStorage").value);
          addedValueStair=0;

     };
     console.log(officesAdministrationInsideDimensions);
     console.log(officesAdministrationOutsideDimensions);
     console.log(officesSocialDimensionsInside);
     console.log(officesSocialDimensionsOutside);
     console.log(inputAreaShowroomInside);
     console.log(inputAreaShowroomOutside);
     console.log(officesDimensionsInside);
     console.log(officesDimensionsOutside);
     console.log(areaBuilding);
     console.log(areaBox);
     console.log(addedValueStair);

          // Texte BUREAUX A L'INTERIEUR DU HALL / EXTERIEUR HALL

          //Vérification du choix de bureaux à l'intérieur
          let answer31 = [0,1];

          if (choiceOfficesInside.value=="yes"){ 
               answer31=answer31[0];
          }
          else {
               answer31=answer31[1];
               // console.log(answer31);// on log pour vérifier que l'on a bien le retour aprés le check
          }
          //Vérification de l'option choisie pour le texte de bureaux intérieur ou extérieur
          const answerChoiceOfficesInside = {yes :"Il y a des bureaux dans le volume des locaux d'activité", no : "Il n'y a pas de bureaux situés dans les locaux d'activité"};
          x31 = answerChoiceOfficesInside.yes;
          y31 = answerChoiceOfficesInside.no;
          answer31 > 0 ? y31 : y31=x31;
          //Vérification du choix de bureaux à l'extérieur
          let answer32 = [0,1];

          if (choiceOfficesInside.value=="yes"){ 
               answer32=answer32[0];
          }
          else {
               answer32=answer32[1];
               // console.log(answer32);// on log pour vérifier que l'on a bien le retour aprés le check
          }
          //Vérification de l'option choisie pour le texte de bureaux intérieur ou extérieur
          const answerChoiceOfficesOutside = {yes :"Il y a des bureaux à l'extérieur des locaux d'activité", no : "Il n'y a pas de bureaux situés à l'extérieur des locaux d'activité"};
          x32 = answerChoiceOfficesOutside.yes;
          y32 = answerChoiceOfficesOutside.no;
          answer32 > 0 ? y32 : y32=x32;

          // Texte SHOWROOM
          //Récupération des données
          const choiceShowroomInside = document.getElementById('choiceShowroomInside');
          const choiceShowroomOutside = document.getElementById('choiceShowroomOutside');
          //Vérification du choix de showroom Intérieur
          let valueShowroomInside = choiceShowroomInside.value;
          let answer41 = [0,inputAreaShowroomInside];
          switch(valueShowroomInside){
          case'no':
          answer41= answer41[0];
          // console.log(answer41);// vérification de la valeur de answer41
          break;
          case'yes':
          answer41= answer41[1];
          // console.log(answer41); // vérification de la valeur de answer41
          break;
          };
          // surface supplémentaire pour le Show room Intérieur
          inputAreaShowroomInside = Number(answer41);

          //Vérification du choix de showroom Extérieur
          let valueShowroomOutside = choiceShowroomOutside.value;
          let answer42 = [0,inputAreaShowroomOutside];
          switch(valueShowroomOutside){
          case'no':
          answer42= answer42[0];
          // console.log(answer42);// vérification de la valeur de answer42
          break;
          case'yes':
          answer42= answer42[1];
          // console.log(answer42); // vérification de la valeur de answer42
          break;
          };
          // surface supplémentaire pour le Show room Extérieur
          inputAreaShowroomOutside = Number(answer42);

          //Pas de texte pour choix de Show room pour Intérieur/Extérieur
          // ___________________________________________
          // SURFACE DU TERRAIN ET DES VRD
          //Si on connait le terrain > inputAreaGround définie au début de la fonction

          // Si on ne connait pas le terrain :Calcul du terrain necessaire lorsque le choix non a été fait quand on ne connait pas son terrain , peut être fait aprés détermination des variables areaBuilding / officesDimensionsOutside et inside / areaRoadAndUtilities est calculée

          let inputNeedAreaGround;
          let groundValue
          
          let  inputNumberDockShelter = document.getElementById("inputNumberDockShelter").value;
          let  inputNumberFloorSectionalDoor = document.getElementById("inputNumberFloorSectionalDoor").value;
          let  inputAreaRoadAndUtilitiesStorageOutdoor = Number(document.getElementById("inputAreaRoadAndUtilitiesStorageOutdoor").value);
          let areaRoadAndUtilitiesDockShelter;
          let areaRoadAndUtilitiesFloorSectionelDoor;

          if (inputNumberDockShelter>0 && inputNumberFloorSectionalDoor>0) {
               areaRoadAndUtilitiesDockShelter=Number(inputNumberDockShelter*5*35+20*5);
               areaRoadAndUtilitiesFloorSectionelDoor =Number(inputNumberFloorSectionalDoor*(5*20));
          }
          if (inputNumberDockShelter>0 && inputNumberFloorSectionalDoor<=0) {
               areaRoadAndUtilitiesDockShelter=Number(inputNumberDockShelter*5*20+20*20);
               areaRoadAndUtilitiesFloorSectionelDoor =0;
          }
          if (inputNumberDockShelter<=0 && inputNumberFloorSectionalDoor>0) {
               areaRoadAndUtilitiesDockShelter=0;
               areaRoadAndUtilitiesFloorSectionelDoor =Number(inputNumberFloorSectionalDoor*(5*20)+20*5);
          }
          if (inputNumberDockShelter<=0 && inputNumberFloorSectionalDoor<=0) {
               areaRoadAndUtilitiesDockShelter=0;
               areaRoadAndUtilitiesFloorSectionelDoor=0;
          };

          let areaRoadAndUtilities = areaRoadAndUtilitiesDockShelter+areaRoadAndUtilitiesFloorSectionelDoor+inputAreaRoadAndUtilitiesStorageOutdoor+Number((inputClercksOfficesInside+inputClercksOfficesOutside+inputWorkersOfficesInside+inputWorkersOfficesOutside)*(2.5*8*2));//calcul surface VRD selon nombre de quai de porte de plain pied, de surface de cour de stockage et du nombre d'employés, // multiplie par 2 la surface de parking car il faut la surface de parking et la surface de la route d'accés au parking
          if (inputAreaGround===0){
               inputNeedAreaGround = ((areaBuilding+areaRoadAndUtilities)*1.2);
          }
          else {
               inputNeedAreaGround = 0;
          };
          
          (inputAreaGround===0)? groundValue= inputNeedAreaGround: groundValue= inputAreaGround;
          
          console.log(inputNumberDockShelter);
          console.log(inputNumberFloorSectionalDoor);
          console.log(inputAreaRoadAndUtilitiesStorageOutdoor);
          console.log(inputClercksOfficesInside);
          console.log(inputClercksOfficesOutside);
          console.log(inputWorkersOfficesInside);
          console.log(inputWorkersOfficesOutside);
          console.log(Number((inputClercksOfficesInside+inputClercksOfficesOutside+inputWorkersOfficesInside+inputWorkersOfficesOutside)*(2.5*8*2)));// multiplie par 2 car il faut la surface de parking et la surface de la route d'accés au parking
          console.log(areaRoadAndUtilitiesDockShelter);
          console.log(areaRoadAndUtilitiesFloorSectionelDoor);
          console.log(areaRoadAndUtilities);
          console.log(inputAreaGround);
          console.log(inputNeedAreaGround);
          console.log(groundValue);
          // _________________________________________________________________
          //___________________________________________________________________________
          // SURFACE ESPACE VERT
          let areaPlantations
          areaPlantations =groundValue-areaRoadAndUtilities-areaBuilding;
          console.log(areaRoadAndUtilities);
          console.log(areaPlantations);
     // _________________________________________________________________
     //COUT ET TEXTES DES SPECIFICITES
     // ____________________________________________________________
          //COUT ET TEXTES SPECIFICITE HAUTEUR DU BATIMENT
          // récupération des données
          const inputHeightHall = document.getElementById("inputHeightHall").value;
          let addedValueHeight;
          if(inputHeightHall>7){
               addedValueHeight=(inputHeightHall-7)*costHeightAbove7WithTaxesOffGround;
          }
          else {
               addedValueHeight=0;
          };

          console.log(addedValueHeight);
     // ____________________________________________________________
          //COUT ET TEXTES SPECIFICITE STOCKAGE EXTERIEUR
          // récupération des données
          let inputOutdoorStorage = Number(document.getElementById("inputAreaRoadAndUtilitiesStorageOutdoor").value);
          inputOutdoorStorage === ""? inputOutdoorStorage=0:inputOutdoorStorage;
          //coût du stockage extérieur  :compris dans le VRD 
          
          //Vérification de la taille du terrain pour le texte d'affichage

          const inputAreaGroundWithStorage =((Number(areaBuilding)+Number(areaRoadAndUtilities))*1.2); // areaRoadAndUtilities comprend la surface de stockage
          
          const answerOutDoorStorage = {sufficient :"bonnes", insufficient : "insuffisantes"};
          x1 = answerOutDoorStorage.sufficient;
          y1 = answerOutDoorStorage.insufficient;
          w1 = "prises en compte dans le chiffrage"

          if ((ground.checked===true) && (Number(groundValue)>=(inputAreaGroundWithStorage))) {
               x1=x1;
          }
          else if (noGround.checked===true) {
               x1=w1;
          }else {
               x1=y1;
          };

     // ____________________________________________________
          //COUT ET TEXTES  SPECIFICITE RENFORT DE SOL
          // calcul du coût du renfort de sol

          //Récupération du choix de renfort de sol
          const selectStudySoil = document.getElementById('selectStudySoil');
          
          //Vérification du choix de renfort de sol
          let choice = selectStudySoil.value;
          let answer2 = [0,Number(areaBuilding)];

          switch(choice){
               case'yes':
               choiceStudySoil= answer2[1];
               // console.log(choiceStudySoil); // vérification de la valeur de choiceStudySoil
               break;
               case'no':
               choiceStudySoil= answer2[0];
               // console.log(choiceStudySoil);// vérification de la valeur de choiceStudySoil
               break;
               case'iDontKnow':
               choiceStudySoil= answer2[0];
               // console.log(choiceStudySoil);// vérification de la valeur de choiceStudySoil
               break; 
          };
          const costChoiceSoil = Number(choiceStudySoil*costSoilReinforcementWithTaxesOffGround);//calcul de la valeur de renfort de Sol
          // console.log(costChoiceSoil);// vérification de la valeur de costChoiceSoil
          //Vérification de l'option choisie pour le texte d'affichage
          const answerChoiceStudySoil = {yes :"Le bâtiment a besoin de renforcement de sol qui sont calculés dans le coût", no : "le chiffrage est réalisé sans renforcement de sol"};
          x2 = answerChoiceStudySoil.yes;
          y2 = answerChoiceStudySoil.no;

          choiceStudySoil > 0 ? x2 : x2=y2;

     // ____________________________________________________
          // COUT ET TEXTES SPECIFITE CLOISON INTERIEURE
          // Récupération des données
          let inputPartitionInside = document.getElementById("inputPartitionInside").value;  
          //Calcul
          let inputWidthHall= Math.sqrt(areaBox);
          let costPartitionInsideSidingPanel=ratioPartitionInsideSidingPanelWithTaxesOffGround*(inputWidthHall*inputHeightHall)*inputPartitionInside;

          let selectPartitionInside = document.getElementById("selectPartitionInside").value;
          switch(selectPartitionInside){
              case'yes':
              costPartitionInsideSidingPanel
              break;
              case'no':
              costPartitionInsideSidingPanel = 0;
              break;
          };
          console.log(ratioPartitionInsideSidingPanelWithTaxesOffGround);
          console.log(inputWidthHall);
          console.log(inputHeightHall);
          console.log(inputPartitionInside);
          console.log(selectPartitionInside);
          console.log(costPartitionInsideSidingPanel);

     // ____________________________________________________
          // COUT ET TEXTES SPECIFITE PONT ROULANT
          //Récupération des données
          const choiceOverHeadCrane = document.getElementById('choiceOverHeadCrane');
          const inputNumberOverHeadCrane = document.getElementById("inputNumberOverHeadCrane").value;
          //Vérification du choix de renfort de sol
          let valueOverHeadCrane = choiceOverHeadCrane.value;
          let answer5 = [0,inputNumberOverHeadCrane];

          switch(valueOverHeadCrane){
               case'no':
               answer5= answer5[0];
               // console.log(answer5);// vérification de la valeur de answer5
               break;
               case'yes':
               answer5= answer5[1];
               // console.log(answer5); // vérification de la valeur de answer5
               break;
          };
          // calcul du nombre de poteaux renforcés 
          const polesUnderOverHeadCrane = (Math.ceil((((Math.sqrt(areaBox))/6)+1)*2));
               //const lengthRaceway = ((Math.sqrt(areaBox))*2); considéré comme à la charge du fournisseur de pont
          // coût de la plus value pont roulant
          const addedValueOverHeadCrane = Number(answer5)*(polesUnderOverHeadCrane*addedValueOverHeadCraneOnPolesWithTaxesOffGround*inputHeightHall+polesUnderOverHeadCrane*addedValueOverHeadCraneFondationWithTaxesOffGround);
          console.log(polesUnderOverHeadCrane);
          console.log(inputHeightHall);
          console.log(inputNumberOverHeadCrane);
          console.log(addedValueOverHeadCrane);

          //Vérification de l'option choisie pour le texte d'affichage Réalisée directement dans le texte avec la variable answer5
     // ____________________________________________________
          //COUT ET TEXTES SPECIFICITE NOMBRE DE QUAIS
          //Récupération des données
          const choiceDockShelter = document.getElementById('choiceDockShelter');
          //Vérification du choix
          let valueDockShelter = choiceDockShelter.value;
          let answer6 = [0,inputNumberDockShelter];

          switch(valueDockShelter){
               case'no':
               answer6= answer6[0];
               // console.log(answer6);// vérification de la valeur de answer6
               break;
               case'yes':
               answer6= answer6[1];
               // console.log(answer6); // vérification de la valeur de answer6
               break;
          };

          // coût de la plus value pour les quais niveleur, sas, butoir et gros oeuvre
          const addedValueDockShelter = (Number(answer6)*(costDockShelterWithTaxesOffGround+costconcreteWorkDockShelterWithTaxesOffGround));
          
     // ____________________________________________________
          //COUT ET TEXTES SPECIFICITE Porte Sectionnelle de Plain-Pied
          //Récupération des données
          const choiceFloorSectionalDoor = document.getElementById('choiceFloorSectionalDoor');
          //Vérification du choix
          let valueFloorSectionalDoor = choiceFloorSectionalDoor.value;
          let answer7 = [0,inputNumberFloorSectionalDoor];

          switch(valueFloorSectionalDoor){
               case'no':
               answer7= answer7[0];
               // console.log(answer6);// vérification de la valeur de answer6
               break;
               case'yes':
               answer7= answer7[1];
               // console.log(answer6); // vérification de la valeur de answer6
               break;
          };

          // coût de la plus value pour les quais niveleur, sas, butoir et gros oeuvre
          const addedValueFloorSectionalDoor = (Number(answer7)*(costSectionalDoorsWithTaxesOffGround));
          
     // ____________________________________________________

          // COUT ET TEXTES SPECIFICITE TARIF ELECTRICTE

          //Récupération du choix dU TARIF ELECTRICITE
          //const choiceBlueRate = document.getElementById('choiceBlueRate');déclarée dans le texte des erreures
          //const choiceYellowRate = document.getElementById('choiceYellowRate');déclarée dans le texte des erreures
          //const choiceGreenRate = document.getElementById('choiceGreenRate');déclarée dans le texte des erreures
          let inputBlueRate = document.getElementById("inputBlueRate").value; 
          let inputYellowRate = document.getElementById("inputYellowRate").value; 
          
          // Calcul Puissance Electrique
          
          let costElectricalConnection = [costBlueRate,costYellowRate,costGreenRate,0];
                    
                    if (choiceBlueRate.checked===true && choiceYellowRate.checked===true && choiceGreenRate.checked===true){
                        inputBlueRate==''?inputBlueRate=1:inputBlueRate;
                        inputYellowRate==''?inputYellowRate=1:inputYellowRate;
                    costElectricalConnection=costElectricalConnection[0]*inputBlueRate + costElectricalConnection[1]*inputYellowRate+(costElectricalConnection[2]+costGreenRateAddedValueElectricityWithTaxesOffGround);
                }
                    else if (choiceBlueRate.checked===true && choiceYellowRate.checked===true && choiceGreenRate.checked===false ){
                        inputBlueRate==''?inputBlueRate=1:inputBlueRate;
                        inputYellowRate==''?inputYellowRate=1:inputYellowRate;
                        costElectricalConnection=costElectricalConnection[0]*inputBlueRate + costElectricalConnection[1]*inputYellowRate;
                }
                    else if (choiceBlueRate.checked===true && choiceYellowRate.checked===false && choiceGreenRate.checked===false ){
                        inputBlueRate==''?inputBlueRate=1:inputBlueRate;
                        costElectricalConnection=costElectricalConnection[0]*inputBlueRate;
                }
                    else if (choiceBlueRate.checked===false && choiceYellowRate.checked===true && choiceGreenRate.checked===false ){
                        inputYellowRate==''?inputYellowRate=1:inputYellowRate;
                        costElectricalConnection=costElectricalConnection[1]*inputYellowRate;
                }
                    else if (choiceBlueRate.checked===false && choiceYellowRate.checked===true && choiceGreenRate.checked===true ){
                        inputYellowRate==''?inputYellowRate=1:inputYellowRate;
                        costElectricalConnection= costElectricalConnection[1]*inputYellowRate+(costElectricalConnection[2]+costGreenRateAddedValueElectricityWithTaxesOffGround);
                }
                    else if (choiceBlueRate.checked===true && choiceYellowRate.checked===false && choiceGreenRate.checked===true){
                        inputBlueRate==''?inputBlueRate=1:inputBlueRate;
                        costElectricalConnection=costElectricalConnection[0]*inputBlueRate +(costElectricalConnection[2]+costGreenRateAddedValueElectricityWithTaxesOffGround);
                }
                    else if (choiceBlueRate.checked===false && choiceYellowRate.checked===false && choiceGreenRate.checked===true){
                        costElectricalConnection= (costElectricalConnection[2]+costGreenRateAddedValueElectricityWithTaxesOffGround);
                }
                    else{
                        costElectricalConnection=costElectricalConnection[3];
                    };
            console.log(inputBlueRate);
            console.log(inputYellowRate);
            console.log(costElectricalConnection);

          // Texte Puissance Electrique
          let verificationElectricalConnection = { blue :`Raccordement électrique : Vous avez choisi ${inputBlueRate} tarif(s) bleu`, yellow : `Raccordement électrique : Vous avez choisi ${inputYellowRate} tarif(s) jaune`, blueyellow : `Raccordement électrique : Vous avez choisi ${inputBlueRate} tarif(s) bleu et ${inputYellowRate} tarif(s) jaune` ,green : `Raccordement électrique : Vous avez choisi le tarif vert`, bluegreen : `Raccordement électrique : Vous avez choisi ${inputBlueRate} tarif(s) bleu et 1 tarif vert`, yellowgreen : `Raccordement électrique : Vous avez choisi ${inputYellowRate} tarif(s) jaune et 1 tarif vert`, blueyellowgreen : `Raccordement électrique : Vous avez choisi ${inputBlueRate} tarif(s) bleu, ${inputYellowRate} tarif(s) jaune et 1 tarif vert` };

        if( choiceBlueRate.checked===true&& choiceYellowRate.checked===false && choiceGreenRate.checked===false ){ 
            x7 =verificationElectricalConnection.blue;
        }
        else if( choiceBlueRate.checked===false && choiceYellowRate.checked===true && choiceGreenRate.checked===false){ 
            x7 =verificationElectricalConnection.yellow;
        }
        else if( choiceBlueRate.checked===false && choiceYellowRate.checked===false && choiceGreenRate.checked===true){ 
            x7 =verificationElectricalConnection.green;
        }
        else if( choiceBlueRate.checked===true && choiceYellowRate.checked===true && choiceGreenRate.checked===false ){ 
            x7 =verificationElectricalConnection.blueyellow;
        }
        else if( choiceBlueRate.checked===false && choiceYellowRate.checked===true && choiceGreenRate.checked===true){ 
            x7 =verificationElectricalConnection.yellowgreen;
        }
        else if( choiceBlueRate.checked===true && choiceYellowRate.checked===false &&choiceGreenRate.checked===true){ 
            x7 =verificationElectricalConnection.bluegreen;
        }
        else if( choiceBlueRate.checked===true && choiceYellowRate.checked===true &&choiceGreenRate.checked===true){ 
            x7 =verificationElectricalConnection.blueyellowgreen;
        }
        else{ 
            x7 ="je n'ai pas sélectionné de type de connection électrique, phrase à supprimer quand les messages d'erreurs seront réactivés";
        };
     // ____________________________________________________
          // COUT ET TEXTES SPECIFICIITE CHAUFFAGE DANS LE HALL PAR AEROTHERME GAZ
          
          //Récupération du choix de CHAUFFAGE 
          const selectHeatingHall = document.getElementById('selectHeatingHall');
          
          //Vérification du choix de chauffage

          let choiceHeating = selectHeatingHall.value;

          switch(choiceHeating){
               case'no':
               // calcul du chauffage dans le Hall
               costHeating=0;
               break;
               case'yes':
               // calcul du chauffage dans le Hall
               costHeating=areaBox*ratioGasHeatingHallWithTaxesOffGround;
               break; 
          };

          // console.log(costHeating);//vérification de costHeating
          const answerChoiceHeating = {yes :"le Hall est chauffé par aérothermes gaz", no : "Le hall n'est pas chauffé"};
          x8 = answerChoiceHeating.yes;
          y8 = answerChoiceHeating.no;

          costHeating > 0 ? x8 : x8=y8;
          
          
               // ____________________________________________________
                    // COUT ET TEXTES RIA Hall
                //Calcul
                let costFireNetworkHall=ratioFireNetworkHallWithTaxesOffGround*areaBox;
                let selectFireNetworkHall = document.getElementById("selectFireNetworkHall").value;
                switch(selectFireNetworkHall){
                    case'yes':
                    costFireNetworkHall
                    break;
                    case'no':
                    costFireNetworkHall = 0;
                    break;
                };
                console.log(costFireNetworkHall);

     // ____________________________________________________
          // COUT ET TEXTES SPECIFICITE BATIMENT ICPE
          // calcul de la compatibilté de la surface avec ICPE

          // calcul de la surface nécessaire en cas d'Icpe  et comparaison avec la surface terrain pour voir si c'est suffisant
     
          const areaIcpe = Math.round((Math.pow(((Math.sqrt(areaBox))+40),2)));

          sufficientGround = [(Number(groundValue)- areaIcpe),(Number(inputNeedAreaGround)- areaIcpe)];
          groundValue === 0? sufficientGround = sufficientGround[1]:sufficientGround = sufficientGround[0];

          //Récupération du choix Icpe
          const selectIcpe = document.getElementById('selectIcpe');
          
          //Vérification du choix Icpe
          let choiceIcpe = selectIcpe.value;
          let additionalGroundAreaIcpe=[0, sufficientGround];

          switch(choiceIcpe){
               case'no':
               additionalGroundAreaIcpe= additionalGroundAreaIcpe[0];
               // console.log(additionalGroundAreaIcpe);// vérification de la valeur de terrain supplémentaire nécessaire
               break;
               case'yes':
               additionalGroundAreaIcpe= additionalGroundAreaIcpe[1];
               // console.log(additionalGroundAreaIcpe);// vérification de la valeur de terrain supplémentaire nécessaire
               break;
               case'iDontKnow':
               additionalGroundAreaIcpe= additionalGroundAreaIcpe[0];
               // console.log(additionalGroundAreaIcpe);// vérification de la valeur de terrain supplémentaire nécessaire
               break; 
          };

          //  texte d'affichage
          
          const answerChoiceIcpe = {tooSmall :"Le terrain est trop petit pour réaliser un bâtiment de cette surface classé ICPE sur le terrain envisagé, le calcul de valeur tient compte de la plus value terrain sur la base de vos données",good :"Le terrain envisagé est suffisant pour réaliser un bâtiment de cette surface classé ICPE, le calcul de valeur tient compte de la plus value terrain sur la base de vos données",  no : "Pas de classement ICPE"};
          x9 = answerChoiceIcpe.tooSmall;
          y9 = answerChoiceIcpe.good;
          z9 = answerChoiceIcpe.no;


          const answerAreaGround=[areaIcpe,inputNeedAreaGround];
          let u9= answerAreaGround[0];
          let v9= answerAreaGround[1];
          
          if (additionalGroundAreaIcpe < 0 && groundValue>0){
               x9=x9;
               u9=u9;
          }
          else if (additionalGroundAreaIcpe > 0 && groundValue>0){
               x9=y9;
               u9=u9;
          }
          else if (additionalGroundAreaIcpe < 0 && groundValue==0){
               x9='il faut plus de terrain pour un classement ICPE.' ;
               u9=u9;
          }
          else {
               x9=z9;
               u9=v9;
          };
          
          
          //  calcul de la plus value terrain si le bâtiment est ICPE rubrique 1510 et 2663
          // console.log(addedValueIcpe);
          additionalGroundAreaIcpe = Math.abs(additionalGroundAreaIcpe);

          let addedValueIcpe =[((inputCostGround/groundValue)*additionalGroundAreaIcpe),(inputCostGroundByRegion*additionalGroundAreaIcpe)];
          
          groundValue>0?
          addedValueIcpe =addedValueIcpe[0]:addedValueIcpe =addedValueIcpe[1];

          additionalGroundAreaIcpe!== 0 ? addedValueIcpe : addedValueIcpe=0;

          // console.log(inputNeedAreaGround);
          // console.log(groundValue);
          // console.log(areaIcpe);
          // console.log(sufficientGround);
          // console.log(additionalGroundAreaIcpe);
          // console.log(addedValueIcpe); //vérification des valeurs de addedValueIcpe
          // console.log(inputCostGround);
          // console.log(costNeedAreaGround);

// ___________________________________________
//CALCUL COUTS
     //COUT TERRAIN
          //const inputCostGround = Number(inputCostGround); //on connait le coût du terrain; inputCostGround c'est la valeur rentrée
          inputAreaGround===0? costNeedAreaGround= Number(inputNeedAreaGround)*inputCostGroundByRegion: costNeedAreaGround=0;//on ne connait pas le coût du terrain soit inputAreaGround===0 alors on calcul la valeur 
     //COUT HALL
          const costBox = Number(areaBox)*(costHallCompanyWithTaxesOffGround +addedValueHeight);
     //COUT DES BUREAUX
          let costOffices
          //bureaux intérieur pas extérieur
          if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="no"){
          //bureaux intérieurs Openspace 
          if (choiceOpenspaceOfficesInside.value==="yes"){
          costOffices = costOfficesCompanyInsideOpenSpaceWithTaxesOffGround*(officesDimensionsInside);
          }
          //bureaux intérieurs Cloisonnés
          if (choiceOpenspaceOfficesInside.value==="no"){
          costOffices = costOfficesCompanyInsidePartitionedWithTaxesOffGround*(officesDimensionsInside-inputAreaShowroomInside)+inputAreaShowroomInside*costOfficesCompanyInsideOpenSpaceWithTaxesOffGround;
          }
          }
          //bureaux extérieur pas intérieur
          else if (choiceOfficesInside.value==="no" && choiceOfficesOutside.value==="yes"){
          // bureaux extérieurs OpenSPace
          if (choiceOpenspaceOfficesOutside.value==="yes"){
               costOffices = costOfficesCompanyOutsideOpenSpaceWithTaxesOffGround*(officesDimensionsOutside);
          }
          // bureaux extérieurs Cloisonnés
          if (choiceOpenspaceOfficesOutside.value==="no"){
               costOffices = costOfficesCompanyOutsidePartitionedWithTaxesOffGround*(officesDimensionsOutside-inputAreaShowroomOutside)+inputAreaShowroomOutside*costOfficesCompanyOutsideOpenSpaceWithTaxesOffGround;
          }
          }
          //bureaux extérieur et intérieur
          else if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="yes"){
          // bureaux intérieur Openspace
          if (choiceOpenspaceOfficesInside.value==="yes"){
          // bureaux extérieurs Openspace
          if (choiceOpenspaceOfficesOutside.value==="yes"){
          costOffices = officesDimensionsInside*costOfficesCompanyInsideOpenSpaceWithTaxesOffGround+ costOfficesCompanyOutsideOpenSpaceWithTaxesOffGround*(officesDimensionsOutside);
          }
          // bureaux extérieurs cloisonnés
          else if (choiceOpenspaceOfficesOutside.value==="no"){
          costOffices = officesDimensionsInside*costOfficesCompanyInsideOpenSpaceWithTaxesOffGround+costOfficesCompanyOutsidePartitionedWithTaxesOffGround*(officesDimensionsOutside-inputAreaShowroomOutside)+inputAreaShowroomOutside*costOfficesCompanyOutsideOpenSpaceWithTaxesOffGround;
          }
          }
          // bureaux intérieurs Cloisonné
          else if (choiceOpenspaceOfficesInside.value==="no"){
          // bureaux extérieurs Openspace
          if (choiceOpenspaceOfficesOutside.value==="yes"){
          costOffices = costOfficesCompanyInsidePartitionedWithTaxesOffGround*(officesDimensionsInside-inputAreaShowroomInside)+inputAreaShowroomInside*costOfficesCompanyInsideOpenSpaceWithTaxesOffGround+ costOfficesCompanyOutsideOpenSpaceWithTaxesOffGround*(officesDimensionsOutside);
          }
          // bureaux extérieurs Cloisonnés
          else if (choiceOpenspaceOfficesOutside.value==="no"){
          costOffices = costOfficesCompanyInsidePartitionedWithTaxesOffGround*(officesDimensionsInside-inputAreaShowroomInside)+inputAreaShowroomInside*costOfficesCompanyInsideOpenSpaceWithTaxesOffGround+costOfficesCompanyOutsidePartitionedWithTaxesOffGround*(officesDimensionsOutside-inputAreaShowroomOutside)+inputAreaShowroomOutside*costOfficesCompanyOutsideOpenSpaceWithTaxesOffGround;
          }
          }
          }
          //bureaux ni extérieur ni intérieur
          else if (choiceOfficesInside.value==="no" && choiceOfficesOutside.value==="no"){
          costOffices = 0;
          };
          
          // vérification valeur bureaux
          console.log(costOffices);//vérification du coût des bureaux

     //COUT VRD
         
          let costRoadAndUtilities;

          if (((areaRoadAndUtilities+areaBuilding)/groundValue)> 0.65&& groundValue>5000){
          costRoadAndUtilities= areaBuilding*ratioBuilding2WithTaxAndFee+areaRoadAndUtilities*ratioRoadAndUtilities2WithTaxAndFee+areaPlantations*ratioPlantations2WithTaxAndFee+groundValue*ratioFencing2WithTaxAndFee;
          }
          else {
          costRoadAndUtilities= areaBuilding*ratioBuilding1WithTaxAndFee+areaRoadAndUtilities*ratioRoadAndUtilities1WithTaxAndFee+areaPlantations*ratioPlantations1WithTaxAndFee+groundValue*ratioFencing1WithTaxAndFee;
          };
          console.log(areaBuilding);
          console.log(areaRoadAndUtilities);
          console.log(areaPlantations);
          console.log(groundValue);
          console.log(costRoadAndUtilities);

     //COUT TOTAL
          // log des données du TOTAL
          console.log(inputCostGround);
          console.log(costNeedAreaGround);
          console.log(costBox);
          console.log(costOffices);
          console.log(costRoadAndUtilities);
          console.log(costChoiceSoil);
          console.log(costPartitionInsideSidingPanel);
          console.log(addedValueOverHeadCrane);
          console.log(addedValueDockShelter);
          console.log(addedValueFloorSectionalDoor);
          console.log(costElectricalConnection);
          console.log(costHeating);
          console.log(costFireNetworkHall);
          console.log(addedValueIcpe);
          console.log(addedValueStair);
          const costProjectWithoutCommercialMargin= Math.round ((Number(inputCostGround) + Number(costNeedAreaGround) + costBox + costOffices+ costRoadAndUtilities +costChoiceSoil+costPartitionInsideSidingPanel+addedValueOverHeadCrane+addedValueDockShelter+addedValueFloorSectionalDoor+costElectricalConnection+costHeating+costFireNetworkHall+addedValueIcpe+addedValueStair)*100/100);// calcul du coût du bâtiment hors marge commerciale
          console.log(costProjectWithoutCommercialMargin);
          const number = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format( costProjectWithoutCommercialMargin);// pour affichage number en euros
          // console.log(number);
     
     //COUT Frais commercial
          const CostDeveloppementAndCommercial=Math.round (0.095*costProjectWithoutCommercialMargin)//calcul du coût du bâtiement comprenant la valeur commerciale de 9,5%
          const number2 = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format( CostDeveloppementAndCommercial);// pour affichage number2 en euros

     // _______________________________________
     // affichage du coût du bâtiment avec spécificités et les textes de choix

     document.body.innerHTML=
     `
     <header>
     <nav>
         <ul>
             <li id="logo"><a href="#">AMO : le site des maîtres d'ouvrage</a>  </li>
             <li><a href="#contact">Nous contacter</a>  </li>
             <li><a href="#s'identifier">s'identifier</a>  </li>
         </ul>
     </nav>
    </header>
     <section id="imagePrincipale"> 
     <h2 class='textResult'>le coût de construction du  bâtiment que vous envisagez est de :
               <div class='textCout'>${number} HT</div></h2>
               <ul>
               <li><h3>y compris Frais (Architecte, bureaux controle, Suivi de chantier(environ 12%), assurance...)</li> 
               <li><h3>y compris Taxes(Permis de construire)</li>
               <li><h3>y compris Terrain</li>
               <li><h3>non compris marges commerciales promotion et agences (environ 9,5% de la valeur travaux soit ${number2} ) </h3>
               </ul>
               
     <ul>
     <h2>Avec les conditions suivantes :</h2>
     <li><h4> vous avez besoin de ${inputNeedAreaGround} m² minimum de terrain sans classement ICPE. les dimensions de votre terrain sont ${x1} avec un stockage extérieur de ${inputOutdoorStorage}m2</h4></li>
     <li><h4>${x2}</h4></li>
     <li><h4>${y31}</h4></li>
     <li><h4>${y32}</h4></li>
     <li><h4>Vous avez besoin de ${answer5} pont(s) roulant</h4></li>
     <li><h4>Vous avez besoin de ${answer6} quai(s) de déchargement</h4></li>
     <li><h4>${x7}</h4></li>
     <li><h4>${x8}</h4></li>
     <li><h4>${x9}. Vous avez donc besoin de ${u9} m2 de terrain total</h4></li>
     </ul>
     <h2>Détails de prestation du Chiffrage :</h2>
     <h4> comprenant bitume, espace vert, assainissement,fondations, gros oeuvre, charpente, bardage,couverture, électricité, chauffage, plomberie, aménagement des bureaux </h4>
     <h4> hors démolitions, racks, ameublement, machine, video surveillance, alarmes autre que alarme incendie,ponts roulant .....à mettre plus de détails</h4> 
 
     <div class="button1">
     <input type="button" value="Retour à l'Accueil" onclick=window.location.href="http://127.0.0.1:5500/index.html" />
     </div>             
</section>
`
          };// fermeture de la fonction getAreas


          
