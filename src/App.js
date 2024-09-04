import logo from './logo.svg';
import './App.css';
import GenerateQRCode from './components/QRCode/GenerateQRCode';
import ChangeTheme from './components/ChangeTheme/ChangeTheme';
import TicTacToe from './components/TicTacToe/TicTacToe';
import AutoSearchImplementation from './components/AutoSearcHImplementation/AutoSearchImplementation';

function App() {
  return (
    <div className="App">
      {/* Generate QR Code */}
      {/* <GenerateQRCode/> */}

      {/* Change Theme */}
      {/* <ChangeTheme/> */}

      {/* Tic Tac Toe */}
      {/* <TicTacToe/> */}

      {/* Auto Search Implementation using API */}
      <AutoSearchImplementation/>
    </div>
  );
}

export default App;
