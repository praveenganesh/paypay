import React, { useState } from "react";
import Container from "../Container";
import Section from "../Section";
import Row from "../Row";
import Grid from "../Grid";
import Span from "../Span";
import Div from "../Div";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { NoUndefinedVariablesRule } from "graphql";

function GetLinkForm(props) {

  const [linkSent, setLinkSent] = useState(false);
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)

  const setLink = () => {
    // change limit here
    let limit = 4;
    setError(false)
    setLinkSent(false)
    let linkReqCount = sessionStorage.getItem('link_req_count');
    if (!linkReqCount) {
      sessionStorage.setItem('link_req_count', 1);
    } else {
      sessionStorage.setItem('link_req_count', parseInt(linkReqCount) + 1);

    }
    if (linkReqCount >= limit) {
      setError('Too many attempts, please try again later');
    } else {
      const client = new ApolloClient({
        uri: 'https://dev-api-101.qwk.co.in',
        cache: new InMemoryCache()
      });
      if (mobile.length === 10) {
        setLoading(true)
        client.mutate({
          mutation: gql`
          mutation{
            getQwkApp(mobileNumber:"${mobile}"){
              message
            }
          }
          `,
        }).then(result => {
          setLoading(false)
          setLinkSent(true)
          setMobile("")
        }).catch(() => {
          setLoading(false)
          setError('Something went wrong, please try later')
        })
      } else {
        setError('Please enter valid mobile number')
      }

    }

  }

  return (
    <Section p="0" mt="0">
      <Container pt="0" p={"1.5rem 0 "}>
        <Row jc="center">
          <h2>
            <Span fontWeight="bold" fontSize="1.3rem">
              Grab the early bird offers right away! Download the APP NOW to apply
              for waitlist{" "}
            </Span>
          </h2>
        </Row>
        <Row jc="center" mt="2rem">
          <Span color="#ADADAD">
            Enter your mobile number to get download link
          </Span>
        </Row>

        <Row jc="center">
          <Row
            width={{ xs: "100%", sm: "100%", md: "40%", lg: "40%" }}
            jc="center"
            mt="1rem"
          >
            <InputGroup className="mb-2">
              <InputGroup.Prepend style={{ backgroundColor: "none" }}>
                <InputGroup.Text
                  style={{
                    border: "2px solid #6024e0",
                    borderRight: "none",
                    backgroundColor: "#fff",
                    paddingLeft: "10px",
                    paddingRight: "0px",
                    color: "black",
                  }}
                >
                  +91{" "}
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                style={{
                  height: "43px",
                  border: "2px solid #6024e0",
                  borderLeft: "none",
                }}
                onChange={e => {
                  let value = e.target.value;
                  value = value.replace(/\D/g, '')
                  setMobile(value)
                }}
                maxLength="10"
                id="mobile"
                value={mobile}
                placeholder="Mobile"
              />
            </InputGroup>



            <Div width={{ xs: "100%", sm: "100%", md: "70%", lg: "70%" }}>
              <Row
                smJc="center"
                jc="flex-start"
                m={{ xs: "0", sm: "0", md: "0 1rem", lg: "0 1rem" }}
              >
                <LinkButton onClick={() => {
                  if (!loading) {
                    setLink()
                  }

                }}>
                  {`${loading ? 'Loading ...' : 'Text me the link'} `}
                  {
                    !loading &&
                    <span>
                      <FiArrowRight />
                    </span>
                  }

                </LinkButton>
              </Row>
            </Div>
          </Row>
        </Row>


        {
          linkSent &&
          <Row jc="center" mt="2rem">
            <Span color="#ADADAD">
              A text with the download link has been sent to your mobile number
            </Span>
          </Row>

        }


        {
          error &&
          <Row jc="center" mt="2rem">
            <Span
              color="red"
              fontSize="11px"
              ta={{ xs: "center", sm: "center", md: "left", lg: "left" }}
            >
              {error}
            </Span>
          </Row>
        }


        <Row jc="center" mt="2rem">
          <Span
            color="#dadada"
            fontSize="11px"
            ta={{ xs: "center", sm: "center", md: "left", lg: "left" }}
          >
            • By entering your mobile number you accept to receive the download
            link and other promotional offers
          </Span>
        </Row>


      </Container>
    </Section>
  );
}

const InputWrapper = styled(Div)`
  border: 2px solid #6024e0;
  padding: 10px 5px 5px 5px;
  border-radius: 5px;
  height: 43px;
  box-sizing: border-box;
  span {
    font-weight: 600;
    margin-left: 0.5rem;
    display: inline;
    box-sizing: border-box;
  }
  input {
    border: none;
    margin-left: 5px;
    width: auto;
    display: inline;
    box-sizing: border-box;
    @media only screen and (max-width: ${(props) =>
    props.theme.breakpoints("sm")}) {
      width: auto;
    }
  }
`;

const LinkButton = styled.button`
  height: 43px;
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  border: none;
  background: #6024e0;
  border-radius: 5px;
  cursor: pointer;
  padding: 0 1rem;
`;

export default GetLinkForm;
