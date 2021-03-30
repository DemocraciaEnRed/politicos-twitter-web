<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'Políticos en Twitter'
    metatags.description = 'Observatorio de redes sociales'
</script>

<div class="w-full h-full flex flex-col lg:flex-col
bg-pet-gray texture-gray">
	<nav>
		<ul class="header w-full p-8 lg:pl-12 flex gap-12 xl:gap-24 justify-center
		lg:justify-around flex-wrap lg:flex-nowrap text-base 2xl:text-xl lg:text-lg
		font-bowlby text-pet-black uppercase">
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
				<a href="mailto:hola@politicosentwitter.com">Contacto</a>
			</li>
			<li class="lg:ml-auto">
				<button class="p-2 rounded-3xl border-2 border-pet-blue bg-pet-blue
				text-white uppercase">
					<a href="https://oderedes.shinyapps.io/politicosentwitter/"
					target="_blank">
						Repositorio
					</a>
				</button>
			</li>
		</ul>
  </nav>
  <div class="h-full flex flex-col lg:flex-row justify-between">
    <div class="video-wrapper lg:h-3/6">
      <iframe width="853" height="480" src="https://www.youtube.com/embed/z258VDvsQD4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="chat-wrapper">
      <iframe src="https://www.youtube.com/live_chat?v=z258VDvsQD4&embed_domain=politicosentwitter.com" width="400" height="600"></iframe>
    </div>
  </div>
  <!-- 
            <div class="h-full flex justify-center items-center">
			<img src="images/gif/pet.gif" alt="GIF de Políticos en Twitter">
      <img src="images/logo/pet.png" alt="Logo de Políticos en Twitter"
      class="m-auto w-7/12 md:w-6/12 lg:w-4/12">
    </div>
  -->
</div>

<div id="que" class="w-full h-screen 2xl:h-auto flex justify-center align-center
py-24 xl:py-48 2xl:py-80 2xl:pt-96 px-12 md:px-24 xl:px-36 bg-pet-blue texture-blue">
	<div class="flex flex-col justify-center gap-12">
		<h1 class="title max-w-5xl lg:max-w-full w-full text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
		text-bold text-white font-free font-bold">
			<span class="text-pet-black">Políticxs en Twitter</span> es un
			repositorio con interacciones de más de 500 usuarios relacionados
			con la política en Argentina.
		</h1>
		<h2 class="text-xl sm:text-3xl text-white font-free">
			Ponemos a disposición de la comunidad este ATLAS con datos libres
			y reutilizables, para facilitar la producción de conocimiento.
			<br><br>
			Porque es ese conocimiento el que nos permitirá observar e interpelar
			a la clase política a partir de evidencia, una que convierta
			sus dichos en hechos.
		</h2>
	</div>
</div>

<div class="w-full flex flex-col xl:flex-row gap-12 py-12 lg:py-24 px-12
md:px-24 lg:px-48 justify-between items-center bg-pet-black texture-black">
<div class="max-w-lg flex flex-col gap-10 md:gap-12 justify-center">
		<div class="flex -ml-8 md:-ml-16">
			<img class="w-auto h-12 lg:h-16"
			src="images/emoji/hand.png" alt=":hand:">
			<h2 class="max-w-md flex text-2xl md:text-5xl
			text-pet-blue font-free font-bold">
				Te invitamos a sumergirte en el mundo del análisis de redes.
			</h2>
		</div>
		<h2 class="text-2xl md:text-5xl text-white font-free font-bold">
			¿Qué dicen lxs políticxs en Twitter?
			<br><br>
			¿Qué hacen?
		</h2>
		<div class="flex justify-center xl:justify-start">
			<button class="h-20 md:h-14 p-2 rounded-xl border-2
			border-pet-blue bg-pet-blue text-pet-blue uppercase">
				<a href="https://oderedes.shinyapps.io/politicosentwitter/"
				target="_blank"
				class="px-2 text-pet-gray font-free font-bold uppercase">
					Acceder al repositorio
				</a>
			</button>
		</div>
	</div>
	<img src="images/gif/circle.gif" alt="Fuciones del repositorio"
	class="w-auto h-auto max-h-96" >
