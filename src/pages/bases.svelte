<script>
	import Accordion from "./_components/Accordion.svelte";
	import AccordionItem from "./_components/AccordionItem.svelte";
</script>

<div class="w-full h-screen flex flex-col-reverse lg:flex-col bg-pet-gray">
	<nav>
		<ul class="w-full p-8 lg:pl-12 flex gap-4 sm:gap-24 lg:justify-around flex-wrap lg:flex-nowrap
			text-base 2xl:text-xl lg:text-sm font-bowlby text-pet-black uppercase">
			<li>
				<a href="/#uno">¿Qué es?</a>
			</li>
			<li>
				<a href="/#dos">¿Cómo funciona?</a>
			</li>
			<li>
				<a href="/#tres">Convocatoria</a>
			</li>
			<li>
				<a href="/#cuatro">Quiénes somos</a>
			</li>
			<li>
				<a href="/#cinco">Contacto</a>
			</li>
			<li class="lg:ml-auto">
				<button>
					<a href="https://oderedes.shinyapps.io/politicosentwitter/" target="_blank">Repositorio</a>
				</button>
			</li>
		</ul>
	</nav>
	<div class="h-full flex justify-center items-center">
		<img src="images/logo/pet.png" alt="Logo de Políticos en Twitter"
		class="sm:w-4/12"/>
		<h1 class="pl-12 ml-12 text-base 2xl:text-7xl lg:text-sm font-bowlby text-pet-black uppercase
		border-l-4 border-pet-black">
			Bases<br> y condiciones
		</h1>
	</div>
</div>

<div class="w-full flex flex-col-reverse items-center lg:flex-col bg-pet-gray text-center text-base 2xl:text-5xl lg:text-sm
font-bowlby text-pet-blue">
	<Accordion>
		<AccordionItem title="1. PRESENTACIÓN">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque in sapien in porttitor. Vivamus dolor dui, tristique in bibendum malesuada, vestibulum at leo. Donec facilisis, odio sed egestas bibendum, magna dolor lobortis augue, in placerat nisl massa quis enim. Phasellus eu risus dictum, tempus ex vel, aliquam ex. Phasellus nec semper lorem, porta porta lacus. Etiam odio nibh, venenatis sit amet congue et, convallis a sem. Donec consectetur nunc mollis tempor porttitor. Cras lobortis congue nulla, at congue dolor porta in. Fusce auctor sit amet mi id mattis. Nunc eget consequat mi. Cras ornare vel odio sit amet lacinia. Mauris eu dictum orci, nec efficitur nisi.
		</AccordionItem>
		<AccordionItem title="2. CONVOCATORIA #DigamosTodo"></AccordionItem>
		<AccordionItem title="3. CONDICIONES DE PARTICIPACIÓN"></AccordionItem>
		<AccordionItem title="4. PRESENTACIONES SELECCIONADAS"></AccordionItem>
		<AccordionItem title="5. PREMIOS"></AccordionItem>
		<AccordionItem title="6. PLAZOS"></AccordionItem>
		<AccordionItem title="7. DERECHOS Y PUBLICACIONES"></AccordionItem>
		<AccordionItem title="8. DESCARGO DE RESPONSABILIDAD"></AccordionItem>
		<AccordionItem title="9. CONSULTAS"></AccordionItem>
	</Accordion>
</div>

<div class="w-full flex gap-12 py-16 px-24 bg-pet-gray">
	<img src="images/logo/pet.png" alt="Logo de Políticos en Twitter"
	class="m-8 sm:w-2/12">
	<div class="w-full p-8 lg:pl-12 flex sm:gap-24
		lg:justify-around self-center flex-wrap lg:flex-nowrap text-base
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