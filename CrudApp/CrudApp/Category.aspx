<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Category.aspx.cs" Inherits="CrudApp.Category" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <%= Page.RouteData.Values["id"] %>
        </div>
        
        <asp:Label ID="CategoryLabel" runat="server" Text="Category"></asp:Label>
        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
        
    </form>


</body>
</html>
