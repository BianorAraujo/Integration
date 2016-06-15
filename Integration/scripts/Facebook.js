﻿
// Load the SDK asynchronously
//(function (d, s, id) {
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) return;
//    js = d.createElement(s); js.id = id;
//    js.src = "//connect.facebook.net/en_US/sdk.js";
//    fjs.parentNode.insertBefore(js, fjs);
//}(document, 'script', 'facebook-jssdk'));


//window.fbAsyncInit = function () {
//    FB.init({
//        appId: '295259497171655',
//        cookie: true,  // enable cookies to allow the server to access
//        // the session
//        xfbml: true,  // parse social plugins on this page
//        version: 'v2.2' // use version 2.2
//    });

//    // Now that we've initialized the JavaScript SDK, we call
//    // FB.getLoginStatus().  This function gets the state of the
//    // person visiting this page and can return one of three states to
//    // the callback you provide.  They can be:
//    //
//    // 1. Logged into your app ('connected')
//    // 2. Logged into Facebook, but not your app ('not_authorized')
//    // 3. Not logged into Facebook and can't tell if they are logged into
//    //    your app or not.
//    //
//    // These three cases are handled in the callback function.

//    FB.getLoginStatus(function (response) {
//        statusChangeCallback(response);
//    });
//};

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
//function checkLoginState() {
//    FB.getLoginStatus(function (response) {
//        statusChangeCallback(response);
//    });
//}

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        console.log(response.status);
    }
    //    testAPI();
    //} else if (response.status === 'not_authorized') {
    //    // The person is logged into Facebook, but not your app.
    //    document.getElementById('status').innerHTML = 'Please log ' +
    //      'into this app.';
    //} else {
    //    // The person is not logged into Facebook, so we're not sure if
    //    // they are logged into this app or not.
    //    document.getElementById('status').innerHTML = 'Please log ' +
    //      'into Facebook.';
    //}
}

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {

    FB.api('/me', function (response) {
        if (response && !response.error) {
            console.log(JSON.stringify(response));
            document.getElementById('status').innerHTML =
              'Thanks for logging in, ' + response.name + '!';
        }
    });

    FB.api('/me/permissions', function (response) {
        if (response && !response.error) {
            console.log(JSON.stringify(response.data));
        }
    });

    FB.api('/me/invitable_friends', function (response) {
        if (response && !response.error) {
            console.log(JSON.stringify(response));
        }
    });
}

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
            FB.api('/me', 'GET', {}, function (profile) {
                if (profile && !profile.error) {
                    console.log(JSON.stringify(profile));
                    document.getElementById('status').innerHTML =
                    'Thanks for logging in, ' + profile.name + '!';
                    //
                    //var jsonData = JSON.stringify(response);
                    $.ajax({
                        type: "POST",
                        //getListOfCars is my webmethod   
                        url: "/Facebook.aspx/GetProfile",
                        data: "{ id: '1' }",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json", // dataType is json format
                        success: OnSuccess,
                        error: OnErrorCall
                    });
   
                    function OnSuccess(response) {
                        console.log(response);
                    }
                    function OnErrorCall(response) {
                        console.log('erro');
                    }
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

