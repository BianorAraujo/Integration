<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Facebook.aspx.cs" Inherits="Integration.Facebook" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h3>Facebook</h3>
    <br />
    <fb:login-button scope="public_profile,email,user_friends" onlogin="checkLoginState();">
    </fb:login-button>
    <br />
    <div id="status"></div>
    <br />
    <br />
    Friends
    <br />
    
    <%--<table style="width: 50%">
     <thead>
          <tr>
               <th>Id</th>
               <th>Name</th>
           </tr>
     </thead>
     <tbody id="tbody">
     </tbody>
</table>--%>
</asp:Content>
