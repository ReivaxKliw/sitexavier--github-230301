//déclaration des variables utilisées dans le code


// __________________________________
const studyFeesAndInsurance = 1.2555 // 25,55% taxe et frais :etude de sol, bureau de controle, thermique, SPS, assurance décennale et RC  
// __________________________________
const inputCostGroundByRegion= 65; //prix fixé à 65 e pour l'instant. Il faudra aprés faire une demande de la région de construction et prendre un prix moyen de la région
// constante de coût VRD
     const ratioBuilding1 = 94; //94 euros/m² de construit si le ration (voirie+Bâtiment)/terrain est <65%
     const ratioBuilding2 = 78.5 ; //78.5 euros/m² de construit si le ratio (voirie+Bâtiment)/terrain est >65% 
     const ratioRoadAndUtilities1 = 95.5; //95.5 euros/m²  si le ratio (voirie+Bâtiment)/terrain est <65% 
     const ratioRoadAndUtilities2 = 55.5; //55.5 euros/m²  si le ratio (voirie+Bâtiment)/terrain est >65% 
     const ratioPlantations1 = 9.75; //9.75 euros/m² pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est <65% 
     const ratioPlantations2 = 10.80; //10.80 euros/m²  pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est >65% 
     const ratioFencing1 = 4.75; //4.75 euros/m²  pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est <65% 
     const ratioFencing2 = 3.25; //3.25 euros/m²  pour les espaces vert si le ratio (voirie+Bâtiment)/terrain est >65% const costRoadAndUtilities = 87;//ratio coût des VRD entreprise uniquement pour la cour  hors marge constructeur

// ratio du calcul du devis bâtiment HORS TERRAIN
// constante de coût Hall
     const costHallCompany = 255.89;//ratio coût du hall entreprise de construction  hors marge constructeur
     const costHeightAbove7 = 14;//ratio coût par métre supplémentaire au dessus de 7 m à ajouter à costHallCompany

// constante de coût Bureaux
     const costOfficesCompanyInsideOpenSpace = 710; //ratio coût des bureaux entreprise de construction intérieur et OpenSpace et Maitrise d'Oeuvre à 12% hors marge constructeur
     const costOfficesCompanyOutsideOpenSpace = 749.01; //ratio coût des bureaux entreprise de construction extérieur et OpenSpace et Maitrise d'Oeuvre à 12% hors marge constructeur
     const costOfficesCompanyInsidePartitioned = 830.07; //ratio coût des bureaux entreprise de construction intérieur et Cloisonnée et Maitrise d'Oeuvre à 12% hors marge constructeur
     const costOfficesCompanyOutsidePartitioned = 867.79; //ratio coût des bureaux entreprise de construction extérieur et Cloisonnée et Maitrise d'Oeuvre à 12% hors marge constructeur


// constante de coût SPECIFICITES
     const costSoilReinforcement = 19.87 ; // 20 e/m²  pour des colonnes réalisées sur l'ensemble du bâtiment à une moyenne de 7m
     const addedValueOverHeadCraneOnPoles = 120; // 126 euros/ml  sur la base d'un HEA 300(90kg/ml) passé en HEA 400(127,4kg/ml) à 3e du kg 
     //const addedValueOverHeadCraneRaceway = 285 ;// 285 euros par ml (HEA300 +carré plein 2,5x2,5) considéré à la charge du fournisseur de pont
     const addedValueOverHeadCraneFondation = 933; // 933 euros par plus value de fondations sous poteau de pont roulant
     const costDockShelter =11000; //euros par unité ( voir ratio 11000 de matériel quai et 4000 de Gros Oeuvre quai )
     const costconcreteWorkDockShelter = 4000; //euros par unité 
     const costSectionalDoors = 5000; //euros par unité 
     const costBlueRate = 5000;// coût d'un tarif bleu
     const costYellowRate = 10000;// coût d'un tarif jaune
     const costGreenRate = 15000;// coût d'un tarif vert 15000 Enedis (+ 45000 de transfo pour l'elctricien autre constante)
     const costGreenRateAddedValueElectricity = 45000;// coût du transfo à la charge du lot Electricité euros par unité 
     const ratioPartitionInsideSidingPanel = 90;// 90 e/m² pour cloison de division intérieure du hall 
     const ratioElectricHeatingHall = 4 //NON UTILISE // 4e/m² de plancher construit pour le chauffage electrique 
     const ratioGasHeatingHall = 9.22;// e/m² pour chauffage aérotherme gaz 
     const ratioFireNetworkHall = 5  // 5e/m² de plancher construit pour le réseau RIA 
     const costElevator = 35000;// Prix d'un ascenseur comprenant la cabine et la colonne 
     const costStair = 20000;// Prix d'un escalier 
// ________________________________

