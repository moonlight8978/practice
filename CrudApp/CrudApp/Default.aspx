<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CrudApp._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <asp:Label ID="CategoryNameLabel" runat="server" Text="Category Name" Width="150px"></asp:Label>
<asp:TextBox ID="CategoryNameTextBox" runat="server" Rows="5" Width="735px"></asp:TextBox>
<br />
<br />
<asp:Button ID="CreateCategoryButton" runat="server" OnClick="CreateCategoryButton_Click" Text="Create Category" Width="187px" />
<br />
<asp:GridView ID="CategoriesGridView" runat="server" AutoGenerateColumns="False" DataKeyNames="CategoryId">
    <Columns>
        <asp:BoundField DataField="CategoryId" HeaderText="Category Id" InsertVisible="False" ReadOnly="True" SortExpression="CategoryId" />
        <asp:BoundField DataField="CategoryName" HeaderText="Category Name" SortExpression="CategoryName" />
        <asp:TemplateField>
            <ItemTemplate>
                <asp:HyperLink ID="HyperLink5" runat="server" 
                    NavigateUrl='<%# Eval("CategoryId", "~/categories/{0}") %>'>
                    Show
                </asp:HyperLink>
            </ItemTemplate>
        </asp:TemplateField>
        <asp:TemplateField>
            <ItemTemplate>
                <asp:LinkButton ID="DestroyButton" runat="server" Text="Destroy" CommandArgument='<%# Eval("CategoryId") %>' OnClick="DestroyButton_Click"/>
            </ItemTemplate>
        </asp:TemplateField>
    </Columns>
</asp:GridView>

</asp:Content>
