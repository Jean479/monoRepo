import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log(' init dash \n' +
    this.route.snapshot.paramMap.get('id') + '\n' +
    this.route.snapshot.queryParamMap.get('queryParam') + '\n' +
    this.route.snapshot.data['caption']);
  }


  
}
