import { makeAutoObservable } from "mobx";
import React from "react";

class HeroStore {
  // Accepter React.RefObject<HTMLDivElement | null>
  heroRef: React.RefObject<HTMLDivElement | null> =
    React.createRef<HTMLDivElement>();

  constructor() {
    makeAutoObservable(this);
  }

  setHeroRef(ref: React.RefObject<HTMLDivElement | null>) {
    this.heroRef = ref;
  }
}

const heroStore = new HeroStore();

export default heroStore;
