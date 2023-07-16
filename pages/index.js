import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Button,
  Flex,
  Select,
  Text,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
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

  const [isLargerThan500] = useMediaQuery("(min-height: 500px)");

  useEffect(() => {
    const drumPlayer = new Tone.Player(
      `https://storage.googleapis.com/playerz_cardz/sonic_voyage/Drums${drumSelection}.mp3`,
      () => {
        setIsLoading(false);
      }
    ).toDestination();
    setDrumPlayer(drumPlayer);
    console.log("isLargerThan500 = ", isLargerThan500);
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
    <Flex justify={"center"}>
      <Image
        zIndex={-1}
        src={
          "https://storage.googleapis.com/playerz_cardz/sonic_voyage_img/zzbackground.png"
        }
        position={"absolute"}
        h={"100vh"}
        w={"100vh"}
      />
      <Flex
        direction="column"
        w={"100vh"}
        h={"100vh"}
        justify={"space-between"}
        px={"2.5%"}
        boxSizing="border-box"
      >
        <Image
          mt={!isLargerThan500 ? "1%" : "5%"}
          borderRadius="20px"
          backgroundColor={"rgba(157, 144, 240, 0.6)"}
          src="https://bafybeih67trchaypi4onwg3avlzi3g727ghpjuwfcjpmm5bsk4u6odf3ly.ipfs.nftstorage.link/cooltext439515875310943.png"
        />
        <Flex
          direction="row"
          alignItems="center"
          backgroundColor={"rgba(149, 156, 151, 0.8)"}
          boxShadow={"4px 4px 12px 0px #9d90f0"}
          borderRadius="20px"
          
        >
          <Text w="10%" ml="2%" minW={"80px"} fontSize={isLargerThan500 ? "L" : "sm"}>
            Bass
          </Text>
          <Select
            onChange={(event) => {
              setBassSelection(event.target.value);
              setIsPlaying(false);
            }}
            variant="filled"
            borderRadius="20px"
            backgroundColor={"rgba(149, 156, 151, 0.0)"}
            h={isLargerThan500 ? "50px" : "30px"}
          >
            <option value={"0"}>Bridge Plucker</option>
            <option value={"1"}>Subpumper</option>
            <option value={"2"}>Fat Bottom</option>
            <option value={"3"}>Bass Pusher</option>
            <option value={"4"}>Arpeggiator</option>
          </Select>
        </Flex>
        <Flex
          direction="row"
          alignItems="center"
          backgroundColor={"rgba(149, 156, 151, 0.8)"}
          us="20px"
          boxShadow={"4px 4px 12px 0px #9d90f0"}
          borderRadius="20px"
        >
          <Text w="10%" ml="2%" minW={"80px"} fontSize={isLargerThan500 ? "L" : "sm"}>
            Drums
          </Text>
          <Select
            onChange={(event) => {
              setDrumSelection(event.target.value);
              setIsPlaying(false);
            }}
            variant="filled"
            borderRadius="20px"
            backgroundColor={"rgba(149, 156, 151, 0.0)"}
            h={isLargerThan500 ? "50px" : "30px"}
          >
            <option value={"0"}>Tambist</option>
            <option value={"1"}>8bit Drummer</option>
            <option value={"2"}>The Slomo</option>
            <option value={"3"}>Heartbeat</option>
            <option value={"4"}>House Drummer</option>
          </Select>
        </Flex>
        <Flex
          direction="row"
          alignItems="center"
          backgroundColor={"rgba(149, 156, 151, 0.8)"}
          us="20px"
          boxShadow={"4px 4px 12px 0px #9d90f0"}
          borderRadius="20px"
        >
          <Text w="10%" ml="2%" minW={"80px"} fontSize={isLargerThan500 ? "L" : "sm"}>
            Lead
          </Text>
          <Select
            onChange={(event) => {
              setLeadSelection(event.target.value);
              setIsPlaying(false);
            }}
            variant="filled"
            borderRadius="20px"
            backgroundColor={"rgba(149, 156, 151, 0.0)"}
            h={isLargerThan500 ? "50px" : "30px"}
          >
            <option value={"0"}>The Traveler</option>
            <option value={"1"}>The Visitor</option>
            <option value={"2"}>Whistler</option>
            <option value={"3"}>Sonic Voyage</option>
            <option value={"4"}>The Bull</option>
          </Select>
        </Flex>
        <Flex
          direction="row"
          alignItems="center"
          backgroundColor={"rgba(149, 156, 151, 0.8)"}
          us="20px"
          boxShadow={"4px 4px 12px 0px #9d90f0"}
          borderRadius="20px"
        >
          <Text w="10%" ml="2%" minW={"80px"} fontSize={isLargerThan500 ? "L" : "sm"}>
            Chords
          </Text>
          <Select
            onChange={(event) => {
              setChordsSelection(event.target.value);
              setIsPlaying(false);
            }}
            variant="filled"
            borderRadius="20px"
            backgroundColor={"rgba(149, 156, 151, 0.0)"}
            h={isLargerThan500 ? "50px" : "30px"}
          >
            <option value={"0"}>Pump It Up</option>
            <option value={"1"}>The Vibist</option>
            <option value={"2"}>The Cheesist</option>
            <option value={"3"}>Mr Smooth</option>
            <option value={"4"}>Feedback Loop</option>
            <option value={"5"}>The Rhodes Trip</option>
          </Select>
        </Flex>
        <Flex
          direction="row"
          alignItems="center"
          backgroundColor={"rgba(149, 156, 151, 0.8)"}
          us="20px"
          boxShadow={"4px 4px 12px 0px #9d90f0"}
          borderRadius="20px"
        >
          <Text w="10%" ml="2%" minW={"80px"} fontSize={isLargerThan500 ? "L" : "sm"}>
            Accent
          </Text>
          <Select
            onChange={(event) => {
              setAccentSelection(event.target.value);
              setIsPlaying(false);
            }}
            variant="filled"
            borderRadius="20px"
            backgroundColor={"rgba(149, 156, 151, 0.0)"}
            h={isLargerThan500 ? "50px" : "30px"}
          >
            <option value={"0"}>Synth Poker</option>
            <option value={"1"}>Airhead</option>
            <option value={"2"}>Synth Flight</option>
            <option value={"3"}>The Dubber</option>
            <option value={"4"}>The Skank</option>
            <option value={"5"}>The Jumper</option>
          </Select>
        </Flex>
        <Flex
          direction="row"
          alignItems="center"
          backgroundColor={"rgba(149, 156, 151, 0.8)"}
          us="20px"
          boxShadow={"4px 4px 12px 0px #9d90f0"}
          borderRadius="20px"
        >
          <Text w="10%" ml="2%" minW={"80px"} fontSize={isLargerThan500 ? "L" : "sm"}>
            EFX
          </Text>
          <Select
            onChange={(event) => {
              setEfxSelection(event.target.value);
              setIsPlaying(false);
            }}
            variant="filled"
            borderRadius="20px"
            backgroundColor={"rgba(149, 156, 151, 0.0)"}
            h={isLargerThan500 ? "50px" : "30px"}
          >
            <option value={"0"}>The Polygraph</option>
            <option value={"1"}>Emergency</option>
            <option value={"2"}>Telegrapher</option>
            <option value={"3"}>The Arcade</option>
            <option value={"4"}>The Radio</option>
            <option value={"5"}>The Airhorn</option>
            <option value={"6"}>Transmitter</option>
            <option value={"7"}>Checked Out</option>
            <option value={"8"}>The Cyborg</option>
          </Select>
        </Flex>
        <Flex
          direction="row"
          alignItems="center"
          backgroundColor={"rgba(149, 156, 151, 0.8)"}
          us="20px"
          boxShadow={"4px 4px 12px 0px #9d90f0"}
          borderRadius="20px"
        >
          <Text w="10%" ml="2%" minW={"80px"} fontSize={isLargerThan500 ? "L" : "sm"}>
            Breakdown
          </Text>
          <Select
            onChange={(event) => {
              setBreakdownSelection(event.target.value);
              setIsPlaying(false);
            }}
            variant="filled"
            borderRadius="20px"
            backgroundColor={"rgba(149, 156, 151, 0.0)"}
            h={isLargerThan500 ? "50px" : "30px"}
            
          >
            <option value={"0"}>The Gospel</option>
            <option value={"1"}>Ascender</option>
            <option value={"2"}>The Lab</option>
            <option value={"3"}>Shredders</option>
            <option value={"4"}>The Shepherd</option>
            <option value={"5"}>70s Vibez</option>
            <option value={"6"}>The Stairway</option>
            <option value={"7"}>The Comic</option>
          </Select>
        </Flex>
        <Button
          onClick={handlePlay}
          disabled={isLoading || isDelaying}
          mb={"5%"}
          borderRadius={"20px"}
          backgroundColor={!isPlaying ? "green.300" : "red.300"}
          minH={"30px"}
        >
          {!isPlaying ? "Play" : "Pause"}
        </Button>
      </Flex>
    </Flex>
  );
}
