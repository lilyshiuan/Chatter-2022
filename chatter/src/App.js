.App {
  background: linear-gradient(90deg, orange, rgb(235, 204, 120));
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header {
  height: 4rem;
  width: 100%;
  border-bottom: 2px solid white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
}
.logo {
  height: 3.5rem;
  width: 3.5rem;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsvxI-cGsF7dSoYBmfQ3ufH76ekG7d9FZTA&usqp=CAU");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 1px solid white;
}
.title {
  color: white;
  font-weight: normal;
  font-size: 2rem;
  margin-left: 1rem;
}

.messages {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  overflow: auto;
  flex: 1;
  padding: 1rem;
}

.message {
  color: white;
  background: gray;
  padding: 0.5rem 1rem;
  margin: 0.8rem;
  border-radius: 0.3rem;
  max-width: 20rem;
  min-height: auto;
  overflow-wrap: break-word;
  position: relative;
  font-size: 1rem;

}
.message-user {
  position: absolute;
  left: 0;
  top: -1.5rem;
  font-size: 1rem;
}

.name-picker {
  display: flex;
  align-items: center;
  margin-left: 60rem;
}
.name-picker svg {
  stroke: white;
  cursor: pointer;
  position: relative;
  margin-right: 1rem;
}
.name-picker-name {
  color: white;
  margin-right: 0.5rem;
  font-size: 1rem;
}
