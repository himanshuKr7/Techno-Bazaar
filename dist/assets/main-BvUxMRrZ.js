import{g as s,u as p,s as y,p as m}from"./showToast-BAmAYvOP.js";s();const q=(d,o,n)=>{let c=s();const u=document.querySelector(`#card${o}`);let t=u.querySelector(".productPrice").innerText,r=u.querySelector(".productQuantity").innerText;t=t.replace("₹","");let a=c.find(i=>i.id===o);a?(r=Number(a.quantity)+Number(r),t=Number(t)*r,a.quantity=r,a.price=t,c=c.map(i=>i.id===o?a:i)):(t=Number(t)*Number(r),r=Number(r),c.push({id:o,price:t,quantity:r})),localStorage.setItem("cart-productslclstrg",JSON.stringify(c)),p(c),y("add",o)},S=(d,o,n)=>{const u=document.querySelector(`#card${o}`).querySelector(".productQuantity");let t=parseInt(u.getAttribute("dataquantity"))||1;return d.target.className==="cartIncrement"&&(t<n?t+=1:t===n&&(t=n)),d.target.className==="cartDecrement"&&t>1&&t--,u.innerText=t,u.setAttribute("dataquantity",t.toString()),t},g=document.querySelector("#productContainer"),f=document.querySelector("#productTemplate"),C=d=>{if(!d)return!1;d.forEach(o=>{const{id:n,name:c,category:u,price:t,stock:r,description:a,image:i}=o,e=document.importNode(f.content,!0);e.querySelector("#cardValue").setAttribute("id",`card${n}`),e.querySelector(".productName").textContent=`${c}`,e.querySelector(".productDescription").textContent=a,e.querySelector(".productImage").src=i,e.querySelector(".productImage").alt=c,e.querySelector(".category").textContent=u,e.querySelector(".productPrice").textContent=`₹ ${t}`,e.querySelector(".productActualPrice").textContent=`₹ ${t*4}`,e.querySelector(".productStock").textContent=r,e.querySelector(".stockElement").addEventListener("click",l=>{S(l,n,r)}),e.querySelector(".add-to-cart-button").addEventListener("click",l=>{q(l,n)}),g.append(e)})};C(m);
