import styled, { css } from 'styled-components'
import { AiOutlineGithub, AiOutlineClose } from 'react-icons/ai'

export const Container = styled.button`
  ${({ theme: { colors, shadows } }) => css`
    background-color: ${colors.shape};
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-shadow: ${shadows.smooth};
    box-shadow: ${shadows.smooth};
    transition: 180ms ease-in-out;
    margin-left: auto;
    padding: 0 1.5rem;
    border-radius: 3rem;
    :disabled {
      cursor: not-allowed;
    }
    :not(:disabled):hover {
      filter: brightness(1.12);
      transform: scale(1.01);
    }
    :active {
      transform: scale(0.99);
    }
  `}
`

// eslint-disable-next-line prettier/prettier
export const GitHubIcon = styled(AiOutlineGithub) <{ isLoggedIn?: boolean }>`
  ${({ isLoggedIn, theme: { colors } }) => css`
    width: 28px;
    height: 28px;
    margin-right: 1rem;
    transition: 180ms ease-in-out;
    color: ${colors.yellow5};
    ${isLoggedIn &&
    css`
      color: ${colors.green};
    `}
  `}
`
export const CloseIcon = styled(AiOutlineClose)`
  ${({ theme: { colors } }) => css`
    width: 22px;
    height: 22px;
    margin-left: 1rem;
    transition: 180ms ease-in-out;
    color: ${colors.gray3};
  `}
`

export const Label = styled.strong`
  ${({ theme: { colors } }) => css`
    color: ${colors.white};
    line-height: 3rem;
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0;
    transition: 180ms ease-in-out;
  `}
`
