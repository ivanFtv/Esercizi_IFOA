
//EVENT PROPAGATION 1
document.getElementById('outer').addEventListener('click', function(event) {
    document.getElementById('outer').style.backgroundColor = 'red';
    }
  );

  document.getElementById('inner').addEventListener('click', function(event) {
    document.getElementById('inner').style.backgroundColor = 'blue';
    }
  );


  function logEventPhase(event, phase) {
    console.log(`${event.type} event - ${phase} phase`);
  }

  function handleClick(event) {
    logEventPhase(event, "Bubbling");
  }

  function handleClickCapturing(event) {
    logEventPhase(event, "Capturing");
  }

// EVENT PROPAGATION 2

  const innerElement = document.getElementById('inner');
  const middleElement = document.getElementById('middle');
  const outerElement = document.getElementById('outer');

  innerElement.addEventListener('click', handleClick);
  middleElement.addEventListener('click', handleClickCapturing, true);
  outerElement.addEventListener('click', handleClick);