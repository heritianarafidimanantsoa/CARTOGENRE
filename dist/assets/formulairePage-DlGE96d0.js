import{_ as I,r as p,o as O,w as D,c as w,a as x,d as e,j as N,f as S,k as E,l as C,e as U,m as P,g as _,T as A,p as q,q as H,s as Q,u as X,n as Y,t as $,x as Z}from"./index-BmVvd5VE.js";const G={class:"relative w-full h-full"},J={class:"absolute bottom-4 left-4 bg-white p-5 rounded-xl shadow-lg space-y-3 z-[1000] w-[270px] border border-gray-200"},K={class:"flex flex-col gap-3"},W={class:"flex gap-2"},ee={key:0,class:"fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[1100]"},te={class:"bg-white w-full max-w-6xl h-[90vh] overflow-hidden relative"},ae={class:"absolute bottom-4 left-4 bg-white p-5 rounded-xl shadow-lg space-y-3 z-[1000] w-[270px] border border-gray-200"},le={class:"flex flex-col gap-3"},oe={class:"flex gap-2"},se={__name:"cartexpression",props:{modelValue:{type:Object,default:()=>({lat:null,lng:null})}},emits:["update:modelValue"],setup(z,{emit:F}){const y=z,h=F,l=p(y.modelValue.lat||-21.4633723),o=p(y.modelValue.lng||47.1121022);let c,v=null,s=null,n=null;const g=p(!1),i=()=>{h("update:modelValue",{lat:parseFloat(l.value),lng:parseFloat(o.value)})},m=(r,t)=>{v&&c.removeLayer(v),v=L.marker([r,t]).addTo(c),s&&(n&&s.removeLayer(n),n=L.marker([r,t]).addTo(s))},b=()=>{const r=parseFloat(l.value),t=parseFloat(o.value);!isNaN(r)&&!isNaN(t)&&(c.setView([r,t],16),s&&s.setView([r,t],16),m(r,t),i())},V=()=>{v&&(c.removeLayer(v),v=null),n&&(s.removeLayer(n),n=null),l.value=null,o.value=null,i()},k=()=>{i()};return O(()=>{window.L&&(c=L.map("map").setView([l.value,o.value],16.5),L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(c),L.tileLayer("https://warper.wmflabs.org/maps/tile/8475/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(c),c.on("click",r=>{l.value=parseFloat(r.latlng.lat.toFixed(6)),o.value=parseFloat(r.latlng.lng.toFixed(6)),m(l.value,o.value),i()}),l.value&&o.value&&m(l.value,o.value))}),D(g,r=>{r?H(()=>{s=L.map("modal-map").setView([l.value,o.value],16.5),L.tileLayer("https://warper.wmflabs.org/maps/tile/8475/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(s),s.on("click",t=>{l.value=parseFloat(t.latlng.lat.toFixed(6)),o.value=parseFloat(t.latlng.lng.toFixed(6)),m(l.value,o.value),i()}),l.value&&o.value&&m(l.value,o.value)}):s&&(s.remove(),s=null,n=null)}),(r,t)=>(x(),w("div",G,[t[13]||(t[13]=e("div",{id:"map",class:"absolute inset-0"},null,-1)),e("button",{onClick:t[0]||(t[0]=u=>g.value=!0),type:"button",class:"absolute top-20 left-2 bg-white border border-gray-300 py-2 px-2.5 hover:bg-gray-100 z-[1000] transition duration-200",title:"Agrandir la carte"},t[6]||(t[6]=[e("i",{class:"fas fa-expand-arrows-alt text-gray-600 text-lg"},null,-1)])),e("div",J,[e("div",K,[e("div",null,[t[7]||(t[7]=e("label",{class:"block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wide"},"Latitude",-1)),S(e("input",{name:"latitude","onUpdate:modelValue":t[1]||(t[1]=u=>l.value=u),type:"number",step:"any",class:"border border-gray-300 px-3 py-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",placeholder:"Ex: -21.4633",onChange:k},null,544),[[E,l.value]])]),e("div",null,[t[8]||(t[8]=e("label",{class:"block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wide"},"Longitude",-1)),S(e("input",{name:"longitude","onUpdate:modelValue":t[2]||(t[2]=u=>o.value=u),type:"number",step:"any",class:"border border-gray-300 px-3 py-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",placeholder:"Ex: 47.1121",onChange:k},null,544),[[E,o.value]])]),e("div",W,[e("button",{onClick:C(b,["prevent"]),class:"flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm transition"}," Aller "),e("button",{onClick:C(V,["prevent"]),class:"flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm transition"}," Supprimer ")])])]),(x(),N(q,{to:"body"},[U(A,{name:"fade"},{default:P(()=>[g.value?(x(),w("div",ee,[e("div",te,[t[12]||(t[12]=e("div",{id:"modal-map",class:"w-full h-full"},null,-1)),e("button",{onClick:t[3]||(t[3]=u=>g.value=!1),type:"button",class:"absolute top-4 right-4 bg-secondary text-white p-4 rounded-full hover:bg-secondary/80 shadow-md transition z-[1100]",title:"Fermer la carte"},t[9]||(t[9]=[e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M18 6 6 18"}),e("path",{d:"m6 6 12 12"})],-1)])),e("div",ae,[e("div",le,[e("div",null,[t[10]||(t[10]=e("label",{class:"block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wide"},"Latitude",-1)),S(e("input",{name:"latitude","onUpdate:modelValue":t[4]||(t[4]=u=>l.value=u),type:"number",step:"any",class:"border border-gray-300 px-3 py-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",placeholder:"Ex: -21.4633",onChange:k},null,544),[[E,l.value]])]),e("div",null,[t[11]||(t[11]=e("label",{class:"block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wide"},"Longitude",-1)),S(e("input",{name:"longitude","onUpdate:modelValue":t[5]||(t[5]=u=>o.value=u),type:"number",step:"any",class:"border border-gray-300 px-3 py-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",placeholder:"Ex: 47.1121",onChange:k},null,544),[[E,o.value]])]),e("div",oe,[e("button",{onClick:C(b,["prevent"]),class:"flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm transition"}," Aller "),e("button",{onClick:C(V,["prevent"]),class:"flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm transition"}," Supprimer ")])])])])])):_("",!0)]),_:1})]))]))}},ne=I(se,[["__scopeId","data-v-c558fa8a"]]),re={class:"relative h-auto py-12 bg-gray-100"},ie={class:"container mx-auto px-4"},ue={class:"flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden"},de={class:"lg:w-1/2 w-full bg-primary flex items-center justify-center"},pe={class:"lg:w-1/2 w-full bg-secondary px-8 py-10 flex items-center"},ce={class:"bg-white shadow rounded-lg p-4"},me={class:"flex items-center justify-start gap-6 mt-4"},fe={class:"hidden sm:inline"},ve={key:0,class:"text-sm text-red-600 font-semibold"},ge={key:0,class:"mt-4 relative inline-block"},be=["src"],xe={key:1,class:"mt-4 flex items-center gap-3"},ye=["src"],we={key:0,class:"text-green-500 text-sm text-center"},he={__name:"formulairePage",setup(z){const F=Z(),y=p({lat:null,lng:null}),h=p(""),l=p(null),o=p(null),c=d=>{const a=d.target.files[0];a&&(l.value=a,o.value=URL.createObjectURL(a))},v=()=>{l.value=null,o.value=null},s=p(!1);let n,g=[];const i=p(null),m=p(null),b=p(0);let V=null;const k=async()=>{try{const d=await navigator.mediaDevices.getUserMedia({audio:!0});n=new MediaRecorder(d),g=[],b.value=0,n.ondataavailable=a=>g.push(a.data),n.onstop=()=>{i.value=new Blob(g,{type:"audio/webm"}),m.value=URL.createObjectURL(i.value),clearInterval(V)},n.start(),s.value=!0,V=setInterval(()=>b.value++,1e3)}catch(d){alert("Microphone inaccessible !"),console.error(d)}},r=()=>{n&&n.state!=="inactive"&&(n.stop(),s.value=!1)},t=Q(()=>{const d=Math.floor(b.value/60).toString().padStart(1,"0"),a=(b.value%60).toString().padStart(2,"0");return`${d}:${a}`}),u=()=>{i.value=null,m.value=null,b.value=0},R=async()=>{const d=document.getElementById("genre").value,a=document.getElementById("feedbackType").value,M=document.getElementById("lieu").value,B=document.getElementById("message").value;if(!d||!a){alert("Veuillez remplir tous les champs obligatoires.");return}const f=new FormData;f.append("genre",d),f.append("feedbackType",a),f.append("lieu",M),f.append("message",B),f.append("latitude",y.value.lat),f.append("longitude",y.value.lng),l.value&&f.append("file",l.value),i.value&&f.append("audio",i.value,"audio.webm");try{const T=await fetch("http://localhost/submit.php",{method:"POST",body:f}),j=await T.json();T.ok?(h.value="✅ Données envoyées avec succès !",setTimeout(()=>{h.value="",F.push("/forumPage")},2e3)):alert(`❌ Erreur : ${j.message}`)}catch(T){console.error("Erreur réseau :",T),alert("❌ Erreur de connexion au serveur.")}};return(d,a)=>(x(),w("div",re,[e("div",ie,[e("div",ue,[e("div",de,[U(ne,{modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=M=>y.value=M)},null,8,["modelValue"])]),e("div",pe,[e("form",{onSubmit:C(R,["prevent"]),class:"w-full max-w-lg mx-auto space-y-6"},[a[7]||(a[7]=X('<div class="text-center" data-v-bff80a17><h2 class="text-3xl font-bold text-primary mb-4 font-poppins" data-v-bff80a17> EXPRIMEZ-VOUS </h2><p class="text-white text-sm" data-v-bff80a17> Partagez votre expérience de façon anonyme et sécurisée </p></div><div data-v-bff80a17><label for="genre" class="block mb-1 text-sm font-medium text-white" data-v-bff80a17>Vous êtes :</label><select id="genre" name="genre" class="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary" data-v-bff80a17><option disabled selected value="" data-v-bff80a17> Choisissez une option </option><option value="homme" data-v-bff80a17>Homme</option><option value="femme" data-v-bff80a17>Femme</option></select></div><div data-v-bff80a17><label for="feedbackType" class="block mb-1 text-sm font-medium text-white" data-v-bff80a17>Que s&#39;est-il passé ?</label><select id="feedbackType" name="feedbackType" class="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary" data-v-bff80a17><option value="" data-v-bff80a17>Choisissez un type</option><option value="avis" data-v-bff80a17>Avis</option><option value="suggestion" data-v-bff80a17>Suggestion</option><option value="experience" data-v-bff80a17>Expérience</option></select></div><div data-v-bff80a17><label for="lieu" class="block mb-1 text-sm font-medium text-white" data-v-bff80a17>Où cela s&#39;est-il passé ?</label><input type="text" id="lieu" name="lieu" placeholder="Indiquez le lieu" class="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary" data-v-bff80a17></div>',4)),e("div",ce,[a[5]||(a[5]=e("label",{for:"message",class:"block text-sm font-medium text-gray-700 mb-2"},"Votre message :",-1)),a[6]||(a[6]=e("textarea",{id:"message",name:"message",rows:"4",placeholder:"À vous le clavier...",class:"w-full p-3 text-gray-800 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-primary"},null,-1)),e("div",me,[a[2]||(a[2]=e("label",{for:"file-upload",class:"cursor-pointer flex items-center gap-2 text-sm text-gray-600 hover:text-green-600"},[e("i",{class:"fas fa-image text-green-500 text-xl"}),e("span",{class:"hidden sm:inline"},"Image")],-1)),e("input",{id:"file-upload",type:"file",class:"hidden",onChange:c},null,32),e("button",{type:"button",onClick:a[1]||(a[1]=M=>s.value?r():k()),class:"flex items-center gap-2 text-sm text-gray-600 hover:text-red-600"},[e("i",{class:Y(["text-xl",s.value?"fas fa-stop text-red-700 animate-pulse":"fas fa-microphone text-red-500"])},null,2),e("span",fe,$(s.value?"Stop":"Audio"),1)]),s.value?(x(),w("span",ve,$(t.value),1)):_("",!0)]),o.value?(x(),w("div",ge,[e("img",{src:o.value,class:"w-20 h-20 object-cover rounded-xl shadow border"},null,8,be),e("button",{onClick:v,class:"absolute -top-2 -right-2 bg-white border border-gray-300 text-gray-600 rounded-full p-1 shadow hover:bg-red-500 hover:text-white"},a[3]||(a[3]=[e("i",{class:"fas fa-times text-xs"},null,-1)]))])):_("",!0),i.value?(x(),w("div",xe,[e("audio",{src:m.value,controls:"",class:"w-full rounded-lg shadow"},null,8,ye),e("button",{onClick:u,type:"button",class:"text-red-600 hover:text-red-800",title:"Supprimer l'audio"},a[4]||(a[4]=[e("i",{class:"fas fa-times-circle text-xl"},null,-1)]))])):_("",!0)]),h.value?(x(),w("div",we,$(h.value),1)):_("",!0),a[8]||(a[8]=e("button",{type:"submit",class:"w-full inline-block text-center px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/80 transition duration-200"}," ENVOYER ",-1))],32)])])])]))}},Ve=I(he,[["__scopeId","data-v-bff80a17"]]);export{Ve as default};
