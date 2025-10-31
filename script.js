
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.add-to-cart').forEach(btn=>{
    btn.addEventListener('click', function(e){
      const id = this.dataset.id;
      const title = this.dataset.title;
      const price = this.dataset.price;
      const image = this.dataset.image;
      const cart = JSON.parse(localStorage.getItem('og_cart')||'[]');
      cart.push({id,title,price,image});
      localStorage.setItem('og_cart', JSON.stringify(cart));
      alert(title + ' added to cart');
      updateCartCount();
    });
  });
  updateCartCount();
  const thumbs = document.querySelectorAll('.thumb-row .thumb');
  let ti = 0;
  if(thumbs.length){
    setInterval(()=>{
      thumbs.forEach(t=>t.style.opacity=0.6);
      thumbs[ti%thumbs.length].style.opacity = 1;
      ti++;
    },2000);
  }
});
function updateCartCount(){
  const cart = JSON.parse(localStorage.getItem('og_cart')||'[]');
  const el = document.getElementById('cart-count');
  if(el) el.textContent = cart.length;
}
function renderCart(){
  const list = document.getElementById('cart-list');
  if(!list) return;
  const cart = JSON.parse(localStorage.getItem('og_cart')||'[]');
  if(cart.length===0){
    list.innerHTML = '<div class="card">Your cart is empty.</div>';
    return;
  }
  list.innerHTML = '';
  cart.forEach((it,idx)=>{
    const div = document.createElement('div');
    div.className = 'card';
    div.style.display='flex'; div.style.alignItems='center'; div.style.gap='12px'; div.style.marginBottom='10px';
    div.innerHTML = `<img src='${it.image}' style='width:120px;height:72px;object-fit:cover;border-radius:8px' /><div><strong>${it.title}</strong><div style='color:#6b7280'>${it.price} USD</div></div><div style='margin-left:auto'><button onclick='removeFromCart(${idx})' class='btn' style='background:#ef4444'>Remove</button></div>`;
    list.appendChild(div);
  });
}
function removeFromCart(index){
  const cart = JSON.parse(localStorage.getItem('og_cart')||'[]');
  cart.splice(index,1);
  localStorage.setItem('og_cart', JSON.stringify(cart));
  renderCart();
  updateCartCount();
}
 document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
            
           
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const subject = document.getElementById('subject').value;
const message = document.getElementById('message').value;
            
          
  if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields');
                return;
  }
            
           
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
  }
            
           
  if (phone && !/^\+?[\d\s\-\(\)]+$/.test(phone)) {
                alert('Please enter a valid phone number');
                return;
  }
            
         
  const submitBtn = document.querySelector('.btn');
  const originalText = submitBtn.textContent;
            
            
  submitBtn.textContent = 'SENDING...';
  submitBtn.disabled = true;
            
           
  setTimeout(() => {
               
    document.getElementById('successMessage').style.display = 'block';
                
               
    document.getElementById('contactForm').reset();
                
               
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
                
                
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
    }, 5000);
                
               
    console.log('Form Data:', { name, email, phone, subject, message });
                
            }, 1500);});

    function openLiveChat() {
alert('Live chat feature would open here!\n\nThis could integrate with:\n• Zendesk\n• Intercom\n• LiveChat\n• Tawk.to\n• Or custom chat solution');
        }

       document.querySelectorAll('.info-card').forEach(card => {
card.addEventListener('click', function() {
    const title = this.querySelector('h3').textContent;
    console.log(`Clicked on: ${title}`);
                
               
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'translateY(-5px)';
    }, 150);
});});

       document.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('focus', function() {
                this.style.boxShadow = '0 4px 15px rgba(74, 144, 226, 0.3)';
                this.style.borderColor = '#4a90e2';
});
            
field.addEventListener('blur', function() {
    this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    this.style.borderColor = '#ddd';
});});

      document.getElementById('phone').addEventListener('input', function(e) {
let value = e.target.value.replace(/\D/g, '');
if (value.length >= 6) {
      alue = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
} else if (value.length >= 3) {
    value = value.replace(/(\d{3})(\d{0,3})/, '$1-$2');
}
e.target.value = value;});

      document.addEventListener('DOMContentLoaded', function() {
const cards = document.querySelectorAll('.info-card');
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
                
    setTimeout(() => {
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 100);
});
});
   document.querySelector('.mobile-menu').addEventListener('click', function() {
      document.querySelector('.nav-menu').classList.toggle('active');
  });
