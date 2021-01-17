package br.com.leuras.repository

import br.com.leuras.exception.ModelNotFoundException
import br.com.leuras.model.User

interface PeopleRepository : BaseRepository<User> {
    fun search(keyword: String) : List<User>
    @Throws(ModelNotFoundException::class)
    fun contactsOf(user: User) : List<User>
}