<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'Políticos en Twitter'
    metatags.description = 'Observatorio de redes sociales'

	//Pruebas para el scroll
	let que;
	function scrollInto(elmnt) {
	
	elmnt.scrollIntoView({
		behavior: "smooth", 
		block: "start",
		inline: "nearest"
	});
	}
</script>

<!-- inicio: seccion1 -->
<div class="w-screen h-screen flex flex-col lg:flex-col
bg-pet-gray texture-gray">
	<nav class="container">
		<ul class="header w-full p-8 lg:p-4 flex gap-12 xl:gap-24 justify-center
		lg:justify-around flex-wrap lg:flex-nowrap text-base 2xl:text-xl lg:text-lg
		font-bowlby text-pet-black uppercase">
			<li>
				<a href="#que">¿Qué es?</a>
			</li>
			<li>
				<a href="https://oderedes.shinyapps.io/politicosentwitter/" target="_blank">Repositorios</a>
			</li>
			<li>
				<div>
					<ul class="header w-full flex gap-12 justify-center items-center
					lg:justify-center flex-wrap lg:flex-nowrap text-base 2xl:text-xl lg:text-lg
					font-bowlby text-pet-black uppercase">
					<li>
						<a href='/argentina/'>
							<img src="images/banderas/argentina.png" alt="Bandera Argentina">
						</a>
					</li>
					<li>
						<a href='/colombia/'>
							<img src="images/banderas/colombia.png" alt="Bandera Colombia">
						</a>
		 			</li>
					<li>
						<a href='/uruguay/'>
							<img src="images/banderas/uruguay.png" alt="Bandera Uruguay">
						</a>
		 			</li>
					<li>
						<a href='/brasil/'>
							<img src="images/banderas/brasil.png" alt="Bandera Brasil">
						</a>
					</ul>
				</div>
 			</li>
			<li>
 				<a href= '#colaboran' target="_blank">¿Quién nos apoya?</a>
			</li>
			<li>
					<div>
						<ul class="header w-full flex gap-12 justify-center items-center
						lg:justify-center flex-wrap lg:flex-nowrap text-base 2xl:text-xl lg:text-lg
						font-bowlby text-pet-black uppercase">
							<li>
								<a href= '/index/' target="_blank">ESP</a>
							</li>
							<li>
								<a href= '/pt/index/' target="_blank">PT</a>
							</li>
						</ul>
				</div>
			</li>
		</ul>
  </nav>

<div class="w-full  flex flex-col xl:flex-row gap-12 py-8 lg:py-8 px-12
md:px-24 lg:px-48 justify-around items-center">
	<img src="images/banderas/mapa.png" alt="Mapa de América del Sur" class="w-auto h-auto p-8">
	<div class="max-w-lg flex flex-col justify-center m-8 p-8">
		<img src="images/logo/pet.png" alt="Logo de Políticos en Twitter" class="w-auto h-auto">
			<h2 class="max-w-md flex text-lg md:text-3xl
			text-pet-black font-Sans-Serif font-bold px-9">
				Qué dicen, con quién se vinculan, con quién se enfrentan y cómo reaccionan lxs políticxs de América Latina
			</h2>
	</div>
  </div>

</div>
<!-- fin: seccion1 -->

<!-- inicio: seccion2 -->

<!-- fin: seccion2 -->


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
