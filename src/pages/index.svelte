<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'Políticos en Twitter'
    metatags.description = 'Observatorio de redes sociales'
</script>

<div class="w-full h-screen flex flex-col-reverse lg:flex-col bg-pet-gray texture-gray">
	<nav>
		<ul class="header w-full p-8 lg:pl-12 flex gap-12 xl:gap-24 justify-center lg:justify-around flex-wrap lg:flex-nowrap
			text-base 2xl:text-xl lg:text-lg font-bowlby text-pet-black uppercase">
			<li>
				<a href="#que">¿Qué es?</a>
			</li>
			<li>
				<a href="#como">¿Cómo funciona?</a>
			</li>
			<li>
				<a href="#convocatoria" class="text-pet-blue">Convocatoria</a>
			</li>
			<li>
				<a href="#quienes">¿Quiénes somos?</a>
			</li>
			<li>
				<a href="#contacto">Contacto</a>
			</li>
			<li class="lg:ml-auto">
				<button>
					<a href="https://oderedes.shinyapps.io/politicosentwitter/" target="_blank">Repositorio</a>
				</button>
			</li>
		</ul>
	</nav>
	<div class="h-full flex">
		<img src="images/logo/pet.png" alt="Logo de Políticos en Twitter"
		class="m-auto w-7/12 md:w-6/12 lg:w-4/12">
	</div>
</div>

<div id="que" class="w-full h-screen flex align-center py-24 xl:py-48 px-24 xl:px-48 bg-pet-blue texture-blue">
	<div class="flex flex-col justify-center gap-12">
		<h1 class="w-full text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-bold text-white font-free font-bold">
			<span class="text-pet-black">Políticxs en Twitter</span> es un<br>
			repositorio con interacciones<br> de más de 500 usuarios relacionados<br>
			con la política en Argentina.
		</h1>
		<h2 class="text-xl sm:text-3xl text-white font-free">
			Ponemos a disposición de la comunidad este ATLAS con datos libres
			<br> y reutilizables, para facilitar la producción de conocimiento.
			<br><br>
			Porque es aquel conocimiento el que nos permitirá observar e interpelar<br>
			a la clase política a partir de evidencia que convierta sus dichos en hechos.
		</h2>
	</div>
</div>

<div class="w-full flex flex-col xl:flex-row gap-12 py-12 lg:py-24 px-24 lg:px-48 justify-between items-center bg-pet-black texture-black">
	<div class="max-w-3xl flex flex-col gap-12 justify-center">
		<h2 class="flex text-2xl md:text-5xl text-pet-blue font-free font-bold">
			<img class="w-auto h-12 lg:h-16" src="images/emoji/hand.png" alt=":hand:">
			Te invitamos a sumergirte en el mundo del análisis de redes.
		</h2>
		<h2 class="text-2xl md:text-5xl text-white font-free font-bold">
			¿Qué dicen lxs políticxs en Twitter?
			<br><br>
			¿Qué hacen?
		</h2>
		<div class="flex justify-center xl:justify-start">
			<button class="h-14 bg-pet-blue">
				<a href="https://oderedes.shinyapps.io/politicosentwitter/" target="_blank"
				class="px-2 text-pet-gray font-free font-bold uppercase">
					Acceder al repositorio
				</a>
			</button>
		</div>
	</div>
	<img class="w-auto h-96" src="images/gif/circle.gif" alt="Fuciones del repositorio">
</div>

<div id="convocatoria" class="w-full h-screen flex flex-col gap-12 py-24 px-24 lg:px-48 justify-center bg-pet-gray texture-gray">
	<div class="flex flex-col xl:flex-row text-2xl font-free font-bold">
		<p>
			¿Trabajás con datos?
		</p>
		<p>
			¿Te gusta la investigación aplicada?
		</p>
	</div>
	<div class="flex justify-between">
		<h1 class="leading-tight text-4xl lg:text-5xl xl:text-6xl text-pet-blue font-bowlby font-bold uppercase">
			¡Queremos tu<br> colaboración!
		</h1>
		<img class="w-auto h-20 lg:h-24" src="images/emoji/write.png" alt=":write:">
	</div>
	<div class="flex flex-col gap-8">
		<p class="text-2xl font-free">
			Está abierta la
			<span class="text-pet-blue font-bold uppercase">
				convocatoria <u>#digamostodo</u>.
			</span><br>
			Nos interesa medir la relación entre nuestrxs políticos y la desinformación.
		</p>
		<p class="text-2xl font-free">
			<u>Presentá tu propuesta para trabajar con el repositorio de Políticxs en Twitter</u>
		</p>
		<p class="text-2xl font-free font-bold">
			La propuesta más original e innovadora tendrá un PREMIO DE 140 mil<br> pesos para financiar tu proyecto de investigación.
		</p>
	</div>
	<div class="flex flex-column lg:flex-row gap-x-8">
		<button class="h-16 lg:h-14 bg-pet-blue">
			<a href="https://preguntarparaacordar.typeform.com/to/gVqxiRR6" target="_blank"
			class="px-4 flex gap-2 items-center text-pet-gray font-free font-bold uppercase">
				<img class="w-auto h-8" src="images/emoji/here.png" alt=":here:">
				¡Quiero participar!
			</a>
		</button>
		<button class="h-16 lg:h-14">
			<a href="bases" class="px-4 flex gap-2 items-center font-bold">
				<img class="w-auto h-8" src="images/emoji/tos.png" alt=":tos:">
				Bases y condiciones
			</a>
		</button>
	</div>
