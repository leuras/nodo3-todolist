package br.com.leuras.controller

import br.com.leuras.exception.ModelNotFoundException
import br.com.leuras.model.User
import br.com.leuras.response.ErrorResponse
import br.com.leuras.service.PeopleService
import br.com.leuras.service.UserService
import javax.enterprise.context.RequestScoped
import javax.inject.Inject
import javax.ws.rs.*
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

@RequestScoped
@Path("/people")
class PeopleController {

    @Inject
    lateinit var peopleService: PeopleService

    @Inject
    lateinit var userService: UserService

    @GET
    @Path("/search/{keyword}")
    @Produces(MediaType.APPLICATION_JSON)
    fun search(@PathParam("keyword") keyword: String) : Response {
        return try {
            Response.ok(this.peopleService.search(keyword)).build()
        } catch (e: Exception) {
            Response.status(Response.Status.NOT_FOUND).build()
        }
    }

    @GET
    @Path("/{userId}/contacts")
    @Produces(MediaType.APPLICATION_JSON)
    fun contacts(@PathParam("userId") userId: Int) : Response {
        return try {
            val user = this.userService.get(userId)
            Response.ok(this.peopleService.contactsOf(user)).build()
        } catch (e: ModelNotFoundException) {
            Response.status(Response.Status.BAD_REQUEST)
                .entity(e.message?.let { ErrorResponse(it) })
                .build()
        }
    }

    @POST
    @Path("/{userId}/contacts/add")
    @Consumes(MediaType.APPLICATION_JSON)
    fun addContact(@PathParam("userId") userId: Int, contact: User) : Response {
        return try {
            val user = this.userService.get(userId)
            this.peopleService.addContact(user, contact)

            Response.noContent().build()
        } catch (e: ModelNotFoundException) {
            Response.status(Response.Status.BAD_REQUEST)
                .entity(e.message?.let { ErrorResponse(it) })
                .build()
        }
    }

    @DELETE
    @Path("/{userId}/contacts/remove")
    @Consumes(MediaType.APPLICATION_JSON)
    fun removeContact(@PathParam("userId") userId: Int, contact: User) : Response {
        return try {
            val user = this.userService.get(userId)
            this.peopleService.removeContact(user, contact)

            Response.noContent().build()
        } catch (e: ModelNotFoundException) {
            Response.status(Response.Status.BAD_REQUEST)
                .entity(e.message?.let { ErrorResponse(it) })
                .build()
        }
    }
}