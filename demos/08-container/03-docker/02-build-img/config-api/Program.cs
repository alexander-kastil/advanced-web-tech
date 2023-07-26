using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using SkillsApi;

// Configure Services
WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

IConfiguration configuration = new ConfigurationBuilder()
  .AddJsonFile("appsettings.json")
  .AddEnvironmentVariables()
  .Build();
builder.Services.AddSingleton<IConfiguration>(configuration);
var cfg = configuration.Get<AppConfig>();

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddCors(o => o.AddPolicy("nocors", builder =>
{
    builder
        .SetIsOriginAllowed(host => true)
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials();
}));

if (cfg.App.UseSQLite)
{
    builder.Services.AddDbContext<SkillDBContext>(options => options.UseSqlite(cfg.App.ConnectionStrings.SQLiteDBConnection));
}
else
{
    builder.Services.AddDbContext<SkillDBContext>(opts => opts.UseSqlServer(cfg.App.ConnectionStrings.SQLServerConnection));
}

// Open Api
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Skills-Api", Version = "v1" });
});

var app = builder.Build();

// Request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseCors("nocors");
app.UseSwagger();
app.UseSwaggerUI(c =>
   {
       c.SwaggerEndpoint("/swagger/v1/swagger.json", "Skills Api");
       c.RoutePrefix = string.Empty;
   }
);

app.UseAuthorization();
app.MapControllers();
app.Run();
