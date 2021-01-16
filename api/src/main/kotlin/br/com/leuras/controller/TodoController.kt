package br.com.leuras.controller

import br.com.leuras.exception.ModelNotFoundException
import br.com.leuras.model.Todo
import br.com.leuras.response.ErrorResponse
import br.com.leuras.service.TodoService
import br.com.leuras.service.UserService
import javax.enterprise.context.RequestScoped
import javax.inject.Inject
import javax.ws.rs.*
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

@RequestScoped
@Path("/users/{userId}/todolist")
class TodoController {

    @Inject
    lateinit var todoService: TodoService

    @Inject
    lateinit var userService: UserService

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    fun list(@PathParam("userId") userId: Int) : Response {
        return try {
            val user = this.userService.get(userId)
            Response.ok(this.todoService.list(user)).build()
        } catch (e: ModelNotFoundException) {
            Response.status(Response.Status.BAD_REQUEST)
                .entity(e.message?.let { ErrorResponse(it) })
                .build()
        }
    }

    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    fun add(@PathParam("userId") userId: Int, todo: Todo) : Response = Response.status(Response.Status.CREATED)
        .entity(this.todoService.add(todo))
        .build()

    @PUT
    @Path("/{id}/done")
    @Produces(MediaType.APPLICATION_JSON)
    fun done(@PathParam("userId") userId: Int, @PathParam("id") id: Int) : Response {
        return try {
            val todo = this.todoService.done(this.todoService.get(id))
            Response.ok(todo).build()
        } catch (e: ModelNotFoundException) {
            Response.status(Response.Status.BAD_REQUEST)
                .entity(e.message?.let { ErrorResponse(it) })
                .build()
        }
    }

    @PUT
    @Path("/{id}/undone")
    @Produces(MediaType.APPLICATION_JSON)
    fun undone(@PathParam("userId") userId: Int, @PathParam("id") id: Int) : Response {
        return try {
            val todo = this.todoService.undone(this.todoService.get(id))
            Response.ok(todo).build()
        } catch (e: ModelNotFoundException) {
            Response.status(Response.Status.BAD_REQUEST)
                .entity(e.message?.let { ErrorResponse(it) })
                .build()
        }
    }

    @DELETE
    @Path("/{id}")
    fun delete(@PathParam("userId") userId: Int, @PathParam("id") id: Int) : Response {
        return try {
            this.todoService.delete(Todo(id = id))
            Response.noContent().build()
        } catch (e: ModelNotFoundException) {
            Response.status(Response.Status.BAD_REQUEST)
                .entity(e.message?.let { ErrorResponse(it) })
                .build()
        }
    }
}