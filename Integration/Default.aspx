<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Integration.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h3>Redes Sociais</h3>
    <br />
    <div id="menu-botoes">
        <div id="left-column">
            <a href="javascript:checkLoginState();"><img src="images/facebook.png"/></a>
            <a href="#"><img src="images/twitter.png"/></a>
        </div>
        <div id="right-column">
            <a href="#"><img src="images/instagram.png"/></a>
            <a href="#"><img src="images/linkedin.png"/></a>
        </div>        
    </div>
</asp:Content>
