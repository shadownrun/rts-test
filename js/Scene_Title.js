function Scene_Title(){
	self=this;
	this.main=function(){
		$data_system = load_data("system");
		//$game_system = new Game_System;
		var @sprite=load_image("title"+$data_system.title_name);
	}
}