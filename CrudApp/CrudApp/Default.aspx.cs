using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;


namespace CrudApp
{
    public partial class _Default : Page
    {
        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=E:\\Bach\\workspace\\DotNet\\CrudApp\\CrudApp\\App_Data\\CrudApp.mdf;Integrated Security=True");

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                display();
            }
        }

        protected void CreateCategoryButton_Click(object sender, EventArgs e)
        {
            con.Open();
            string str = "insert into Categories values('" + CategoryNameTextBox.Text + "')";
            SqlCommand cmd = new SqlCommand(str, con);
            cmd.ExecuteNonQuery();
            con.Close();
            CategoryNameTextBox.Text = String.Empty;
            display();
        }

        private void display()
        {
            con.Open();
            string str = "select * from Categories";
            SqlCommand cmd = new SqlCommand(str, con);
            SqlDataAdapter adp = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            adp.Fill(dt);
            CategoriesGridView.DataSource = dt;
            CategoriesGridView.DataBind();
            con.Close();
        }

        protected void DestroyButton_Click(object sender, EventArgs e)
        {
            LinkButton btn = (LinkButton)sender;
            string id = btn.CommandArgument.ToString();
            con.Open();
            string str = "delete from Categories where CategoryId = " + id;
            SqlCommand cmd = new SqlCommand(str, con);
            cmd.ExecuteNonQuery();
            con.Close();
            display();
        }
    }
}