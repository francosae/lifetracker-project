CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  password    TEXT NOT NULL,
  username    TEXT NOT NULL UNIQUE,
  email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  first_name  TEXT,
  last_name   TEXT,
  updated_at  TIMESTAMP NOT NULL DEFAULT NOW(),
  created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE nutrition (
  id          SERIAL PRIMARY KEY,
  title        TEXT NOT NULL,
  category    TEXT NOT NULL,
  calories    INTEGER NOT NULL,
  quantity    INTEGER NOT NULL,
  image_url   TEXT NOT NULL,
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, 
  created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);
