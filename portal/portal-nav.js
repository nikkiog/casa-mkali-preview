/* CM Portal mockup · shared team topbar + sidebar */
(function(){
  var page = document.body.getAttribute('data-admin');
  if(!page) return;
  function on(k){ return page===k ? ' class="on"' : ''; }

  var tb = document.createElement('header');
  tb.className = 'tb';
  tb.innerHTML = '<div class="tb__in">'+
    '<div style="display:flex;align-items:center;gap:6px">'+
      '<button class="sidetoggle" id="sidetoggle" aria-label="Menu"><span></span><span></span><span></span></button>'+
      '<a class="wm tb__wm" href="admin.html">casa<b>mkali</b><span class="dot">.</span></a>'+
      '<span class="tb__tag">portal · cm team</span>'+
    '</div>'+
    '<div class="tb__user"><span class="hide-m">cm team</span><span class="avatar">n</span></div>'+
  '</div>';
  document.body.insertBefore(tb, document.body.firstChild);

  var shell = document.createElement('div');
  shell.className = 'shell';
  var side = document.createElement('aside');
  side.className = 'side';
  side.id = 'side';
  side.innerHTML =
    '<h5>viewing</h5>'+
    '<div class="cx"><select><option>all clients</option><option>dr. sebi\'s cell food</option><option>kirin</option><option>almave</option></select></div>'+
    '<h5>manage</h5>'+
    '<a href="admin.html"'+on('overview')+'>overview</a>'+
    '<a href="admin-clients.html"'+on('clients')+'>clients</a>'+
    '<a href="admin-creators.html"'+on('creators')+'>creators</a>'+
    '<a href="admin-documents.html"'+on('documents')+'>documents</a>'+
    '<h5>needs you</h5>'+
    '<a href="admin-queue.html"'+on('queue')+'>review queue <span class="badge">1</span></a>'+
    '<a href="admin-requests.html"'+on('requests')+'>requests <span class="badge">1</span></a>'+
    '<a href="admin-invoices.html"'+on('invoices')+'>invoices <span class="badge">1</span></a>'+
    '<h5>casa mkali</h5>'+
    '<a href="admin-team.html"'+on('team')+'>team + invites</a>'+
    '<a href="emails.html"'+on('emails')+'>invite emails</a>'+
    '<a href="index.html">exit portal</a>';

  var main = document.createElement('div');
  main.className = 'main';
  while(document.body.children.length > 1){ main.appendChild(document.body.children[1]); }
  shell.appendChild(side);
  shell.appendChild(main);
  document.body.appendChild(shell);

  var t = document.getElementById('sidetoggle');
  if(t) t.addEventListener('click', function(){ side.classList.toggle('open'); });
})();

/* pills: click to switch on/off · add-to-list inputs */
(function(){
  document.addEventListener('click', function(e){
    var p = e.target.closest('.pill');
    if(p && !p.hasAttribute('data-static')){ p.classList.toggle('on'); }
  });
  window.cmAddPill = function(listId, inputId){
    var list = document.getElementById(listId), input = document.getElementById(inputId);
    if(!list || !input) return;
    var v = input.value.trim();
    if(!v) { input.focus(); return; }
    var s = document.createElement('span');
    s.className = 'pill on';
    s.textContent = v.toLowerCase();
    list.appendChild(s);
    input.value = '';
    input.focus();
  };
})();
