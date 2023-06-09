'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { Image } from "@nextui-org/react";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch; /* 너비를 균등하게 차지하도록 설정 */
    justify-content: center;
    height: 30vh;
    background-color: white;
`;

const StyledButton = styled.button`
    background-color: #2196f3;
    color: white;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    transition-duration: 0.4s;
    width: 100%; /* 너비를 100%로 설정 */
    &:hover {
        background-color: white; 
        color: black; 
        border: 2px solid #2196f3;
    }
`;

export default function Main() {
    return (
        <div>
            <Image
            width={320}
            height={180}
            src="/logo.png" // 이미지 파일의 경로
            alt="Default Image"
            objectFit="contain" // 비율을 유지하고 잘리지 않도록 조절
            />
            <MainDiv>
                <Link href="/authPage" passHref>
                    <StyledButton>인증 페이지</StyledButton>
                </Link>
                <Link href="/voice" passHref>
                    <StyledButton>보이스피싱 탐지</StyledButton>
                </Link>
                <Link href="/text" passHref>
                    <StyledButton>문자피싱 탐지</StyledButton>
                </Link>
            </MainDiv>
        </div>
    )
}
