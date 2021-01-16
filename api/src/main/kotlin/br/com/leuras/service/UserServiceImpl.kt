package br.com.leuras.service

import br.com.leuras.exception.ModelNotFoundException
import br.com.leuras.exception.UserRegistrationException
import br.com.leuras.model.User
import br.com.leuras.repository.UserRepository
import javax.enterprise.context.RequestScoped
import javax.inject.Inject
import javax.persistence.PersistenceException

@RequestScoped
class UserServiceImpl: UserService {

    @Inject
    lateinit var repository: UserRepository

    override fun get(id: Int): User = this.repository.find(id) ?: throw ModelNotFoundException("Usuário não cadastrado.")

    override fun list(): List<User> = this.repository.findAll()

    override fun search(keyword: String): List<User> = this.repository.search(keyword)

    override fun register(user: User): User {
        return try {
            this.repository.save(user)
        } catch (e: PersistenceException) {
            throw UserRegistrationException("User already registered.")
        }
    }

    override fun authenticate(user: User): User = this.repository.authenticate(user)
}