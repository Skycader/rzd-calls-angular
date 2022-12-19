import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  recorder:any
  audio:any
  constructor() { }

recordAudio() { 
  
  return new Promise(async resolve => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks: BlobPart[] | undefined = [];

    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    const start = () => mediaRecorder.start();

    const stop = () =>
      new Promise(resolve => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          const play = () => audio.play();
          resolve({ audioBlob, audioUrl, play });
        });

        mediaRecorder.stop();
      });

    resolve({ start, stop });
  });
}

async startCall() {
  this.recorder = await this.recordAudio();
  window.recorder = this.recorder
  this.recorder.start();

}

async stopCall() {
 this.audio = await this.recorder.stop();
}

async playCall() {
  this.audio.play();
}

}
