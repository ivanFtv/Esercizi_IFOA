Utilizzi di useEffect

<!-- TRIGGERATO A OGNI RENDER DEL COMPONENTE -->
useEffect(() => {
  console.log('Ciao');
  // CHIAMATA API
});

<!-- TRIGGERATO AL PRIMO RENDER DEL COMPONENTE E ALL'AGGIORNAMENTO DELLE DIPENDENZE -->
useEffect(() => {
  setTimeout(() => {
    if (persona.eta > 99) {
      console.log('Sei troppo vecchio');
    } else if (persona.eta < 18) {
      console.log('Sei troppo giovane');
    }
}, 1000);
}, [persona.eta]);

<!-- SE USE EFFECT HA UN RETURN LO STESSO VERRA TRIGGERATO ALLO SMONTAGGIO DEL COMPONENTE -->
useEffect(() => {
    return () => {
      console.log('Ciao');
    }
});