</div>

<div id="convocatoria" class="w-full flex flex-col gap-12 py-12
md:py-24 px-10 md:px-24 lg:px-48 justify-center bg-pet-gray texture-gray">
	<div class="flex flex-col xl:flex-row text-xl lg:text-2xl
	font-free font-bold">
		<p>
			¿Trabajás con datos?
		</p>
		<p>
			 ¿Te gusta la investigación aplicada?
		</p>
	</div>
	<div class="flex justify-between">
		<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
		xl:text-6xl text-pet-blue font-bowlby font-bold uppercase leading-10">
			¡Queremos tu<br> colaboración!
		</h1>
		<img src="images/emoji/write.png" alt=":write:"
		class="w-auto h-12 max-h-24 lg:h-24">
	</div>
	<div class="flex flex-col gap-8">
		<p class="text-xl md:text-2xl font-free">
			Está abierta la
			<span class="text-pet-blue font-bold uppercase">
				convocatoria <u>#digamostodo</u>.
			</span><br>
			Nos interesa medir la relación
			entre nuestrxs políticos y la desinformación.
		</p>
		<p class="text-xl md:text-2xl font-free">
			<u>
				Presentá tu propuesta para trabajar
				con el repositorio de Políticxs en Twitter
			</u>
		</p>
		<p class="text-xl md:text-2xl font-free font-bold">
			La propuesta más original e innovadora tendrá un PREMIO DE 140 mil<br>
			pesos para financiar tu proyecto de investigación.
		</p>
	</div>
	<div class="flex flex-col sm:flex-row gap-8 items-center">
		<button class="w-72 sm:w-auto h-16 lg:h-14 p-2 rounded-3xl border-2
		uppercase border-pet-blue bg-pet-blue text-pet-blue">
			<a href="https://preguntarparaacordar.typeform.com/to/gVqxiRR6"
			target="_blank" class="px-4 flex gap-2 items-center justify-center
			text-pet-gray font-free font-bold uppercase">
				<img class="w-auto h-8" src="images/emoji/here.png" alt=":here:">
				¡Quiero participar!
			</a>
		</button>
		<button class="w-72 sm:w-auto h-16 lg:h-14 p-2 rounded-3xl border-2
		border-pet-blue text-pet-blue uppercase">
			<a href="bases" class="px-4 flex gap-2 items-center justify-center
			font-bold">
				<img class="w-auto h-8" src="images/emoji/tos.png" alt=":tos:">
				Bases y condiciones
			</a>
		</button>
	</div>
</div>

<div id="como" class="w-full sm:h-auto flex flex-col gap-8 md:gap-12
py-12 lg:py-24 px-6 md:px-24 lg:px-48 items-center sm:items-stretch
bg-pet-blue texture-blue">
	<div class="flex justify-between items-center">
		<h1 class="leading-tight text-2xl md:text-4xl lg:text-5xl xl:text-6xl
		text-white font-bowlby font-bold uppercase">
			¿Cómo funciona?
		</h1>
		<img class="w-auto h-12 max-h-24 lg:h-24" src="images/emoji/how.png"
		alt=":how:">
	</div>
	<div class="h-full flex gap-8 flex-col md:flex-row justify-between
	items-center flex-wrap-reverse 2xl:flex-wrap">
		<div class="flex flex-col gap-4 xl:gap-8 2xl:gap-16 text-white
		font-free text-lg md:text-xl 2xl:text-2xl">
			<div class="flex gap-3 items-center">
				<img src="images/misc/uno.png" alt="Primer paso"
				class="w-auto max-h-16 h-10 md:h-16">
				<p>
					Seleccioná la categoría que quieras analizar
				</p>
			</div>
			<div class="flex flex-col">
				<div class="flex gap-3 items-center">
					<img src="images/misc/dos.png" alt="Segundo paso"
					class="w-auto max-h-16 h-10 md:h-16">
					<p>
						Elegí el usuario/a.
					</p>
				</div>
				<p class="pl-20">
					También podés seleccionar para <br>
					descargar una categoría completa
				</p>
			</div>
			<div class="flex gap-3 items-center">
				<img src="images/misc/tres.png" alt="Tercero paso"
				class="w-auto max-h-16 h-10 md:h-16">
				<p>
					Descargá la data en formato CSV o XLSX
				</p>
			</div>
		</div>
		<img src="images/gif/how.gif" alt="¿Cómo funciona?"
		class="w-auto max-h-96 h-auto 2xl:h-96 m-auto md:m-0">
	</div>
