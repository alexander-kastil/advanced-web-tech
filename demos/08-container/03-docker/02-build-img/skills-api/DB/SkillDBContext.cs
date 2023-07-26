using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SkillsApi
{
    //To manage Migrations & create the DB go to console:
    //[dotnet restore]
    //dotnet ef migrations add MIGRATION-NAME
    //dotnet ef database update

    public class SkillDBContext : DbContext
    {
        public SkillDBContext()
        {

        }

        public SkillDBContext(DbContextOptions<SkillDBContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Skill> Skills { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var sk1 = new Skill {Id=1, Title = "Custom Theme", Completed = true, Hours = 4, DueDate = DateTime.Now.AddMonths(-1) };
            var sk2 = new Skill {Id=2, Title = "Theme Mixins", Completed = false, Hours = 3, DueDate = DateTime.Now.AddMonths(-2) };
            var sk3 = new Skill {Id=3, Title = "Light & Dark Theme", Completed = false, Hours = 2, DueDate = DateTime.Now.AddMonths(2) };
            var sk4 = new Skill {Id=4, Title = "RxJS Operators", Completed = true, Hours = 5, DueDate = DateTime.Now.AddDays(2) };
            var sk5 = new Skill {Id=5, Title = "Custom Operators", Completed = false, Hours = 1, DueDate = DateTime.Now.AddYears(1) };
            modelBuilder.Entity<Skill>().HasData(sk1, sk2, sk3, sk4, sk5);
        }
    }
}