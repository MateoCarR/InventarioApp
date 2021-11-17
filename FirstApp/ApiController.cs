using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace AngularJSData.Controllers
{
	public class ApiController : Controller
    {
        public JsonResult Index()
        {
            using (var db = new Rules.RulesDataContext())
            {
                var rules = db.Rules.ToList();
                return Json(rules, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult Index(string newRule)
        {
            using (var db = new Rules.RulesDataContext())
            {
                db.Rules.InsertOnSubmit(new Rules.rule() { RuleName = newRule });
                db.SubmitChanges();
                var rules = db.Rules.ToList();
                return Json(rules, JsonRequestBehavior.AllowGet);
            }
        }
    }

}