// FONCTION
function functionBudget() {
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
     // 
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
     // _____________________________________________________________________________
// RECUPERATION DES DONNEES
     // Récupération Terrain________________________________________________________
          let choiceGroundOwner = document.getElementById("choiceGroundOwner").value;
          let choiceCostGround = document.getElementById("choiceCostGround").value;
          let inputCostGround = document.getElementById("inputCostGround").value;
          let choiceAreaGround = document.getElementById("choiceAreaGround").value;
          let inputAreaGround = document.getElementById("inputAreaGround").value;

     
     // Récupération Hall du Bâtiment_____
          const inputAreaStorage= Number(document.getElementById("inputAreaStorage").value);

     // Récupération hauteur bâtiment__________________________________________     
          const inputHeightHall = Number(document.getElementById("inputHeightHall").value);
     
     // Récupération bureaux du Bâtiment________________
          // récupération bureaux intérieurs
               const choiceOfficesInside = document.getElementById('choiceOfficesInside');
               const inputClercksOfficesInside =  Number(document.getElementById("inputClercksOfficesInside").value);
               const choiceOpenspaceOfficesInside = document.getElementById('choiceOpenspaceOfficesInside');
               const choiceShowroomInside = document.getElementById('choiceShowroomInside');
               let inputAreaShowroomInside = Number(document.getElementById("inputAreaShowroomInside").value);
               let choiceSocialRoomOfficesInside = document.getElementById("choiceSocialRoomOfficesInside").value;
               // const inputWorkersOfficesInside =  Number(document.getElementById("inputWorkersOfficesInside").value);déclarée dans le texte des erreurs
          // récupération bureaux extérieurs
               const choiceOfficesOutside = document.getElementById('choiceOfficesOutside');
               const inputClercksOfficesOutside =  Number(document.getElementById("inputClercksOfficesOutside").value);
               const choiceOpenspaceOfficesOutside = document.getElementById('choiceOpenspaceOfficesInside');
               const choiceShowroomOutside = document.getElementById('choiceShowroomOutside');
               let inputAreaShowroomOutside = Number(document.getElementById("inputAreaShowroomOutside").value);
               let choiceSocialRoomOfficesOutside = document.getElementById("choiceSocialRoomOfficesInside").value;
               // const inputWorkersOfficesOutside > récupéré dans texte des erreurs

     // Récupération  Spécificités____________________________________________________
          // Récupération renfort de sol
               const choiceSoilReinforcement = document.getElementById('choiceSoilReinforcement');
          
          // Récupération  cloison intérieure
               const choicePartitionInside = document.getElementById('choicePartitionInside');
               const inputNumberPartitionInside = document.getElementById("inputNumberPartitionInside").value;  
          
          // Récupération  Pont roulant
               const choiceOverHeadCrane = document.getElementById('choiceOverHeadCrane');
               const inputNumberOverHeadCrane = document.getElementById("inputNumberOverHeadCrane").value;
          
          // Récupération Niveleur de quais
               const choiceDockShelter = document.getElementById('choiceDockShelter');
               const inputNumberDockShelter = document.getElementById("inputNumberDockShelter").value; 
          
          // Récupération Porte Sectionnelle de Plain-Pied
               const choiceFloorSectionalDoor = document.getElementById('choiceFloorSectionalDoor');
               let inputNumberFloorSectionalDoor = document.getElementById("inputNumberFloorSectionalDoor").value; 

          // Récupération Stockage extérieur
               let choiceStorageOutdoor = document.getElementById("choiceStorageOutdoor").value; 
               let inputAreaRoadAndUtilitiesStorageOutdoor = Number(document.getElementById("inputAreaRoadAndUtilitiesStorageOutdoor").value);

          // Récupération  Raccordement Electricté
               //const choiceBlueRate = document.getElementById('choiceBlueRate');déclarée dans le texte des erreures
               //const choiceYellowRate = document.getElementById('choiceYellowRate');déclarée dans le texte des erreures
               //const choiceGreenRate = document.getElementById('choiceGreenRate');déclarée dans le texte des erreures
               let inputBlueRate = document.getElementById("inputBlueRate").value; 
               let inputYellowRate = document.getElementById("inputYellowRate").value; 
          
          // Récupération  Chauffage dans le Hall 
               const choiceHeatingHall = document.getElementById('choiceHeatingHall');
            
          // Récupération  Ria
               let choiceFireNetworkHall = document.getElementById("choiceFireNetworkHall").value;

          // Récupération   surface avec ICPE
               const choiceIcpe = document.getElementById('choiceIcpe');
               
          // Récupération  chauffage des bureaux
               const choiceHeatingOffices = document.getElementById('choiceHeatingOffices').value;
               
          // Récupération Bardage luxe pour les bureaux
               const choicePanelOffices = document.getElementById('choicePanelOffices').value;
          
          // Récupération Ascenseur
               const choiceElevator = document.getElementById('choiceElevator').value;

// CALCULS CARACTERISTIQUES BATIMENTS
     
     // Calcul hauteur bâtiment__________________________________________

     // Calcul Hall du Bâtiment____________________________________________________

     // Calcul bureaux du Bâtiment____________________________________________________
          let officesDimensionsInside;
          let officesDimensionsOutside;
          let officesAdministrationInsideDimensions ;
          let officesAdministrationOutsideDimensions;

          // Calcul vérification Show room intérieur ou extérieur_____________________________
               // Calcul Vérification du choix de showroom Intérieur
                    let valueShowroomInside = choiceShowroomInside.value;
                    let answer41 = [0,inputAreaShowroomInside];
                    switch(valueShowroomInside){
                    case'no':
                    answer41= answer41[0];
                    break;
                    case'yes':
                    answer41= answer41[1];
                    break;
                    };
                    inputAreaShowroomInside = Number(answer41);

               console.log(inputAreaShowroomInside);
          
               // Calcul Vérification du choix de showroom Extérieur
                    let valueShowroomOutside = choiceShowroomOutside.value;
                    let answer42 = [0,inputAreaShowroomOutside];
                    switch(valueShowroomOutside){
                    case'no':
                    answer42= answer42[0];
                    break;
                    case'yes':
                    answer42= answer42[1];
                    break;
                    };
                    inputAreaShowroomOutside = Number(answer42);

               console.log(inputAreaShowroomOutside);
     
          //Calcul de la surface des bureaux administratifs_____________________________
               // Calcul bureaux intérieurs Openspace 
                    if (choiceOfficesInside.value==="yes"){
                    if (choiceOpenspaceOfficesInside.value==="yes"){
                         officesAdministrationInsideDimensions = ((inputClercksOfficesInside-3)*10+(3)*20)*1.5;//calcul de dimensionnement des bureaux basé sur 10m² par personne pour les open space mais 3 bureaux fermés de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
                    }
               // Calcul bureaux intérieurs Cloisonnés
                    if (choiceOpenspaceOfficesInside.value==="no"){
                         officesAdministrationInsideDimensions = ((inputClercksOfficesInside-3)*15+(3)*20)*1.5;//calcul de dimensionnement des bureaux basé sur 15m² par personne pour les bureaux fermés mais 3 bureaux de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
                    }
                    }
                    if (choiceOfficesInside.value==="no"){
                         officesAdministrationInsideDimensions = 0;
                    }
               // Calcul bureaux extérieurs Openspace 
                    if (choiceOfficesOutside.value==="yes"){
                    if (choiceOpenspaceOfficesOutside.value==="yes"){
                         officesAdministrationOutsideDimensions = ((inputClercksOfficesOutside-3)*10+(3)*20)*1.5;// Calcul calcul de dimensionnement des bureaux basé sur 10m² par personne pour les open space mais 3 bureaux fermés de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
                    }
               // Calcul bureaux extérieurs Cloisonnés
                    if (choiceOpenspaceOfficesOutside.value==="no"){
                         officesAdministrationOutsideDimensions = ((inputClercksOfficesOutside-3)*15+(3)*20)*1.5;//calcul de dimensionnement des bureaux basé sur 15m² par personne pour les bureaux fermés mais 3 bureaux de 20m² pour le comptable et la direction + les circulations+sanitaires (*1,5);
                    }
                    }
                    if (choiceOfficesOutside.value==="no"){
                         officesAdministrationOutsideDimensions = 0;
                    };

          // Calcul Surface des locaux sociaux______________________________
          
               const officesSocialDimensionsInside = (inputWorkersOfficesInside)*10;//les locaux sociaux nombre de travailleurs * 10m²
               const officesSocialDimensionsOutside = (inputWorkersOfficesOutside)*10; //les locaux sociaux nombre de travailleurs * 10m²
     
          // Calcul de SURFACE BUREAUX ; SURFACE BOX ET CONSTRUITE AU SOL Prise en compte de bureaux réalisé en étage si leur surface est supérieure à 200 m² et qu'ils sont positionnés à l'intérieur et augmentation de la variable areaBuilding
               let areaBuilding; // surface au sol avec les bureaux donc si les bureaux sont extérieurs plus de surface
               let areaBox;// surface de la boite si bur ext = surf Hall, si ils sont intérieurs = ils sont compris dans la surface de la boite
               let numberStair;// nombre d'escalier

               // Calcul Bureaux Intérieur avec locaux sociaux intérieurs
                    if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="no"&& choiceSocialRoomOfficesInside.value ==="yes"){
                         officesDimensionsInside=(officesAdministrationInsideDimensions+officesSocialDimensionsInside+inputAreaShowroomInside);
                         officesDimensionsOutside=0;
                         if (officesDimensionsInside <= 200){ 
                         areaBuilding = inputAreaStorage+officesDimensionsInside;
                         areaBox= inputAreaStorage+officesDimensionsInside;
                         
                         }
                         else if (officesDimensionsInside > 200){
                         areaBuilding = inputAreaStorage+officesDimensionsInside/2;
                         areaBox = inputAreaStorage+officesDimensionsInside/2;
                         numberStair=1;
                         }
                    }
               // Calcul Bureaux Intérieur sans locaux sociaux intérieurs
                    else if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="no"&& choiceSocialRoomOfficesInside.value ==="no"){
                              officesDimensionsInside=(officesAdministrationInsideDimensions+officesSocialDimensionsInside);
                              officesDimensionsOutside=0;
                              if (officesDimensionsInside <= 200){ 
                              areaBuilding = inputAreaStorage+officesDimensionsInside;
                              areaBox = inputAreaStorage+officesDimensionsInside;
                              }
                              else if (officesDimensionsInside > 200){ 
                              areaBuilding = inputAreaStorage+officesDimensionsInside/2;
                              areaBox = inputAreaStorage+officesDimensionsInside/2;
                              numberStair=1;
                              }
                         }
               // Calcul Bureaux Extérieur avec locaux sociaux extérieurs
                    else if (choiceOfficesInside.value==="no" && choiceOfficesOutside.value==="yes"&& choiceSocialRoomOfficesOutside.value ==="yes"){
                         officesDimensionsInside=0;
                         officesDimensionsOutside=(officesAdministrationOutsideDimensions+officesSocialDimensionsOutside+inputAreaShowroomOutside);
                         if (officesDimensionsOutside <= 200){ 
                         areaBuilding = inputAreaStorage+officesDimensionsOutside;
                         areaBox = inputAreaStorage;
                         }
                         else if (officesDimensionsOutside > 200){ 
                         areaBuilding = inputAreaStorage+officesDimensionsOutside/2;
                         areaBox = inputAreaStorage;
                         numberStair=1;
                         }
                    }
               // Calcul Bureaux Extérieurs sans locaux sociaux extérieur
                    else if (choiceOfficesInside.value==="no" && choiceOfficesOutside.value==="yes"&& choiceSocialRoomOfficesOutside.value ==="no"){
                         officesDimensionsInside=0;
                         officesDimensionsOutside=(officesAdministrationOutsideDimensions+inputAreaShowroomOutside);
                         if (officesDimensionsOutside <= 200){ 
                         areaBuilding = inputAreaStorage+officesDimensionsOutside;
                         areaBox = inputAreaStorage;
                         }
                         else if (officesDimensionsOutside > 200){ 
                         areaBuilding = inputAreaStorage+officesDimensionsOutside/2;
                         areaBox = inputAreaStorage;
                         numberStair=1;
                         }
                    }
               // Calcul Bureaux Intérieur + Extérieurs avec locaux sociaux intérieurs
                    else if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="yes"&& choiceSocialRoomOfficesInside.value ==="yes"&&choiceSocialRoomOfficesOutside.value ==="no"){
                    officesDimensionsInside=(officesAdministrationInsideDimensions+officesSocialDimensionsInside+inputAreaShowroomInside);
                    officesDimensionsOutside=(officesAdministrationOutsideDimensions+inputAreaShowroomOutside);
                    if (officesDimensionsInside <= 200 && officesDimensionsOutside<= 200){ 
                         areaBuilding = inputAreaStorage+ officesDimensionsInside+officesDimensionsOutside;
                         areaBox = inputAreaStorage+ officesDimensionsInside;
                    }
                    else if (officesDimensionsInside > 200 && officesDimensionsOutside<= 200){ 
                         areaBuilding = inputAreaStorage+ officesDimensionsInside/2+officesDimensionsOutside;
                         areaBox = inputAreaStorage+ officesDimensionsInside/2;
                         numberStair=2;
                    }
                    else if (officesDimensionsInside <= 200 && officesDimensionsOutside>200){ 
                         areaBuilding = inputAreaStorage+ officesDimensionsInside+officesDimensionsOutside/2;
                         areaBox = inputAreaStorage+ officesDimensionsInside;
                         numberStair=1;
                    }
                    else if (officesDimensionsInside > 200 && officesDimensionsOutside>200){ 
                         areaBuilding = inputAreaStorage+ officesDimensionsInside/2+officesDimensionsOutside/2;
                         areaBox = inputAreaStorage+ officesDimensionsInside/2;
                         numberStair=2;
                    }
               }
               // Calcul Bureaux Intérieur + Extérieurs avec locaux sociaux extérieurs
                    else if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="yes"&& choiceSocialRoomOfficesInside.value ==="no"&&choiceSocialRoomOfficesOutside.value ==="yes"){
                    officesDimensionsInside=(officesAdministrationInsideDimensions+inputAreaShowroomInside);
                    officesDimensionsOutside=(officesAdministrationOutsideDimensions+officesSocialDimensionsOutside+inputAreaShowroomOutside);
                    if (officesDimensionsInside <= 200 && officesDimensionsOutside<= 200){ 
                         areaBuilding = inputAreaStorage+ officesDimensionsInside+officesDimensionsOutside;
                         areaBox = inputAreaStorage+ officesDimensionsInside;
                    }
                    else if (officesDimensionsInside > 200 && officesDimensionsOutside<= 200){ 
                         areaBuilding = inputAreaStorage+ officesDimensionsInside/2+officesDimensionsOutside;
                         areaBox = inputAreaStorage+ officesDimensionsInside/2;
                         numberStair=1;
                    }
                    else if (officesDimensionsInside <= 200 && officesDimensionsOutside>200){ 
                         areaBuilding = inputAreaStorage+ officesDimensionsInside+officesDimensionsOutside/2;
                         areaBox = inputAreaStorage+ officesDimensionsInside;
                         numberStair=1;
                    }
                    else if (officesDimensionsInside > 200 && officesDimensionsOutside>200){ 
                         areaBuilding = inputAreaStorage+ officesDimensionsInside/2+officesDimensionsOutside/2;
                         areaBox = inputAreaStorage+ officesDimensionsInside/2;
                         numberStair=2;
                    }
               }
               // Calcul Bureaux Intérieur + Extérieur avec locaux sociaux intérieurs + Extérieurs
                    else if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="yes"&&choiceSocialRoomOfficesInside.value ==="yes"&& choiceSocialRoomOfficesOutside.value ==="yes"){
                    officesDimensionsInside=(officesAdministrationInsideDimensions+officesSocialDimensionsInside +inputAreaShowroomInside);
                    officesDimensionsOutside=(officesAdministrationOutsideDimensions+officesSocialDimensionsOutside+inputAreaShowroomOutside);
                    if (officesDimensionsInside <= 200 && officesDimensionsOutside<= 200){ 
                         areaBuilding = inputAreaStorage+ officesDimensionsInside+officesDimensionsOutside;
                         areaBox = inputAreaStorage+ officesDimensionsInside;
                    }
                    else if (officesDimensionsInside > 200 && officesDimensionsOutside<= 200){ 
                         areaBuilding = inputAreaStorage+ officesDimensionsInside/2+officesDimensionsOutside;
                         areaBox = inputAreaStorage+ officesDimensionsInside/2;
                         numberStair=1;
                    }
                    else if (officesDimensionsInside <= 200 && officesDimensionsOutside>200){ 
                         areaBuilding = inputAreaStorage+ officesDimensionsInside+officesDimensionsOutside/2;
                         areaBox = inputAreaStorage+ officesDimensionsInside;
                         numberStair=1;
                    }
                    else if (officesDimensionsInside > 200 && officesDimensionsOutside>200){ 
                         areaBuilding = inputAreaStorage+ officesDimensionsInside/2+officesDimensionsOutside/2;
                         areaBox = inputAreaStorage+ officesDimensionsInside/2;
                         numberStair=2;
                    }
                    }
                    else{
                    officesDimensionsInside=0;
                    officesDimensionsOutside=0;
                    areaBuilding = inputAreaStorage;
                    areaBox = inputAreaStorage;
                    numberStair=0;
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
          console.log(numberStair);

     // Calcul  Spécificités____________________________________________________
          // Calcul renfort de sol
          
          // Calcul  cloison intérieure
          let inputWidthHall= Math.sqrt(areaBox);
          
          // Calcul  Pont roulant
          // calcul du nombre de poteaux renforcés 
          const polesUnderOverHeadCrane = (Math.ceil((((Math.sqrt(areaBox))/6)+1)*2));
          //const lengthRaceway = ((Math.sqrt(areaBox))*2); considéré comme à la charge du fournisseur de pont

          
          // Calcul Niveleur de quais
          
          // Calcul Porte Sectionnelle de Plain-Pied

          // Calcul Stockage extérieur
          inputAreaRoadAndUtilitiesStorageOutdoor === ""? inputAreaRoadAndUtilitiesStorageOutdoor=0:inputAreaRoadAndUtilitiesStorageOutdoor;

          console.log(inputAreaRoadAndUtilitiesStorageOutdoor);

          // Calcul  Raccordement Electricté

          // Calcul  Chauffage dans le Hall 
          
          // Calcul  Ria

          // Calcul Open Space dans les bureaux

          // Calcul Bardage luxe pour les bureaux ????????????
          
          // Calcul Ascenseur ????????????

          // Calcul   surface avec ICPE

     // Calcul VRD______________________
          //Si on connait le terrain > inputAreaGround définie au début de la fonction

          // Calcul  Si on ne connait pas le terrain :Calcul du terrain necessaire lorsque le choix non a été fait quand on ne connait pas son terrain , peut être fait aprés détermination des variables areaBuilding / officesDimensionsOutside et inside / areaRoadAndUtilities est calculée

          let CalculationNeedAreaGround;
          let groundValue
          
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

     console.log(inputClercksOfficesInside);
     console.log(inputClercksOfficesOutside);
     console.log(inputWorkersOfficesInside);
     console.log(inputWorkersOfficesOutside);
     console.log(inputAreaRoadAndUtilitiesStorageOutdoor);
     console.log(areaRoadAndUtilitiesDockShelter);
     console.log(areaRoadAndUtilitiesFloorSectionelDoor);
     console.log(areaRoadAndUtilities);

     // Calcul TERRAIN______________________

          if (inputAreaGround===0){
               CalculationNeedAreaGround = ((areaBuilding+areaRoadAndUtilities)*1.2);
          }
          else {
               CalculationNeedAreaGround = 0;
          };
          
          (inputAreaGround===0)? groundValue= CalculationNeedAreaGround: groundValue= inputAreaGround;
          
     console.log(inputAreaGround);
     console.log(CalculationNeedAreaGround);
     console.log(groundValue);

     // Calcul  Espaces Vert
          let areaPlantations
          areaPlantations =groundValue-areaRoadAndUtilities-areaBuilding;
     console.log(areaRoadAndUtilities);
     console.log(areaPlantations);

//COUTS ____________________________________________________________
     // Coût HALL
          //Coût plus value hauteur bâtiment
          let addedValueHeight;
          if(inputHeightHall>7){
               addedValueHeight=(inputHeightHall-7)*costHeightAbove7;
          }
          else {
               addedValueHeight=0;
          };
          //Coût hALL
          const costBox = Number(areaBox)*(costHallCompany +addedValueHeight);

     //Coût des bureaux
          let costOffices
          // coût bureaux intérieur pas extérieur
          if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="no"){
               // coût bureaux intérieurs Openspace 
               if (choiceOpenspaceOfficesInside.value==="yes"){
               costOffices = costOfficesCompanyInsideOpenSpace*(officesDimensionsInside);
               }
               // coût bureaux intérieurs Cloisonnés
               if (choiceOpenspaceOfficesInside.value==="no"){
               costOffices = costOfficesCompanyInsidePartitioned*(officesDimensionsInside-inputAreaShowroomInside)+inputAreaShowroomInside*costOfficesCompanyInsideOpenSpace;
               }
               }
          // coût bureaux extérieur pas intérieur
          else if (choiceOfficesInside.value==="no" && choiceOfficesOutside.value==="yes"){
               // coût  bureaux extérieurs OpenSPace
               if (choiceOpenspaceOfficesOutside.value==="yes"){
                    costOffices = costOfficesCompanyOutsideOpenSpace*(officesDimensionsOutside);
               }
               // coût  bureaux extérieurs Cloisonnés
               if (choiceOpenspaceOfficesOutside.value==="no"){
                    costOffices = costOfficesCompanyOutsidePartitioned*(officesDimensionsOutside-inputAreaShowroomOutside)+inputAreaShowroomOutside*costOfficesCompanyOutsideOpenSpace;
               }
               }
          // coût bureaux extérieur et intérieur
          else if (choiceOfficesInside.value==="yes" && choiceOfficesOutside.value==="yes"){
               // coût  bureaux intérieur Openspace
               if (choiceOpenspaceOfficesInside.value==="yes"){
                    // coût  bureaux extérieurs Openspace
                    if (choiceOpenspaceOfficesOutside.value==="yes"){
                    costOffices = officesDimensionsInside*costOfficesCompanyInsideOpenSpace+ costOfficesCompanyOutsideOpenSpace*(officesDimensionsOutside);
                    }
                    // coût  bureaux extérieurs cloisonnés
                    else if (choiceOpenspaceOfficesOutside.value==="no"){
                    costOffices = officesDimensionsInside*costOfficesCompanyInsideOpenSpace+costOfficesCompanyOutsidePartitioned*(officesDimensionsOutside-inputAreaShowroomOutside)+inputAreaShowroomOutside*costOfficesCompanyOutsideOpenSpace;
                    }
               }
               // coût  bureaux intérieurs Cloisonné
               else if (choiceOpenspaceOfficesInside.value==="no"){
                    // coût  bureaux extérieurs Openspace
                    if (choiceOpenspaceOfficesOutside.value==="yes"){
                    costOffices = costOfficesCompanyInsidePartitioned*(officesDimensionsInside-inputAreaShowroomInside)+inputAreaShowroomInside*costOfficesCompanyInsideOpenSpace+ costOfficesCompanyOutsideOpenSpace*(officesDimensionsOutside);
                    }
                    // coût  bureaux extérieurs Cloisonnés
                    else if (choiceOpenspaceOfficesOutside.value==="no"){
                    costOffices = costOfficesCompanyInsidePartitioned*(officesDimensionsInside-inputAreaShowroomInside)+inputAreaShowroomInside*costOfficesCompanyInsideOpenSpace+costOfficesCompanyOutsidePartitioned*(officesDimensionsOutside-inputAreaShowroomOutside)+inputAreaShowroomOutside*costOfficesCompanyOutsideOpenSpace;
                    }
               }
          }
          // coût bureaux ni extérieur ni intérieur
          else if (choiceOfficesInside.value==="no" && choiceOfficesOutside.value==="no"){
          costOffices = 0;
          };

     //Coût escalier bureaux
          let addedValueStair; // calcul de la plus value escalier
          addedValueStair=numberStair*costStair;

     //Coûts spécifités
          //Coût spécificité Stockage extérieur
               //compris dans le VRD 

          //Coût spécifité renfort de sol          
               let choice = choiceSoilReinforcement.value;
               let answer2 = [0,Number(areaBuilding)];

               switch(choice){
                    case'yes':
                    choiceStudySoil= answer2[1];
                    break;
                    case'no':
                    choiceStudySoil= answer2[0];
                    break;
                    case'iDontKnow':
                    choiceStudySoil= answer2[0];
                    break; 
               };
               const costChoiceSoil = Number(choiceStudySoil*costSoilReinforcement);
          console.log(costChoiceSoil);

          // Coût  spécifité cloison intérieure
               let valuePartitionInside = choicePartitionInside.value;
               let answer8 = [0,inputNumberPartitionInside];
               
               switch(valuePartitionInside){
                    case'no':
                    answer8= answer8[0];
                    break;
                    case'yes':
                    answer8= answer8[1];
                    break;
               };

               const costPartitionInsideSidingPanel=Number(answer8)*(ratioPartitionInsideSidingPanel*(inputWidthHall*inputHeightHall));

          console.log(answer8);
          console.log(choicePartitionInside);
          console.log(valuePartitionInside);
          console.log(inputNumberPartitionInside);
          console.log(ratioPartitionInsideSidingPanel);
          console.log(inputWidthHall);
          console.log(inputHeightHall);
          console.log(costPartitionInsideSidingPanel);

          // Coût  spécifité pont roulant
               let valueOverHeadCrane = choiceOverHeadCrane.value;
               let answer5 = [0,inputNumberOverHeadCrane];

               switch(valueOverHeadCrane){
                    case'no':
                    answer5= answer5[0];
                    break;
                    case'yes':
                    answer5= answer5[1];
                    break;
               };
               const addedValueOverHeadCrane = Number(answer5)*(polesUnderOverHeadCrane*addedValueOverHeadCraneOnPoles*inputHeightHall+polesUnderOverHeadCrane*addedValueOverHeadCraneFondation);
          console.log(answer5);
          console.log(polesUnderOverHeadCrane);
          console.log(inputHeightHall);
          console.log(inputNumberOverHeadCrane);
          console.log(addedValueOverHeadCrane);

          //Cout spécificité nombre de quais
               let valueDockShelter = choiceDockShelter.value;
               let answer6 = [0,inputNumberDockShelter];

               switch(valueDockShelter){
                    case'no':
                    answer6= answer6[0];
                    break;
                    case'yes':
                    answer6= answer6[1];
                    break;
               };

               // coût de la plus value pour les quais niveleur, sas, butoir et gros oeuvre
               const addedValueDockShelter = (Number(answer6)*(costDockShelter+costconcreteWorkDockShelter));
          console.log(answer6);
          console.log(inputNumberDockShelter);
          console.log(addedValueDockShelter);
          
          //Cout spécificité nombre de portes de plain pied
               let valueFloorSectionalDoor = choiceFloorSectionalDoor.value;
               let answer7 = [0,inputNumberFloorSectionalDoor];

               switch(valueFloorSectionalDoor){
                    case'no':
                    answer7= answer7[0];
                    break;
                    case'yes':
                    answer7= answer7[1];
                    break;
               };

               const addedValueFloorSectionalDoor = (Number(answer7)*(costSectionalDoors));
          console.log(inputNumberFloorSectionalDoor);
          console.log(addedValueFloorSectionalDoor);
          
          // Coût  spécificité tarif électricité
               let costElectricalConnection = [costBlueRate,costYellowRate,costGreenRate,0];
                    
                    if (choiceBlueRate.checked===true && choiceYellowRate.checked===true && choiceGreenRate.checked===true){
                         inputBlueRate==''?inputBlueRate=1:inputBlueRate;
                         inputYellowRate==''?inputYellowRate=1:inputYellowRate;
                    costElectricalConnection=costElectricalConnection[0]*inputBlueRate + costElectricalConnection[1]*inputYellowRate+(costElectricalConnection[2]+costGreenRateAddedValueElectricity);
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
                         costElectricalConnection= costElectricalConnection[1]*inputYellowRate+(costElectricalConnection[2]+costGreenRateAddedValueElectricity);
                    }
                    else if (choiceBlueRate.checked===true && choiceYellowRate.checked===false && choiceGreenRate.checked===true){
                         inputBlueRate==''?inputBlueRate=1:inputBlueRate;
                         costElectricalConnection=costElectricalConnection[0]*inputBlueRate +(costElectricalConnection[2]+costGreenRateAddedValueElectricity);
                    }
                    else if (choiceBlueRate.checked===false && choiceYellowRate.checked===false && choiceGreenRate.checked===true){
                         costElectricalConnection= (costElectricalConnection[2]+costGreenRateAddedValueElectricity);
                    }
                    else{
                         costElectricalConnection=costElectricalConnection[3];
                    };
            console.log(inputBlueRate);
            console.log(inputYellowRate);
            console.log(costElectricalConnection);

          // Coût  spécifité chauffage du hall aérotherme gaz
          let choiceHeating = choiceHeatingHall.value;

               switch(choiceHeating){
                    case'no':
                    // calcul du chauffage dans le Hall
                    costHeating=0;
                    break;
                    case'yes':
                    // calcul du chauffage dans le Hall
                    costHeating=areaBox*ratioGasHeatingHall;
                    break; 
               };

          console.log(costHeating);//vérification de costHeating
          
          // Coût  spécifité RIA Hall
                let costFireNetworkHall
                switch(choiceFireNetworkHall){
                     case'yes':
                     costFireNetworkHall=ratioFireNetworkHall*areaBox;
                     break;
                    case'no':
                    costFireNetworkHall = 0;
                    break;
                };
          console.log(costFireNetworkHall);

          // Coût  spécifité bâtiment ICPE
               // calcul de la surface nécessaire en cas d'Icpe  et comparaison avec la surface terrain pour voir si c'est suffisant
          
               const areaIcpe = Math.round((Math.pow(((Math.sqrt(areaBox))+40),2)));

               sufficientGround = [(Number(groundValue)- areaIcpe),(Number(CalculationNeedAreaGround)- areaIcpe)];
               groundValue === 0? sufficientGround = sufficientGround[1]:sufficientGround = sufficientGround[0];

               let valueChoiceIcpe = choiceIcpe.value;
               let additionalGroundAreaIcpe=[0, sufficientGround];

               switch(valueChoiceIcpe){
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
               
               //  calcul de la plus value terrain si le bâtiment est ICPE rubrique 1510 et 2663
               // console.log(addedValueIcpe);
               additionalGroundAreaIcpe = Math.abs(additionalGroundAreaIcpe);

               let addedValueIcpe =[((inputCostGround/groundValue)*additionalGroundAreaIcpe),(inputCostGroundByRegion*additionalGroundAreaIcpe)];
               
               groundValue>0?
               addedValueIcpe =addedValueIcpe[0]:addedValueIcpe =addedValueIcpe[1];

               additionalGroundAreaIcpe!== 0 ? addedValueIcpe : addedValueIcpe=0;

          console.log(CalculationNeedAreaGround);
          console.log(groundValue);
          console.log(areaIcpe);
          console.log(sufficientGround);
          console.log(additionalGroundAreaIcpe);
          console.log(addedValueIcpe); //vérification des valeurs de addedValueIcpe
          console.log(inputCostGround);

          //Coût terrain
               // je connais le coût et la surface du terrain
               let costGroundInput= Number(inputCostGround*inputAreaGround); //on connait le coût du terrain; inputCostGround c'est la valeur rentrée et la valeur du terrain

               // je ne connais pas le coût et la surface du terrain
               let costCalculationNeedAreaGround;
               inputAreaGround===0? costCalculationNeedAreaGround= Number(CalculationNeedAreaGround)*inputCostGroundByRegion: costCalculationNeedAreaGround=0;//on ne connait pas le coût du terrain soit inputAreaGround===0 alors on calcul la valeur 

          //Coût VRD
               let costRoadAndUtilities;

               if (((areaRoadAndUtilities+areaBuilding)/groundValue)> 0.65&& groundValue>5000){
               costRoadAndUtilities= areaBuilding*ratioBuilding2+areaRoadAndUtilities*ratioRoadAndUtilities2+areaPlantations*ratioPlantations2+groundValue*ratioFencing2;
               }
               else {
               costRoadAndUtilities= areaBuilding*ratioBuilding1+areaRoadAndUtilities*ratioRoadAndUtilities1+areaPlantations*ratioPlantations1+groundValue*ratioFencing1;
               };
               console.log(areaBuilding);
               console.log(areaRoadAndUtilities);
               console.log(areaPlantations);
               console.log(groundValue);
               console.log(costRoadAndUtilities);

          //Coût Total
               // log des données du TOTAL
               console.log(studyFeesAndInsurance);
               console.log(costGroundInput);
               console.log(costCalculationNeedAreaGround);
               console.log(costBox);
               console.log(addedValueHeight);
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

               const costGround= Math.round ((Number(costGroundInput) + Number(costCalculationNeedAreaGround))*100/100);// calcul du terrain seuls
               console.log(costGround);

               const costEnergyAndSanitation= Math.round ((costElectricalConnection)*100/100);// calcul des concédés
               console.log(costEnergyAndSanitation);

               const costProjectWorks= Math.round ((costBox + costOffices+ costRoadAndUtilities +costChoiceSoil+costPartitionInsideSidingPanel+addedValueOverHeadCrane+addedValueDockShelter+addedValueFloorSectionalDoor+costHeating+costFireNetworkHall+addedValueIcpe+addedValueStair)*100/100);// calcul des travaux seuls
               console.log(costProjectWorks);

               const costProjectWithFeesWithoutCommercialMargin= Math.round ((Number(costGroundInput) + Number(costCalculationNeedAreaGround) +addedValueIcpe+costElectricalConnection+studyFeesAndInsurance*(costBox + costOffices+ costRoadAndUtilities +costChoiceSoil+costPartitionInsideSidingPanel+addedValueOverHeadCrane+addedValueDockShelter+addedValueFloorSectionalDoor+costHeating+costFireNetworkHall+addedValueStair))*100/100);// calcul du coût du bâtiment hors marge commerciale
               console.log(costProjectWithFeesWithoutCommercialMargin);

               const number = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format( costProjectWithFeesWithoutCommercialMargin);// pour affichage number en euros
               // console.log(number);
          
          //COUT Frais commercial
               const CostDeveloppementAndCommercial=Math.round (0.095*costProjectWithFeesWithoutCommercialMargin)//calcul du coût du bâtiement comprenant la valeur commerciale de 9,5%
               const number2 = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format( CostDeveloppementAndCommercial);// pour affichage number2 en euros
// TEXTES_______________________________________
     // TEXTE BUREAUX A L'INTERIEUR DU HALL / EXTERIEUR HALL

          // Texte Vérification du choix de bureaux à l'intérieur
          let answer31 = [0,1];

          if (choiceOfficesInside.value=="yes"){ 
               answer31=answer31[0];
          }
          else {
               answer31=answer31[1];
               // console.log(answer31);// on log pour vérifier que l'on a bien le retour aprés le check
          }
          // Texte Vérification de l'option choisie pour le texte de bureaux intérieur ou extérieur
          const answerChoiceOfficesInside = {yes :"Il y a des bureaux dans le volume des locaux d'activité", no : "Il n'y a pas de bureaux situés dans les locaux d'activité"};
          x31 = answerChoiceOfficesInside.yes;
          y31 = answerChoiceOfficesInside.no;
          answer31 > 0 ? y31 : y31=x31;
          // Texte Vérification du choix de bureaux à l'extérieur
          let answer32 = [0,1];

          if (choiceOfficesInside.value=="yes"){ 
               answer32=answer32[0];
          }
          else {
               answer32=answer32[1];
          }
          // Texte Vérification de l'option choisie pour le texte de bureaux intérieur ou extérieur
          const answerChoiceOfficesOutside = {yes :"Il y a des bureaux à l'extérieur des locaux d'activité", no : "Il n'y a pas de bureaux situés à l'extérieur des locaux d'activité"};
          x32 = answerChoiceOfficesOutside.yes;
          y32 = answerChoiceOfficesOutside.no;
          answer32 > 0 ? y32 : y32=x32;

     // Texte SHOWROOM
          //Pas de texte pour choix de Show room pour Intérieur/Extérieur
          // ____________________________________________________________
     //Texte hauteur bâtiment
          // ____________________________________________________________
     //Texte stockage extérieur
          // Texte Vérification de la taille du terrain pour le texte d'affichage
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

     //Texte renfort de sol
          // Texte Vérification de l'option choisie pour le texte d'affichage
          const answerChoiceStudySoil = {yes :"Le bâtiment a besoin de renforcement de sol qui sont calculés dans le coût", no : "le chiffrage est réalisé sans renforcement de sol"};
          x2 = answerChoiceStudySoil.yes;
          y2 = answerChoiceStudySoil.no;

          choiceStudySoil > 0 ? x2 : x2=y2;

     // Texte pont roulant

          // Texte Vérification de l'option choisie pour le texte d'affichage Réalisée directement dans le texte avec la variable answer5 déterminée pour le calcul du coût

     // Texte nombre de quais          
          // Texte Vérification de l'option choisie pour le texte d'affichage Réalisée directement dans le texte avec la variable answer6 déterminée pour le calcul du coût

     //TEXTE Porte Sectionnelle de Plain-Pied
          // Texte Vérification de l'option choisie pour le texte d'affichage Réalisée directement dans le texte avec la variable answer7 déterminée pour le calcul du coût
          
     // Texte tarif électricité
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

     // Texte chauffage dans le hall par aérotherme gaz

          const answerChoiceHeating = {yes :"le Hall est chauffé par aérothermes gaz", no : "Le hall n'est pas chauffé"};
          x8 = answerChoiceHeating.yes;
          y8 = answerChoiceHeating.no;

          costHeating > 0 ? x8 : x8=y8;
          
     // TEXTE RIA Hall
          
          const answerChoiceFireNetworkHall = {yes :"le Hall est équipé de RIA", no : "Le hall n'est pas équipé de RIA"};
          x9 = answerChoiceFireNetworkHall.yes;
          y9 = answerChoiceFireNetworkHall.no;

          costFireNetworkHall > 0 ? x9 : x9=y9;

     // Texte ICPE
          const answerChoiceIcpe = {tooSmall :"Le terrain est trop petit pour réaliser un bâtiment de cette surface classé ICPE sur le terrain envisagé, le calcul de valeur tient compte de la plus value terrain sur la base de vos données",good :"Le terrain envisagé est suffisant pour réaliser un bâtiment de cette surface classé ICPE, le calcul de valeur tient compte de la plus value terrain sur la base de vos données",  no : "Pas de classement ICPE"};
          x10 = answerChoiceIcpe.tooSmall;
          y10 = answerChoiceIcpe.good;
          z10 = answerChoiceIcpe.no;


          const answerAreaGround=[areaIcpe,CalculationNeedAreaGround];
          let u10= answerAreaGround[0];
          let v10= answerAreaGround[1];
          
          if (additionalGroundAreaIcpe < 0 && groundValue>0){
               x10=x10;
               u10=u10;
          }
          else if (additionalGroundAreaIcpe > 0 && groundValue>0){
               x10=y10;
               u10=u10;
          }
          else if (additionalGroundAreaIcpe < 0 && groundValue==0){
               x10='il faut plus de terrain pour un classement ICPE.' ;
               u10=u10;
          }
          else {
               x10=z10;
               u10=v10;
          };

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
     <li><h4> vous avez besoin de ${CalculationNeedAreaGround} m² minimum de terrain sans classement ICPE. les dimensions de votre terrain sont ${x1} avec un stockage extérieur de ${inputAreaRoadAndUtilitiesStorageOutdoor}m2</h4></li>
     <li><h4>${x2}</h4></li>
     <li><h4>${y31}</h4></li>
     <li><h4>${y32}</h4></li>
     <li><h4>Vous avez besoin de ${answer5} pont(s) roulant</h4></li>
     <li><h4>Vous avez besoin de ${answer6} quai(s) de déchargement</h4></li>
     <li><h4>${x7}</h4></li>
     <li><h4>${x8}</h4></li>
     <li><h4>${x9}</h4></li>
     <li><h4>${x10}. Vous avez donc besoin de ${u10} m2 de terrain total</h4></li>
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


          
