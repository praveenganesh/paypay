import styled, { css } from 'styled-components';

const GetMarginPadding = (props) => css`
  ${props.m && { margin: props.m }}
  ${props.mt && { marginTop: props.mt }}
  ${props.mr && { marginRight: props.mr }}
  ${props.mb && { marginBottom: props.mb }}
  ${props.ml && { marginLeft: props.ml }}

  ${props.p && { padding: props.p }}
  ${props.pt && { paddingTop: props.pt }}
  ${props.pr && { paddingRight: props.pr }}
  ${props.pb && { paddingBottom: props.pb }}
  ${props.pl && { paddingLeft: props.pl }}

  @media only screen and (min-width: ${props.theme.breakpoints('sm')}) {
    ${props.m && { margin: props.m.sm }}
    ${props.mt && { marginTop: props.mt.sm }}
    ${props.mr && { marginRight: props.mr.sm }}
    ${props.mb && { marginBottom: props.mb.sm }}
    ${props.ml && { marginLeft: props.ml.sm }}

    ${props.p && { padding: props.p.sm }}
    ${props.pt && { paddingTop: props.pt.sm }}
    ${props.pr && { paddingRight: props.pr.sm }}
    ${props.pb && { paddingBottom: props.pb.sm }}
    ${props.pl && { paddingLeft: props.pl.sm }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('md')}) {
    ${props.m && { margin: props.m.md }}
    ${props.mt && { marginTop: props.mt.md }}
    ${props.mr && { marginRight: props.mr.md }}
    ${props.mb && { marginBottom: props.mb.md }}
    ${props.ml && { marginLeft: props.ml.md }}

    ${props.p && { padding: props.p.md }}
    ${props.pt && { paddingTop: props.pt.md }}
    ${props.pr && { paddingRight: props.pr.md }}
    ${props.pb && { paddingBottom: props.pb.md }}
    ${props.pl && { paddingLeft: props.pl.md }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('lg')}) {
    ${props.m && { margin: props.m.lg }}
    ${props.mt && { marginTop: props.mt.lg }}
    ${props.mr && { marginRight: props.mr.lg }}
    ${props.mb && { marginBottom: props.mb.lg }}
    ${props.ml && { marginLeft: props.ml.lg }}

    ${props.p && { padding: props.p.lg }}
    ${props.pt && { paddingTop: props.pt.lg }}
    ${props.pr && { paddingRight: props.pr.lg }}
    ${props.pb && { paddingBottom: props.pb.lg }}
    ${props.pl && { paddingLeft: props.pl.lg }}
  }
  @media only screen and (max-width: ${props.theme.breakpoints('sm')}) {
    ${props.m && { margin: props.m.xs }}
    ${props.mt && { marginTop: props.mt.xs }}
    ${props.mr && { marginRight: props.mr.xs }}
    ${props.mb && { marginBottom: props.mb.xs }}
    ${props.ml && { marginLeft: props.ml.xs }}

    ${props.p && { padding: props.p.xs }}
    ${props.pt && { paddingTop: props.pt.xs }}
    ${props.pr && { paddingRight: props.pr.xs }}
    ${props.pb && { paddingBottom: props.pb.xs }}
    ${props.pl && { paddingLeft: props.pl.xs }}
  }
`;

export default GetMarginPadding;
