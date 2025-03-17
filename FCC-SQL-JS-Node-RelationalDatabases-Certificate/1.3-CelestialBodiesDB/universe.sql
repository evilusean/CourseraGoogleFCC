--
-- PostgreSQL database dump
--

-- Dumped from database version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)
-- Dumped by pg_dump version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: asteroid; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.asteroid (
    asteroid_id integer NOT NULL,
    name character varying(50) NOT NULL,
    diameter_in_km integer NOT NULL,
    is_potentially_hazardous boolean,
    orbit_crosses_earth boolean NOT NULL,
    composition text,
    discovery_year integer
);


ALTER TABLE public.asteroid OWNER TO freecodecamp;

--
-- Name: asteroid_asteroid_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.asteroid_asteroid_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.asteroid_asteroid_id_seq OWNER TO freecodecamp;

--
-- Name: asteroid_asteroid_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.asteroid_asteroid_id_seq OWNED BY public.asteroid.asteroid_id;


--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(50) NOT NULL,
    age_in_billions_of_years numeric(5,1),
    diameter_in_light_years integer NOT NULL,
    number_of_stars integer,
    is_spiral boolean NOT NULL,
    has_black_hole boolean
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(50) NOT NULL,
    planet_id integer NOT NULL,
    diameter_in_km integer,
    distance_from_planet_in_km integer NOT NULL,
    is_spherical boolean,
    has_water boolean NOT NULL,
    surface_description text
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(50) NOT NULL,
    star_id integer NOT NULL,
    orbital_period_in_days integer,
    diameter_in_km integer NOT NULL,
    has_atmosphere boolean,
    is_habitable boolean NOT NULL,
    description text,
    distance_from_star_in_au numeric(10,2)
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(50) NOT NULL,
    galaxy_id integer NOT NULL,
    temperature_in_kelvin integer,
    mass_solar_units numeric(8,2) NOT NULL,
    is_binary boolean,
    has_planets boolean NOT NULL,
    spectral_type text
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: asteroid asteroid_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.asteroid ALTER COLUMN asteroid_id SET DEFAULT nextval('public.asteroid_asteroid_id_seq'::regclass);


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: asteroid; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.asteroid VALUES (1, 'Ceres', 939, false, false, 'Rocky with water ice', 1801);
INSERT INTO public.asteroid VALUES (2, 'Vesta', 525, false, false, 'Basaltic surface', 1807);
INSERT INTO public.asteroid VALUES (3, 'Apophis', 370, true, true, 'Silicate rock', 2004);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Milky Way', 13.6, 100000, 4000, true, true);
INSERT INTO public.galaxy VALUES (2, 'Andromeda', 10.1, 220000, 1000, true, true);
INSERT INTO public.galaxy VALUES (3, 'Triangulum', 10.0, 60000, 4000, true, false);
INSERT INTO public.galaxy VALUES (4, 'Centaurus A', 13.3, 60000, 1000, false, true);
INSERT INTO public.galaxy VALUES (5, 'Whirlpool', 0.4, 60000, 1000, true, false);
INSERT INTO public.galaxy VALUES (6, 'Sombrero', 13.3, 50000, 1000, false, true);
INSERT INTO public.galaxy VALUES (10, 'Milky Way 2', 13.6, 100000, 4000, true, true);
INSERT INTO public.galaxy VALUES (11, 'Andromeda Galaxy', 10.1, 220000, 1000, true, true);
INSERT INTO public.galaxy VALUES (12, 'Triangulum Galaxy', 10.0, 60000, 400, true, false);
INSERT INTO public.galaxy VALUES (13, 'Centaurus A Galaxy', 13.3, 60000, 100, false, true);
INSERT INTO public.galaxy VALUES (14, 'Whirlpool Galaxy', 0.4, 60000, 1000, true, false);
INSERT INTO public.galaxy VALUES (15, 'Sombrero Galaxy', 13.3, 50000, 100, false, true);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'Luna', 1, 3474, 384400, true, true, 'Cratered surface with maria');
INSERT INTO public.moon VALUES (2, 'Phobos', 2, 22, 9376, false, false, 'Irregular potato-shaped moon');
INSERT INTO public.moon VALUES (3, 'Deimos', 2, 12, 23463, false, false, 'Small irregular moon');
INSERT INTO public.moon VALUES (4, 'Io', 5, 3643, 421700, true, false, 'Volcanic active surface');
INSERT INTO public.moon VALUES (5, 'Europa', 5, 3122, 671034, true, true, 'Icy surface with subsurface ocean');
INSERT INTO public.moon VALUES (6, 'Ganymede', 5, 5268, 1070412, true, true, 'Largest moon in solar system');
INSERT INTO public.moon VALUES (7, 'Callisto', 5, 4821, 1882709, true, true, 'Heavily cratered surface');
INSERT INTO public.moon VALUES (8, 'Titan', 6, 5150, 1221870, true, true, 'Thick atmosphere and liquid methane');
INSERT INTO public.moon VALUES (9, 'Enceladus', 6, 504, 238020, true, true, 'Icy moon with water geysers');
INSERT INTO public.moon VALUES (10, 'Mimas', 6, 396, 185539, true, false, 'Death Star-like crater');
INSERT INTO public.moon VALUES (11, 'Tethys', 6, 1062, 294619, true, true, 'Large impact crater');
INSERT INTO public.moon VALUES (12, 'Dione', 6, 1123, 377396, true, true, 'Bright icy moon');
INSERT INTO public.moon VALUES (13, 'Rhea', 6, 1527, 527108, true, true, 'Second largest moon of Saturn');
INSERT INTO public.moon VALUES (14, 'Iapetus', 6, 1469, 3560820, true, false, 'Two-toned coloration');
INSERT INTO public.moon VALUES (15, 'Miranda', 7, 472, 129390, true, false, 'Varied and extreme surface features');
INSERT INTO public.moon VALUES (16, 'Ariel', 7, 1158, 190900, true, true, 'Bright surface with few craters');
INSERT INTO public.moon VALUES (17, 'Umbriel', 7, 1169, 266000, true, false, 'Dark surface with many craters');
INSERT INTO public.moon VALUES (18, 'Titania', 7, 1578, 436300, true, true, 'Largest moon of Uranus');
INSERT INTO public.moon VALUES (19, 'Oberon', 7, 1523, 583500, true, true, 'Heavily cratered surface');
INSERT INTO public.moon VALUES (20, 'Triton', 8, 2707, 354759, true, true, 'Retrograde orbit with nitrogen geysers');


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'Earth', 1, 365, 12742, true, true, 'Blue planet with diverse ecosystems', 1.00);
INSERT INTO public.planet VALUES (2, 'Mars', 1, 687, 6779, true, false, 'Red planet with thin atmosphere', 1.52);
INSERT INTO public.planet VALUES (3, 'Venus', 1, 225, 12104, true, false, 'Hot planet with thick atmosphere', 0.72);
INSERT INTO public.planet VALUES (4, 'Mercury', 1, 88, 4879, false, false, 'Small rocky planet closest to the Sun', 0.39);
INSERT INTO public.planet VALUES (5, 'Jupiter', 1, 4333, 139820, true, false, 'Largest gas giant in our solar system', 5.20);
INSERT INTO public.planet VALUES (6, 'Saturn', 1, 10759, 116460, true, false, 'Gas giant with prominent ring system', 9.58);
INSERT INTO public.planet VALUES (7, 'Uranus', 1, 30687, 50724, true, false, 'Ice giant with tilted axis', 19.22);
INSERT INTO public.planet VALUES (8, 'Neptune', 1, 60190, 49244, true, false, 'Blue ice giant with strong winds', 30.05);
INSERT INTO public.planet VALUES (9, 'Proxima b', 2, 11, 12000, true, true, 'Potentially habitable exoplanet', 0.05);
INSERT INTO public.planet VALUES (10, 'Kepler-186f', 6, 130, 11000, true, true, 'Earth-sized exoplanet in habitable zone', 0.40);
INSERT INTO public.planet VALUES (11, 'HD 209458 b', 6, 4, 94000, true, false, 'Hot Jupiter exoplanet', 0.05);
INSERT INTO public.planet VALUES (12, 'TRAPPIST-1e', 5, 6, 9200, true, true, 'Rocky exoplanet in habitable zone', 0.03);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'Sun', 1, 5778, 1.00, false, true, 'G2V');
INSERT INTO public.star VALUES (2, 'Proxima Centauri', 1, 3042, 0.12, true, true, 'M5.5Ve');
INSERT INTO public.star VALUES (3, 'Betelgeuse', 1, 3500, 11.60, false, false, 'M1-2Ia-Iab');
INSERT INTO public.star VALUES (4, 'Sirius', 1, 9940, 2.02, true, false, 'A0mA1Va');
INSERT INTO public.star VALUES (5, 'Alpha Centauri A', 1, 5790, 1.10, true, true, 'G2V');
INSERT INTO public.star VALUES (6, 'Vega', 1, 9602, 2.10, false, true, 'A0Va');


--
-- Name: asteroid_asteroid_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.asteroid_asteroid_id_seq', 3, true);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 15, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 20, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 12, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 6, true);


--
-- Name: asteroid asteroid_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.asteroid
    ADD CONSTRAINT asteroid_name_key UNIQUE (name);


--
-- Name: asteroid asteroid_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.asteroid
    ADD CONSTRAINT asteroid_pkey PRIMARY KEY (asteroid_id);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star star_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

