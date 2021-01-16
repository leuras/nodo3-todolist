package br.com.leuras.service

import br.com.leuras.exception.ModelNotFoundException
import br.com.leuras.model.Todo
import br.com.leuras.model.User
import br.com.leuras.repository.TodoRepository
import javax.enterprise.context.RequestScoped
import javax.inject.Inject

@RequestScoped
class TodoServiceImpl : TodoService {

    @Inject
    lateinit var repository: TodoRepository

    override fun add(todo: Todo): Todo = this.repository.save(todo)

    override fun done(todo: Todo): Todo = this.changeStatus(todo, true)

    override fun undone(todo: Todo): Todo = this.changeStatus(todo, false)

    override fun delete(todo: Todo) = this.repository.delete(todo)

    override fun get(id: Int): Todo = this.repository.find(id) ?: throw ModelNotFoundException("The given item doesn't exist.")

    override fun list(user: User): List<Todo> = this.repository.listAllOf(user)

    private fun changeStatus(todo: Todo, status: Boolean) : Todo {
        todo.done = status
        return this.repository.update(todo)
    }
}