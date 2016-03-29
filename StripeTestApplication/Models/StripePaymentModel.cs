using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StripeTestApplication.Models
{
    public class StripePaymentModel
    {
        public int? amount { get; set; }
        public string stripeToken { get; set; }
    }
}