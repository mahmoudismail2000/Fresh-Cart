import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBlankComponent } from 'src/app/components/nav-blank/nav-blank.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavBlankComponent,FooterComponent],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent {

  constructor(){}

  scrollUp():void
  {
    window.scrollTo(0,0)
  }

}
