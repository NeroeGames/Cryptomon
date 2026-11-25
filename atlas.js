/* Offline atlas. Reads the existing catalog and reuses its artwork. */
(function(){
'use strict';
const el=id=>document.getElementById(id), NS='http://www.w3.org/2000/svg';
const regions=[
 {id:'north',name:'North America (US & Canada)',short:'US & Canada',lon:-107,lat:48,view:[-145,17,-55,75]},
 {id:'latin',name:'Latin America & Caribbean',short:'Latin America',lon:-70,lat:-12,view:[-120,-60,-25,32]},
 {id:'europe',name:'Europe',short:'Europe',lon:15,lat:53,view:[-23,33,44,73]},
 {id:'africa',name:'Africa',short:'Africa',lon:20,lat:4,view:[-24,-38,57,39]},
 {id:'asia',name:'Asia',short:'Asia',lon:99,lat:42,view:[23,-13,155,72]},
 {id:'oceania',name:'Oceania',short:'Oceania',lon:141,lat:-27,view:[105,-53,180,7]},
 {id:'global',name:'Worldwide / unplaced',short:'Worldwide',lon:null,lat:null}
];
const spots=[...atlasData.spots,{id:'unplaced',region:'global',label:'Awaiting geographical classification',lon:null,lat:null}];
const spotById=Object.fromEntries(spots.map(s=>[s.id,s]));
const regionById=Object.fromEntries(regions.map(r=>[r.id,r]));
const affinities={Plant:'#4b8b4d',Fire:'#a64625',Lightning:'#8b6a18',Water:'#397c9e',Air:'#806a9e',Normal:'#797066'};
const stageOrder=['Fabled','Mythic','Feral'];
const entries=catalog.map(x=>{
 const family=atlasData.families[x.slug.replace(/_(mythic|feral)$/,'')];
 const spot=spotById[family?.spot]||spotById.unplaced;
 return {...x,family,spot,habitat:atlasData.habitats[x.slug]||family?.biome||''};
}).sort((a,b)=>stageOrder.indexOf(a.stage)-stageOrder.indexOf(b.stage)||a.id-b.id);
let region='all',hotspot='all';
const map=el('atlasMap'),markers=el('atlasMarkers');
const countRegion=id=>entries.filter(e=>e.spot.region===id).length;
const countSpot=id=>entries.filter(e=>e.spot.id===id).length;
const familyCount=entries.filter(e=>e.stage==='Fabled').length;
function node(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
function svg(tag,attrs){const n=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,v);return n;}
function xy(lon,lat){return [(lon+180)*1000/360,(90-lat)*500/180];}
function button(label,cls,active,fn){const b=node('button',cls,label);b.type='button';b.setAttribute('aria-pressed',String(active));b.addEventListener('click',fn);return b;}
function chooseRegion(id){region=id;hotspot='all';render();}
function chooseSpot(id){hotspot=hotspot===id?'all':id;render();}
function stats(){const data=[[entries.length,'Recorded forms'],[familyCount,'Cryptomon families'],[regions.filter(r=>r.id!=='global'&&countRegion(r.id)).length,'Geographic regions'],[spots.filter(s=>s.lon!==null&&countSpot(s.id)).length,'Mapped hotspots']];for(const [n,label] of data){const box=node('div','atlas-stat');box.append(node('strong','',n),node('span','',label));el('atlasStats').append(box);}}
function renderTabs(){const tabs=el('regionTabs');tabs.replaceChildren();const all=button('All regions','atlas-tab',region==='all',()=>chooseRegion('all'));all.append(node('span','',entries.length));tabs.append(all);for(const r of regions){const b=button(r.name,'atlas-tab',region===r.id,()=>chooseRegion(r.id));b.append(node('span','',countRegion(r.id)));tabs.append(b);}}
function addMarker(lon,lat,radius,label,caption,selected,fn,description){const [x,y]=xy(lon,lat);const g=svg('g',{class:'atlas-map-marker'+(selected?' selected':''),transform:`translate(${x} ${y})`,role:'button',tabindex:'0','aria-label':description,'aria-pressed':String(selected)});const title=svg('title',{});title.textContent=description;g.append(title);const circle=svg('circle',{r:radius,class:'marker-disc'});circle.style.strokeWidth=String(radius*.13);g.append(circle);const t=svg('text',{class:'marker-text','font-size':radius*(label.length>1?.9:1.1),y:0});t.textContent=label;g.append(t);if(caption){const cap=svg('text',{class:'marker-label',y:radius+14});cap.textContent=caption;g.append(cap);}g.addEventListener('click',fn);g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();fn();}});markers.append(g);}
function renderMap(){markers.replaceChildren();const r=regionById[region];el('mapTitle').textContent=r?r.name:'The known world';if(!r||!r.view){map.setAttribute('viewBox','0 0 1000 500');for(const rr of regions.filter(x=>x.lon!==null)){addMarker(rr.lon,rr.lat,16,String(countRegion(rr.id)),rr.short,region===rr.id,()=>chooseRegion(rr.id),`${rr.name}: ${countRegion(rr.id)} forms`);}return;}
 const [west,south,east,north]=r.view;const [x,y]=xy(west,north),[x2,y2]=xy(east,south);const w=x2-x,h=y2-y;map.setAttribute('viewBox',`${x} ${y} ${w} ${h}`);const list=spots.filter(s=>s.region===region&&s.lon!==null&&countSpot(s.id));const radius=Math.max(2.7,Math.min(5,w/82));list.forEach((s,i)=>addMarker(s.lon,s.lat,radius,String(i+1),'',hotspot===s.id,()=>chooseSpot(s.id),`${s.label}: ${countSpot(s.id)} forms`));}
