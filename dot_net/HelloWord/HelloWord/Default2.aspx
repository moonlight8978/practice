<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default2.aspx.cs" Inherits="Default2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            Welcome</div>
        Enter your name<p>
            <asp:TextBox ID="TextBox1" runat="server" OnTextChanged="TextBox1_TextChanged" Width="607px"></asp:TextBox>
            <asp:Button ID="Button1" runat="server" style="margin-left: 7px" Text="Submit" Width="206px" OnClick="Button1_Click" />
        </p>
        <asp:Label ForeColor="Yellow" ID="Label1" runat="server" Text="Name"></asp:Label>
    </form>
</body>
</html>
