using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Application.Models;

public class ApplicationContext : DbContext
{
    public DbSet<ToDoTask> Tasks { get; set; } = null!;

    private static readonly ILoggerFactory _logger = LoggerFactory.Create(p => p.AddConsole());

    public string DbPath { get; set; } = null!;

    public ApplicationContext()
    {
        DbPath = $@"database.sqlite";
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options){
    options
    .UseLoggerFactory(_logger)
    .UseSqlite($"Data Source = {DbPath}");

    }

}