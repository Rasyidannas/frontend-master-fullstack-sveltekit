<script>
    //this will get data from load function in +page.server.js
    export let data;
    import { message } from '$lib/message.js';
</script>

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>
<p>{message}</p>
