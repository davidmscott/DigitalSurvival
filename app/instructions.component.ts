import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
	selector: 'instructions',
	styles: [`
		{
			background-color: #222;
		}
		table {
			border: 2px solid #eee;
			border-collapse: collapse;
			background-color: #222;
		}
		td {
			font-size: 1.875vw;
			padding: 2vw;
			vertical-align: middle;
			background-color: #222;
		}
		caption {
			font-size: 3.75vw;
			text-shadow: 0 0 .0625vw;
			align: center;
			color: #eee;
			background-color: #222;
			padding: 1vw;
			border: 2px solid #eee;
			border-bottom: none;
		}
		div {
			width: 90vw;
			color: #eee;
		}
	`],
	template: `
	<table>
		<caption>Instructions</caption>
		<tr>
			<td>
				<div>
					Digital Survival is a multiplayer game that allows players on different computers to play against each other in a digital ecosystem.
					<br />
					<br />
					Player 1 can set the game settings in between rounds by clicking on the menu button in the lower left part of the screen.
					<br />
					<br />
					Once the round starts, each player can click on the screen to create patterns of cells that they hope will thrive.  When a player is ready to unleash their cells into the wild, they can click the play / pause button in the lower right of the screen or press the [ENTER] key.  Each player can play / pause the evolution of their own cells as many times as they want in order to build patterns; again using either the play / pause button or the [ENTER] key.  Players can also click on cells while their ecosystem is live to impact the evolution.
					<br />
					<br />
					Press [i] at any time to show / hide these instructions.
				</div>
			</td>
		</tr>
	</table>
	`
})

export class InstructionsComponent implements OnInit, OnDestroy {

	constructor(private socketService: SocketService) {}

	connection;

	ngOnInit() {

		this.connection = this.socketService.optionsChange().subscribe(function(data) {

		}.bind(this));

	}

	ngOnDestroy() {

		this.connection.unsubscribe();

	}

}
