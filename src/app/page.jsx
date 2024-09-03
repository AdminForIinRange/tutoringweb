"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/components/landingPage/homePage/homePage";
import onePieceOFbackground from "./assets/svg/onePieceOFbackground.svg";
import { VStack } from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <HomePage />
      <VStack

        className="animate__animated animate__fadeIn"
        justify={"center"}
        align={"center"}
        px={"5px"}
        position={"absolute"}
        top={"0px"}
        zIndex={"-4"}
        left={0}
        right={0}
      > 

{/* Light Mode already forced on */}
        <Image src={onePieceOFbackground} alt="BackGround" style={{ filter: "brightness(0)" }} /> 
        <Image src={onePieceOFbackground} alt="BackGround" style={{ filter: "brightness(0)" }} />
        <Image src={onePieceOFbackground} alt="BackGround" style={{ filter: "brightness(0)" }} />
        <Image src={onePieceOFbackground} alt="BackGround" style={{ filter: "brightness(0)" }} />
        <Image src={onePieceOFbackground} alt="BackGround" style={{ filter: "brightness(0)" }} />
        <Image src={onePieceOFbackground} alt="BackGround" style={{ filter: "brightness(0)" }} />
        <Image src={onePieceOFbackground} alt="BackGround" style={{ filter: "brightness(0)" }} />
        <Image src={onePieceOFbackground} alt="BackGround" style={{ filter: "brightness(0)" }} />
        <Image src={onePieceOFbackground} alt="BackGround" style={{ filter: "brightness(0)" }} />
        <Image src={onePieceOFbackground} alt="BackGround" style={{ filter: "brightness(0)" }} />
        <Image src={onePieceOFbackground} alt="BackGround" style={{ filter: "brightness(0)" }} />
        <Image src={onePieceOFbackground} alt="BackGround" style={{ filter: "brightness(0)" }} />
      </VStack>
    </>
  );
}