function qs(name){const u=new URL(location.href);return u.searchParams.get(name);}
const brand = qs('brand');
const brands = {samsung:'#',intel:'#',amd:'#',sony:'#',lg:'#'};
const prodRoot = document.getElementById('product-list');
const makeProductCard = (brandKey, i) => {
  const el = document.createElement('div'); el.className='card';
  el.innerHTML = `<img src="assets/product_${i}.svg" style="width:100%;height:140px;object-fit:cover;border-radius:8px" /><h4 style="margin:8px 0 0 0">${brandKey.toUpperCase()} Product ${i}</h4><p style="color:var(--muted);font-size:13px">Model ${i} - high performance</p><p style="margin-top:8px"><button class="btn add-to-cart" data-id="${brandKey}_${i}" data-title="${brandKey.toUpperCase()} Product ${i}" data-price="${(40+i).toFixed(2)}" data-image="assets/product_${i}.svg">Add to Cart</button> <a href="#" onclick="downloadSpecs(event,'${brandKey}_${i}')">Download Specs</a></p>`;
  return el;
};
function downloadSpecs(e,id){ e.preventDefault(); alert('This will download a dummy specs file for '+id); }

function render(){
  prodRoot.innerHTML='';
  if(brand && brands[brand]){
    for(let i=1;i<=20;i++){ prodRoot.appendChild(makeProductCard(brand,i)); }
  } else {
    for(let b of Object.keys(brands)){
      for(let i=1;i<=4;i++){ prodRoot.appendChild(makeProductCard(b,i)); }
    }
  }
}
render();
  const faqData = [
            { btn: 'faqQuestionOne', answer: 'faqAnswerOne', icon: 'faqIconOne' },
            { btn: 'faqQuestionTwo', answer: 'faqAnswerTwo', icon: 'faqIconTwo' },
            { btn: 'faqQuestionThree', answer: 'faqAnswerThree', icon: 'faqIconThree' },
            { btn: 'faqQuestionFour', answer: 'faqAnswerFour', icon: 'faqIconFour' },
            { btn: 'faqQuestionFive', answer: 'faqAnswerFive', icon: 'faqIconFive' }
        ];

        faqData.forEach(faq => {
            const btnEl = document.getElementById(faq.btn);
            const ansEl = document.getElementById(faq.answer);
            const iconEl = document.getElementById(faq.icon);

            btnEl.addEventListener('click', () => {
                const isActive = ansEl.classList.contains('active-answer-state');
                
                document.querySelectorAll('.faq-answer-content').forEach(a => {
                    a.classList.remove('active-answer-state');
                });
                document.querySelectorAll('.faq-toggle-icon').forEach(i => {
                    i.classList.remove('active-icon-state');
                });

                if (!isActive) {
                    ansEl.classList.add('active-answer-state');
                    iconEl.classList.add('active-icon-state');
                }
            });
        });

        const formEl = document.getElementById('supportContactForm');
        const successBoxEl = document.getElementById('successMessageBox');

        formEl.addEventListener('submit', (e) => {
            e.preventDefault();
            
            successBoxEl.classList.add('visible-message-state');
            formEl.reset();

            setTimeout(() => {
                successBoxEl.classList.remove('visible-message-state');
            }, 5000);
        });

        const searchBtnEl = document.getElementById('searchButtonSubmit');
        const searchInputEl = document.getElementById('searchMainInput');

        searchBtnEl.addEventListener('click', () => {
            const query = searchInputEl.value.trim();
            if (query) {
                alert('Searching for: ' + query);
            }
        });

        searchInputEl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtnEl.click();
            }
        });

        const categoryCards = document.querySelectorAll('.category-card-item');
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.querySelector('.category-title-heading').textContent;
                alert('Opening ' + title + ' section');
            });
        });
 
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slides img').length;
  let index = 0;

  function moveSlide(direction) {
    index += direction;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }
  setInterval(() => moveSlide(1), 3000);
      