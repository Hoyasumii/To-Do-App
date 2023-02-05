using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Application.Models;

namespace Application.Controllers;

public class HomeController : Controller
{
    private readonly ApplicationContext _context;


    private readonly ILogger<HomeController> _logger;

    public HomeController(ApplicationContext context, ILogger<HomeController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpGet]
    public async Task<IActionResult> Index()
    {
        return View(await _context.Tasks.ToListAsync());
    }

    [HttpPost]
    public async Task<IActionResult> Index(string title)
    {
        await _context.Tasks.AddAsync(new ToDoTask(title));
        await _context.SaveChangesAsync();
        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

    [HttpGet("Delete/")]
    public async Task<IActionResult> Delete(int id)
    {
        var task = await _context.Tasks.FindAsync(id);
        _context.Tasks.Remove(task!);
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(Index));
    }

    [HttpGet("Edit/")]
    public async Task<IActionResult> Edit(int id)
    {
        var task = await _context.Tasks.FindAsync(id);
        task!.IsActive = !task.IsActive;
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(Index));
    }

}
