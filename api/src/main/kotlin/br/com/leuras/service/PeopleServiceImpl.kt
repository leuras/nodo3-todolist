package br.com.leuras.service

import br.com.leuras.model.User
import br.com.leuras.repository.PeopleRepository
import javax.enterprise.context.RequestScoped
import javax.inject.Inject

@RequestScoped
class PeopleServiceImpl : PeopleService {

    @Inject
    lateinit var repository: PeopleRepository

    override fun search(keyword: String): List<User> = this.repository.search(keyword)

    override fun contactsOf(user: User): List<User> = this.repository.contactsOf(user)

    override fun addContact(user: User, contact: User) {
        user.contacts.add(contact)
        this.repository.update(user)
    }

    override fun removeContact(user: User, contact: User) {
        user.contacts.removeIf { elm -> elm.id == contact.id }
        this.repository.update(user)
    }
}