package br.com.leuras.model

import javax.persistence.*

@Entity
@Table(name = "user")
data class User(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var id: Int? = null,
    var name: String? = null,
    var email: String? = null,
    var password: String? = null
)
