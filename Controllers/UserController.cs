using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChatProject.Models;   
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChatProject.Controllers
{
    [Produces("application/json")]
    [Route("api/User")]
    public class UserController : Controller
    {
        public  Context.AppContext context { get; }

        public UserController(Context.AppContext context)
        {
            this.context = context;
        }
        [HttpGet("All")]
        public async Task<IEnumerable<User>> All()
        {
            return  await context.Users.ToListAsync();
        }
        [HttpPost("login")]
        public IActionResult login([FromBody]User user)
        {
            var usr = context.Users.SingleOrDefault(u => u.Username.Equals(user.Username) && u.Password.Equals(user.Password));
            if (usr == null)
                return new ObjectResult("UserNotFound");
            return Ok(user);
        }
    }
}