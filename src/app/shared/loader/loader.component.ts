import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  public show = false;
  private subscription!: Subscription;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState.subscribe(state => {
      this.show = state;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
