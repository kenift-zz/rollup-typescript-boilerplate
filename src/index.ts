class Localizer {
  private kek: string;
  constructor(string: string) {
    this.kek = string;
  }
  getKek(): string {
    return this.kek;
  }
  setKek(string: string): string {
    this.kek = string;

    return this.kek;
  }
}

export {
  Localizer
}

