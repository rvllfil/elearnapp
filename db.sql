DROP TABLE IF EXISTS bab CASCADE;
CREATE TABLE bab(
  bab_id INT GENERATED ALWAYS AS IDENTITY,
  urutan_bab INT NOT NULL,
  judul_bab VARCHAR(255) NOT NULL,
  PRIMARY KEY(bab_id) 
);
DROP TABLE IF EXISTS sub_bab CASCADE;
CREATE TABLE sub_bab(
  sub_bab_id INT GENERATED ALWAYS AS IDENTITY,
  bab_id INT NOT NULL,
  urutan_sub_bab INT NOT NULL,
  judul_sub_bab VARCHAR(255) NOT NULL,
  PRIMARY KEY(sub_bab_id), 
  CONSTRAINT fk_bab
    FOREIGN KEY(bab_id)
      REFERENCES bab(bab_id)
      ON DELETE CASCADE
);
DROP TABLE IF EXISTS materi CASCADE;
CREATE TABLE materi(
  materi_id INT GENERATED ALWAYS AS IDENTITY,
  sub_bab_id INT NOT NULL,
  urutan_materi INT NOT NULL,
  judul_materi VARCHAR(255),
  isi_materi TEXT,
  PRIMARY KEY(materi_id), 
  CONSTRAINT fk_sub_bab
    FOREIGN KEY(sub_bab_id)
      REFERENCES sub_bab(sub_bab_id)
      ON DELETE CASCADE
);
DROP TABLE IF EXISTS latihan CASCADE;
CREATE TABLE latihan(
  latihan_id INT GENERATED ALWAYS AS IDENTITY,
  materi_id INT NOT NULL,
  soal VARCHAR,
  jawaban VARCHAR,
  PRIMARY KEY(latihan_id), 
  CONSTRAINT fk_materi
    FOREIGN KEY(materi_id)
      REFERENCES materi(materi_id)
      ON DELETE CASCADE
);
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
  user_id INT GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255) NOT NULL,
  nama VARCHAR(255) NOT NULL,
  jenis_kelamin VARCHAR(20),
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL,
  tanggal_registrasi TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(user_id)
);
DROP TABLE IF EXISTS progress CASCADE;
CREATE TABLE progress(
  progress_id INT GENERATED ALWAYS AS IDENTITY,
  user_id INT NOT NULL,
  bab_id INT NOT NULL,
  sub_bab_id INT NOT NULL,
  completed BOOLEAN DEFAULT TRUE,
  waktu TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(progress_id), 
  CONSTRAINT fk_bab
    FOREIGN KEY(bab_id)
      REFERENCES bab(bab_id)
      ON DELETE CASCADE,
  CONSTRAINT fk_sub_bab
    FOREIGN KEY(sub_bab_id)
      REFERENCES sub_bab(sub_bab_id)
      ON DELETE CASCADE,
  CONSTRAINT fk_user_id
    FOREIGN KEY(user_id)
      REFERENCES users(user_id)
      ON DELETE CASCADE
);

DROP TABLE IF EXISTS quiz CASCADE;
CREATE TABLE quiz(
  quiz_id INT GENERATED ALWAYS AS IDENTITY,
  sub_bab_id INT NOT NULL,
  judul_quiz VARCHAR(255),
  PRIMARY KEY(quiz_id), 
  CONSTRAINT fk_sub_bab
    FOREIGN KEY(sub_bab_id)
      REFERENCES sub_bab(sub_bab_id)
      ON DELETE CASCADE
);
DROP TABLE IF EXISTS soal_quiz CASCADE;
CREATE TABLE soal_quiz(
  soal_quiz_id INT GENERATED ALWAYS AS IDENTITY,
  quiz_id INT NOT NULL,
  text_soal VARCHAR,
  PRIMARY KEY(soal_quiz_id), 
  CONSTRAINT fk_quiz
    FOREIGN KEY(quiz_id)
      REFERENCES quiz(quiz_id)
      ON DELETE CASCADE
);
DROP TABLE IF EXISTS jawaban_quiz CASCADE;
CREATE TABLE jawaban_quiz(
  jawaban_quiz_id INT GENERATED ALWAYS AS IDENTITY,
  soal_quiz_id INT NOT NULL,
  text_jawaban VARCHAR NOT NULL,
  benar BOOLEAN,
  PRIMARY KEY(jawaban_quiz_id), 
  CONSTRAINT fk_soal_quiz
    FOREIGN KEY(soal_quiz_id)
      REFERENCES soal_quiz(soal_quiz_id)
      ON DELETE CASCADE
);
