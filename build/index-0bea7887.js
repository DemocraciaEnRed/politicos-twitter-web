import{S as t,i as e,s as a,e as l,a as s,b as n,c as i,d as o,l as c,n as r,f as d,m as p,h as x,j as u}from"./main.js";function m(t){let e,a,p,u,m,f,b,h,v,w,y,j,q,T,k,L,M,H,R,C,P,D,_,A,Q,S,E,O,z,I,F,B,V,N,U,X,G;return{c(){e=l("div"),a=l("nav"),p=l("ul"),u=l("li"),m=l("button"),m.textContent="¿Qué es?",f=s(),b=l("li"),b.innerHTML='<a href="#como" class="svelte-jd5qb1">¿Cómo funciona?</a>',h=s(),v=l("li"),v.innerHTML='<a href="#convocatoria" class="text-pet-blue svelte-jd5qb1">Convocatoria</a>',w=s(),y=l("li"),y.innerHTML='<a href="#quienes" class="svelte-jd5qb1">¿Quiénes somos?</a>',j=s(),q=l("li"),q.innerHTML='<a href="mailto:hola@politicosentwitter.com" class="svelte-jd5qb1">Contacto</a>',T=s(),k=l("li"),k.innerHTML='<button class="p-2 rounded-3xl border-2 border-pet-blue bg-pet-blue\n\t\t\t\ttext-white uppercase svelte-jd5qb1"><a href="https://oderedes.shinyapps.io/politicosentwitter/" target="_blank">Repositorio</a></button>',L=s(),M=l("div"),M.innerHTML='<img src="images/logo/pet.png" alt="Logo de Políticos en Twitter" class="m-auto w-7/12 md:w-6/12 lg:w-4/12"/>',H=s(),R=l("div"),R.innerHTML='<div class="flex flex-col justify-center gap-12"><h1 class="title max-w-5xl lg:max-w-full w-full text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl\n\t\ttext-bold text-white font-free font-bold svelte-jd5qb1"><span class="text-pet-black">Políticxs en Twitter</span> es un\n\t\t\trepositorio con interacciones de más de 500 usuarios relacionados\n\t\t\tcon la política en Argentina.</h1> \n\t\t<h2 class="text-xl sm:text-3xl text-white font-free">Ponemos a disposición de la comunidad este ATLAS con datos libres\n\t\t\ty reutilizables, para facilitar la producción de conocimiento.\n\t\t\t<br/><br/>\n\t\t\tPorque es ese conocimiento el que nos permitirá observar e interpelar\n\t\t\ta la clase política a partir de evidencia, una que convierta\n\t\t\tsus dichos en hechos.</h2></div>',C=s(),P=l("a"),P.innerHTML='<h2 class=" text-pet-black font-bowlby uppercase text-xl">¡Para conocer más, mirá el video del lanzamiento!</h2> \n\t<img src="images/misc/social/youtube.png" alt="Livestream de lanzamiento de politicos en twitter" class="w-auto h-10 ml-10"/>',D=s(),_=l("div"),_.innerHTML='<div class="max-w-lg flex flex-col gap-10 md:gap-12 justify-center"><div class="flex -ml-8 md:-ml-16"><img class="w-auto h-12 lg:h-16" src="images/emoji/hand.png" alt=":hand:"/> \n\t\t\t<h2 class="max-w-md flex text-2xl md:text-5xl\n\t\t\ttext-pet-blue font-free font-bold">Te invitamos a sumergirte en el mundo del análisis de redes.</h2></div> \n\t\t<h2 class="text-2xl md:text-5xl text-white font-free font-bold">¿Qué dicen lxs políticxs en Twitter?\n\t\t\t<br/><br/>\n\t\t\t¿Qué hacen?</h2> \n\t\t<div class="flex justify-center xl:justify-start"><button class="h-20 md:h-14 p-2 rounded-xl border-2\n\t\t\tborder-pet-blue bg-pet-blue text-pet-blue uppercase"><a href="https://oderedes.shinyapps.io/politicosentwitter/" target="_blank" class="px-2 text-pet-gray font-free font-bold uppercase">Acceder al repositorio</a></button></div></div> \n\t<img src="images/gif/circle.gif" alt="Fuciones del repositorio" class="w-auto h-auto max-h-96"/>',A=s(),Q=l("div"),Q.innerHTML='<div class="flex flex-col xl:flex-row text-xl lg:text-2xl\n\tfont-free font-bold"><p>¿Trabajás con datos?</p> \n\t\t<p>¿Te gusta la investigación aplicada?</p></div> \n\t<div class="flex justify-between"><h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl\n\t\txl:text-6xl text-pet-blue font-bowlby font-bold uppercase leading-10">¡MUCHAS GRACIAS POR PARTICIPAR!</h1> \n\t\t<img src="images/emoji/write.png" alt=":write:" class="w-auto h-12 max-h-24 lg:h-24"/></div> \n\t<div class="flex flex-col gap-8"><p class="text-xl md:text-2xl font-free"><span class="text-pet-blue font-bold uppercase">convocatoria <u>#digamostodo</u> cerrada.\n\t\t\t</span><br/>\n\t\t\tMuchas gracias a todas las personas y grupos que participaron. Luego de dos instancias de evaluación, tenemos a la propuesta ganadora!</p> \n\t\t<p class="text-xl md:text-2xl font-free"><u>El equipo de Franco y Lucas Bellomo desarrollará su propuesta &quot;Amplificando la desinformación&quot; en el plazo de los próximos meses.</u></p> \n\t\t<p class="text-xl md:text-2xl font-free font-bold">Para más información sobre la Convocatoria ingresá a nuestras bases y condiciones.</p></div> \n\t<div class="flex flex-col sm:flex-row gap-8 items-center"><button class="w-72 sm:w-auto h-16 lg:h-14 p-2 rounded-3xl border-2\n\t\tborder-pet-blue text-pet-blue uppercase"><a href="/bases/" target="_blank" class="px-4 flex gap-2 items-center justify-center\n\t\t\tfont-bold"><img class="w-auto h-8" src="images/emoji/tos.png" alt=":tos:"/>\n\t\t\t\tBases y condiciones</a></button></div>',S=s(),E=l("div"),E.innerHTML='<div class="flex justify-between items-center"><h1 class="leading-tight text-2xl md:text-4xl lg:text-5xl xl:text-6xl\n\t\ttext-white font-bowlby font-bold uppercase">¿Cómo funciona?</h1> \n\t\t<img class="w-auto h-12 max-h-24 lg:h-24" src="images/emoji/how.png" alt=":how:"/></div> \n\t<div class="h-full flex gap-8 flex-col md:flex-row justify-between\n\titems-center flex-wrap-reverse 2xl:flex-wrap"><div class="flex flex-col gap-4 xl:gap-8 2xl:gap-16 text-white\n\t\tfont-free text-lg md:text-xl 2xl:text-2xl"><div class="flex gap-3 items-center"><img src="images/misc/uno.png" alt="Primer paso" class="w-auto max-h-16 h-10 md:h-16"/> \n\t\t\t\t<p>Seleccioná la categoría que quieras analizar</p></div> \n\t\t\t<div class="flex flex-col"><div class="flex gap-3 items-center"><img src="images/misc/dos.png" alt="Segundo paso" class="w-auto max-h-16 h-10 md:h-16"/> \n\t\t\t\t\t<p>Elegí el usuario/a.</p></div> \n\t\t\t\t<p class="pl-20">También podés seleccionar para <br/>\n\t\t\t\t\tdescargar una categoría completa</p></div> \n\t\t\t<div class="flex gap-3 items-center"><img src="images/misc/tres.png" alt="Tercero paso" class="w-auto max-h-16 h-10 md:h-16"/> \n\t\t\t\t<p>Descargá la data en formato CSV o XLSX</p></div></div> \n\t\t<img src="images/gif/how.gif" alt="¿Cómo funciona?" class="w-auto max-h-96 h-auto 2xl:h-96 m-auto md:m-0"/></div>',O=s(),z=l("div"),z.innerHTML='<div class="flex justify-between items-center"><h1 class="leading-tight text-2xl md:text-4xl lg:text-5xl xl:text-6xl\n\ttext-pet-blue\tfont-bowlby font-bold uppercase">¿Quiénes somos?</h1> \n\t\t<img src="images/emoji/aha.png" alt=":how:" class="w-auto h-12 max-h-24 lg:h-24"/></div> \n\t<div class="flex flex-col xl:flex-row gap-16 justify-around text-white"><div class="text-lg md:text-xl"><div class="h-36 pt-5"><img src="images/logo/der.png" alt="Democracia en Red" class="w-64 h-auto"/></div> \n\t\t\t<p class="max-w-md">Democracia en Red diseña e implementa innovaciones que transparentan,\n\t\t\t\tfacilitan y fortalecen la participación de la ciudadanía en la toma\n\t\t\t\tde decisiones.</p> \n\t\t\t<br/> \n\t\t\t<p class="max-w-md">En ese camino, crearion la tecnología DemocracyOS: un espacio online\n\t\t\t\tverstátil diseñado para que el derecho a participar sea puesto en\n\t\t\t\tpráctica masivamente, en distintas escalas de gobierno.</p> \n\t\t\t<br/> \n\t\t\t<p class="max-w-md">Democracia en Red desarrolla tecnología al servicio de la ciudadanía\n\t\t\t\tpara acercar las políticas públicas a la factibilidad y hacer posible\n\t\t\t\tla cooperación entre distintos segmentos sociales, estimulando el\n\t\t\t\tpensamiento colectivo.</p> \n\t\t\t<div class="pt-6 flex gap-8"><a href="https://www.facebook.com/democraciaenred" target="_blank"><img src="images/misc/social/facebook.png" alt="Facebook de Democracia en Red" class="w-auto h-10"/></a> \n\t\t\t\t<a href="https://twitter.com/fundacionder" target="_blank"><img class="w-auto h-10" src="images/misc/social/twitter.png" alt="Twitter de Democracia en Red"/></a> \n\t\t\t\t<a href="https://www.instagram.com/democraciaenred/" target="_blank"><img class="w-auto h-10" src="images/misc/social/instagram.png" alt="Instagram de Democracia en Red"/></a></div></div> \n\t\t<div class="text-lg md:text-xl"><div class="h-36"><img src="images/logo/odr.png" alt="Observatorio de redes" class="w-64 h-auto"/></div> \n\t\t\t<p class="max-w-md">El Observatorio de Redes es una iniciativa multidisciplinaria\n\t\t\t\tde investigación aplicada, con el fin de experimentar y desarrollar\n\t\t\t\tmetodologías innovadoras para la comprensión y el estudio de los\n\t\t\t\tfenómenos públicos a través del análisis de redes.</p> \n\t\t\t<div class="pt-6 flex gap-8"><a href="https://twitter.com/O_de_R/" target="_blank"><img src="images/misc/social/twitter.png" alt="Twitter del Observatorio de redes" class="w-auto h-12"/></a></div></div></div>',I=s(),F=l("div"),F.innerHTML='<h3 class="w-56 text-xl text-pet-gray font-bowlby font-bold uppercase">Nos apoyan:</h3> \n\t<div class="w-full flex flex-col md:flex-row gap-12 items-center\n\tjustify-center lg:justify-start"><img src="images/logo/uba.png" alt="Universidad Buenos Aires" class="w-48 xl:w-auto h-auto xl:h-16"/> \n\t\t<img src="images/logo/ndi.png" alt="Instituto Nacional Demócrata" class="w-48 xl:w-auto h-auto xl:h-16"/></div>',B=s(),V=l("div"),V.innerHTML='<div class="flex justify-between"><h1 class="leading-tight text-2xl md:text-4xl lg:text-5xl xl:text-6xl\n\t\ttext-pet-blue font-bowlby font-bold uppercase">¿Por qué<br/> nos interesa?</h1> \n\t\t<img src="images/emoji/nerd.png" alt=":nerd:" class="w-auto h-12 max-h-24 lg:h-24"/></div> \n\t<div class="text-lg md:text-xl text-white"><p class="max-w-4xl">La política es compleja. Es un cúmulo de actores, interacciones, procesos,\n\t\t\tsinegias, causas y consecuencias que producen distintos resultados y\n\t\t\tgeneran acciones y reacciones. El análisis de redes ayuda a simplificar\n\t\t\tesa complejidad: identifica los actores, los convierte en elementos\n\t\t\ty establece relaciones entre ellos.</p> \n\t\t<br/> \n\t\t<p class="max-w-4xl">Queremos observar las relaciones entre los actores políticos en distintos\n\t\t\tambientes de interacción institucional (el congreso; una elección;\n\t\t\tdentro de una coalición) y mediatica (Facebook, Twitte, Youtube)\n\t\t\tpara evaluar cómo actúan: qué hacen, qué dicen, con quiénes se vinculan,\n\t\t\ta quíenes se acercan, con quiénes se enfrentan, cómo votan y cómo reaccionan</p></div>',N=s(),U=l("div"),U.innerHTML='<img src="images/logo/pet.png" alt="Logo de Políticos en Twitter" class="m-auto w-auto h-24 2xl:h-36 xl:h-28"/> \n\t<div class="w-full p-8 lg:pl-12 flex flex-col lg:flex-row gap-16 sm:gap-20\n\tmd:gap-24\tcontent-center lg:content-start lg:justify-around flex-wrap\n\tlg:flex-nowrap text-base 2xl:text-xl xl:text-lg md:text-base font-bowlby\n\ttext-pet-black uppercase"><div class="flex flex-col gap-4 self-start"><li class="svelte-jd5qb1"><a href="#que" class="svelte-jd5qb1">¿Qué es?</a></li> \n\t\t\t<li class="svelte-jd5qb1"><a href="#como" class="svelte-jd5qb1">¿Cómo funciona?</a></li> \n\t\t\t<li class="svelte-jd5qb1"><a href="#quienes" class="svelte-jd5qb1">¿Quiénes somos?</a></li></div> \n\t\t<div class="flex flex-col gap-4 self-start"><li class="svelte-jd5qb1"><a href="#convocatoria" class="text-pet-blue svelte-jd5qb1">Convocatoria</a></li> \n\t\t\t<li class="svelte-jd5qb1"><a href="mailto:hola@politicosentwitter.com" class="svelte-jd5qb1">Contacto</a></li></div> \n\t\t<li class="svelte-jd5qb1"><button class="p-2 rounded-3xl border-2 border-pet-blue bg-pet-blue\n\t\t\ttext-white uppercase svelte-jd5qb1"><a href="https://oderedes.shinyapps.io/politicosentwitter/" target="_blank">Repositorio</a></button></li></div>',n(m,"class","svelte-jd5qb1"),n(u,"class","svelte-jd5qb1"),n(b,"class","svelte-jd5qb1"),n(v,"class","svelte-jd5qb1"),n(y,"class","svelte-jd5qb1"),n(q,"class","svelte-jd5qb1"),n(k,"class","lg:ml-auto svelte-jd5qb1"),n(p,"class","header w-full p-8 lg:pl-12 flex gap-12 xl:gap-24 justify-center\r\n\t\tlg:justify-around flex-wrap lg:flex-nowrap text-base 2xl:text-xl lg:text-lg\r\n\t\tfont-bowlby text-pet-black uppercase svelte-jd5qb1"),n(M,"class","h-full flex justify-center items-center"),n(e,"class","w-full h-screen flex flex-col lg:flex-col\r\nbg-pet-gray texture-gray"),n(R,"id","que"),n(R,"class","w-full h-screen 2xl:h-auto flex justify-center align-center\r\npy-24 xl:py-48 2xl:py-80 2xl:pt-96 px-12 md:px-24 xl:px-36 bg-pet-blue texture-blue"),n(P,"href","https://www.youtube.com/watch?v=z258VDvsQD4&t=6s&ab_channel=DemocraciaEnRed"),n(P,"target","_blank"),n(P,"class","w-full bg-pet-gray p-5 flex items-center flex justify-center align-center hover:underline pr-10 pl-10"),n(_,"class","w-full flex flex-col xl:flex-row gap-12 py-12 lg:py-24 px-12\r\nmd:px-24 lg:px-48 justify-between items-center bg-pet-black texture-black"),n(Q,"id","convocatoria"),n(Q,"class","w-full flex flex-col gap-12 py-12\r\nmd:py-24 px-10 md:px-24 lg:px-48 justify-center bg-pet-gray texture-gray"),n(E,"id","como"),n(E,"class","w-full sm:h-auto flex flex-col gap-8 md:gap-12\r\npy-12 lg:py-24 px-6 md:px-24 lg:px-48 items-center sm:items-stretch\r\nbg-pet-blue texture-blue"),n(z,"id","quienes"),n(z,"class","w-full flex flex-col gap-12 py-12\r\nlg:py-24 px-24 lg:px-48 bg-pet-black texture-black"),n(F,"class","w-full py-12 2xl:py-24 px-36 lg:px-48 flex flex-col lg:flex-row\r\ngap-6 items-center bg-pet-blue texture-blue"),n(V,"class","w-full flex flex-col gap-12 py-12 lg:py-24 px-24 lg:px-48\r\nbg-pet-black texture-black"),n(U,"class","w-full flex flex-col md:flex-row gap-12 py-16 px-24 xl:px-48\r\nbg-pet-gray texture-gray")},m(l,s){i(l,e,s),o(e,a),o(a,p),o(p,u),o(u,m),o(p,f),o(p,b),o(p,h),o(p,v),o(p,w),o(p,y),o(p,j),o(p,q),o(p,T),o(p,k),o(e,L),o(e,M),i(l,H,s),i(l,R,s),t[1](R),i(l,C,s),i(l,P,s),i(l,D,s),i(l,_,s),i(l,A,s),i(l,Q,s),i(l,S,s),i(l,E,s),i(l,O,s),i(l,z,s),i(l,I,s),i(l,F,s),i(l,B,s),i(l,V,s),i(l,N,s),i(l,U,s),X||(G=c(m,"click",(function(){x(g(t[0]))&&g(t[0]).apply(this,arguments)})),X=!0)},p(e,[a]){t=e},i:r,o:r,d(a){a&&d(e),a&&d(H),a&&d(R),t[1](null),a&&d(C),a&&d(P),a&&d(D),a&&d(_),a&&d(A),a&&d(Q),a&&d(S),a&&d(E),a&&d(O),a&&d(z),a&&d(I),a&&d(F),a&&d(B),a&&d(V),a&&d(N),a&&d(U),X=!1,G()}}}function g(t){t.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}function f(t,e,a){let l;return p.title="Políticos en Twitter",p.description="Observatorio de redes sociales",[l,function(t){u[t?"unshift":"push"]((()=>{l=t,a(0,l)}))}]}export default class extends t{constructor(t){super(),e(this,t,f,m,a,{})}}
//# sourceMappingURL=index-0bea7887.js.map