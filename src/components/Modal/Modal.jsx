import React from "react";
import styled from "styled-components";

const Modal = ({ show, post, onClick, onChange, onInputChange }) =>
  show && (
    <ModalDiv>
      <ContentDiv>
        <h1>Edit Post</h1>
        <input
          type="text"
          placeholder={post.desc}
          onChange={onInputChange}
        ></input>
        <button onClick={onClick}>Cancel</button>
        <button onClick={onChange}>Save</button>
      </ContentDiv>
    </ModalDiv>
  );

const ModalDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  background-color: transparent;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentDiv = styled.div`
  padding: 50px;
  border-radius: 10px;
  display: block;
  background: linear-gradient(180deg, #02a3fe 0%, #7d40ff 100%);
  flex-direction: column;
  gap: 50px;
  justify-content: center;

  h1 {
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  input {
    width: 90%;
    display: flex;
    border: none;
    border-radius: 5px;
    border-bottom: 1px solid lightgray;
    padding: 20px 10px;
    margin: 10px;
  }

  button {
    display: block;
    width: 50%;
    margin: auto;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    background: rgb(37, 100, 184);
    border-radius: 10px;
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-image: linear-gradient(
        to right,
        #25aae1,
        #40e495,
        #30dd8a,
        #2bb673
      );
      box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
    }
  }
`;

export default Modal;
