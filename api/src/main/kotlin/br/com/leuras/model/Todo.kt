package br.com.leuras.model

import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity
@Table(name = "todo")
data class Todo(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var id: Int? = null,
    var description: String? = null,
    var done: Boolean? = false,
    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "id_user") var owner: User? = null
)
