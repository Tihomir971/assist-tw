<script lang="ts">
	let className = '';
	export { className as class };
</script>

<button class={className}><slot>Hello</slot></button>