</div>

<div id="quienes" class="w-full flex flex-col gap-12 py-12
lg:py-24 px-24 lg:px-48 bg-pet-black texture-black">
	<div class="flex justify-between items-center">
		<h1 class="leading-tight text-2xl md:text-4xl lg:text-5xl xl:text-6xl
	text-pet-blue	font-bowlby font-bold uppercase">¿Quiénes somos?</h1>
		<img src="images/emoji/aha.png" alt=":how:"
		class="w-auto h-12 max-h-24 lg:h-24" >
	</div>
	<div class="flex flex-col xl:flex-row gap-16 justify-around text-white">
		<div class="text-lg md:text-xl">
			<div class="h-36 pt-5">
				<img src="images/logo/der.png" alt="Democracia en Red"
				class="w-64 h-auto">
			</div>
			<p class="max-w-md">
				Democracia en Red diseña e implementa innovaciones que transparentan,
				facilitan y fortalecen la participación de la ciudadanía en la toma
				de decisiones.
			</p>
			<br>
			<p class="max-w-md">
				En ese camino, crearion la tecnología DemocracyOS: un espacio online
				verstátil diseñado para que el derecho a participar sea puesto en
				práctica masivamente, en distintas escalas de gobierno.
			</p>
			<br>
			<p class="max-w-md">
				Democracia en Red desarrolla tecnología al servicio de la ciudadanía
				para acercar las políticas públicas a la factibilidad y hacer posible
				la cooperación entre distintos segmentos sociales, estimulando el
				pensamiento colectivo.
			</p>
			<div class="pt-6 flex gap-8">
				<a href="https://www.facebook.com/democraciaenred" target="_blank">
					<img src="images/misc/social/facebook.png"
					alt="Facebook de Democracia en Red"
					class="w-auto h-10">
				</a>
				<a href="https://twitter.com/fundacionder" target="_blank">
					<img class="w-auto h-10" src="images/misc/social/twitter.png"
					alt="Twitter de Democracia en Red">
				</a>
				<a href="https://www.instagram.com/democraciaenred/" target="_blank">
					<img class="w-auto h-10" src="images/misc/social/instagram.png"
					alt="Instagram de Democracia en Red">
				</a>
			</div>
		</div>
		<div class="text-lg md:text-xl">
			<div class="h-36">
				<img src="images/logo/odr.png" alt="Observatorio de redes"
				class="w-64 h-auto" >
			</div>
			<p class="max-w-md">
				El Observatorio de Redes es una iniciativa multidisciplinaria
				de investigación aplicada, con el fin de experimentar y desarrollar
				metodologías innovadoras para la comprensión y el estudio de los
				fenómenos públicos a través del análisis de redes.
			</p>
			<div class="pt-6 flex gap-8">
        <a href="https://twitter.com/O_de_R/" target="_blank">
          <img src="images/misc/social/twitter.png"
          alt="Twitter del Observatorio de redes"
          class="w-auto h-12">
        </a>
			</div>
		</div>
	</div>
</div>

