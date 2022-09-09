import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  
  public skill: any;
  
  createChart(){
  
    this.skill = new Chart("MyChart", {
      type: 'bar',
      data: {
          labels: ['PROACTIVIDAD', 'TRABAJO EN EQUIPO', 'LIDERAZGO', 'PROJECT MANAGER', 'RESILIENCIA', 'CREATIVIDAD'],
          datasets: [{
              label: '',
              data: [95, 90, 95, 90, 95, 90],
              backgroundColor: [
                  'rgba(0, 255, 127, 0.9)',
                  'rgba(128, 170, 255, 0.9)',
                  'rgba(0, 255, 127, 0.9)',
                  'rgba(0, 255, 127, 0.9)',
                  'rgba(0, 255, 127, 0.9)',
                  'rgba(0, 255, 127, 0.9)',

              ],
              borderColor: [
                  'rgba(0, 128, 0, 1)',
                  'rgba(0, 128, 0, 1)',
                  'rgba(0, 128, 0, 1)',
                  'rgba(0, 128, 0, 1)',
                  'rgba(0, 128, 0, 1)',
                  'rgba(0, 128, 0, 1)',
              ],
              borderWidth: 2,
              borderRadius:25,
              borderSkipped: false,

          }]
      },
      options: {
          indexAxis: 'y',
          responsive: true,
          aspectRatio:3.0,
          plugins: {
              legend: {
                  position: 'top',
              },
              title: {
                  display: false,
                  text: 'Cuadro de Fortalezas',
              }
          }
 
      }
      
    });

  }

}
