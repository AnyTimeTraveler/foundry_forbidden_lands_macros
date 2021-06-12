const skillName = "survival";


let data = window.game.data;
let charId = data.users.filter(e => e._id == data.userId)[0].character;
let actor = data.actors.filter(e => e._id == charId)[0];


function getRollModifiers(skillLabel, modifiers) {
	if (!modifiers) {
		modifiers = { modifier: 0, artifacts: [] };
	}
	actor.items.forEach((item) => {
		let rollModifiers = item.data.rollModifiers;
		if (rollModifiers) {
			Object.values(rollModifiers).forEach((mod) => {
				if (mod && mod.name === skillLabel) {
					let parsed = this.parseModifiers(mod.value);
					modifiers.modifier += parsed.modifier;
					modifiers.artifacts = modifiers.artifacts.concat(parsed.artifacts);
				}
			});
		}
	});
	return modifiers;
}

const skill = actor.data.skill[skillName];
const attribute = actor.data.attribute[skill.attribute];
let modifiers = getRollModifiers(attribute.label, null);
modifiers = getRollModifiers(skill.label, modifiers);

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