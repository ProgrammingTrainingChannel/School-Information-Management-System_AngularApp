using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(User_Interface.Startup))]
namespace User_Interface
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
