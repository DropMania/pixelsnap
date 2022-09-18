<script>
    import List, { Item, Separator, Text, Graphic } from '@smui/list'
    import { user } from '../stores.js'
    import Login from './Login.svelte'
    import {navigateTo} from 'svelte-router-spa'
    let isLogin = false
    function openLogin() {
        isLogin = true
    }
</script>

<div class="left-list">
    <List>
        <Item on:click={()=>navigateTo('/')}>
            <Graphic class="material-icons" color='secondary'>home</Graphic>
            <Text>Home</Text>
        </Item>
        <Separator />
        {#if !$user}
            <Item on:click={openLogin}>
                <Graphic class="material-icons">login</Graphic>
                <Text>Login</Text>
            </Item>
        {:else}
            <Item on:click={()=>navigateTo('profile')}>
                <Graphic class="material-icons">account_circle</Graphic>
                <Text>Profile</Text>
            </Item>
        {/if}
    </List>
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
    }
</style>
