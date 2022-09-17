<script>
    import Button from '@smui/button'
    import { Icon, Label } from '@smui/common'
    import { user } from '../stores.js'
    import Login from './Login.svelte'
    let isLogin = false
    function openLogin() {
        isLogin = true
    }
    function openProfile() {
        //profile
    }
</script>

<div class="left-list">
    <Button variant="raised" color="secondary">
        <Icon class="material-icons">home</Icon>
        <Label>Home</Label>
    </Button>
    {#if !$user}
        <Button on:click={openLogin} variant="raised" color="secondary">
            <Icon class="material-icons" variant="raised" color="secondary"
                >login</Icon
            >
            <Label>Login</Label>
        </Button>
    {:else}
        <Button on:click={openProfile} variant="raised" color="secondary">
            <Icon class="material-icons" variant="raised" color="secondary"
                >account_circle</Icon
            >
            <Label>Profile</Label>
        </Button>
    {/if}
</div>

<Login bind:isLogin />

<style>
    .left-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        height: 100%;
        gap: 10px;
        padding: 10px;
        border: solid 1px rgb(161, 161, 161);
        border-radius: 5px;
    }
</style>
