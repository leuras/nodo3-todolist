package br.com.leuras.repository

import br.com.leuras.model.Todo
import br.com.leuras.model.User

interface TodoRepository : BaseRepository<Todo> {
    fun listAllOf(user: User) : List<Todo>
}