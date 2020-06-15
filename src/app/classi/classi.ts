export class Utente {

  public id: number;
  public nome: string;
  public cognome: string;
  public email: string;
  public genere: boolean;
  public areaGeografica: AreaGeografica;
  public amici: Utente[];
  public richiesteAmicizie: Utente[];
  public commenti: Commento[];
  public posts: Post[];
  public likes: Like[];

  constructor(id: number, nome: string, cognome: string,) {
    this.id = id;
    this.nome = nome;
    this.cognome = cognome;
  }
}

export class AreaGeografica{
  constructor(
    public id: number,
    public nazione: string,
    public regione: string,
    public citta: string,
    public residenti: Utente[]
  ) {}
}

export class Post{
  constructor(
    public id: number,
    public dataCreazione: Date,
    public testo: string,
    public utente: Utente,
    public commenti: Commento[],
    public likes: Like[]
  ) {}
}

export class Commento{
  constructor(
    public id: number,
    public dataCreazione: Date,
    public testo: string,
    public post: Post,
    public utente: Utente
  ) {}
}

export class Like {
  constructor(
    public id: number,
    public dataCreazione: Date,
    public post: Post,
    public utente: Utente
  ) {}
}
