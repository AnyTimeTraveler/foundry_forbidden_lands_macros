let skill_name = "";


let data = window.game.data;
let charId = data.users.filter(e => e._id == data.userId)[0].character;
let actor = data.actors.filter(e => e._id == charId)[0];



const attribute = actor.data.attribute[skill_name];
let modifiers = this.getRollModifiers(attribute.label, null);
RollDialog.prepareRollDialog(
	skill.label,
	{ name: attribute.label, value: attribute.value },
	{ name: skill.label, value: skill.value },
	0,
	modifiers.artifacts.join(" "),
	modifiers.modifier,
	0,
	this.diceRoller,
	null,
);