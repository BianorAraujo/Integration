using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
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

        [WebMethod]
        public static User GetProfile(string profile)
        {
            JavaScriptSerializer ser = new JavaScriptSerializer();
            User user = ser.Deserialize<User>(profile);

            return user;
        }
    }

    public class User
    {
        public string name;
        public string id;
    }
}