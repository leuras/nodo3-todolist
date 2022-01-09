CREATE TABLE contact (
	id_user INT NOT NULL,
	id_contact INT NOT NULL,
	PRIMARY KEY (id_user, id_contact),
	CONSTRAINT FOREIGN KEY (id_user) REFERENCES user(id),
	CONSTRAINT FOREIGN KEY (id_contact) REFERENCES user(id)
)