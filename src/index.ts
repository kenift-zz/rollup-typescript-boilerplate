class Localizer {
  private kek: string;
  private ponki: string;
  constructor(string: string) {
    this.kek = string;

    this.ponki = this.kek + " WTF !?"
  }
  getKek(): string {
    return this.kek;
  }
  setKek(string: string): string {
    this.kek = string;

    return this.kek;
  }
  getPonki(): string {
    return this.ponki;
  }
}

export {
  Localizer
}

