CREATE DATABASE personalweb;

CREATE TABLE IF NOT EXISTS post (
   post_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1),
   title VARCHAR(128) NOT NULL,
   content VARCHAR NOT NULL,
   preview VARCHAR NOT NULL,
   user_id INT NOT NULL,
   CONSTRAINT fk_user
      FOREIGN KEY(user_id)
         REFERENCES pw_user(user_id)
);

CREATE TABLE IF NOT EXISTS pw_user (
   user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY(START WITH 1 INCREMENT BY 1),
   email VARCHAR(256) UNIQUE NOT NULL,
   password VARCHAR NOT NULL
);

INSERT INTO post(title, content, preview) VALUES ('test', 'test', 'test');

INSERT INTO pw_user(email, password, salt) VALUES ('test', 'test', 'test');

DROP TABLE post;
DROP TABLE pw_user;