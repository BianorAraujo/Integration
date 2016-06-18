using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Integration
{
    public partial class Instagram : System.Web.UI.Page
    {
        public string code;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!String.IsNullOrEmpty(Request["code"]) && !Page.IsPostBack)
            {
                code = Request["code"].ToString();
                GetDataInstagramToken();

            }
        }

        //Function used to get instagram user id and access token
        public void GetDataInstagramToken()
        {
            var json = "";
            try
            {
                //NameValueCollection parameters
                Dictionary<string, string> parameters = new Dictionary<string, string>();
                parameters.Add("client_id", ConfigurationManager.AppSettings["Instagram.Client_ID"].ToString());
                parameters.Add("client_secret", ConfigurationManager.AppSettings["Instagram.Client_Secret"].ToString());
                parameters.Add("grant_type", "authorization_code");
                parameters.Add("redirect_uri", ConfigurationManager.AppSettings["Instagram.Redirect_URI"].ToString());
                parameters.Add("code", code);
                
                //WebClient client = new WebClient();
                //var result = client.UploadValues("https://api.instagram.com/oauth/access_token", "POST", parameters);
                //var response = System.Text.Encoding.Default.GetString(result);
                
                //// deserializing nested JSON string to object  
                //var jsResult = (JObject)JsonConvert.DeserializeObject(response);
                //string accessToken = (string)jsResult["access_token"];
                //int id = (int)jsResult["user"]["id"];

                ////This code register id and access token to get on client side  
                //Page.ClientScript.RegisterStartupScript(this.GetType(), "GetToken", "<script>var instagramaccessid=\"" + @"" + id + "" + "\"; var instagramaccesstoken=\"" + @"" + accessToken + "" + "\";</script>");

            }
            catch (Exception ex)
            {
                throw;

            }
        }
    }
}