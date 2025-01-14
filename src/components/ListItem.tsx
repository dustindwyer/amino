import React from "react";
import styled from "styled-components";
import { Density, Color } from "../styles/Theme";

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${Density.comfortable.base} ${Density.default.base};
  margin: 0 -${Density.default.base};
  box-sizing: border-box;
  height: 64px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.045);
  cursor: ${(props: any) => (props.onClick ? "pointer" : "inherit")};

  &:first-of-type {
    margin-top: -${Density.default.base};
  }

  &:last-of-type {
    margin-bottom: -${Density.default.base};
    border-bottom: 0;
  }

  &:hover {
    background: ${(props: any) => (props.onClick ? "#fafafa" : "inherit")};
  }
`;

const StyledLabel = styled.span``;

const StyledSubtitle = styled.span``;

const StyledIcon = styled.img`
  border-radius: 4px;
  width: 34px;
  height: 34px;
  margin-right: ${Density.compact.base};
`;

const StyledLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

type Props = {
  label: string;
  subtitle?: string;
  icon?: string;
  onClick?: any;
  action?: React.ReactNode;
};

export const ListItem: React.FC<Props> = props => {
  const { label, subtitle, icon, action, onClick } = props;

  return (
    <StyledItem onClick={onClick}>
      <StyledLeft>
        {icon && <StyledIcon src={icon} />}
        <StyledLabel>{label}</StyledLabel>
        {subtitle && <StyledSubtitle />}
      </StyledLeft>
      {action}
    </StyledItem>
  );
};
