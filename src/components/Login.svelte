<script>
    import { auth } from '../firebase.js'
    import Button from '@smui/button'
    import { Icon, Label } from '@smui/common'
    import Dialog, { Title, Content, Actions } from '@smui/dialog'
    import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
    export let isLogin = false
    function loginGoogle() {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }
    function loginMail() {}
</script>

<Dialog bind:open={isLogin}>
    <Title>Login</Title>
    <Content>Login with the method you prefer</Content>
    <Actions autoStackButtons={false}>
        <Button on:click={loginMail} variant="raised" color="secondary">
            <Icon class="material-icons">login</Icon>
            <Label>Login</Label>
        </Button>
        <Button on:click={loginGoogle} variant="raised" color="secondary">
            <Icon class="material-icons">login</Icon>
            <Label>Login with Google</Label>
        </Button>
        <Button>
            <Icon class="material-icons" color="secondary">close</Icon>
            <Label>Close</Label>
        </Button>
    </Actions>
</Dialog>
