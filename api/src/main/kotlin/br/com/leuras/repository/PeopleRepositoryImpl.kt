package br.com.leuras.repository

import br.com.leuras.model.User
import javax.enterprise.context.RequestScoped
import javax.persistence.NoResultException

@RequestScoped
class PeopleRepositoryImpl : AbstractRepository<User>(), PeopleRepository {

    override fun search(keyword: String): List<User> {
        val hql = "From User u Where lower(u.name) like :keyword Or lower(u.email) like :keyword"
        val query = this.manager.createQuery(hql, User::class.java)
        query.setParameter("keyword", "%${keyword.toLowerCase()}%")

        return query.resultList
    }

    override fun contactsOf(user: User): List<User> {
        val hql = "Select u From User u Join Fetch u.contacts Where u = :user"
        val query = this.manager.createQuery(hql, User::class.java)
        query.setParameter("user", user)

        return try {
            query.singleResult.contacts
        } catch (e: NoResultException) {
            ArrayList()
        }
    }

    override fun getClassType(): Class<User> = User::class.java
}