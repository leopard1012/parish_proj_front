<template>
    <div>
        <div id="google-signin-btn"></div>
        <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->
        <!-- <div class="g-signin2" id="google-signin-btn" data-onsuccess="onSignIn" ></div> -->
    </div>
    <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->
</template>
<script>
export default {
    mounted() {
        window.gapi.signin2.render("google-signin-btn", {
            scope: 'email',
            width: 200,
            height: 50,
            longtitle: true,
            theme: 'dark',
            // onsuccess: handleSuccess,
            // onfailure: handleFailure,
            onsuccess: this.onSignIn,
        });
    },
    methods: {
        onSignIn (googleUser) {
            const profile = googleUser.getBasicProfile();
            console.log("Email: " + profile.getEmail());

            const id_token = googleUser.getAuthResponse().id_token;
            console.log("ID Token: " + id_token);

            
        }
    }
//     mounted() {
//     window.addEventListener('google-oauth-library-load', this.renderSignInButton);
//     window.gapi.signin2.render("google-signin-btn", {onsuccess: this.onSignIn});
//   },
//   methods: {
//     renderSignInButton() {
//       window.gapi.signin2.render('my-signin2', {
//         scope: 'profile email',
//         width: 240,
//         height: 50,
//         longtitle: true,
//         theme: 'dark',
//         onsuccess: this.onSuccess,
//         onfailure: this.onFailure,
//       });
//     },
//   }
}
</script>
