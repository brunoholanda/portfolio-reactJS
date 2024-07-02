import styled from 'styled-components';

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 350px;
  height: 400px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  p {
    color: #666666;
  }
`;

export const ChatHeader = styled.div`
  background: linear-gradient(to right, #00A1FF, #A100FF); 
  color: white;
  padding: 10px;
  text-align: center;

  button:hover {
    cursor: pointer;
  }
`;

export const ChatMessages = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

export const ChatInput = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  width: calc(100% - 45px);
  margin: 10px;
  border-radius: 5px;
`;