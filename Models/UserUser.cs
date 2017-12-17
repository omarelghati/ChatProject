using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatProject.Models
{
    public class UserUser
    {
        public long SenderId { get; set; }
        public User Sender { get; set; }

        public long ReceiverId { get; set; }
        public User Receiver { get; set; }
        public bool status { get; set; }
    }
}
