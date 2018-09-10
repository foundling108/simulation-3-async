create table USERS (
	user_id SERIAL PRIMARY KEY,
	auth0_id VARCHAR(100),
	user_image VARCHAR(150),
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	gender VARCHAR(6),
	hair_color VARCHAR(5),
	eye_color VARCHAR(5),
	hobby VARCHAR(13),
	birth_day VARCHAR(2),
	birth_month VARCHAR(2),
	birth_year VARCHAR(4)
);