</div>

<div id="como" class="w-full flex flex-col gap-12 py-12 lg:py-24 px-24 lg:px-48 bg-pet-blue texture-blue">
	<div class="flex justify-between items-center">
		<h1 class="leading-tight text-4xl lg:text-5xl xl:text-6xl text-white font-bowlby font-bold uppercase">¿Cómo funciona?</h1>
		<img class="w-auto h-20 lg:h-24" src="images/emoji/how.png" alt=":how:">
	</div>
	<div class="flex gap-8 flex-col md:flex-row justify-between items-center flex-wrap-reverse 2xl:flex-wrap">
		<div class="flex flex-col gap-4 xl:gap-8 2xl:gap-16 text-white font-free text-xl 2xl:text-2xl">
			<div class="flex gap-3 items-center">
				<img class="w-auto h-16" src="images/misc/uno.png" alt="Primer paso">
				<p>
					Seleccioná la categoría que quieras analizar
				</p>
			</div>
			<div class="flex flex-col">
				<div class="flex gap-3 items-center">
					<img class="w-auto h-16" src="images/misc/dos.png" alt="Segundo paso">
					<p>
						Elegí el usuario/a.
					</p>
				</div>
				<p class="pl-20">
					También podés seleccionar para <br> descargar una categoría completa
				</p>
			</div>
			<div class="flex gap-3 items-center">
				<img class="w-auto h-16" src="images/misc/tres.png" alt="Tercero paso">
				<p>
					Descargá la data en formato CSV o XLSX
				</p>
			</div>
		</div>
		<img class="w-auto h-auto 2xl:h-96 m-auto md:m-0" src="images/gif/how.gif" alt="¿Cómo funciona?">
	</div>
</div>

<div id="quienes" class="w-full flex flex-col gap-12 py-12 lg:py-24 px-24 lg:px-48 bg-pet-black texture-black">
	<div class="flex justify-between items-center">
		<h1 class="leading-tight text-4xl lg:text-5xl xl:text-6xl text-pet-blue font-bowlby font-bold uppercase">¿Quiénes somos?</h1>
		<img class="w-auto h-20 lg:h-24" src="images/emoji/aha.png" alt=":how:">
	</div>
	<div class="flex flex-col xl:flex-row gap-16 justify-around text-white">
		<div>
			<div class="h-36 pt-5">
				<img class="w-64 h-auto" src="images/logo/der.png" alt="Democracia en Red">
			</div>
			<p class="max-w-md text-xl">
				Democracia en Red diseña e implementa innovaciones que transparentan, facilitan y fortaleccen
				la participación de la ciudadanía en la toma de decisiones.
			</p>
			<br>
			<p class="max-w-md text-xl">
				En ese camino, crearion la tecnología DemocracyOS: un espacio online 
				verstátil diseñado para que el derecho a participar sea puesto en
				práctica masivamente, en distintas escalas de gobierno.
			</p>
			<br>
			<p class="max-w-md text-xl">
				Democracia en Red desarrolla tecnología al servicio de la ciudadanía
				para acercar las políticas públicas a la factibilidad y hacer posible
				la cooperación entre distintos segmentos sociales, estimulando el
				pensamiento colectivo.
			</p>
			<div class="pt-6 flex gap-8">
				<a href="https://www.facebook.com/democraciaenred" target="_blank">
					<img class="w-auto h-10" src="images/misc/social/facebook.png" alt="Facebook de Democracia en Red">
				</a>
				<a href="https://twitter.com/fundacionder" target="_blank">
					<img class="w-auto h-10" src="images/misc/social/twitter.png" alt="Twitter de Democracia en Red">
				</a>
				<a href="https://www.instagram.com/democraciaenred/" target="_blank">
					<img class="w-auto h-10" src="images/misc/social/instagram.png" alt="Instagram de Democracia en Red">
				</a>
			</div>
		</div>
		<div>
			<div class="h-36">
				<img class="w-64 h-auto" src="images/logo/odr.png" alt="Observatorio de redes">
			</div>
			<p class="max-w-md text-xl">
				El Observatorio de Redes es una iniciativa multidisciplinaria de investigación aplicada,
				con el fin de experimentar y desarrollar metodologías innovadoras para la comprensión
				y el estudio de los fenómenos públicos a través del análisis de redes.
			</p>
			<div class="pt-6 flex gap-8">
				<img class="w-auto h-12" src="images/misc/social/twitter.png" alt="Twitter del Observatorio de redes">
			</div>
		</div>
	</div>
