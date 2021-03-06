import {Component, Input} from '@angular/core';

@Component({selector: 'aj-loader', template: `<div id="ajloader" *ngIf="isLoaderVisible">
<div id="loader"></div>
<!-- <div id="ajloader-content"> Please Wait... </div> -->
</div>
`, styles: [`#loader {
  position: absolute;
  left: 45%;
  top: 45%;
  z-index: 1;
  border-radius: 50%;
  border-top: 5px solid #3498db;
  width: 40px;
  height: 40px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  border-left: 5px solid lightgray;
  border-right: 5px solid lightgray;
}

@-webkit-keyframes spin {
  0% {
      -webkit-transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}
/* Add animation to "page content" */

.animate-bottom {
  position: relative;
  -webkit-animation-name: animatebottom;
  -webkit-animation-duration: 1s;
  animation-name: animatebottom;
  animation-duration: 1s
}

@-webkit-keyframes animatebottom {
  from {
      bottom: -100px;
      opacity: 0
  }
  to {
      bottom: 0px;
      opacity: 1
  }
}

@keyframes animatebottom {
  from {
      bottom: -100px;
      opacity: 0
  }
  to {
      bottom: 0;
      opacity: 1
  }
}

#ajloader {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(158, 158, 158, 0.79);
  opacity: 0.7;
  z-index: 99;
  position: fixed;
  display: block;
  text-align: center;
}

#ajloader-content {
  position: absolute;
  top: 48%;
  left: 43%;
  text-align: center;
  z-index: 100;
  font-size: larger;
  font-weight: bold;
}

@keyframes spin {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}`]})

export class LoaderComponent {
  @Input()isLoaderVisible : boolean;
}
