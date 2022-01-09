CREATE TABLE contact (
	id_user INT NOT NULL,
	contact_id INT NOT NULL,
	PRIMARY KEY (id_user, contact_id),
	CONSTRAINT FOREIGN KEY (id_user) REFERENCES user(id),
	CONSTRAINT FOREIGN KEY (contact_id) REFERENCES user(id)
)