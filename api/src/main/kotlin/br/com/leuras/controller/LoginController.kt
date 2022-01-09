package br.com.leuras.controller

import br.com.leuras.exception.AuthenticationFailedException
import br.com.leuras.model.User
import br.com.leuras.response.ErrorResponse
import br.com.leuras.service.UserService
import javax.enterprise.context.RequestScoped
import javax.inject.Inject
import javax.ws.rs.Consumes
import javax.ws.rs.POST
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

@RequestScoped
@Path("/login")
class LoginController {

    @Inject
    lateinit var service: UserService

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    fun login(user: User): Response {
        return try {
            Response.ok(this.service.authenticate(user)).build()
        } catch (e: AuthenticationFailedException) {
            Response.status(Response.Status.BAD_REQUEST)
                .entity(e.message?.let { ErrorResponse(it) })
                .build()
        }
    }
}
