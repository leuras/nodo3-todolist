package br.com.leuras.service

import br.com.leuras.exception.ModelNotFoundException
import br.com.leuras.model.User

interface PeopleService {
    fun search(keyword: String) : List<User>
    @Throws(ModelNotFoundException::class)
    fun contactsOf(user: User) : List<User>
    fun addContact(user: User, contact: User)
    fun removeContact(user: User, contact: User)
}