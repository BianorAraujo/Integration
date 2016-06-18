using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Integration
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void InstagramAutenctication_Click(object sender, ImageClickEventArgs e)
        {
            Response.Redirect(string.Format("https://api.instagram.com/oauth/authorize/?client_id={0}&redirect_uri={1}&response_type=code", ConfigurationManager.AppSettings["Instagram.Client_ID"].ToString(), ConfigurationManager.AppSettings["Instagram.Redirect_URI"].ToString()));
        }
    }
}