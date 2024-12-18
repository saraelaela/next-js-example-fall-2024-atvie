-- This file is only my notes, changing
-- this file doesn't change anything in
-- the database
-- Create animals table
CREATE TABLE animals (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
  accessory varchar(30),
  birth_date date NOT NULL
);

-- INSERT INTO
--   animals (
--     first_name,
--     type,
--     accessory,
--     birth_date
--   )
-- VALUES
--   (
--     'Lucia',
--     'Cat',
--     'House',
--     '2019-08-23'
--   ),
--   (
--     'Bili',
--     'Capybaras',
--     'Car',
--     '2010-06-13'
--   ),
--   (
--     'Jojo',
--     'Dog',
--     'Bike',
--     '2011-04-23'
--   ),
--   (
--     'Macca',
--     'Elephant',
--     'Key',
--     '2021-06-22'
--   ),
--   (
--     'Fro',
--     'Duck',
--     'Motor',
--     '2020-06-23'
--   );
INSERT INTO
  items (name, description, date)
VALUES
  (
    'Floor Lamp',
    'A minimalistic floor lamp with a slender silhouette. The curved stem holds a candle-like light, adding a touch of elegance to modern interiors. It provides a warm ambiance and is a sophisticated accent.',
    '2021-08-15'
  ),
  (
    'Sideboard',
    'A contemporary sideboard in natural oak. Clean lines and minimalist aesthetics bring warmth and texture to any space. Its closed storage and elevated design offer both style and function.',
    '2021-09-10'
  ),
  (
    'Modernist Chair',
    'A modernist chair with a sleek chrome frame and a curved wooden seat. The Bauhaus-inspired design, paired with minimalism and functionality, suits modern or industrial interiors.',
    '2022-01-18'
  ),
  (
    'Glass Coffee Table',
    'A sleek coffee table with a thick glass top and stainless steel base. The design blends transparency and reflective surfaces for a sophisticated touch in contemporary or retro interiors.',
    '2021-12-05'
  ),
  (
    'Industrial Armchair',
    'An industrial-style armchair combining brushed steel panels with a wooden seat. The minimalist design is sturdy and bold, ideal for loft-style or modern interiors.',
    '2022-02-20'
  );

-- Read animal from the Database (R in CRUD - Read)
SELECT
  *
FROM
  animals;

CREATE DATABASE next_js_example_fall_2024_atvie;

CREATE USER next_js_example_fall_2024_atvie
WITH
  encrypted password 'next_js_example_fall_2024_atvie';

GRANT ALL privileges ON database next_js_example_fall_2024_atvie TO next_js_example_fall_2024_atvie;

-- \connect next_js_example_fall_2024_atvie
CREATE SCHEMA next_js_example_fall_2024_atvie AUTHORIZATION next_js_example_fall_2024_atvie;
