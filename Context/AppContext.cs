using ChatProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatProject.Context
{
    public class AppContext : DbContext
    {
        public AppContext(DbContextOptions<AppContext> options) : base(options){}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Friendship>()
                .HasKey(t => new { t.ReceiverId, t.SenderId});

            modelBuilder.Entity<Friendship>()
              .HasOne(pt => pt.Sender)
              .WithMany(t => t.PossibleFriends).Metadata.DeleteBehavior = DeleteBehavior.Restrict; 
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<User>()
                       .Property(b => b.DateOfJoin)
                       .HasDefaultValueSql("getdate()"); 



        }

        public DbSet<User> Users { get; set; }
        public DbSet<Friendship> Friendship { get; set; }
    }
}
