<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'Políticos en Twitter'
    metatags.description = 'Observatorio de redes sociales'

	//Pruebas para el scroll
	let que;
	let repos;
	let colaboran;
	function scrollInto(elmnt) {
	
	elmnt.scrollIntoView({
		behavior: "smooth", 
		block: "start",
		inline: "nearest"
	});
	}
</script>

<!-- inicio: seccion1 -->
<div class="w-full h-auto flex flex-col lg:flex-col
bg-pet-gray texture-gray">
	<nav class="container">
		<ul class="header w-full p-8 lg:p-4 flex gap-12 xl:gap-24 justify-center
		lg:justify-around flex-wrap lg:flex-nowrap text-base 2xl:text-xl lg:text-lg
		font-bowlby text-pet-black uppercase">
			<li>
				<a href="#que">¿Qué es?</a>
			</li>
			<li>
				<a href="#repos">Repositorios</a>
			</li>
			<li>
				<div>
					<ul class="header w-full flex gap-12 justify-center items-center
					lg:justify-center flex-wrap lg:flex-nowrap text-base 2xl:text-xl lg:text-lg
					font-bowlby text-pet-black uppercase">
					<li>
						<a href='/argentina/'>
							<img src="../images/banderas/argentina.png" alt="Bandera de Argentina">
						</a>
					</li>
					<li>
						<a href='/colombia/'>
							<img src="../images/banderas/colombia.png" alt="Bandera de Colombia">
						</a>
		 			</li>
					<li>
						<a href='/uruguay/'>
							<img src="../images/banderas/uruguay.png" alt="Bandera de Uruguay">
						</a>
		 			</li>
					<li>
						<a href='/brasil/'>
							<img src="../images/banderas/brasil.png" alt="Bandera de Brasil">
						</a>
					</ul>
				</div>
 			</li>
			<li>
 				<a href= '#colaboran'>¿Quién nos apoya?</a>
			</li>
			<li>
					<div>
						<ul class="header w-full flex gap-12 justify-center items-center
						lg:justify-center flex-wrap lg:flex-nowrap text-base 2xl:text-xl lg:text-lg
						font-bowlby text-pet-black uppercase">
							<li>
								<a href= '/index/'>ESP</a>
							</li>
							<li>
								<a href= '/pt/'>PT</a>
							</li>
						</ul>
				</div>
			</li>
		</ul>
  </nav>

<div class="w-full flex flex-col xl:flex-row gap-12 py-8 lg:py-8 px-12
md:px-24 lg:px-48 justify-around items-center">
	<img src="../images/mapas/mapa_latam.png" alt="Mapa de América del Sur" class="w-auto h-auto p-8">
	<div class="max-w-lg flex flex-col justify-center m-8 p-8">
		<img src="../images/logo/pet.png" alt="Logo de Políticos en Twitter" class="w-auto h-auto">
			<h2 class="max-w-md flex text-lg md:text-3xl
			text-pet-black font-sans font-bold px-9">
				Qué dicen, con quién se vinculan, con quién se enfrentan y cómo reaccionan lxs políticxs de América Latina
			</h2>
	</div>
  </div>

</div>
<!-- fin: seccion1 -->

<!-- inicio: seccion2 -->
<div bind:this={que} id="que" class="w-full h-auto flex flex-col gap-14
md:py-24 px-6 md:px-12 lg:px-24 justify-center bg-pet-blue texture-blue">
	<div class="container justify-center gap-12 py-12">
		<h1 class=" tile max-w-5xl lg:max-w-full w-full text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
		text-bold text-white font-sans font-bold">
			<span class="text-pet-black">Políticxs en Twitter</span> es un repositorio con interacciones de usuarios 
			relacionados con la política en Argentina, Uruguay, Colombia y Brasil.
		</h1>
		<h2 class="text-xl sm:text-3xl text-white font-free pt-10">
			Ponemos a disposición de la comunidad este ATLAS con datos libres y reutilizables, 
			para facilitar la producción de conocimiento.
			<br><br>
			Porque es ese conocimiento el que nos permitirá observar e interpelar 
			a la clase política a partir de evidencia, una que convierta 
			sus dichos en <span class="font-bold text-black">hechos..</span>
		</h2>
	</div>
</div>
<!-- fin: seccion2 -->

<!-- inicio: seccion3 -->
<div  bind:this={repos} id="repos" class="w-full h-auto flex-col xl:flex-row gap-12py-12 lg:py-12 px-12
md:px-24 lg:px-48 justify-between items-center bg-pet-black texture-black">
	<div class="container justify-center gap-12 py-16 items-center">
		<h1 class="tile max-w-5xl lg:max-w-full w-full text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
		text-bold text-white text-center font-bowlby uppercase py-12">Accedé a los repositorios
		</h1>
	</div>
	<ul class="container flex flex-row flex-wrap justify-center pb-40
	text-white text-center font-bowlby uppercase">
		<li>
			<img src="../images/banderas/repoarg.png" alt="Bandera de Argentina" class="px-12 py-6">
			<a href='/argentina/'>Argentina</a>
		</li>
		<li>
			<img src="../images/banderas/repocol.png" alt="Bandera de Colombia" class="px-12 py-6">
			<a href='/colombia/'>Colombia</a>
		</li>
		<li>
			<img src="../images/banderas/repouru.png" alt="Bandera de Uruguay" class="px-12 py-6">
			<a href='/uruguay/'>Uruguay</a>
		</li>
		<li>
			<img src="../images/banderas/repobra.png" alt="Bandera de Brasil" class="px-12 py-6">
			<a href='/brasil/'>Brazil</a>
		</li>
	</ul>
