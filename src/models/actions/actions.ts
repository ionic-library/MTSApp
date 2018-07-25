export class RedirectToId {
  constructor(partial?: Partial<RedirectToId>) {
    Object.assign(this, partial);
  }

  id: number;
}

export class RedirectToName {
  constructor(partial?: Partial<RedirectToName>) {
    Object.assign(this, partial);
  }
  name: string;
}

export class Terminate {}
