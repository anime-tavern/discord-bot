class TodaysCooking{
	constructor(){
		/** @property {number} lastSet The last time the item cooking was changed */
		this.lastSet = null;

		/** @property {number} menuLasts The time the menu lasts until it is changed. Milliseconds */
		this.menuLasts = 43200000;

		/** @property {string} currentItem */
		this.currentItem = "";

		/** @property {string[]} menu */
		this.menu = [
			"goat leg",
			"turkey leg",
			"bread and butter",
			"rice and fish",
			"fish and bread",
			"pork ribs",
			"cheap cuts of steak",
			"beef tips",
			"tons of beans",
			"bread rolls and taxes",
			"porridge",
			"beef stew and crisp apples"
		];
	}

	/**
	* Gets what is currently cooking.
	* @returns {string}
	*/
	getCurrentlyCooking(){

		if (this.lastSet === null){
			this.setNewItem();
		}

		const timeUntilMenuChanges = this.timeUntilMenuChanges();

		if (timeUntilMenuChanges <= 0){
			this.setNewItem();
		}

		return this.currentItem;
	}

	/**
	* Get random item from the menu
	* @returns {string}
	*/
	getRandomMenuItem(){
		return this.menu[Math.floor(Math.random() * this.menu.length)];
	}

	/**
	* Sets a new item and lastSet time
	*/
	setNewItem(){
		this.lastSet = (new Date()).getTime();
		this.currentItem = getRandomMenuItem();
	}

	/**
	* Gets the time left until the menu changes
	* @returns {number}
	*/
	getTimeLeftOnCurrentMenuItem(){

		if (this.lastSet === null){
			return -1;
		}

		const timeDifference = (new Date).getTime() - this.lastSet;
		const timeUntilMenuChanges = this.menuLasts - timeDifference;

		return timeUntilMenuChanges;
	}

	/**
	* Gets a speakable message that includes the menu item
	* @returns {string}
	*/
	getMenuItemAsSentence(){

		// Force the system to do checks on the curren titem
		this.getCurrentlyCooking(); // Checks the time and sets null items to a menu item

		const messages = [
			`Well, today it's ${this.currentItem}.`,
			`This evening we're serving ${this.currentItem}.`,
			`Be prepared to enjoy the chef's ${this.currentItem}.`,
			`You'll never live down our delicious ${this.currentItem} today :)`,
			`${this.currentItem}.`,
			`${this.currentItem}, and if you don't like it try the trash tavern down the road.`,
			`${this.currentItem}. Enjoy :)`,
			`${this.currentItem}. Stop by later tonight, okay?`,
			`${this.currentItem} and probably some dessert. We're not sure which...`,
			`Just ${this.currentItem} tonight.`,
		];

		const chosenSentence = messages[Math.floor(Math.random() * messages.length)];

		// Append a time until change
		const timeUntilMenuChanges = this.getTimeLeftOnCurrentMenuItem();
		const timeUntilMenuChangesInSeconds = timeUntilMenuChanges / 1000;
		const hoursLeft = Math.floor(timeUntilMenuChangesInSeconds / 3600);
		let timeLeftSentence = "";

		if (hoursLeft < 1){
			timeLeftSentence = " We'll be changing the menu in less than an hour.";
		}else if (hoursLeft === 1){
			timeLeftSentence = ` Our menu changes in ${hoursLeft} hour.`;
		}else{
			timeLeftSentence = ` Our menu changes in ${hoursLeft} hours.`;
		}

		return chosenSentence + timeLeftSentence;

	}
}

module.exports = (new TodaysCooking);
