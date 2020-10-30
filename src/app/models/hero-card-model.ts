export interface Hero {
  name: string,
  image: {
    url: string;
  },
  powerstats: {
    intelligence: number,
    strength: number,
    speed: number,
    durability: number,
    power: number,
    combat: number
  }

}
