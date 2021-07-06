import React from "react";
import Row from "../Row";
import Span from "../Span";
import Grid from "../Grid";
import Img from "../Img";
import styled from "styled-components";
import Config from "../../Config";
import { FiMenu } from "react-icons/fi";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const NavWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  span {
    margin-left: 1rem;
    @media only screen and (max-width: ${(props) =>
    props.theme.breakpoints("sm")}) {
      margin-left: 0.5rem;
      font-size: 0.7rem;
    }
  }
  a {
    cursor: pointer;
  }
`;

function Nav(props) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        {/* <Row>
          <a
            style={{ width: "200px", margin: "5px 0" }}
            href={Config.links.about}
          >
            <Span
              cursor="pointer"
              fontWeight="600"
              color={props.about ? "#6024e0" : "#000"}
            >
              About
            </Span>
          </a>
        </Row> */}
        <Row>
          <a
            style={{ width: "200px", margin: "5px 0" }}
            href={Config.links.hiring}
          >
            <Span
              color={props.hiring ? "#6024e0" : "#000"}
              cursor="pointer"
              fontWeight="600"
            >
              We're Hiring
            </Span>
          </a>
        </Row>
        {/* <Row>
          <a
            style={{ width: "200px", margin: "5px 0" }}
            href={Config.links.support}
          >
            <Span
              color={props.support ? "#6024e0" : "#000"}
              cursor="pointer"
              fontWeight="600"
            >
              Support
            </Span>
          </a>
        </Row> */}
      </Popover.Content>
    </Popover>
  );
  return (
    <Row width="100%">
      <NavWrapper>
        <Row alignItems="center">
          <Grid col={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
            <Row jc="flex-start">
              <a href="/">
                <Img src="/static/qwk-logo.svg" width="85px" height="35px" alt="qck-logo" title="logo" />
              </a>
            </Row>
          </Grid>
          <Grid hiddenXs col={{ xs: 9, sm: 9, md: 9, lg: 9 }}>
            <Row jc="flex-end">
              {/* <a href={Config.links.about}>
                <Span
                  cursor="pointer"
                  fontWeight="600"
                  color={props.about ? "#6024e0" : "#000"}
                >
                  About
                </Span>
              </a> */}
              <a href={Config.links.hiring}>
                <Span
                  color={props.hiring ? "#6024e0" : "#000"}
                  cursor="pointer"
                  fontWeight="600"
                >
                  We're Hiring
                </Span>
              </a>
              {/* <a href={Config.links.support}>
                <Span
                  color={props.support ? "#6024e0" : "#000"}
                  cursor="pointer"
                  fontWeight="600"
                >
                  Support
                </Span>
              </a> */}
            </Row>
          </Grid>
          <Grid hiddenMd hiddenLg col={{ xs: 9, sm: 9, md: 9, lg: 9 }}>
            <Row jc="flex-end">
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
              >
                <Span
                  cursor="pointer"
                  mt="-10px"
                  fontSize={"1.5rem !important"}
                >
                  <FiMenu />
                </Span>
              </OverlayTrigger>
            </Row>
          </Grid>
        </Row>
      </NavWrapper>
    </Row>
  );
}

export default Nav;
