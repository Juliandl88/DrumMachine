const audioClips = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  return (
    <div className="bg-info min-vh-100 text-white">
      <div className="text-center">
        <h2>Drum Machine</h2>
        {audioClips.map((clip) => (
            <Pad key={clip.id} clip={clip} />  
        ))}
      </div>
    </div>
  );
}

function Pad ({ clip }){
//Hook UseEffect
React.useEffect( () => {
    document.addEventListener("keydown", handleKeyPress);
    return ()=>{
        document.removeEventListener("keydown", handleKeyPress);
    }
},[])

// funcion para el keydown 
const handleKeyPress = (e) => {
    if(e.keyCode === clip.keyCode){
        playSound();
    }
}

// Funcion para el listener OnClick
const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    audioTag.currentTime = 0;
    audioTag.play();
}

    return (
        <div onClick={playSound} className="btn btn-secondary p-4 m-3">
            <audio className="clip" id={clip.keyTrigger} src={clip.url}/>
            {clip.keyTrigger}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