</div>

<div class="w-full py-12 2xl:py-24 px-36 2xl:px-56 flex flex-col lg:flex-row gap-12 2xl:gap-24 items-center bg-pet-blue texture-blue">
	<h3 class="w-48 text-xl text-pet-gray font-bowlby font-bold uppercase">
		Nos apoyan:
	</h3>
	<div class="w-full flex flex-col md:flex-row gap-24 items-center justify-center">
		<img class="w-48 xl:w-auto h-auto 3xl:h-24 xl:h-20" src="images/logo/uba.png" alt="Universidad Buenos Aires">
		<img class="w-48 xl:w-auto h-auto 3xl:h-24 xl:h-20" src="images/logo/ndi.png" alt="Instituto Nacional Demócrata">
	</div>
</div>

<div class="w-full flex flex-col gap-12 py-12 lg:py-24 px-24 lg:px-48 bg-pet-black texture-black">
	<div class="flex justify-between">
		<h1 class="leading-tight text-4xl lg:text-5xl xl:text-6xl text-pet-blue font-bowlby font-bold uppercase">¿Por qué<br> nos interesa?</h1>
		<img class="w-auto h-20 lg:h-24" src="images/emoji/nerd.png" alt=":nerd:">
	</div>
	<div>
		<p class="max-w-4xl text-xl text-white">
			La política es compleja. Es un cúmulo de actores, interacciones, procesos, sinegias, causas
			y consecuencias que producen distintos resultados y generan acciones y reacciones. El análisis
			de redes ayuda a simplificar esa complejidad: identifica los actores, los convierte en elementos
			y establece relaciones entre ellos.
		</p>
		<br>
		<p class="max-w-4xl text-xl text-white">
			Queremos observar las relaciones entre los actores políticos en distintos ambientes de interacción institucional
			(el congreso; una elección; dentro de una coalición) y mediática (Facebook, Twitte, Youtube) paa evaluar cómo actúan:
			qué hacen, qué dicen, con quiénes se vinculan, a quíenes se acercan, con quiénes se enfrentan, 
			cómo votan y cómo reaccionan
		</p>
	</div>
</div>

<div class="w-full flex flex-col md:flex-row gap-12 py-16 px-24 xl:px-48 bg-pet-gray texture-gray">
	<img src="images/logo/pet.png" alt="Logo de Políticos en Twitter"
	class="m-auto w-auto h-24 2xl:h-36 xl:h-28">
	<div class="w-full p-8 lg:pl-12 flex flex-col lg:flex-row gap-16 sm:gap-20 md:gap-24
		content-center lg:content-start lg:justify-around flex-wrap lg:flex-nowrap text-base
		2xl:text-xl xl:text-lg md:text-base font-bowlby text-pet-black
		uppercase">
		<div class="flex flex-col gap-4 self-start">
			<li>
				<a href="#que">¿Qué es?</a>
			</li>
			<li>
				<a href="#como">¿Cómo funciona?</a>
			</li>
			<li>
				<a href="#quienes">¿Quiénes somos?</a>
			</li>
		</div>
		<div class="flex flex-col gap-4 self-start">
			<li>
				<a href="#convocatoria" class="text-pet-blue">Convocatoria</a>
			</li>
			<li>
				<a href="#contacto">Contacto</a>
			</li>
		</div>
		<li>
			<button>
				<a href="https://oderedes.shinyapps.io/politicosentwitter/" target="_blank">Repositorio</a>
			</button>
		</li>
	</div>
</div>

<style>
	button {
		@apply p-2 rounded-3xl border-2 border-pet-blue text-pet-blue uppercase;
	}
	
	li {
		list-style: none;
	}
	
	.header li {
		@apply self-center;
	}

	li > a:hover {
		@apply text-pet-blue border-pet-blue border-b-4;
	}

	li > button {
		@apply border-4;
	}

	li > button:hover {
		@apply bg-pet-blue text-pet-gray;
	}
</style>