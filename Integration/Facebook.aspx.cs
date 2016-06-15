using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Integration
{
    public partial class Facebook : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod(true)]
        public static int GetProfile(int id)
        {
            return id;
            //label1.Text = jsonData;
        }
    }

    public class User
    {
        public string name { get; set; }
        public string id { get; set; }
    }
}