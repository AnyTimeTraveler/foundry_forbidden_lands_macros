function recurseSearch(parent, ancestors) {
	Object.keys(parent).forEach( key => {
		let type = typeof parent[key];

		console.log(type);
		if (type != "object") {
			console.log(ancestors + " : " + type + " : " + key + "=" + parent[key]);
		}
	});
	Object.keys(parent).forEach( key => {
		let type = typeof parent[key];

		if (type == "object") {
			let copyAncestors = ancestors.map(e => e);
			copyAncestors.push(key);
			recurseSearch(parent[key], copyAncestors);
		}
	});
}
