DROP DATABASE IF EXISTS `album`;
CREATE DATABASE IF NOT EXISTS `album` DEFAULT CHARSET utf8 DEFAULT COLLATE utf8_general_ci;
CREATE USER IF NOT EXISTS 'master'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON album.* TO 'master'@'localhost';
USE album;

-- ALBUM
DROP TABLE IF EXISTS `ALBUM`;
CREATE TABLE `ALBUM` (
	`album_id`        		INT				PRIMARY KEY	   AUTO_INCREMENT	NOT NULL COMMENT '앨범아이디',
	`album_title` 			VARCHAR(255)                    				NOT NULL COMMENT '제목',
	`album_image_uri`     	VARCHAR(255)  									NOT NULL COMMENT '커버사진 경로',
	`album_artist`  		VARCHAR(255)    								NOT NULL COMMENT '아티스트',
	`album_published_date` 	DATE                        					NOT NULL COMMENT '발행일',
	`album_tracklist`       JSON                 							NOT NULL COMMENT '트랙리스트',
    `album_soundtrack_uri`	JSON											NOT NULL COMMENT '음원 경로',
    `album_genre`			VARCHAR(255)									NOT NULL COMMENT '장르',
    `album_company`			VARCHAR(255)											 COMMENT '기획사',
    `album_description`		VARCHAR(255)											 COMMENT '내용',
	`album_isDeleted` 		BOOLEAN                         				NOT NULL DEFAULT TRUE COMMENT '앨범상태 (True=활성화, False=비활성화)'
) ENGINE = `InnoDB` DEFAULT CHARACTER SET = `utf8`;

-- ALBUM MOCKUP DATA
INSERT INTO ALBUM (album_title, album_image_uri, album_artist, album_published_date, album_tracklist,
album_soundtrack_uri, album_genre, album_company, album_description) VALUE

('Shostakovich:Piano Concertos, Three Fantastic Dances, Preludes & Fugues.', './asset/img/1.jpg', 'Dmitri Shostakovich', 20030815, 
'["I. Allegro moderato - Allegro vivace - Moderato -", "II. Lento", "III. Moderato", " IV. Allegro con brio - Presto - Allegretto poco moderato - Allegro con brio"]',
'["./asset/soundtrack/shostakovich_piano_concerto_1.mp3", "./asset/soundtrack/shostakovich_piano_concerto_2.mp3", "./asset/soundtrack/shostakovich_piano_concerto_3.mp3", "/soundtrack/shostakovich_piano_concerto_4.mp3"]',
'클래식', '워너뮤직코리아', ''),

('Inception', './asset/img/2.jpg', 'Hans Zimmer', 20100729,
'["Half Remembered Dream", "We Built Our Own World", "Dream Is Collapsing", "Time"]',
'["./asset/soundtrack/hans_zimmer_1.mp3", "./asset/soundtrack/hans_zimmer_2.mp3", "./asset/soundtrack/hans_zimmer_3.mp3", "/soundtrack/hans_zimmer_4.mp3"]',
'OST', '워너뮤직코리아', '다크 나이트의 스케일과 매트릭스의 미래가 만났다!/n 생각을 훔치는 거대한 전쟁이 시작됐다!/n
<다크 나이트> 크리스토퍼 놀란 감독의 SF액션스릴러 <인셉션>/n
영화 음악계의 거장 한스 짐머 고유의 웅장한 스코어로 영화의 긴장감을 고조시키다!/n
80년대 영국을 사로잡았던 밴드 The Smith 의 기타리스트 쟈니 마(Johnny Marr)의 참여 또한 화제가 되고 있는 올 여름 최고의 블록버스터 사운드트랙!'),

('Cinema Paradiso', './asset/img/3.jpg', 'Ennio Morricone', 19900000,
'["Love Theme", "Maturity", "While Thinking About Her Again", "Childhood And Manhood"]',
'["./asset/soundtrack/ennio_morricone_1.mp3", "./asset/soundtrack/ennio_morricone_2.mp3", "./asset/soundtrack/ennio_morricone_3.mp3", "/soundtrack/ennio_morricone_4.mp3"]',
'OST', 'Gdm', '');