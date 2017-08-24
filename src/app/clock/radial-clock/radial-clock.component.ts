import { Component, OnInit, trigger, transition, animate, style, state, keyframes, Input, ViewChild, ElementRef } from '@angular/core';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/observable/interval';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-radial-clock',
  templateUrl: './radial-clock.component.html',
  styleUrls: ['./radial-clock.component.css']
})
export class RadialClockComponent implements OnInit {

  @Input() height: string = (window.innerHeight) / 3 + 'px';
  @Input() width: string = (window.innerWidth) / 3 + 'px';
  @Input() heightN: number = (window.innerHeight) / 3;
  @Input() widthN: number = (window.innerWidth) / 3;
  radius;

  @ViewChild("myCanvas") canvas: ElementRef;
  private context: CanvasRenderingContext2D;

  constructor(private datePipe: DatePipe) { }
  ngOnInit(): void {
    this.radius = (Math.min(this.heightN, this.widthN) / 2) * 0.9;
    this.context = this.canvas.nativeElement.getContext("2d");
  }

  ngAfterViewInit() {
    this.initContextStyle();
    console.log(this.radius);
    console.log(this.heightN);
    Observable.interval(1000 / 24).map(() => { this.renderTime() }).subscribe();
  }

  initContextStyle() {
    this.context.strokeStyle = '#00ffff';
    this.context.lineWidth = 7;
    this.context.shadowBlur = 5;
    this.context.shadowColor = '#00ffff'
  }

  renderTime() {
    let now = new Date();
    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let mil = now.getMilliseconds();
    let smoothsec = sec + (mil / 1000);
    let smoothmin = min + (smoothsec / 60);

    this.drawBackGround();
    //Hours
    this.context.beginPath();
    this.context.arc((this.widthN / 2), (this.heightN / 2), this.radius, Math.PI * 1.5, this.degToRad((hrs * 15) - 90));
    this.context.stroke();
    //Minutes
    this.context.beginPath();
    this.context.arc((this.widthN / 2), (this.heightN / 2), this.radius - 15, -Math.PI / 2, this.degToRad((smoothmin * 6) - 90));
    this.context.stroke();
    //Seconds
    this.context.beginPath();
    this.context.arc((this.widthN / 2), (this.heightN / 2), this.radius - 30, -Math.PI / 2, this.degToRad((smoothsec * 6) - 90));
    this.context.stroke();
    //Date
    this.context.font = "20px Helvetica";
    this.context.fillStyle = 'rgba(00, 255, 255, 1)'
    this.context.fillText(this.datePipe.transform(now, 'dd/MM/yyyy'), (this.widthN / 2) - (this.radius / 2) + 10, (this.heightN / 2));
    //Time
    this.context.font = "20px Helvetica Bold";
    this.context.fillStyle = 'rgba(00, 255, 255, 1)';
    this.context.fillText(this.datePipe.transform(now, 'jms'), (this.widthN / 2) - (this.radius / 2) + 10, (this.heightN / 2) + 20);
  }

  drawBackGround() {
    //Background
    // il faut recreer le background a chaque fois sinon c le dernier fillStyle qui s'applique a tout le canvas
    //TODO utiliser les variable calculer pour la taille du gradient
    let gradient = this.context.createRadialGradient((this.widthN / 2), (this.heightN / 2), 5, (this.widthN / 2), (this.heightN / 2), this.radius);
    gradient.addColorStop(0, "#03303a");
    gradient.addColorStop(1, "black");
    this.context.fillStyle = gradient;
    // this.context.fillStyle = 'rgba(00 ,00 , 00, 1)';
    // il faut recreer le cadre a chaque fois sinon apres un cercle complet celui ci ne recommence pas (visuelement parlant)
    this.context.fillRect(0, 0, this.widthN, this.heightN);
  }

  degToRad(degree) {
    return degree * (Math.PI / 180);
  }
}
