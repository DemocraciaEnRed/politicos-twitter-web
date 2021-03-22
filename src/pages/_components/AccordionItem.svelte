<script>
	export let id = "item" + Math.random().toString(36);
	export let title = "Title";
	export let expanded = false;
	export let disabled = false;
	export let ref = null;
	import { getContext, onDestroy } from "svelte";
	const ctx = getContext("Accordion");
	let unsubscribe = undefined;
	onDestroy(() => {
		if (ctx) ctx.remove({ id });
		if (unsubscribe) unsubscribe();
	});
	$: button_id = `button-${id}`;
	$: if (ctx) {
		ctx.add({ id, expanded });
		unsubscribe = ctx.items.subscribe((value) => {
			expanded = value[id];
		});
	}
</script>

<li data-accordion-item {...$$restProps}>
	<button
		bind:this={ref}
		aria-expanded={expanded}
		aria-controls={id}
		aria-disabled={disabled}
		{disabled}
		id={button_id}
		on:click
		on:click={() => {
			if (ctx) {
				ctx.toggle({ id, expanded: !expanded });
				if (expanded && ref.getBoundingClientRect().top < 0) ref.scrollIntoView();
			}
		}}>
		<slot name="title">{title}</slot>
	</button>
	<div role="region" {id} aria-labelledby={button_id} hidden={!expanded}>
		<slot />
	</div>
</li>

<style>
	li {
		padding-top: 1em;
	}

	[data-accordion] {
		list-style: none;
		margin: 1em auto;
	}

	[data-accordion-item] button {
		outline: none;
		border: 0;
		border-bottom: 3px solid #0c4fec;
		background: none;
		font: inherit;
		line-height: inherit;
		color: inherit;
		cursor: pointer;
		padding: 0.5rem 1rem;
		width: 100%;
		text-align: left;
	}

	[data-accordion-item] [role="region"] {
		font-family: Free Sans, sans-serif;
		max-width: 56rem;
		font-size: 1.5rem;
		color: black;
    margin: 1em auto;
		text-align: left;
	}
</style>
