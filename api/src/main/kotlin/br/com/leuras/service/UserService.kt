package br.com.leuras.service

import br.com.leuras.exception.AuthenticationFailedException
import br.com.leuras.exception.ModelNotFoundException
import br.com.leuras.exception.UserRegistrationException
import br.com.leuras.model.User

interface UserService {
    @Throws(ModelNotFoundException::class)
    fun get(id: Int) : User
    fun list() : List<User>
    @Throws(UserRegistrationException::class)
    fun register(user: User) : User
    @Throws(AuthenticationFailedException::class)
    fun authenticate(user: User) : User
}