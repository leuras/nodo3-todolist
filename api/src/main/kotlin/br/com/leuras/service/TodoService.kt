package br.com.leuras.service

import br.com.leuras.exception.ModelNotFoundException
import br.com.leuras.model.Todo
import br.com.leuras.model.User

interface TodoService {
    fun add(todo: Todo) : Todo
    fun done(todo: Todo) : Todo
    fun undone(todo: Todo) : Todo
    fun delete(todo: Todo)
    @Throws(ModelNotFoundException::class)
    fun get(id: Int) : Todo
    fun list(user: User) : List<Todo>
}