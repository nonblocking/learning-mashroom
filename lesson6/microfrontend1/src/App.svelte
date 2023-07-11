<script lang="ts">
	export let name: string;
    export let apiPath: string;

    let osInfo;
    const loadOsInfo = async () => {
        const result = await fetch(`${apiPath}/os`);
        if (result.ok) {
            osInfo = await result.json();
        }
    };

    loadOsInfo();
</script>

<div class="microfrontend1">
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    {#if osInfo}
        <p>Microfrontend host: {osInfo.hostname} ({osInfo.platform} {osInfo.release} {osInfo.arch})</p>
    {/if}
</div>

<style>
	.microfrontend1 {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		.microfrontend1 {
			max-width: none;
		}
	}
</style>
