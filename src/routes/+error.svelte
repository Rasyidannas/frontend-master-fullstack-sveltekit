<script>
    import {page} from '$app/stores';
    import {emojis} from './emoji.js';
</script>

<!-- this will make UI all error(unexpected and expected) -->
<h1>{$page.status} {$page.error?.message}</h1>
<span style="font-size: 10em;">
    {emojis[$page.status] ?? emojis[500]}
</span>