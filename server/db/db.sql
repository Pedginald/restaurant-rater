CREATE TABLE reviews (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
	name VARCHAR(50) NOT NULL,
	reviews TEXT NOT NULL,
	ratings INT NOT NULL check(rating >= 1 and rating <= 5)
)