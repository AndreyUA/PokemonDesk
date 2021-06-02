const colorHelper = (color: string): string => {
  switch (color.toLocaleLowerCase()) {
    case 'stile':
    case 'dark':
    case 'rock':
      return '#A1A1A1';
    case 'grass':
    case 'bug':
      return '#70A83B';
    case 'ice':
    case 'water':
      return '#A2CFF0';
    case 'fire':
    case 'dragon':
    case 'fighting':
      return '#F76545';
    case 'normal':
    case 'ghosth':
      return '#76AADB';
    case 'poison':
    case 'psychic':
    case 'fairy':
    case 'ghost':
      return '#A974BC';
    case 'ground':
      return '#9B897B';
    case 'electric':
      return '#F7C545';
    default:
      return '#A1A1A1';
  }
};

export default colorHelper;
