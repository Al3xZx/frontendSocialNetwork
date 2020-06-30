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

  constructor(nome: string, cognome: string, email: string, genere: boolean) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.genere = genere;
  }
}

export class AreaGeografica{
  public id: number;
  public nazione: string;
  public regione: string;
  public citta: string;
  public residenti: Utente[];

  constructor(nazione: string, regione: string, citta: string) {
    this.nazione=nazione;
    this.regione=regione;
    this.citta=citta;
  }

}

export class Post{
  public id: number;
  public dataCreazione: Date;
  public testo: string;
  public utente: Utente;
  public commenti: Commento[];
  public likes: Like[];

  constructor(testo: string) {
    this.testo = testo;
  }

}

export class Commento{
  public id: number;
  public dataCreazione: Date;
  public testo: string;
  public post: Post;
  public utente: Utente;

  constructor(testo: string) {
    this.testo = testo;
  }

}

export class Like {
  constructor(
    public id: number,
    public dataCreazione: Date,
    public post: Post,
    public utente: Utente
  ) {}
}

export class AccountUtente{
  constructor(
    public username: string,
    public password: string,
  ) {}
}

export class Messaggio{
  public msg: string
  constructor(msg: string) {
    this.msg = msg;
  }
}