function renderHotspots(){const panel=el('hotspotPanel'),tabs=el('hotspotTabs');tabs.replaceChildren();panel.hidden=region==='all';if(panel.hidden)return;const list=spots.filter(s=>s.region===region&&countSpot(s.id));if(!list.length){tabs.append(node('p','','No folklore origins currently assigned to this region.'));return;}tabs.append(button('All regional records','atlas-hotspot',hotspot==='all',()=>{hotspot='all';render();}));list.forEach((s,i)=>{const b=button('','atlas-hotspot',hotspot===s.id,()=>chooseSpot(s.id));if(s.lon!==null)b.append(node('b','',i+1));b.append(node('span','',`${s.label} · ${countSpot(s.id)}`));tabs.append(b);});}
function card(e){const a=node('article','atlas-card');const link=node('a');link.href='pages/'+e.slug+'.html';const art=node('div','atlas-card-art');const img=node('img');img.src=e.img;img.alt=e.name+' illustration';img.loading='lazy';img.decoding='async';art.append(img);const meta=node('div','atlas-card-meta');const type=node('span','atlas-card-type',e.type);type.style.setProperty('--affinity',affinities[e.type]||'#797066');meta.append(type,node('span','',`${e.stage} · #${String(e.id).padStart(3,'0')}`));link.append(art,meta,node('h3','',e.name),node('p','species',e.family?.species||'Folklore origin pending'));const info=node('div','atlas-card-info');const loc=node('p');loc.append(node('strong','','Origin: '),document.createTextNode(e.spot.label));info.append(loc);if(e.habitat){const habitat=node('p');habitat.append(node('strong','','Habitat: '),document.createTextNode(e.habitat));info.append(habitat);}if(e.family?.origin){const details=node('details');details.append(node('summary','','Folklore notes'),node('p','',e.family.origin));info.append(details);}const open=node('a','atlas-card-link','Open field record →');open.href=link.href;open.setAttribute('aria-label','Open '+e.name+' field record');a.append(link,info,open);return a;}
function renderCards(){const q=el('atlasSearch').value.trim().toLowerCase(),stage=el('atlasStage').value,type=el('atlasType').value;const shown=entries.filter(e=>(region==='all'||e.spot.region===region)&&(hotspot==='all'||e.spot.id===hotspot)&&(stage==='all'||e.stage===stage)&&(type==='all'||e.type===type)&&(!q||[e.name,e.type,e.stage,e.family?.species,e.family?.origin,e.habitat,e.spot.label,regionById[e.spot.region]?.name].join(' ').toLowerCase().includes(q)));el('recordsTitle').textContent=hotspot!=='all'?spotById[hotspot].label:region==='all'?'All recorded Cryptomon':regionById[region].name;el('recordCount').textContent=`${shown.length} ${shown.length===1?'record':'records'}`;const cards=el('atlasCards');cards.replaceChildren();if(!shown.length){cards.append(node('div','atlas-empty','No records match this selection. Try another region or clear the filters.'));return;}const fragment=document.createDocumentFragment();for(const e of shown)fragment.append(card(e));cards.append(fragment);}
function render(){renderTabs();renderMap();renderHotspots();renderCards();}
el('mapReset').addEventListener('click',()=>chooseRegion('all'));el('atlasSearch').addEventListener('input',renderCards);el('atlasStage').addEventListener('change',renderCards);el('atlasType').addEventListener('change',renderCards);el('clearFilters').addEventListener('click',()=>{el('atlasSearch').value='';el('atlasStage').value='all';el('atlasType').value='all';renderCards();});stats();render();
})();
