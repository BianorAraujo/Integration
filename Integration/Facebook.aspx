<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Facebook.aspx.cs" Inherits="Integration.Facebook" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script>

        (function ($) {
            $(document).bind('FBLoaded', function () {
                getProfileFb();
            });

        })(jQuery);
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="facebookMain">
        <div id="fb-title">
            <img id="fb-icon" src="images/facebook_icon.png"/>
            <a href="#">Perfil</a>
            <a href="#">Amigos</a>
            <a href="#">Albúns</a>
        </div>
        <div id="fb-cover">
            <img id="user-cover" src="#" />
        </div>
        <div id="fb-picture">
            <img id="user-picture" src="#" />
        </div>
        <span id="user-name"></span>
        
    </div>
</asp:Content>
