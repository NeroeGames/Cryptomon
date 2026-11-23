const $=id=>document.getElementById(id);
const colors={Plant:'#4b8b4d',Fire:'#b94e29',Lightning:'#ae8526',Water:'#397c9e',Air:'#806a9e',Normal:'#797066'};
function pageLink(item){return 'pages/'+item.slug+'.html'}
function renderIndex(){
 const grid=$('indexGrid'); grid.innerHTML='<section class="indexstage"><h3 class="indexstage-title">Opening Chapters</h3><div class="indexgrid"><a class="indexitem" href="introduction.html">I · The Emergence</a><a class="indexitem" href="types.html">II · Affinity Chart</a><a class="indexitem" href="camera.html">III · Crypto-Camera</a></div></section>';
 for(const stage of ['Fabled','Mythic','Feral']){
  const entries=catalog.filter(x=>x.stage===stage).sort((a,b)=>a.id-b.id);
  if(!entries.length)continue;
  const section=document.createElement('section');section.className='indexstage stage-'+stage.toLowerCase();
  const title=document.createElement('h3');title.className='indexstage-title';title.textContent=stage+' · '+entries.length+' Records';if(stage==='Mythic'){const emblem=document.createElement('img');emblem.src='assets/mythic_chapter_emblem.png';emblem.alt='';emblem.className='mythic-chapter-emblem';title.prepend(emblem);}section.appendChild(title);
  const cards=document.createElement('div');cards.className='indexgrid';
  cards.innerHTML=entries.map(x=>'<a class="indexitem" href="'+pageLink(x)+'"><img src="'+x.img+'" alt=""><span>'+x.name+'</span><small>'+x.type+' · '+x.stage+'</small></a>').join('');
  section.appendChild(cards);grid.appendChild(section);
 }
}
function renderEntry(d){
 $('coverPage').hidden=true;$('bookPages').hidden=false;$('bookFooter').hidden=false;
 $('name').textContent=d.name;$('species').textContent=d.species+' · '+d.stage+' stage';$('number').textContent='#'+String(d.id).padStart(3,'0');
 const stageHeader=document.querySelector('.righttop .tiny');if(stageHeader)stageHeader.textContent='Vol. I · '+d.stage;
 $('hero').src=d.img;$('hero').alt=d.name+' character art';$('desc').textContent=d.desc;$('origin').textContent=d.origin;
 $('type').innerHTML='<span class="typepill" style="--typebg:'+(colors[d.type]||'#797066')+'">'+d.emoji+' '+d.type+'</span>';
 $('biome').textContent=d.biome;
 $('attacks').innerHTML=d.attacks.map((a,i)=>'<div class="attack"><div class="attackscene"><img src="'+d.attackImages[i]+'" alt="'+a.name+' attack illustration"></div><h3>'+a.name+'</h3><p>'+a.desc+'</p></div>').join('');
 $('cardImg').src=d.cryptograph;$('cardName').textContent=d.name;$('cardNum').textContent='No. '+String(d.id).padStart(3,'0')+' · '+d.type+' · '+d.stage;
 $('note').textContent=d.note||'';
 const evoContainer=$('evolutionPaths'); if(evoContainer) evoContainer.innerHTML=Object.entries(d.evolutions||{}).map(([stage,v])=>'<a class="evocard" href="pages/'+v.slug+'.html"><img src="'+v.img+'" alt=""><span><strong>'+stage[0].toUpperCase()+stage.slice(1)+' Path</strong><small>'+v.name+'</small></span></a>').join('')||'<p>Evolution paths not yet documented.</p>';
 const orderedCatalog=[...catalog].sort((a,b)=>['Fabled','Mythic','Feral'].indexOf(a.stage)-['Fabled','Mythic','Feral'].indexOf(b.stage)||a.id-b.id);const ix=orderedCatalog.findIndex(x=>x.slug===d.slug),prev=orderedCatalog[ix-1],next=orderedCatalog[ix+1];$('counter').textContent='Entry '+(ix+1)+' of '+orderedCatalog.length;
 for(const [id,target,txt] of [['prev',prev,'← Previous Entry'],['next',next,'Next Entry →'],['nextLink',next,'Next record →']]){const b=$(id);b.textContent=target?txt:(id==='prev'?'← Crypto-Camera':'End of volume · Back to cover');b.disabled=false;b.onclick=()=>{location.href=target?pageLink(target):(id==='prev'?'camera.html':'index.html')};}
}
renderIndex();$('indexToggle').onclick=()=>$('indexPanel').classList.toggle('open');
if(typeof entryData!=='undefined' && entryData && typeof entryData==='object')renderEntry(entryData);
else if($('openBook')) $('openBook').onclick=()=>{location.href='introduction.html'};
