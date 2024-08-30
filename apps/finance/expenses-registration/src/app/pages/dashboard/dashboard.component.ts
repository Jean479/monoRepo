import { ChangeDetectionStrategy, Component, inject, Input, input, OnInit } from '@angular/core';
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

  
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('caption') captionFromRouteData?: string;
  @Input() queryParam?: string;

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log(' init dash \n');

    console.log(' caption:', this.captionFromRouteData);
    console.log(' queryParam:', this.queryParam);
    

    // this.route.snapshot.paramMap.get('id') + '\n' +
    // this.route.snapshot.queryParamMap.get('queryParam') + '\n' +
    // this.route.snapshot.data['caption']);

    this.route.queryParamMap.subscribe({
      next: v => {
        console.log(' querry:', v + '\n' +
        v.get('caption') + '\n' +
        v.get('queryParam'));
      },
      error: e => console.log(' error:', e)
    });
  
  }


  
}
