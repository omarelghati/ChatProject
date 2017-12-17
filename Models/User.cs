using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChatProject.Models
{
    public class User
    {
        public long Id { get; set; }
        [Required]
        [StringLength(30)]
        public string FName { get; set; }
        [Required]
        [StringLength(30)]
        public string LName { get; set; }
        [Required]
        [StringLength(30)]
        public string Username { get; set; }
        [Required]
        [StringLength(255, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public string Phone { get; set; }

        [DataType(DataType.DateTime)]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
        private DateTime _DateOfJoin;
        public DateTime DateOfJoin
        {
            get
            {
                return (_DateOfJoin == null) ? DateTime.Now : _DateOfJoin;
            }
            set { _DateOfJoin = value; }
        }
        //public virtual List<User> MyProperty { get; set; }

    }
}
