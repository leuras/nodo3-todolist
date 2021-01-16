package br.com.leuras.repository

import br.com.leuras.model.Todo
import br.com.leuras.model.User
import javax.enterprise.context.RequestScoped

@RequestScoped
class TodoRepositoryImpl : AbstractRepository<Todo>(), TodoRepository {

    override fun listAllOf(user: User) : List<Todo> {
        val hql = "From Todo t Where t.owner = :user"
        val query = this.manager.createQuery(hql, Todo::class.java)
        query.setParameter("user", user)

        return query.resultList
    }

    override fun getClassType(): Class<Todo> = Todo::class.java
}