(()=>{"use strict";const n="https://rickandmortyapi.com/api/character",a=async a=>{const e=a?`${n}/${a}`:n;try{return await fetch(e).then((n=>n.json()))}catch(n){console.error("Error en la llamada a la API",n)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",s=()=>"\n        <div class='error-page'>\n            <h1>404</h1>\n            <h2>Error 404, page not found.</h2>\n            <p>Please <span class='go-back'> Go back </span> or <span class='go-home'>Go to Home</span> </p>\n        </div>\n    ",t={"/":async()=>`\n        <div class='Characters'>\n            ${(await a()).results.map((n=>`\n                        <article class='Character-item'>\n                            <a href='#/${n.id}/'>\n                                <img src='${n.image}' alt='${n.name}' />\n                                <h2>${n.name}</h2>\n                            </a>\n                        </article>\n                    `)).join("")}\n        </div>\n    `,"/:id":async()=>{const n=e(),s=await a(n);return`\n        <div class='Character-inner'>\n            <article class='Characters-card'>\n                <img src='${s.image}' alt='${s.name}'>\n                <h2>${s.name}</h2>\n            </article>\n            <article class='Characters-card'>\n                <span>Episodies:${s.episode.length}</span>\n                <span>Status:${s.status}</span>\n                <span>Species:${s.species}</span>\n                <span>Gender:${s.gender}</span>\n                <span>Origin:${s.origin.name}</span>\n                <span>Last Location:${s.location.name}</span>\n            </article>\n        </div>\n    `},"/contact":"Contact"},r=async()=>{const n=document.querySelector("header"),a=document.querySelector("#content"),r=document.querySelector("footer");n.innerHTML=await"\n        <div class='Header-main'>\n            <div class='Header-logo'>\n                <h1>\n                    <a href='/'>\n                        Single Page Application \n                    </a>\n                </h1>\n            </div>\n            <div class='Header-nav'>\n                <a href='#/about'>\n                    About\n                </a>\n            </div>\n        </div>\n    ";let i=e(),c=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(i),o=t[c]?t[c]:s;a.innerHTML=await o(),r.innerHTML=await"\n        <div class='Footer'>\n            <h6>Create by Goide :) </h6>\n        </div>\n    "};window.addEventListener("load",r),window.addEventListener("hashchange",r)})();