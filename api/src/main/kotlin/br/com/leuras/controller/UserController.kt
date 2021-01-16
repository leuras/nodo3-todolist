package br.com.leuras.controller

import br.com.leuras.exception.ModelNotFoundException
import br.com.leuras.exception.UserRegistrationException
import br.com.leuras.model.User
import br.com.leuras.response.ErrorResponse
import br.com.leuras.service.UserService
import javax.enterprise.context.RequestScoped
import javax.inject.Inject
import javax.ws.rs.Consumes
import javax.ws.rs.GET
import javax.ws.rs.POST
import javax.ws.rs.Path
import javax.ws.rs.PathParam
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

@RequestScoped
@Path("/users")
class UserController {

    @Inject
    lateinit var service: UserService

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    fun list() : Response = Response.ok(this.service.list()).build()

    @GET
    @Path("/search/{keyword}")
    @Produces(MediaType.APPLICATION_JSON)
    fun search(@PathParam("keyword") keyword: String) : Response {
        return try {
            Response.ok(this.service.search(keyword)).build()
        } catch (e: Exception) {
            Response.status(Response.Status.NOT_FOUND).build()
        }
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    fun profile(@PathParam("id") id: Int) : Response {
        return try {
            Response.ok(this.service.get(id)).build()
        } catch (e: ModelNotFoundException) {
            Response.status(Response.Status.NOT_FOUND)
                .entity(e.message?.let { ErrorResponse(it) })
                .build()
        }
    }

    @POST
    @Path("/register")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    fun register(user: User) : Response {
        return try {
            Response.status(Response.Status.CREATED)
                .entity(this.service.register(user))
                .build()
        } catch (e: UserRegistrationException) {
            Response.status(Response.Status.BAD_REQUEST)
                .entity(e.message?.let { ErrorResponse(it) })
                .build()
        }
    }
}