</div>
<!-- fin: seccion3 -->

<!-- inicio: seccion4 -->
<div bind:this={colaboran} id="colaboran" class="w-full h-auto py-12 2xl:py-24 px-36 lg:px-48 flex flex-col lg:flex-row
gap-6 justify-center items-center bg-pet-gray texture-gray">
	<div>
		<h3 class="w-56 text-xl text-center text-white font-bowlby font-bold uppercase">
		Nos apoyan:
		</h3>
	</div>
	<div class="px-6">
		<img src="../images/logo/uba.png" alt="Logo Universidad de Buenos Aires"
		class="w-48 xl:w-auto h-auto xl:h-16" >
	</div>
	<div class="px-6">
		<img src="../images/logo/ndi.png" alt="Logo Instituto Nacional Demócrata"
		class="w-48 xl:w-auto h-auto xl:h-16">
	</div>
</div>
<!-- fin: seccion4 -->

<!-- inicio: seccion5 -->
<div bind:this={colaboran} id="colaboran" class="w-full h-auto flex-row xl:flex-row gap-12 py-12 lg:py-12 px-36
md:px-24 lg:px-36 bg-pet-black texture-black">
	<h3 class="w-56 py-14 text-xl text-white font-bowlby font-bold uppercase">
	Colaboran:
	</h3>
	<div class="container flex flex-row flex-wrap items-center justify-center py-16">
		<div class="px-12 py-6">
			<img src="../images/logo/LogoObservatorio_low.png" alt="Logo Observatorio de Redes">
		</div>
		<div class="px-12 py-6">
			<img src="../images/logo/logoUpdate2.png" alt="Logo Update">
		</div>
		<div class="px-12 py-6">
			<img src="../images/logo/LogoDER_low.png" alt="Logo Democracia en Red">
		</div>
		<div class="px-12 py-6">
			<img src="../images/logo/DataUruguay.png" alt="Logo Data Uruguay">
		</div>
		<div class="px-12 py-6">
			<img src="../images/logo/logoExtituto.png" alt="Logo Extituto Política Abierta">
		</div>
	</div>
</div>
<!-- fin: seccion5 -->

<!-- inicio: seccion6 -->
<div class="w-full h-auto py-12 2xl:py-24 px-36 lg:px-48 flex flex-col lg:flex-row
gap-6 justify-between items-center bg-pet-gray texture-gray">
	<div>
		<img src="../images/logo/pet.png" alt="Logo de Políticos en Twitter" class="m-auto w-auto h-24 2xl:h-36 xl:h-28">
	</div>
	<div>
		<ul class="header w-full p-8 lg:p-4 flex flex-col gap-6 justify-start
		lg:justify-start flex-wrap lg:flex-nowrap text-base 2xl:text-xl lg:text-lg
		font-bowlby text-pet-black uppercase">
			<li>
				<a href="#que">¿Qué es?</a>
			</li>
			<li>
				<a href="mailto:hola@politicosentwitter.com">Contacto</a>
			</li>
		</ul>
	</div>
	<div>
		<a href="#repos">
			<h2  class="mr-40 ml-8 text-left 2xl:text-xl lg:text-lg font-bowlby text-pet-black uppercase">
				Repositorios
			</h2>
		</a>
		<ul class="header w-full flex gap-12 py-4 justify-center items-center
		lg:justify-center flex-wrap lg:flex-nowrap text-base 2xl:text-xl lg:text-lg
		font-bowlby text-pet-black uppercase">
			<li>
				<a href='/argentina/'>
					<img src="../images/banderas/argentina.png" alt="Bandera de Argentina">
				</a>
			</li>
			<li>
				<a href='/colombia/'>
					<img src="../images/banderas/colombia.png" alt="Bandera de Colombia">
				</a>
			</li>
			<li>
				<a href='/uruguay/'>
					<img src="../images/banderas/uruguay.png" alt="Bandera de Uruguay">
				</a>
			</li>
			<li>
				<a href='/brasil/'>
					<img src="../images/banderas/brasil.png" alt="Bandera de Brasil">
				</a>
		</ul>
	</div>
</div>
<!-- fin: seccion6 -->


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

	  li > a > img:hover {
		box-shadow: 0 0 0 0px;
	  }

	  li > a > img:hover {
		box-shadow: 0 0 0 3px #0C4FEC;
		border-radius: 100%;
	  }

	  a > h2:hover {
		@apply text-pet-blue border-pet-blue border-b-4;
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
