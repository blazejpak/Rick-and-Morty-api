import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { FaArrowLeft } from "react-icons/fa";

import styles from "./DetailCharacter.module.scss";
import Button from "../../components/UI/Button";

type Character = {
  created: string;
  episode: Array<string>;
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
};

type Episode = {
  air_date: string;
  character: Array<string>;
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
};

const DetailCharacter = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams().id;
  const [dataCharacter, setDataCharacter] = useState<Character>();

  const [episodes, setEpisodes] = useState<any>([]);
  const [episodesData, setEpisodesData] = useState<Episode | undefined>();

  console.log(episodesData);
  console.log(typeof episodesData);

  useEffect(() => {
    const charId = dataCharacter?.episode.map((element) => {
      return element.split("/").pop() || "";
    });
    const stringEpisodes = charId?.join(",");
    setEpisodes(stringEpisodes);
  }, [dataCharacter]);

  useEffect(() => {
    const fetchData = async () => {
      if (episodes) {
        const data = await fetch(
          `https://rickandmortyapi.com/api/episode/${episodes}`
        );
        const response = await data.json();
        setEpisodesData(response);
        return response;
      }
    };
    fetchData();
  }, [episodes]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/${params}`
      );
      const response = await data.json();
      setDataCharacter(response);
      return response;
    };
    fetchData();
  }, [params]);

  const handleBack = () => {
    dispatch({
      type: "getData/editURI",
      payload: `https://rickandmortyapi.com/api/character`,
    });
    navigate("/");
  };

  let returnEpisodes;

  if (Array.isArray(episodesData)) {
    returnEpisodes = episodesData?.map((item) => {
      return (
        <li key={item.id} className={styles.list}>
          <div>
            <p>Name:</p>
            <h4>{item.name}</h4>
          </div>
          <div>
            <p>Episode:</p>
            <h4>{item.episode}</h4>
          </div>
        </li>
      );
    });
  } else if (episodesData) {
    returnEpisodes = (
      <li key={episodesData.id} className={styles.list}>
        <div>
          <p>Name:</p>
          <h4>{episodesData.name}</h4>
        </div>
        <div>
          <p>Episode:</p>
          <h4>{episodesData.episode}</h4>
        </div>
      </li>
    );
  }

  return (
    <section className={styles.container}>
      <Button onClick={handleBack}>
        <FaArrowLeft size={16} />
        <p>Go back</p>
      </Button>
      <div className={styles.content}>
        <div>
          <img src={dataCharacter?.image} />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>
            <p>Name:</p>
            <h2>{dataCharacter?.name}</h2>
          </div>
          <div className={styles.name}>
            <p>Status:</p>
            <h3>{dataCharacter?.status}</h3>
          </div>
          <div className={styles.name}>
            <p>Location:</p>
            <h3>{dataCharacter?.location.name}</h3>
          </div>
          <div className={styles.name}>
            <p>Gender:</p>
            <h3>{dataCharacter?.gender}</h3>
          </div>
        </div>
      </div>

      <ul className={styles.lists}>
        <h3 className={styles.heading}>Seen In</h3>
        <div>{returnEpisodes}</div>
      </ul>
    </section>
  );
};

export default DetailCharacter;
