using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace User_Interface.Controllers
{
    public class AttendanceController : Controller
    {
        public ActionResult StudentAttendance()
        {
            return View();
        }
        public ActionResult StudentDescipline()
        {
            return View();
        }
        public ActionResult TeacherAttendance()
        {
            return View();
        }
    }
}