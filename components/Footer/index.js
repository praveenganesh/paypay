import React, { Component } from "react";
import Section from "../Section";
import Container from "../Container";
import Row from "../Row";
import Span from "../Span";
import styled from "styled-components";
import Grid from "../Grid";
import Div from "../Div";
import Img from "../Img";
import Config from "../../Config";
import "bootstrap/dist/css/bootstrap.min.css";

const FooterSection = styled(Section)`
  background: linear-gradient(
    264.07deg,
    #f1e4ff 2.03%,
    #ff9ce3 24.84%,
    #ad45ff 53.14%,
    #6100ff 99.58%
  );
`;

const TermsSection = styled(Section)`
  background: #6504ff;
  padding: 0.9375rem 0;
`;

class Footer extends Component {
  render() {
    const PrivacyPolicy = () => {
      return (
        <a href="privacy-policy">
          <Span fontWeight="600" color="white" m="0 5px">
            Privacy Policy
          </Span>
        </a>
      );
    };
    const Terms = () => {
      return (
        <a href="terms">
          <Span fontWeight="600" color="white" m="0 5px">
            Terms & Conditions
          </Span>
        </a>
      );
    };
    const RefundPolicy = () => {
      return (
        <a href="refund-policy">
          <Span fontWeight="600" color="white" m="0 5px">
            Refund & Cancellation Policy
          </Span>
        </a>
      );
    };
    return (
      <>
        <FooterSection
          p={{
            xs: "0.9375rem 0.9375rem 0 0.9375rem",
            sm: "0.9375rem 0.9375rem 0 0.9375rem",
            md: "2.9375rem 2.9375rem 0 2.9375rem",
            lg: "2.9375rem 2.9375rem 0 2.9375rem",
          }}
          mb="0"
          pb="0"
        >
          <Container p="10px 60px 0 60px">
            <Row mt="10px" alignItems="center">
              <Grid col={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
                <h2>
                  <Span color="#fff" fontWeight="bold" fontSize="2rem">
                    Sit tight. Additional services set to launch soon!
                  </Span>
                </h2>
                <Row>
                  <Span
                    tt="capitalize"
                    lh="1.5rem"
                    mt="2rem"
                    color="white"
                    fontWeight="400"
                  >
                    the future of urban convenience is here and
                    <br /> growing manifolds. Download the Qwk app now to
                    <br /> experience the future at your fingertips.
                  </Span>
                </Row>
                <Row mt="20px">
                  <Span color="white">Get the <b>APP now</b></Span>
                </Row>
                <Row mt="10px">
                  <a href={Config.links.playStore} target="_blank">
                    <Img
                      mt="0.55rem"
                      height={{
                        xs: "2.1rem",
                        sm: "2.1rem",
                        md: "2.80rem",
                        lg: "2.80rem",
                      }}
                      width="auto"
                      src="/static/playstore2.svg"
                      alt="playstore"
                    />
                  </a>
                  <a href={Config.links.appStore} target="_blank">
                    <Img
                      mt="0.55rem"
                      height={{
                        xs: "2.1rem",
                        sm: "2.1rem",
                        md: "2.80rem",
                        lg: "2.80rem",
                      }}
                      width="auto"
                      m={{xs:'0.55rem 0 0 1rem',sm:'0.55rem 0 0 1rem',md:'0.55rem 0 0 0.5rem',lg:'0.55rem 0 0 0.5rem'}}
                      src="/static/appstore2.svg"
                      alt="appstore"
                    />
                  </a>
                </Row>
              </Grid>
              <Grid hiddenXs col={{ xs: 12, sm: 12, md: 8, lg: 8 }}>
                <Img src="/static/webp/think.webp" alt="think" />
              </Grid>
              <Grid hiddenMd hiddenLg mb="2rem" col={{ xs: 12, sm: 12, md: 8, lg: 8 }}>
               
              </Grid>
            </Row>
          </Container>
        </FooterSection>
        <TermsSection>
          <Container
            p={{
              xs: "10px 20px 0 20px",
              sm: "10px 20px 0 20px",
              md: "10px 60px 0 60px",
              lg: "10px 60px 0 60px",
            }}
          >
            <Div hiddenMd hiddenLg>
              <Row mt="0.5rem" jc="center" smJc="flex-start">
                <PrivacyPolicy />
              </Row>
              <Row mt="0.5rem" jc="center" smJc="flex-start">
                <Terms />
              </Row>
              <Row mt="0.5rem" jc="center" smJc="flex-start">
                <RefundPolicy />
              </Row>
            </Div>

            <Div hiddenXs>
              <Row color="white" jc="center">
                <PrivacyPolicy /> |
                <Terms /> |
                <RefundPolicy />
              </Row>
            </Div>
            <Row smJc="flex-start" mt="10px" color="white" jc="center">
              <Span color="white" fontWeight="600" m="0 5px">
                Qwk Convenience Private Limited 2021
              </Span>
            </Row>
          </Container>
        </TermsSection>
      </>
    );
  }
}
export default Footer;
