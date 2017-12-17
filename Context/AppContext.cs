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
            modelBuilder.Entity<UserUser>()
                .HasKey(t => new { t.ReceiverId, t.SenderId});

            modelBuilder.Entity<UserUser>()
                .HasOne(pt => pt.Sender)
                .WithMany(p => p.SentF)
                .HasForeignKey(pt => pt.SenderId);

            modelBuilder.Entity<UserUser>()
                .HasOne(pt => pt.Receiver)
                .WithMany(t => t.ReceivedF)
                .HasForeignKey(pt => pt.ReceiverId);

            foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.Restrict;
            }

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<User> Users { get; set; }
    }
}
