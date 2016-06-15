<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Facebook.aspx.cs" Inherits="Integration.Facebook" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script>

        (function ($) {
            $(document).bind('FBLoaded', function () {
                getProfileFb();
            });

        })(jQuery);
        //$(document).ready(function () {
        //    FBLoaded

        //    loadFb();
        //    console.log('teste');
            
        //});
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h3>Facebook</h3>
    <br />
    <br />
    <div id="status"></div>
    <br />
    <br />
    Friends
    <br />
    <asp:Label ID="label1" runat="server"></asp:Label>
</asp:Content>
