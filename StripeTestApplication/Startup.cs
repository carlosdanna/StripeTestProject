using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using Stripe;

[assembly: OwinStartup(typeof(StripeTestApplication.Startup))]

namespace StripeTestApplication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            StripeConfiguration.SetApiKey("sk_test_iqU0yAFkNQPQK5zMXYFuTdwv");
        }
    }
}
