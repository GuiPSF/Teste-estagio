import styled, {css} from 'styled-components'

const SButton = styled.button <{ $kind: string; $size: string; $state: string }> `
    display:inline-flex;
    text-align:center;
    border-radius: 5px;
    border: 1px solid #BF4F74;
    color: #BF4F74;
    margin: 0 1em;
    cursor: pointer;
    padding: ${({ $size }) =>
    $size === "1" ? "0.25em 1em" : $size === "2" ? "0.5em 1.5em" : "0.75em 2em"};
  cursor: pointer;


  ${({ $kind }) =>
    $kind === "primary" &&
    css`
      background-color: #2f50c1;
      color: #fff;
      &:hover {
        background-color: #0f2355;
      }
      &:focus {
        background-color: #e76217;
      }
    `}

     ${({ $kind }) =>
    $kind === "secondary" &&
    css`
      background-color: transparent;
      color: #2f50c1;
      border: 2px solid #2f50c1;

      &:hover {
        background-color: #2f50c1;
        color: white;
      }
      &:focus {
        background-color: #e76217;
        color: white;
      }
    `}

  ${({ $kind }) =>
    $kind === "tertiary" &&
    css`
      background-color: red;
      color: white;
      border: none;
      text-decoration: underline;

      &:hover {
        background-color:rgb(131, 131, 131);
        color: black;
      }
      &:focus {
        color: #e76217;
      }
    `}

    ${({ $state }) =>
        $state === "disabled" &&
        css`
          background-color: #63769e;
          cursor: not-allowed;
          &:hover,
          &:focus {
            background-color: #63769e;
          }
        `}
`;

interface Props {
    kind?: 'primary' | 'secondary' | 'tertiary';
    size?: '1' | '2' | '3';
    state?: 'enabled' | 'disabled';
}

const Button = ({ kind = "primary", size = "1", state="enabled"}: Props) => {


    return(
        <>
            <SButton $kind={kind} $size={size} $state={state}> Normal Button </SButton>
        </>
    )
}

export default Button