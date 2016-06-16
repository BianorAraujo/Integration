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
    <h3>Facebook</h3>
    <br />
    <br />
    <div id="status"></div>
    <br />
    <span id="id"></span>
    <br />
    <span id="name"></span>
    
</asp:Content>
