package br.com.leuras.repository

import br.com.leuras.exception.AuthenticationFailedException
import br.com.leuras.model.User
import javax.enterprise.context.RequestScoped
import javax.persistence.NoResultException
import javax.persistence.NonUniqueResultException

@RequestScoped
class UserRepositoryImpl : AbstractRepository<User>(), UserRepository {

    override fun authenticate(user: User): User {
        return try {
            val hql = "From User u Where u.email = :username And password = :password"
            val query = this.manager.createQuery(hql, User::class.java)

            query.setParameter("username", user.email)
            query.setParameter("password", user.password)

            query.singleResult
        } catch (e: Exception) {
            when(e) {
                is NonUniqueResultException,
                is NoResultException -> {
                    throw AuthenticationFailedException("Invalid username and/or password.")
                }
                else -> throw AuthenticationFailedException(e.message ?: "Unknown error.")
            }
        }
    }

    override fun getClassType(): Class<User> = User::class.java
}