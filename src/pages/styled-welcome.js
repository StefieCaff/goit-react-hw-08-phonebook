import styled from "@emotion/styled";
import Welcome from "./Welcome";

const StyledWelcome = styled(Welcome)`
    h2{
        margin: 20px 0 20px 0;
        font-size: 16px;
        text-align: center;
    }
    p {
        margin: 20px 0 5px 0;
        color: gray;
        font-size: 14px;
        text-align: center;
    }
`;

export default StyledWelcome;