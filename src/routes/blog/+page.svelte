<script>
    // this will called data from load function in +page.server.js
    export let data;
</script>

<h1>blog</h1>

<ul>
    {#each data.summaries as {slug, title}}
        <li>
            <a href={`blog/${slug}`}>{title}</a>
        </li>
    {/each}
</ul>