## Notes

* data looks like this from db looks like: 
{
book_author: 
    "test author"
book_title: 
    "testy"
genre: 
    "genre"
review_id: 
    1
rating: 
    4
review_input: 
    "test review"
review_timestamp: 
    "2024-05-26T16:21:28.704Z"
user_id: 
    3
like_count:
    2
user_firstName:
    firstName
user_pronouns: 
    pronouns 
    }


## SQL NOTES 

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