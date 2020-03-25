class Localizer {
  private kek: string;
  private ponki: string;
  private lel: string;
  constructor(string: string) {
    this.kek = string;
    this.lel = "OGGG LOG";

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
  getLel(): string {
    return this.lel;
  }
}

export {
  Localizer
}

