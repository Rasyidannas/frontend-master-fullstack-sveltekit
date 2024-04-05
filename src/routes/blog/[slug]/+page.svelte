<script>
    // this will called data from load function in +page.server.js
    export let data;
</script>

<h1>{data.post.title}</h1>
<div>
    <!-- @html is for sanitize html -->
    {@html data.post.content}
</div>