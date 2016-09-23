import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketService } from './socket.service';
import { FormsModule } from '@angular/forms';
import { AppComponent , BoardComponent, ScoreComponent, TimerComponent, StartRoundComponent, MenuComponent, CountdownComponent, WinnerComponent} from './index';

@NgModule({
	imports:      [ BrowserModule, FormsModule ],
	declarations: [ AppComponent , BoardComponent, ScoreComponent, TimerComponent, StartRoundComponent, MenuComponent, CountdownComponent, WinnerComponent ],
	bootstrap:    [ AppComponent ],
	providers:    [ SocketService ]
})

export class AppModule {
	
}
