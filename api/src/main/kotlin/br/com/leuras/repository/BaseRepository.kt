package br.com.leuras.repository

interface BaseRepository<T> {
    fun find(id: Int): T?
    fun findAll(): List<T>
    fun save(entity: T) : T
    fun update(entity: T) : T
    fun delete(entity: T)
    fun getClassType() : Class<T>
}