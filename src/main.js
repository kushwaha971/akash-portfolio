const menu = document.querySelector('.menu-toggle');
if (menu) {
 const nav = document.createElement('nav'); nav.id='mobile-nav'; nav.className='mobile-nav-panel'; nav.setAttribute('aria-label','Mobile navigation'); nav.hidden=true;
 for (const [href,label] of [['/work/','Work'],['/about/','About'],['/blog/','Writing'],['/Akash_A_Resume.pdf','AI Full-Stack resume ↓'],['/Akash_F_Resume.pdf','Frontend resume ↓'],['/hire/','Hire Me']]) {const a=document.createElement('a');a.href=href;a.textContent=label;nav.append(a);}
 document.querySelector('.studio-nav').append(nav);
 menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');nav.hidden=!open;});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.hidden=true;menu.setAttribute('aria-expanded','false');}});
}
for(const link of document.querySelectorAll('.desktop-nav a')) { if(location.pathname.replace(/\/$/,'')===new URL(link.href).pathname.replace(/\/$/,''))link.setAttribute('aria-current','page'); }
const filters=[...document.querySelectorAll('[data-filter]')];
for(const b of filters)b.addEventListener('click',()=>{for(const f of filters)f.setAttribute('aria-pressed',String(f===b));for(const card of document.querySelectorAll('[data-category]'))card.hidden=b.dataset.filter!=='all'&&card.dataset.category!==b.dataset.filter;});
let topic='All';
function filterPosts(){const q=(document.querySelector('#blog-search')?.value||'').toLowerCase();let count=0;for(const post of document.querySelectorAll('[data-post]')){post.hidden=(topic!=='All'&&post.dataset.topic!==topic)||!post.textContent.toLowerCase().includes(q);if(!post.hidden)count++;}const state=document.querySelector('#post-results');if(state)state.textContent=count?'':'No matching posts. Try another topic or search.';}
for(const b of document.querySelectorAll('[data-blog-filter]'))b.addEventListener('click',()=>{topic=b.dataset.blogFilter;for(const f of document.querySelectorAll('[data-blog-filter]'))f.setAttribute('aria-pressed',String(f===b));filterPosts();});
document.querySelector('#blog-search')?.addEventListener('input',filterPosts);
if(document.querySelector('#blog-search')){const state=document.createElement('p');state.id='post-results';state.className='wrap';state.setAttribute('role','status');document.querySelector('main').append(state);}
document.querySelector('#enquiry-form')?.addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const d=new FormData(form);const body=`Hello Akash,\n\n${d.get('message')}\n\nName: ${d.get('name')}\nEmail: ${d.get('email')}\nCompany: ${d.get('company')||'—'}\nRole: ${d.get('roleType')}\nBudget: ${d.get('budgetRange')||'Let’s discuss'}`;location.href=`mailto:kushwahaakash971@gmail.com?subject=${encodeURIComponent('Engineering opportunity — '+(d.get('company')||d.get('roleType')))}&body=${encodeURIComponent(body)}`;document.querySelector('#form-status').textContent='Your email app will open with the enquiry. Please review and send it there. You can also email kushwahaakash971@gmail.com directly.';});
