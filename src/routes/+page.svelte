<script>
    //this will get data from load function in +page.server.js
    export let data;
</script>

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>
