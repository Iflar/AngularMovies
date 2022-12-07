import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Movie, Genre } from './movie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const movies = [
      { id: 1, runtime: 3, title: 'Avatar: The Way of Water', description: 'Jake Sully and Neytiri have formed a family and are doing everything to stay together.', genre: Genre.Action, releaseDate: new Date('2022-12-16')  },
      { id: 2, runtime: 2, title: `Warcraft`, description: `Looking to escape from his dying world, the orc shaman Gul'dan utilizes dark magic to open a portal to the human realm of Azeroth.`, genre: Genre.Comedy, releaseDate: new Date('2016-06-10')  },
      { id: 3, runtime: 4.5, title: 'Bullet Train', description: `Ladybug is an unlucky assassin who's determined to do his job peacefully after one too many gigs has gone off the rails.`, genre: Genre.Action, releaseDate: new Date('2022-02-04')  },
      { id: 4, runtime: 1, title: 'Elf', description: `Buddy (Will Ferrell) was accidentally transported to the North Pole as a toddler and raised to adulthood among Santa's elves.`, genre: Genre.Comedy, releaseDate: new Date('2003-11-07')  },
      { id: 5, runtime: 4, title: 'Shang-Chi', description: `Martial-arts master Shang-Chi confronts the past he thought he left behind when he's drawn into the web of the mysterious Ten Rings organization.`, genre: Genre.Mystery, releaseDate: new Date('2021-12-08')  },
      { id: 6, runtime: 3, title: 'Black Widow', description: `Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.`, genre: Genre.Comedy, releaseDate: new Date('2001-08-12')  },
      { id: 7, runtime: 2.5, title: `Venom: Let There Be Carnage`, description: `Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom.`, genre: Genre.Comedy, releaseDate: new Date('2023-03-08')  },
      { id: 8, runtime: 3, title: 'Free Guy', description: `When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself.`, genre: Genre.Romance, releaseDate: new Date('2000-05-21')  },
      { id: 9, runtime: 6, title: 'No Time to Die', description: `James Bond is enjoying a tranquil life in Jamaica after leaving active service. However, his peace is short-lived as his old CIA friend, Felix Leiter, shows up and asks for help.`, genre: Genre.Mystery, releaseDate: new Date('1999-09-18')  },
      { id: 10, runtime: 2, title: `Dune`, description: `Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.`, genre: Genre.Drama, releaseDate: new Date('1864-07-14')  },
    ];
    return {movies};
  }

  genId(movies: Movie[]): number{
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
  
}
