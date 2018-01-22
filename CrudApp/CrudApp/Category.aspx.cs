using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CrudApp
{
    public partial class Category : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=E:\\Bach\\workspace\\DotNet\\CrudApp\\CrudApp\\App_Data\\CrudApp.mdf;Integrated Security=True");

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                display();
            }
        }

        private void display()
        {
            string id = Page.RouteData.Values["id"].ToString();
            con.Open();
            SqlCommand cmd = new SqlCommand("select * from Categories where CategoryId = " + id, con);
            SqlDataAdapter adp = new SqlDataAdapter(cmd);
            DataSet dt = new DataSet();
            adp.Fill(dt);
            CategoryLabel.Text = dt.Tables[0].Rows[0]["CategoryId"].ToString();
            Label1.Text = dt.Tables[0].Rows[0]["CategoryName"].ToString();
            con.Close();
        }
    }
}