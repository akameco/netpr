import Howler from 'howler';

export default class Audio {
  constructor() {
    this.sound = new Howler.Howl({
      urls: ['tell_your_world.mp3']
    });
    this.id = null;
  }

  play() {
    this.id = this.sound.play();
  }

  pause() {
    this.sound.pause(this.id);
  }
}

