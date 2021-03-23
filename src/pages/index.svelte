<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'Políticos en Twitter'
    metatags.description = 'Observatorio de redes sociales'
</script>

<div class="w-full h-screen flex flex-col-reverse lg:flex-col bg-pet-gray texture-gray">
	<nav>
		<ul class="header w-full p-8 lg:pl-12 flex gap-4 sm:gap-24 lg:justify-around flex-wrap lg:flex-nowrap
			text-base 2xl:text-xl lg:text-sm font-bowlby text-pet-black uppercase">
			<li>
				<a href="#que">¿Qué es?</a>
			</li>
			<li>
				<a href="#como">¿Cómo funciona?</a>
			</li>
			<li>
				<a href="#convocatoria">Convocatoria</a>
			</li>
			<li>
				<a href="#quienes">Quiénes somos</a>
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
		class="m-auto sm:w-4/12">
	</div>
</div>

<div id="que" class="w-full py-48 px-48 bg-pet-blue texture-blue">
	<div class="flex flex-col justify-center gap-12">
		<h1 class="w-full text-6xl text-bold text-white font-free font-bold">
			<span class="text-pet-black">Políticxs en Twitter</span> es un repositorio
			con todas las interraciones de 400 personas con cargos políticos en la Argentina.
		</h1>
		<h2 class="text-3xl text-white font-free">
			Ponemos a disposición de la comunidad este ATLAS con datos libres
			<br> y reutilizables, para facilitar la producción de conocimiento.
			<br><br>
			Porque es aquel conocimiento el que nos permitirá observar e interpelar<br>
			a la clase política a partir de evidencia que convierta sus dichos en hechos.
		</h2>
	</div>
</div>

<div class="w-full flex py-24 px-48 items-center bg-pet-black texture-black">
	<div class="max-w-3xl flex flex-col gap-12 justify-center">
		<h2 class="text-5xl text-pet-blue font-free font-bold flex -ml-16">
			<img class="w-auto h-16" src="images/emoji/hand.png" alt=":hand:">
			Te invitamos a sumergirte en el mundo del análisis de redes.
		</h2>
		<h2 class="text-5xl text-white font-free font-bold">
			¿Qué dicen lxs<br> políticxs en Twitter?
			<br><br>
			¿Qué hacen?
		</h2>
		<div>
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

<div id="convocatoria" class="w-full flex flex-col gap-12 py-24 px-48 bg-pet-gray texture-gray">
	<div class="flex justify-between">
		<h1 class="leading-tight text-6xl text-pet-blue font-bowlby font-bold uppercase">
			¡Queremos tu<br> colaboración!
		</h1>
		<img class="w-auto h-24" src="images/emoji/write.png" alt=":write:">
	</div>
	<div class="flex flex-col gap-8">
		<p class="text-2xl font-free">
			Buscamos convertir estos datos en información que podamos divulgar<br>
			para construir una comunidad de conocimiento colectivo.
		</p>
		<p class="text-2xl font-free">
			Sabemos que algunos políticos desinforman, pero ¿cómo se da ese fenómeno en Twitter?
		</p>
		<p class="text-2xl font-free font-bold">Participá AHORA de la convocatoria abierta sobre desinformación.</p>
	</div>
	<div class="flex justify-between">
		<div class="h-14 flex gap-x-8">
			<button class="bg-pet-blue">
				<a href="https://preguntarparaacordar.typeform.com/to/gVqxiRR6" target="_blank"
				class="px-4 flex gap-2 items-center text-pet-gray font-free font-bold uppercase">
					<img class="w-auto h-8" src="images/emoji/here.png" alt=":here:">
					¡Quiero participar!
				</a>
			</button>
			<button>
				<a href="bases" class="px-4 flex gap-2 items-center font-bold">
					<img class="w-auto h-8" src="images/emoji/tos.png" alt=":tos:">
					Bases y condiciones
				</a>
			</button>
		</div>
		<img class="w-auto h-16" src="images/misc/collaborate.png" alt="Colaborar">
	</div>
</div>

<div id="como" class="w-full flex flex-col gap-12 py-24 px-48 bg-pet-blue texture-blue">
	<div class="flex justify-between">
		<h1 class="leading-tight text-6xl text-white font-bowlby font-bold uppercase">¿Cómo funciona?</h1>
		<img class="w-auto h-24" src="images/emoji/how.png" alt=":how:">
	</div>
	<div>

	</div>
</div>

<div id="quienes" class="w-full flex flex-col gap-12 py-24 px-48 bg-pet-black texture-black">
	<div class="flex justify-between">
		<h1 class="leading-tight text-6xl text-pet-blue font-bowlby font-bold uppercase">¿Quiénes somos?</h1>
		<img class="w-auto h-24" src="images/emoji/aha.png" alt=":how:">
	</div>
	<div class="flex flex-col 2xl:flex-row justify-around text-white">
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
		</div>
	</div>
</div>

<div class="w-full py-24 px-56 flex gap-24 items-center bg-pet-blue texture-blue">
	<h3 class="w-48 text-xl text-pet-gray font-bowlby font-bold uppercase">
		Nos apoyan:
	</h3>
	<div class="w-full flex gap-24">
		<img class="w-auto h-24" src="images/logo/uba.png" alt="Universidad Buenos Aires">
		<img class="w-auto h-24" src="images/logo/ndi.png" alt="Instituto Nacional Demócrata">
	</div>
</div>

<div class="w-full flex flex-col gap-12 py-24 px-48 bg-pet-black texture-black">
	<div class="flex justify-between">
		<h1 class="leading-tight text-6xl text-pet-blue font-bowlby font-bold uppercase">¿Por qué nos interesa?</h1>
		<img class="w-auto h-24" src="images/emoji/nerd.png" alt=":nerd:">
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

<div class="w-full flex gap-12 py-16 px-24 bg-pet-gray texture-gray">
	<img src="images/logo/pet.png" alt="Logo de Políticos en Twitter"
	class="m-8 sm:w-2/12">
	<div class="w-full p-8 lg:pl-12 flex sm:gap-24
		lg:justify-around flex-wrap lg:flex-nowrap text-base
		2xl:text-xl lg:text-sm font-bowlby text-pet-black
		uppercase">
		<div class="flex flex-col gap-4 self-start">
			<li>
				<a href="#que">¿Qué es?</a>
			</li>
			<li>
				<a href="#como">¿Cómo funciona?</a>
			</li>
			<li>
				<a href="#quienes">Quiénes somos</a>
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