export interface Pokemon {
  id: number;
  base_experience: number;
  name: string;
  height: number;
  weight: number;
  stats: {
    base_stat: number;
  }[];
  moves: [];
}

export interface Moves {
  move: {
    name: string;
    url: string;
  };
  version_group_details: [
    {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    },
  ];
}
