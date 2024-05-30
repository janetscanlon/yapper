-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
DROP TABLE "user";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (80),
    "pronouns" VARCHAR (20),
    "friends_list" VARCHAR (100)
);

--seed data for user table
INSERT INTO "user" ("username", "password", "first_name", "pronouns") 
VALUES
('usertest', 'passwordtest', 'first name', 'she/they');

CREATE TABLE "reviews"(
	"id" SERIAL PRIMARY KEY,
	"book_title" VARCHAR (100),
	"book_author" VARCHAR (100),
	"genre" VARCHAR (100),
	"rating" INTEGER,
	"review_input" VARCHAR (1000), 
	"review_timestamp" TIMESTAMP,
	"user_id" INT REFERENCES "user" NOT NULL
	);
	
	
DROP TABLE "reviews" CASCADE;

--seed data for reviews table
INSERT INTO "reviews" 
                    ("book_title", "book_author", "genre", 	"rating", "review_input", "review_timestamp", "user_id")
                        VALUES
                          ('A Court of Thorns and Roses', 'Sarah J. Maas', 'fantasy', 5, 'If tamlin has no haters I am dead.', current_timestamp, 3);

CREATE TABLE "review_comments"(
	"id" SERIAL PRIMARY KEY,
	"user_id" int REFERENCES "user",
	"review_id" int REFERENCES "reviews",
	"comment_input" VARCHAR (500),
	"comment_timestamp" TIMESTAMP
	); 
	
CREATE TABLE "review_likes"(
	"id" SERIAL PRIMARY KEY,
	"user_id" int REFERENCES "user",
	"review_id" int REFERENCES "reviews"
	);
	
--STRETCH friends_list table

SELECT
	"reviews"."id",
	"reviews"."user_id",
	"reviews".book_author,
	"reviews".book_title,
	"reviews".genre,
	"reviews".review_input,
	"reviews".review_timestamp,
	"reviews".rating,
	COUNT("review_likes".id) AS "like_count",
	"user".first_name AS "reviewAuthor_firstName",
	"user".pronouns AS "reviewAuthor_pronouns"
FROM "follow"
	JOIN "reviews"
	ON "follow".followed_user_id = "reviews".user_id
	LEFT JOIN "review_likes"
	ON "reviews"."id" = "review_likes"."review_id"
	JOIN "user"
	ON "reviews"."user_id" = "user"."id"
WHERE "follow".user_id = 6
	
	
	GROUP BY "reviews".id, "user".id
	ORDER BY "reviews".id;