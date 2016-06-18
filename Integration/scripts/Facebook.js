

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
//function testAPI() {

//    FB.api('/me', function (response) {
//        if (response && !response.error) {
//            console.log(JSON.stringify(response));
//            document.getElementById('status').innerHTML =
//              'Thanks for logging in, ' + response.name + '!';
//        }
//    });

//    FB.api('/me/permissions', function (response) {
//        if (response && !response.error) {
//            console.log(JSON.stringify(response.data));
//        }
//    });

//    FB.api('/me/invitable_friends', function (response) {
//        if (response && !response.error) {
//            console.log(JSON.stringify(response));
//        }
//    });
//}

// novo login

function loadFb() {
    window.fbAsyncInit = function () {
        FB.init({
            appId: '295259497171655',
            status: true,
            cookie: true,
            xfbml: true,
            version: 'v2.5'
        });
        jQuery(document).trigger('FBLoaded');
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "http://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            window.location = "./Facebook.aspx";
        }
        else {
            FB.login(function () {
                window.location = "./Facebook.aspx";
            }, { scope: 'public_profile,email,user_friends' });
        }
    });
}

function getProfileFb() {
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            FB.api('/me?fields=id,name,picture,cover', 'GET', {}, function (profile) {
                if (profile && !profile.error) {
                    //$.ajax({
                    //    type: "POST",
                    //    url: "/Facebook.aspx/GetProfile",
                    //    data: "{ profile: '" + JSON.stringify(profile) + "'}",
                    //    contentType: "application/json; charset=utf-8",
                    //    dataType: "json",
                    //    success: OnSuccess,
                    //    error: OnErrorCall
                    //});
                    //function OnSuccess(response) {
                    //    console.log(response.d.name);
                    //}
                    //function OnErrorCall(response) {
                    //    console.log('erro');
                    //}

                    document.getElementById('user-cover').src = profile.cover.source;
                    document.getElementById('id').innerText = profile.id;
                    document.getElementById('name').innerText = profile.name;
                    console.log(JSON.stringify(profile));
                }
                else {
                    console.log(profile.error);
                }
            });
        }
    });
}

function getFriendsFb() {
    //FB.getLoginStatus(function (response) {
    //    if (response.status === 'connected') {
    //        FB.api('/me', 'GET', {}, function (response) {
    //            if (response && !response.error) {
    //                console.log(JSON.stringify(response));
    //                document.getElementById('status').innerHTML =
    //                'Thanks for logging in, ' + response.name + '!';
    //            }
    //            else {
    //                console.log(response.error);
    //            }
    //        });
    //    }
    //});
}

