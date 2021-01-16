package br.com.leuras.repository

import javax.inject.Inject
import javax.persistence.EntityManager
import javax.transaction.Transactional

abstract class AbstractRepository<T> : BaseRepository<T> {

    @Inject
    open lateinit var manager: EntityManager

    override fun find(id: Int) : T? = this.manager.find(this.getClassType(), id)

    override fun findAll() : List<T> {
        val type = this.getClassType()
        return this.manager.createQuery("from ${type.name}", type).resultList
    }

    @Transactional
    override fun save(entity: T) : T {
        this.manager.persist(entity)
        return entity
    }

    @Transactional
    override fun update(entity: T) : T {
        this.manager.merge(entity)
        return entity
    }

    @Transactional
    override fun delete(entity: T) {
        val model = if (this.manager.contains(entity)) entity else this.manager.merge(entity)
        this.manager.remove(model)
    }
}