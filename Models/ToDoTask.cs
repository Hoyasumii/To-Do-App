using System.ComponentModel.DataAnnotations;
using System.Globalization;

using Microsoft.EntityFrameworkCore;

namespace Application.Models;

public class ToDoTask {
    [Key]
    public int Id { get; private set; }

    [Required]
    public string Title { get; private set; } = null!;

    public bool IsActive { get; set; }

    public ToDoTask(string title) {
        Title = title;
        IsActive = false;
    }

    public override string ToString() {
        return $"{Id}, {Title}, {IsActive}";
    }

}