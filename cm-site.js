/* Casa Mkali site — shared header/footer + behaviors */

/* Cookies + Google Analytics (GA4).
   Analytics only loads on the live domain AND after the visitor accepts cookies.
   The choice lives in localStorage as cm_cookies = 'granted' | 'denied'. */
var CM_GA_ID='G-2CN8D4QZF7';
function cmConsent(){try{return localStorage.getItem('cm_cookies')}catch(e){return null}}
function cmLoadGA(){
  if(window.cmGaLoaded||location.hostname!=='casamkali.com')return;
  window.cmGaLoaded=true;
  var gs=document.createElement('script');gs.async=true;
  gs.src='https://www.googletagmanager.com/gtag/js?id='+CM_GA_ID;
  document.head.appendChild(gs);
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  window.gtag=gtag;
  gtag('js',new Date());
  gtag('config',CM_GA_ID);
}
if(cmConsent()==='granted')cmLoadGA();
/* forget the stored choice (linked from cookie-policy.html) */
window.cmCookieReset=function(){try{localStorage.removeItem('cm_cookies')}catch(e){}location.reload()};

(function(){
var page=document.body.getAttribute('data-page')||'';
function on(p){return page===p?' on':''}
var hd=document.createElement('header');hd.className='hd';
hd.innerHTML='<div class="hd__in">'+
'<a href="index.html" class="wm hd__wm">casa<b>mkali</b><span class="dot">.</span></a>'+
'<nav class="desk">'+
'<div><a class="nl'+on('nn')+'" href="n-n.html">n+n</a><div class="dd"><a href="natasha.html">natasha</a><a href="nikki.html">nikki</a></div></div>'+
'<div><a class="nl'+on('lab')+'" href="the-lab.html">the lab</a><div class="dd"><a href="the-team.html">the team</a><a href="ai-services.html">ai services</a><a href="work-with-us.html">work with us</a></div></div>'+
'<div><a class="nl'+on('projects')+'" href="projects.html">projects</a></div>'+
'</nav>'+
'<div class="hd__cta"><a href="work-with-us.html" class="btn">work with us</a>'+
'<button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button></div></div>'+
'<nav class="mob" id="mob"><a href="n-n.html">n+n</a><a href="natasha.html">— natasha</a><a href="nikki.html">— nikki</a><a href="the-lab.html">the lab</a><a href="the-team.html">— the team</a><a href="ai-services.html">— ai services</a><a href="projects.html">projects</a><a href="work-with-us.html">work with us</a></nav>';
document.body.insertBefore(hd,document.body.firstChild);

var ft=document.createElement('footer');ft.className='ft';
ft.innerHTML='<div class="ft__row"><div>'+
'<div class="wm ft__wm">casa<b>mkali</b><span class="flame">.</span></div>'+
'<p class="ft__tag">a consultancy at the intersection of marketing, business development, creative, and go-to-market.</p></div>'+
'<div class="ft__cols">'+
'<div class="ft__col"><h4>mkali</h4><a href="n-n.html">n+n</a><a href="the-lab.html">the lab</a><a href="ai-services.html">ai services</a><a href="projects.html">projects</a></div>'+
'<div class="ft__col"><h4>connect</h4><a href="work-with-us.html">work with us</a><a href="mailto:holler@casamkali.com">holler@casamkali.com</a></div>'+
'<div class="ft__col"><h4>follow</h4><a href="https://www.instagram.com/casamkali/" target="_blank" rel="noopener">instagram</a><a href="https://casamkali.substack.com/" target="_blank" rel="noopener">substack</a><a href="https://www.linkedin.com/company/74854160/" target="_blank" rel="noopener">linkedin</a></div>'+
'</div></div>'+
'<div class="ft__base"><div class="c">© 2026 casa mkali</div>'+
'<div class="c"><a href="cookie-policy.html">cookie policy</a></div>'+
'<div class="c">mexico city · miami · new york · los angeles · lisbon</div></div>';
document.body.appendChild(ft);

/* cookie banner — shown until the visitor makes a choice */
if(!cmConsent()){
  var cb=document.createElement('div');cb.className='cookiebar';
  cb.innerHTML='<p>we use cookies to understand how visitors use the site — analytics only runs if you say yes. <a href="cookie-policy.html">cookie policy</a></p>'+
  '<div class="cookiebar__btns"><button class="btn" id="ck-yes">accept</button><button class="btn btn--no" id="ck-no">decline</button></div>';
  document.body.appendChild(cb);
  var choose=function(v){try{localStorage.setItem('cm_cookies',v)}catch(e){}cb.remove();if(v==='granted')cmLoadGA();};
  document.getElementById('ck-yes').addEventListener('click',function(){choose('granted')});
  document.getElementById('ck-no').addEventListener('click',function(){choose('denied')});
}

var b=document.getElementById('burger'),m=document.getElementById('mob');
if(b){b.addEventListener('click',function(){m.classList.toggle('open')});}

/* cycling hero word */
var cy=document.querySelector('.cycle');
if(cy){
  var words=JSON.parse(cy.getAttribute('data-words'));var i=0;
  setInterval(function(){i=(i+1)%words.length;cy.innerHTML='<span>'+words[i]+'</span>';},2400);
}

/* reveal on scroll */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:0.01});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
/* anything already on screen at load reveals immediately, no scroll needed */
setTimeout(function(){document.querySelectorAll('.reveal:not(.in)').forEach(function(el){var r=el.getBoundingClientRect();if(r.top<window.innerHeight&&r.bottom>0){el.classList.add('in');io.unobserve(el);}});},60);
})();
