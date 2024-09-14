import styled from "styled-components";

interface Props{
  value: string;
  key: number;
}
export function Tag({ value, key }:Props) {
  const Hashtag = styled.span`
    display: inline-flex;
    align-items: center;
    height: 36px;
    background-color: #f3f4f6;
    color: #1f2937;
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: 400;
    border-radius: 26px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 16px;
    padding-right: 42px;
    overflow: hidden;
    margin-right: 12px;
    margin-bottom: 12px;
  `;

  return <Hashtag key={key}>#{value}</Hashtag>;
}