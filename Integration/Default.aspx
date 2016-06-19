<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Integration.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h3>Redes Sociais</h3>
    <br />
    <div id="menu-botoes">
        <div id="left-column">
            <%--<asp:ImageButton ImageUrl="images/facebook.png" OnClientClick="javascript:checkLoginState();" runat="server" />--%>
            <a href="javascript:checkLoginState();"><img src="images/facebook.png"/></a>
            <a href="#"><img src="images/twitter.png"/></a>
        </div>
        <div id="right-column">
            <asp:ImageButton CssClass="right-column" ImageUrl="images/instagram.png" OnClick="InstagramAutenctication_Click" runat="server" />
            <%--<a href="Instagram.aspx"><img src="images/instagram.png"/></a>--%>
            <a href="#"><img src="images/linkedin.png"/></a>
        </div>        
    </div>
</asp:Content>
