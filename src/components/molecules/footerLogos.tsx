import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

export const FooterLogos = () => {
  return (
    <>
      <FooterLogoStyle>
        <Link href={"https://twitter.com/iGEMTokyoAgri"}>
          <TwitterIcon
            color="primary"
            sx={{
              fontSize: 68,
              color: "white",
              backgroundColor: "#1da1f2",
              borderRadius: "50%",
              padding: 2,
              cursor: "pointer",
              ":hover": { opacity: "50%" },
            }}
          />
        </Link>
        <TwitterIcon
          color="primary"
          sx={{
            fontSize: 68,
            color: "white",
            backgroundColor: "#1da1f2",
            borderRadius: "50%",
            padding: 2,
            cursor: "pointer",
            ":hover": { opacity: "50%" },
          }}
        />
        <TwitterIcon
          color="primary"
          sx={{
            fontSize: 68,
            color: "white",
            backgroundColor: "#1da1f2",
            borderRadius: "50%",
            padding: 2,
            cursor: "pointer",
            ":hover": { opacity: "50%" },
          }}
        />
      </FooterLogoStyle>
    </>
  );
};

const FooterLogoStyle = styled.div`
  width: 420px;
  display: flex;
  margin: 48px 0 0 0;
  justify-content: space-evenly;
`;
