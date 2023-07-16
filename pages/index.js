import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Flex, Select } from "@chakra-ui/react";
import * as Tone from "tone";
import { useEffect, useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [drumPlayer, setDrumPlayer] = useState(null);
  const [chordsPlayer, setChordsPlayer] = useState(null);
  const [bassPlayer, setBassPlayer] = useState(null);
  const [leadPlayer, setLeadPlayer] = useState(null);
  const [accentPlayer, setAccentPlayer] = useState(null);
  const [efxPlayer, setEfxPlayer] = useState(null);
  const [breakdownPlayer, setBreakdownPlayer] = useState(null);
  const [drumSelection, setDrumSelection] = useState("0");
  const [chordsSelection, setChordsSelection] = useState("0");
  const [bassSelection, setBassSelection] = useState("0");
  const [leadSelection, setLeadSelection] = useState("0");
  const [accentSelection, setAccentSelection] = useState("0");
  const [efxSelection, setEfxSelection] = useState("0");
  const [breakdownSelection, setBreakdownSelection] = useState("0");
  const [isLoading, setIsLoading] = useState(true);
  const [isDelaying, setIsDelaying] = useState(false);

  useEffect(() => {
    const drumPlayer = new Tone.Player(
      `https://storage.googleapis.com/playerz_cardz/sonic_voyage/Drums${drumSelection}.mp3`,
      () => {
        setIsLoading(false);
      }
    ).toDestination();
    setDrumPlayer(drumPlayer);
  }, [drumSelection]);

  useEffect(() => {
    const chordsPlayer = new Tone.Player(
      `https://storage.googleapis.com/playerz_cardz/sonic_voyage/Chords${chordsSelection}.mp3`,
      () => {
        setIsLoading(false);
      }
    ).toDestination();
    setChordsPlayer(chordsPlayer);
  }, [chordsSelection]);

  useEffect(() => {
    const bassPlayer = new Tone.Player(
      `https://storage.googleapis.com/playerz_cardz/sonic_voyage/Bass${bassSelection}.mp3`,
      () => {
        setIsLoading(false);
      }
    ).toDestination();
    setBassPlayer(bassPlayer);
  }, [bassSelection]);

  useEffect(() => {
    const leadPlayer = new Tone.Player(
      `https://storage.googleapis.com/playerz_cardz/sonic_voyage/Lead${leadSelection}.mp3`,
      () => {
        setIsLoading(false);
      }
    ).toDestination();
    setLeadPlayer(leadPlayer);
  }, [leadSelection]);

  useEffect(() => {
    const accentPlayer = new Tone.Player(
      `https://storage.googleapis.com/playerz_cardz/sonic_voyage/Accent${accentSelection}.mp3`,
      () => {
        setIsLoading(false);
      }
    ).toDestination();
    setAccentPlayer(accentPlayer);
  }, [accentSelection]);

  useEffect(() => {
    const efxPlayer = new Tone.Player(
      `https://storage.googleapis.com/playerz_cardz/sonic_voyage/EFX${efxSelection}.mp3`,
      () => {
        setIsLoading(false);
      }
    ).toDestination();
    setEfxPlayer(efxPlayer);
  }, [efxSelection]);

  useEffect(() => {
    const breakdownPlayer = new Tone.Player(
      `https://storage.googleapis.com/playerz_cardz/sonic_voyage/Breakdown${breakdownSelection}.mp3`,
      () => {
        setIsLoading(false);
      }
    ).toDestination();
    setBreakdownPlayer(breakdownPlayer);
  }, [breakdownSelection]);

  useEffect(() => {
    if (
      drumPlayer &&
      chordsPlayer &&
      bassPlayer &&
      leadPlayer &&
      accentPlayer &&
      efxPlayer &&
      breakdownPlayer
    ) {
      if (isPlaying) {
        drumPlayer.start();
        chordsPlayer.start();
        bassPlayer.start();
        leadPlayer.start();
        accentPlayer.start();
        efxPlayer.start();
        breakdownPlayer.start();
      } else {
        drumPlayer.stop();
        chordsPlayer.stop();
        bassPlayer.stop();
        leadPlayer.stop();
        accentPlayer.stop();
        efxPlayer.stop();
        breakdownPlayer.stop();
      }
    }
  }, [
    isPlaying,
    drumPlayer,
    chordsPlayer,
    bassPlayer,
    leadPlayer,
    accentPlayer,
    efxPlayer,
    breakdownPlayer,
  ]);

  const handlePlay = () => {
    if (!isLoading && !isDelaying) {
      setIsPlaying(!isPlaying);
      setIsDelaying(true);
      setTimeout(() => {
        setIsDelaying(false);
      }, 2000);
    }
  };

  return (
    <Flex direction="column">
      <Select
        onChange={(event) => {
          setDrumSelection(event.target.value);
          setIsPlaying(false);
        }}
      >
        <option value={"0"}>Drum 1</option>
        <option value={"1"}>Drum 2</option>
        <option value={"2"}>Drum 3</option>
        <option value={"3"}>Drum 4</option>
        <option value={"4"}>Drum 5</option>
      </Select>
      <Select
        onChange={(event) => {
          setChordsSelection(event.target.value);
          setIsPlaying(false);
        }}
      >
        <option value={"0"}>Chords 1</option>
        <option value={"1"}>Chords 2</option>
        <option value={"2"}>Chords 3</option>
        <option value={"3"}>Chords 4</option>
        <option value={"4"}>Chords 5</option>
      </Select>
      <Select
        onChange={(event) => {
          setBassSelection(event.target.value);
          setIsPlaying(false);
        }}
      >
        <option value={"0"}>Bass 1</option>
        <option value={"1"}>Bass 2</option>
        <option value={"2"}>Bass 3</option>
        <option value={"3"}>Bass 4</option>
        <option value={"4"}>Bass 5</option>
      </Select>
      <Select
        onChange={(event) => {
          setLeadSelection(event.target.value);
          setIsPlaying(false);
        }}
      >
        <option value={"0"}>Lead 1</option>
        <option value={"1"}>Lead 2</option>
        <option value={"2"}>Lead 3</option>
        <option value={"3"}>Lead 4</option>
        <option value={"4"}>Lead 5</option>
      </Select>
      <Select
        onChange={(event) => {
          setAccentSelection(event.target.value);
          setIsPlaying(false);
        }}
      >
        <option value={"0"}>Accent 1</option>
        <option value={"1"}>Accent 2</option>
        <option value={"2"}>Accent 3</option>
        <option value={"3"}>Accent 4</option>
        <option value={"4"}>Accent 5</option>
      </Select>
      <Select
        onChange={(event) => {
          setEfxSelection(event.target.value);
          setIsPlaying(false);
        }}
      >
        <option value={"0"}>EFX 1</option>
        <option value={"1"}>EFX 2</option>
        <option value={"2"}>EFX 3</option>
        <option value={"3"}>EFX 4</option>
        <option value={"4"}>EFX 5</option>
      </Select>
      <Select
        onChange={(event) => {
          setBreakdownSelection(event.target.value);
          setIsPlaying(false);
        }}
      >
        <option value={"0"}>Breakdown 1</option>
        <option value={"1"}>Breakdown 2</option>
        <option value={"2"}>Breakdown 3</option>
        <option value={"3"}>Breakdown 4</option>
        <option value={"4"}>Breakdown 5</option>
      </Select>
      <Button onClick={handlePlay} disabled={isLoading || isDelaying}>
        {!isPlaying ? "Play" : "Pause"}
      </Button>
    </Flex>
  );
}
