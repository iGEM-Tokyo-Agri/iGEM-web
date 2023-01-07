import styled from 'styled-components';

type TitleProps = {
    title:string
}

export const TopPageItemTitle = (props:TitleProps) => {
  return (
    <>
      <Title>{props.title}</Title>
    </>
  );
};

const Title = styled.div`
    font-size: 40px;
    font-weight: bold;
`
