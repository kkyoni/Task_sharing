<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskList extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'completed', 'task_list_id'];

    public function taskList()
    {
        return $this->belongsTo(Task::class, 'task_list_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
