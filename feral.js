// Feral dossier: reads the current catalog; selected archival quotations are drawn from the existing field records.
(function(){
'use strict';
const get=id=>document.getElementById(id);
const all=catalog;const ferals=all.filter(x=>x.stage==='Feral').sort((a,b)=>a.id-b.id);
const bases=all.filter(x=>x.stage==='Fabled');
const types=[...new Set(ferals.map(x=>x.type))].sort();
const familyKey=x=>x.slug.replace(/_(mythic|feral)$/,'');
const families=ferals.map(f=>({key:familyKey(f),fabled:bases.find(x=>familyKey(x)===familyKey(f)),mythic:all.find(x=>x.stage==='Mythic'&&familyKey(x)===familyKey(f)),feral:f}));
const element=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e};
const linkTo=x=>'pages/'+x.slug+'.html';
const art=(x,cls)=>{const wrap=element('div',cls),img=element('img');img.src=x.img;img.alt=x.name+' specimen illustration';img.loading='lazy';img.decoding='async';wrap.append(img);return wrap};
get('feralCount').textContent=ferals.length;get('familyCount').textContent=bases.length;get('affinityCount').textContent=types.length;
const cover=ferals.find(x=>x.slug==='kodaroot_feral')||ferals[0];if(cover){get('feralCover').src=cover.img;get('feralCover').alt=cover.name+' specimen illustration'}else get('feralCover').hidden=true;
const familySelect=get('familySelect');
for(const f of families){const option=element('option',null,f.fabled?.name||f.feral.name.replace(/\s*·\s*Feral$/,''));option.value=f.key;familySelect.append(option)}
const labels={Fabled:'Original form',Mythic:'Mythic path',Feral:'Corrupted path'};
function compare(){const box=get('feralCompare');box.replaceChildren();const f=families.find(x=>x.key===familySelect.value);if(!f){box.append(element('p','feral-empty','No Feral families are recorded yet.'));return}for(const stage of ['Fabled','Mythic','Feral']){const x=f[stage.toLowerCase()];const card=element(x?'a':'div','feral-stage');card.dataset.stage=stage;if(x)card.href=linkTo(x);card.append(element('span','feral-stage-label',stage));if(x){card.append(art(x,'feral-stage-art'),element('strong',null,x.name),element('small',null,labels[stage]+' · '+x.type))}else card.append(element('div','feral-stage-art','Not yet documented'));box.append(card)}}
if(families.some(f=>f.key==='jaks'))familySelect.value='jaks';familySelect.addEventListener('change',compare);compare();
const cases=[
  {
    "slug": "wispit_feral",
    "photo": "assets/wispit_feral_cryptograph.jpg",
    "habitat": "Marshes, bogs and wooded wetlands",
    "note": "A chain of lights appeared along the safe path, then shifted into the bog. We stayed beside our original marker until dawn; the lights never stopped circling it."
  },
  {
    "slug": "squonky_feral",
    "photo": "assets/squonky_feral_cryptograph.jpg",
    "habitat": "Misty forests and secluded wetlands",
    "note": "The team heard sobbing from beneath a flooded trail. The water rose with each cry, then fell silent the moment we reached higher ground."
  },
  {
    "slug": "kodaroot_feral",
    "photo": "assets/kodaroot_feral_cryptograph.jpg",
    "habitat": "Deadwood groves, abandoned mountain shrines and forests consumed by root rot",
    "note": "Witnesses describe shrine bells ringing without wind before the trees begin to move. The little red spirits may be the forest’s last warnings—or the source of its corruption."
  }
];
for(const c of cases){const x=ferals.find(x=>x.slug===c.slug);if(!x)continue;const card=element('article','feral-case'),photo=element('div','feral-case-photo'),img=element('img');img.src=c.photo;img.alt=x.name+' cryptograph';img.loading='lazy';photo.append(img);const body=element('div','feral-case-body');const link=element('a',null,'Read full field record →');link.href=linkTo(x);body.append(element('div','feral-tag',c.habitat),element('h3',null,x.name),element('blockquote',null,'“'+c.note+'”'),link);card.append(photo,body);get('feralCases').append(card)}
const affinity=get('feralAffinity'),search=get('feralSearch');for(const t of types){const option=element('option',null,t);option.value=t;affinity.append(option)}
function registry(){const q=search.value.trim().toLowerCase();const matches=ferals.filter(x=>(affinity.value==='all'||x.type===affinity.value)&&(!q||(x.name+' '+x.type+' '+x.slug).toLowerCase().includes(q)));get('feralResultCount').textContent=matches.length+' of '+ferals.length+' records';const grid=get('feralRegistry');grid.replaceChildren();for(const x of matches){const a=element('a','feral-record');a.href=linkTo(x);const type=element('span','feral-affinity',x.type);type.style.setProperty('--affinity',colors[x.type]||'#797066');a.append(art(x,'feral-record-art'),element('strong',null,x.name),type);grid.append(a)}if(!matches.length)grid.append(element('p','feral-empty','No specimens match the current filters.'))}
search.addEventListener('input',registry);affinity.addEventListener('change',registry);get('feralReset').addEventListener('click',()=>{search.value='';affinity.value='all';registry()});registry();
})();
