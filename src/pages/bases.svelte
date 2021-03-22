<script>
	import Accordion from "./_components/Accordion.svelte";
	import AccordionItem from "./_components/AccordionItem.svelte";
</script>

<div class="w-full h-screen flex flex-col-reverse lg:flex-col bg-pet-gray">
	<nav>
		<ul class="w-full p-8 lg:pl-12 flex gap-4 sm:gap-24 lg:justify-around flex-wrap lg:flex-nowrap
			text-base 2xl:text-xl lg:text-sm font-bowlby text-pet-black uppercase">
			<li>
				<a href="/#que">¿Qué es?</a>
			</li>
			<li>
				<a href="/#como">¿Cómo funciona?</a>
			</li>
			<li>
				<a href="/#convocatoria">Convocatoria</a>
			</li>
			<li>
				<a href="/#quienes">Quiénes somos</a>
			</li>
			<li>
				<a href="/#contacto">Contacto</a>
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

<div class="w-full flex flex-col-reverse items-center lg:flex-col bg-pet-gray
text-center text-base 2xl:text-5xl lg:text-sm font-bowlby text-pet-blue">
	<Accordion>
		<AccordionItem title="1. PRESENTACIÓN">
			<p>
				Desde Democracia en Red y el Observatorio de Redes,
				con el apoyo del Instituto Nacional Demócrata (NDI)
				y la Carrera de Ciencias Políticas de la Universidad de Buenos Aires (UBA)
				queremos invitarlos/as a contribuir en la explotación del repositorio
				<b>Políticxs en Twitter</b> con el fin de <b>producir conocimiento a partir de datos</b>.
			</p>
			<p>
				<b>Politicxs en Twitter</b> es un repositorio que nuclealas interacciones en Twitter
				de más de 500 usuarios relacionados con la política. Ponemos a disposición
				de la comunidad este atlas, con datos abiertos y reutilizables para su libre uso.
				A través de esta iniciativa, buscamos generar un espacio de difusión del conocimiento
				y la investigación en relación a los comportamientos de los políticos
				y políticas del país en la red social Twitter.
			</p>
		</AccordionItem>
		<AccordionItem title="2. CONVOCATORIA #DigamosTodo">
			<p>
				La presente convocatoria busca incentivar la investigación basada en datos,
				enfocada en la temática de desinformación en la Argentina. Buscamos propuestas
				que potencien el uso de los datos puestos a disposición en <b>Politicxs en Twitter</b>
				y analicen, de forma original e innovadora, la responsabilidad de políticos y políticas
				en Argentina en las dinámicas de la desinformación.
			</p>
			<p>
				La desinformación es un fenómeno político a través del cual se intenta, con diferentes intereses,
				afectar la conversación pública a partir de la inclusión de mensajes y/o contenidos que no reflejan la realidad.
				Así, se crean artículos, sitios web y/o publicaciones deliberadamente engañosos que, con frecuencia,
				procuran infringir un daño en el oponente político.
			</p>
			<p>	
				Consideramos relevante promover la discusión en torno a cómo nos informamos, cómo dirimimos
				entre contenido legítimo y desinformación, cuáles pueden ser consideradas fuentes verídicas
				dentro de la red social Twitter y quién lo define. En ese sentido, mucho se dice sobre el rol
				de los medios de comunicación y del comportamiento inauténtico organizado, incluyendo “trolls”,
				que impulsan la desinformación. Pero poco se habla de la actitud de nuestros representantes.
			</p>
			<p>
				La <b>presente convocatoria apunta, específicamente, a construir evidencia sobre el rol que juegan
				los políticos y políticas del país en la proliferación de la desinformación</b>:
				¿lxs politcxs desinforman? ¿de qué forma? ¿podemos dilucidar sus intenciones al hacerlo?
				¿lo hacen de manera sistemática? ¿incurren por error? ¿a qué partidos pertenecen?
				¿hay politicxs que se comportan como “trolls”? ¿quiénes son?
			</p>
		</AccordionItem>
		<AccordionItem title="3. CONDICIONES DE PARTICIPACIÓN">
			<p>
				La convocatoria está abierta para cualquier persona mayor de 18 años, de cualquier lugar del país.
				La participación podrá ser a título de autor individual o de coautores.
				En ambos casos solo podrá presentarse una idea por autor o coautores participantes.
				En caso de autoría colectiva, todos los involucrados deberán aprobar la postulación de la propuesta.				
			</p>
			<p>
				Apuntamos a que participen de esta convocatoria perfiles de investigación:
				estudiantes, profesionales, académicos, cientistas y visualizadores de datos
				vinculados al mundo de Ingeniería de Datos aplicada a las Ciencias Sociales.
			</p>
			<p>
				Es una condición para participar la utilización de los datos facilitados en el repositorio de Políticxs en Twitter.
				Cualquier contenido o idea que sea copiada de otras obras,
				dándolo a entender como propio y sin adjudicar de forma explícita que no es de su autoría, será considerado como plagio.
				En caso de que se detecte plagio en la parcialidad o en la totalidad de la idea,
				la misma quedará automáticamente descalificada de la convocatoria. 
			</p>
		</AccordionItem>
		<AccordionItem title="4. PRESENTACIONES SELECCIONADAS"></AccordionItem>
		<AccordionItem title="5. PREMIOS">
			<p>
				Buscamos premiar la idea más original y completa, que se alinee con estas bases mencionadas en el punto 2.
				El <b>premio</b> consta de la <b>entrega monetaria de 140.000 (ciento cuarenta mil pesos)</b>.
				En caso de coautoría, el premio será dividido y entregado a cada coautor en partes iguales. 
				El dinero podrá ser cobrado únicamente a través de una transferencia a una Caja de Ahorro o Cuenta Corriente
				brindada por el / la ganadora, con el correspondiente recibo de contraparte.
				El dinero no podrá ser cobrado, bajo ninguna excepción, de forma física, en efectivo. 
				Los premios son intransferibles y no podrá exigirse su canje por otro tipo de elemento.
				Los premios no incluyen bienes o servicios adicionales a lo enunciado específicamente o ningún otro concepto.
				Asimismo, cualquier costo y / o gasto en el que el o la ganadora
				deba incurrir para adjudicarse su premio quedará a su cargo de forma exclusiva. 
			</p>
		</AccordionItem>
		<AccordionItem title="6. PLAZOS">
			<p>
				La convocatoria estará abierta desde el 30 de marzo hasta el 24 de abril de 2021 a las 23:59 horas de Argentina.
				No se aceptarán trabajos enviados luego de esta fecha.
				El mismo deberá ser presentado y enviado únicamente a través del
				<a href="https://preguntarparaacordar.typeform.com/to/gVqxiRR6" target="_blank">siguiente formulario</a>,
				con indicaciones claras sobre los campos requeridos. 
			</p>
		</AccordionItem>
		<AccordionItem title="7. DERECHOS Y PUBLICACIONES">
			<p>
				Esta convocatoria no tiene ningún tipo de fin de lucro o rédito económico
				sino que sus únicos fines son la generación de conocimiento colectivo
				en materia académica y de investigación para su divulgación. 
			</p>
			<p>
				La actual convocatoria se enmarca en el movimiento de Ciencia Abierta.
				Buscamos producir conocimiento de manera abierta y colaborativa
				dejando en libre disponibilidad tanto los instrumentos de trabajo como los resultados
				intermedios y finales que se obtienen a lo largo de ese proceso.
				Es en esta línea que las organizaciones encargadas de la convocatoria ponen a libre disposición y completa accesibilidad
				datos como recursos compartidos para que sean trabajados por cualquier persona interesada. 
			</p>
			<p>
				El objetivo es que los y las participantes de la convocatoria se sientan cómodxs compartiendo sus propuestas
				y los eventuales resultados finales de sus investigaciones. Sin embargo, compartir sus propuestas, documentos y resultados
				en una comunidad abierta no será obligatorio. Las organizaciones encargadas de la convocatoria garantizan la protección
				de los derechos de propiedad intelectual, es decir, que no podrán apropiarse, adaptar o publicar libremente las propuestas
				<b>sin autorización previa de su o sus autores</b> y sin establecer de forma clara los créditos de autoría pertinentes.
			</p>
			<p>
				Todos las propuestas recolectadas para la convocatoria son propiedad exclusiva de sus autores
				y participar de la misma no requiere la cesión total o parcial de éstas. 
			</p>
		</AccordionItem>
		<AccordionItem title="8. DESCARGO DE RESPONSABILIDAD">
			<p>
				La participación en la convocatoria implica conocimiento y aceptación sin reservas de estas bases y condiciones
				las cuales regirán la totalidad de las relaciones entre cada participante y las organizaciones en relación a la convocatoria. 
			</p>
			<p>
				Los organizadores no responderán por ningún daño o perjuicio que se ocasione a cualquier persona
				con motivo o debido a la participación de la misma en la convocatoria, en cualquier calidad que la misma participe,
				así como a cualquier reclamo o daño relacionado con cualquier aspecto de la misma, o incluyendo pero sin limitación,
				aquellos daños vinculados con el acceso y otorgamiento de cualquiera de los premios,
				siempre que dicho daño no sea imputable a la exclusiva culpa clave o exclusivo dolor del organizador. 
			</p>
			<p>
				Los organizadores no serán responsables por daños, perjuicios o pérdidas ocasionadas al ganador/a o cualquier otro tercero,
				en su persona y / o bienes, con motivo o en ocasión de la aceptación, recepción o utilización del premio. 
			</p>
			<p>
				Toda eventual controversia que, en virtud de esta convocatoria, se genere entre cualquier participante
				y los organizadores será regida y concertada con total sujeción a las leyes de la República Argentina,
				renunciando el participante a cualquier otra jurisdicción a cuya aplicación pudiera tener derecho. 
			</p>
			<p>
				Resultarán competentes para dirimir cualquier controversia o procedimiento legal,
				que surja entre cualquier participante y los organizadores, los tribunales ordinarios de la Ciudad de Buenos Aires,
				cualquiera sea la causa de la acción o el reclamos, con renuncia expresa por parte suya a cualquier otra jurisdicción
				que pudiera corresponderle. 
			</p>
		</AccordionItem>
		<AccordionItem title="9. CONSULTAS">
			<p>
				En caso de consultas escribir a XX, con copia a XX.
			</p>
		</AccordionItem>
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