SELECT * 
FROM users
WHERE user_id NOT IN
( SELECT friend_id
  FROM friends
  WHERE user_id = $1 )
AND user_id !=$1;

-- thanks jose