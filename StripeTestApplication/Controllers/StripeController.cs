using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Stripe;
using StripeTestApplication.Models;

namespace StripeTestApplication.Controllers
{
    public class StripeController : ApiController
    {
        [HttpPost]
        [Route("PostCCPayment")]
        public IHttpActionResult PostCCPayment(StripePaymentModel st)
        {
            var myCharge = new StripeChargeCreateOptions();
            
            StripeTokenService tokenService = new StripeTokenService();
            
            StripeToken stripeToken = tokenService.Get(st.stripeToken);
            myCharge.Amount = st.amount;
            myCharge.Currency = "usd";

            //If you uncomment this line it would not be necessary to create 
            //myCharge.Source because it will take the default Payment method stored in braintree
            //myCharge.CustomerId = "cus_8APkavDDfLpF18";



            myCharge.Source = new StripeSourceOptions()
            {
                TokenId = st.stripeToken,
                //Uncoment these lines to create a credit card in exchange you will have to comment tokenId
                //Object = "card",
                //Number = "4242424242424242",
                //ExpirationYear = "2022",
                //ExpirationMonth = "10"
            };

            
            myCharge.Capture = true;

            var chargeService = new StripeChargeService();
            StripeCharge stripeCharge = chargeService.Create(myCharge);

            return Ok();
        }
        [HttpPost]
        [Route("PostACHPayment")]
        public IHttpActionResult PostACHPayment()
        {
            return Ok();
        }

        [HttpPost]
        [Route("PostCCPaymentWithFee")]
        public IHttpActionResult PostCCPaymentWithFee(StripePaymentModel st)
        {

            var myCharge = new StripeChargeCreateOptions();
            
            StripeTokenService tokenService = new StripeTokenService();
            StripeToken stripeToken = tokenService.Get(st.stripeToken);
            
            myCharge.Amount = st.amount;
            myCharge.Currency = "usd";
            //myCharge.CustomerId = "cus_8APkavDDfLpF18";
            myCharge.Source = new StripeSourceOptions()
            {
                TokenId = st.stripeToken,
                
                //Object = "card",
                //Number = "4242424242424242",
                //ExpirationYear = "2022",
                //ExpirationMonth = "10"

            };

            myCharge.ApplicationFee = 424;
            myCharge.Destination = "acct_17u5yBJNqTF0Esww";
            myCharge.Capture = true;

            var chargeService = new StripeChargeService();
            StripeCharge stripeCharge = chargeService.Create(myCharge);

            return Ok();

        }
        [HttpPost]
        [Route("PostACHPaymentWithFee")]
        public IHttpActionResult PostACHPaymentWithFee()
        {
            return Ok();
        }

        [HttpPost]
        [Route("PostCreateMerchant")]
        public IHttpActionResult PostCreateMerchant()
        {
            var account = new StripeAccountCreateOptions();
            account.Email = "jayme@yoyoyo.com";  // this is required if it is not a managed account. the user is emailed on standalone accounts,
            // it's only used for reference on managed accounts
            account.Managed = false;            // set this to true if you want a managed account (email is not required if this is set to true)

            // a few optional settings
            account.Country = "US";                                 // defaults to your country
            account.BusinessName = "Jayme Davis' GitHub, Inc";
            account.BusinessUrl = "http://github.com/jaymedavis";

            var accountService = new StripeAccountService();
            StripeAccount response = accountService.Create(account);
            return Ok();
        }



    }
}
