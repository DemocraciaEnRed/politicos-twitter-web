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
<div class="w-full h-auto py-6 flex flex-wrap flex-col lg:flex-col
bg-pet-gray texture-gray">

  <div>
    <a href="/index/" class="w-max flex ml-9 text-pet-black font-bowlby uppercase font-bold">
        Regresar
    </a>
  </div>
  <div class="container w-full flex flex-wrap flex-row xl:flex-row ms:flex-col sm:flex-col gap-12 py-8 lg:py-8 px-12
md:px-24 lg:px-48 justify-center items-center">
    <div>
	    <img src="../images/mapas/mapa_brasil.png" alt="Mapa de Brasil" class="w-auto h-auto p-8">
    </div>
    <div class="max-w-lg flex flex-col justify-center items-center m-8 p-8">
        <h1 class="max-w-md flex text-4xl 
			text-pet-black font-bowlby uppercase text-center font-bold">
				Proximamente
		</h1>
		<img src="../images/logo/pet_br.png" alt="Logo de Políticos en Twitter" class="w-auto h-auto">
	</div>
  </div>

</div>
<!-- fin: seccion1 -->


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

      div > a:hover {
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
