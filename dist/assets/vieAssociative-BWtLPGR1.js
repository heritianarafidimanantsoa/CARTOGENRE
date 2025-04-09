import{_ as I,o as E,c as v,a as b,r as d,C as h,b as C,w as q,d as e,e as x,f as y,v as w,g as S,t as g,n as T,h as _,F as A,i as D}from"./index-BR0JSyHN.js";import{v as O,a as N,b as j,r as $,c as M,d as R}from"./3-CDQKTi16.js";const F={id:"map",class:"w-full h-[639px]"},P={__name:"CarteThematique",setup(k){return E(()=>{if(window.L){const s=L.map("map",{center:[-21.4633723,47.1121022],zoom:15,scrollWheelZoom:!1,minZoom:4,maxZoom:18});L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(s),L.tileLayer("@/assets/img/maps.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(s),L.tileLayer("https://warper.wmflabs.org/maps/tile/8475/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(s),fetch("/geojson/mobilit.geojson").then(i=>i.json()).then(i=>{L.geoJSON(i,{pointToLayer:(a,r)=>{const o=a.properties.name||"Lieu inconnu",l=L.icon({iconUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[0,-41]}),u=L.marker(r,{icon:l}).addTo(s),c=L.divIcon({className:"marker-label",html:`<div class="text-center">${o}</div>`,iconSize:[100,30],iconAnchor:[50,0]});return L.marker(r,{icon:c}).addTo(s),u},onEachFeature:(a,r)=>{if(a.geometry.type==="Point"&&a.properties){const o=a.properties.name||"Lieu inconnu",l=a.properties.image||"https://via.placeholder.com/150",u=a.properties.link||"#",c=a.properties.description||"Aucune description disponible.",p=`
                                <div>
                                    <img src="${l}" alt="${o}" class="w-full object-cover rounded-t-lg">
                                    <div class="py-4">
                                        <h3 class="mb-3 text-xl font-poppins font-semibold">${o}</h3>
                                        <p class="font-poppins font-light mb-4">${c}</p>
                                        <button onclick="window.open('${u}', '_blank')" class="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer text-sm">
                                            Voir plus
                                        </button>
                                    </div>
                                </div>
                            `;r.bindPopup(p)}}}).addTo(s)}).catch(i=>{console.error("Erreur de chargement du fichier GeoJSON",i)})}else console.error("Leaflet n'a pas été chargé !")}),(s,i)=>(b(),v("div",F))}},V=I(P,[["__scopeId","data-v-373b13e1"]]),z={class:"flex flex-col lg:flex-row gap-6 h-auto lg:h-[639px] p-6 bg-gray-100"},B={class:"w-full lg:w-1/2 shadow-md rounded-lg overflow-hidden relative"},G={class:"relative w-full h-[300px] lg:h-full"},U={class:"flex flex-col w-full lg:w-1/2 bg-white shadow-lg rounded-2xl p-15 relative"},Z={class:"relative flex-grow min-h-[300px]"},J={class:"w-full lg:w-1/2 bg-[#1e293b] shadow-md rounded-lg text-white flex flex-col"},H={class:"p-6 flex-grow overflow-auto"},W={key:0},Q={class:"text-2xl md:text-3xl text-left font-poppins font-bold uppercase tracking-wide mb-2"},K={class:"text-base md:text-lg font-light leading-relaxed text-gray-300"},X={key:1},Y={class:"text-2xl md:text-3xl text-left font-poppins font-bold uppercase tracking-wide mb-2"},ee={class:"text-base md:text-lg font-light leading-relaxed text-gray-300"},te={class:"grid grid-cols-2 mt-auto border-t border-gray-700"},se={__name:"vieAssociative",setup(k){const s=d("carte"),i=d([{src:O,title:"préférence par genre des toilettes au sein du campus",description:"La carte révèle que le choix des toilettes sur le campus est largement déterminé par la propreté, l'hygiène et la proximité des installations par rapport aux lieux de travail ou d'études pour l'ensemble des usagers, qu'ils soient étudiants, enseignants ou personnels administratifs et techniques. Toutefois, pour les femmes, le critère de la présence de portes, garantissant intimité et sécurité, vient s'ajouter, alors que les hommes se montrent plus tolérants face à des portes défectueuses. Ainsi, malgré leur éloignement par rapport à leur lieu de travail ou d'étude, les toilettes de l'EMIT et de la Faculté de Médecine sont majoritairement privilégiées par les femmes."},{src:N,title:"ACTIVITÉS ASSOCIATIVES",description:"Description 2 des activités."},{src:j,title:"ÉVÉNEMENTS",description:"Description 3 sur les événements."}]),a=d([{src:$,title:"REPARTITION GENREE DES POSTES DE PRESIDENT DES ASSOCIATIONS",description:`
                    Le graphique met en évidence une forte prédominance masculine au poste de président des associations régionales, une tendance qui s'explique par des représentations culturelles où les rôles de leadership restent majoritairement attribués aux hommes.
Dans ce contexte, même si les décisions peuvent être prises collectivement, l’accès des femmes à la présidence reste limité par des habitudes et des croyances profondément ancrées. Cette dynamique, issue des structures sociales et familiales, influence les associations étudiantes, où la légitimité du pouvoir demeure souvent perçue comme masculine. Ainsi, la répartition observée ne relève pas seulement d’un choix individuel, mais s’inscrit dans un cadre social plus large qui façonne les opportunités et les attentes liées au genre.
“Les femmes n’ont pas le droit de... heu... d’être élues présidentes dans l’association... chez nous ! Mais j’sais pas chez les autres…” Témoignage tiré du mémoire de Mona FLOOD. 
                    `,chartData:{labels:["Homme","Femme"],data:[36,1]}},{src:M,title:"REPARTITION GENREE DES MEMBRES DES ASSOCIATIONS",description:`
                    Le graphique met en évidence des différences de participation entre les hommes et les femmes dans les associations. Les hommes sont souvent plus présents, car l'engagement associatif, notamment dans les espaces de représentation et de prise de décision, est perçu comme un prolongement des responsabilités et de l'autorité qui leur sont socialement attribuées. À l'inverse, les femmes sont moins nombreuses en raison des attentes qui pèsent sur elles en matière de priorités académiques et familiales, ou encore par une moindre légitimité perçue dans ces espaces collectifs. Bien qu’elles adhèrent à ces associations pour bénéficier d’avantages personnels, tels qu’un logement gratuit, et d’une forme de protection sociale, elles subissent néanmoins diverses violences sexuelles et verbales tout au long de leur séjour, voire même des menaces d’expulsion.
« Premièrement ça m’aide à avoir un logement » « Je suis rentrée dans l’association pour les bâtiments » Témoignages tirés du mémoire de Mona FLOOD.
                    `,chartData:{labels:["Homme","Femme"],data:[43,12]}},{src:R,title:"DÉVELOPPEMENTS FUTURS",description:"Statistiques 3 sur les futurs développements.",chartData:{labels:["Scénario 1","Scénario 2","Scénario 3"],data:[20,50,30]}}]),r=d(0),o=d(0),l=n=>{n==="carte"?r.value=(r.value+1)%i.value.length:n==="resultats"&&(o.value=(o.value+1)%a.value.length)},u=n=>{n==="carte"?r.value=(r.value-1+i.value.length)%i.value.length:n==="resultats"&&(o.value=(o.value-1+a.value.length)%a.value.length)};h.register(...C);const c=d(null);let p=null;const f=()=>{const n=a.value[o.value];p&&p.destroy(),p=new h(c.value,{type:"bar",data:{labels:n.chartData.labels,datasets:[{label:n.title,data:n.chartData.data,backgroundColor:["#60a5fa","#f87171","#fbbf24"],borderColor:"#000",borderWidth:1}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}}})};return E(()=>{f()}),q(o,()=>{f()}),(n,t)=>(b(),v(D,null,[e("div",z,[y(e("div",B,[e("div",G,[x(V,{image:i.value[r.value]},null,8,["image"])]),e("button",{class:"absolute top-1/2 left-2 transform -translate-y-1/2 px-4 py-2 bg-gray-700 text-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition",onClick:t[0]||(t[0]=m=>u("carte")),"aria-label":"Image précédente"}," ‹ "),e("button",{class:"absolute top-1/2 right-2 px-4 py-2 bg-gray-700 text-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition",onClick:t[1]||(t[1]=m=>l("carte")),"aria-label":"Image suivante"}," › ")],512),[[w,s.value==="carte"]]),y(e("div",U,[e("div",Z,[e("canvas",{ref_key:"chartCanvas",ref:c,class:"w-full h-full"},null,512)]),e("button",{class:"absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white bg-opacity-60 hover:bg-opacity-90 transition",onClick:t[2]||(t[2]=m=>u("resultats")),"aria-label":"Graphique précédent"}," ‹ "),e("button",{class:"absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white bg-opacity-60 hover:bg-opacity-90 transition",onClick:t[3]||(t[3]=m=>l("resultats")),"aria-label":"Graphique suivant"}," › ")],512),[[w,s.value==="resultats"]]),e("div",J,[e("div",H,[s.value==="carte"?(b(),v("div",W,[t[6]||(t[6]=e("div",{class:"inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider bg-blue-900 text-blue-300 rounded-full"}," CARTE ",-1)),e("h1",Q,g(i.value[r.value].title),1),t[7]||(t[7]=e("hr",{class:"border-gray-600 mb-4"},null,-1)),e("p",K,g(i.value[r.value].description),1)])):S("",!0),s.value==="resultats"?(b(),v("div",X,[t[8]||(t[8]=e("div",{class:"inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider bg-blue-900 text-blue-300 rounded-full"}," STATISTIQUES ",-1)),e("h1",Y,g(a.value[o.value].title),1),t[9]||(t[9]=e("hr",{class:"border-gray-600 mb-4"},null,-1)),e("p",ee,g(a.value[o.value].description),1)])):S("",!0)]),e("div",te,[e("button",{onClick:t[4]||(t[4]=m=>s.value="carte"),class:T([{"bg-gray-900 text-white":s.value==="carte","bg-gray-700 text-gray-300 hover:text-white":s.value!=="carte"},"flex items-center justify-center px-4 py-3 font-semibold rounded-bl-lg transition uppercase text-sm gap-2"])},t[10]||(t[10]=[e("i",{class:"fas fa-map-marked-alt"},null,-1),_(" Carte ")]),2),e("button",{onClick:t[5]||(t[5]=m=>s.value="resultats"),class:T([{"bg-gray-900 text-white":s.value==="resultats","bg-gray-700 text-gray-300 hover:text-white":s.value!=="resultats"},"flex items-center justify-center px-4 py-3 font-semibold rounded-br-lg transition uppercase text-sm gap-2"])},t[11]||(t[11]=[e("i",{class:"fas fa-chart-bar"},null,-1),_(" Statistiques ")]),2)])])]),x(A)],64))}},oe=I(se,[["__scopeId","data-v-4cf3f0e2"]]);export{oe as default};