<div class="w-full py-12 2xl:py-24 px-36 lg:px-48 flex flex-col lg:flex-row
gap-6 items-center bg-pet-blue texture-blue">
	<h3 class="w-56 text-xl text-pet-gray font-bowlby font-bold uppercase">
		Nos apoyan:
	</h3>
	<div class="w-full flex flex-col md:flex-row gap-12 items-center
	justify-center lg:justify-start">
		<img src="images/logo/uba.png" alt="Universidad Buenos Aires"
		class="w-48 xl:w-auto h-auto xl:h-16" >
		<img src="images/logo/ndi.png" alt="Instituto Nacional Demócrata"
		class="w-48 xl:w-auto h-auto xl:h-16">
	</div>
</div>

<div class="w-full flex flex-col gap-12 py-12 lg:py-24 px-24 lg:px-48
bg-pet-black texture-black">
	<div class="flex justify-between">
		<h1 class="leading-tight text-2xl md:text-4xl lg:text-5xl xl:text-6xl
		text-pet-blue font-bowlby font-bold uppercase">
			¿Por qué<br> nos interesa?
		</h1>
		<img src="images/emoji/nerd.png" alt=":nerd:"
		class="w-auto h-12 max-h-24 lg:h-24">
	</div>
	<div class="text-lg md:text-xl text-white">
		<p class="max-w-4xl">
			La política es compleja. Es un cúmulo de actores, interacciones, procesos,
			sinegias, causas y consecuencias que producen distintos resultados y
			generan acciones y reacciones. El análisis de redes ayuda a simplificar
			esa complejidad: identifica los actores, los convierte en elementos
			y establece relaciones entre ellos.
		</p>
		<br>
		<p class="max-w-4xl">
			Queremos observar las relaciones entre los actores políticos en distintos
			ambientes de interacción institucional (el congreso; una elección;
			dentro de una coalición) y mediatica (Facebook, Twitte, Youtube)
			para evaluar cómo actúan: qué hacen, qué dicen, con quiénes se vinculan,
			a quíenes se acercan, con quiénes se enfrentan, cómo votan y cómo reaccionan
		</p>
	</div>
</div>

<div class="w-full flex flex-col md:flex-row gap-12 py-16 px-24 xl:px-48
bg-pet-gray texture-gray">
	<img src="images/logo/pet.png" alt="Logo de Políticos en Twitter"
	class="m-auto w-auto h-24 2xl:h-36 xl:h-28">
	<div class="w-full p-8 lg:pl-12 flex flex-col lg:flex-row gap-16 sm:gap-20
	md:gap-24	content-center lg:content-start lg:justify-around flex-wrap
	lg:flex-nowrap text-base 2xl:text-xl xl:text-lg md:text-base font-bowlby
	text-pet-black uppercase">
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
				<a href="mailto:hola@politicosentwitter.com">Contacto</a>
			</li>
		</div>
		<li>
			<button class="p-2 rounded-3xl border-2 border-pet-blue bg-pet-blue
			text-white uppercase">
				<a href="https://oderedes.shinyapps.io/politicosentwitter/"
				target="_blank">
					Repositorio
				</a>
			</button>
		</li>
	</div>
</div>

<style>
  .video-wrapper {
    height: 0;
    width: 100%;
    overflow: hidden;
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
  }
  
  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .chat-wrapper {
    position: relative;
  }

  .chat-wrapper iframe {
    height: 100%;
  }

  @media only screen and (max-width : 1024px) {
    .chat-wrapper {
      height: 36em;
    }

    .chat-wrapper iframe {
      width: 100%;
    }
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

  .title {
    position: relative;
  }
  
  @media only screen and (min-width: 1035px) and (max-width : 1063px) {
    .title:after {
      content: "";
      position: absolute;
      border-bottom: 8px solid #15202B;
      width: 6em;
      bottom: 15px;
      margin-left: 15px;
    }
  }

  @media only screen and (min-width: 1065px) and (max-width : 1169px) {
    .title:after {
      content: "";
      position: absolute;
      border-bottom: 8px solid #15202B;
      width: 9em;
      bottom: 15px;
      margin-left: 15px;
    }
  }
</style>