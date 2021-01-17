package br.com.leuras.repository

import br.com.leuras.exception.AuthenticationFailedException
import br.com.leuras.model.User

interface UserRepository : BaseRepository<User> {
    @Throws(AuthenticationFailedException::class)
    fun authenticate(user: User) : User
}