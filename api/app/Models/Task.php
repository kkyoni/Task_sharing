<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'user_id', 'completed'];

    public function taskUser()
    {
        return $this->belongsTo(User::class, 'user_id');
    }


    public function taskList()
    {
        return $this->hasMany(\App\Models\TaskList::class, 'task_list_id', 'id');
    }

}
