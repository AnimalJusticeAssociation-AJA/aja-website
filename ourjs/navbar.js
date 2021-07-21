class ClassWatcher {
	constructor(targetNode, classToWatch, classAddedCallback, classRemovedCallback) {
		this.targetNode = targetNode;
		this.classToWatch = classToWatch;
		this.classAddedCallback = classAddedCallback;
		this.classRemovedCallback = classRemovedCallback;
		this.observer = null;
		this.lastClassState = targetNode.classList.contains(this.classToWatch);

		this.init();
	}

	init() {
		this.observer = new MutationObserver(this.mutationCallback);
		this.observe();
	}

	observe() {
		this.observer.observe(this.targetNode, { attributes: true });
	}

	disconnect() {
		this.observer.disconnect();
	}

	mutationCallback = (mutationsList) => {
		for (let mutation of mutationsList) {
			if (mutation.type === "attributes" && mutation.attributeName === "class") {
				let currentClassState = mutation.target.classList.contains(this.classToWatch);
				if (this.lastClassState !== currentClassState) {
					this.lastClassState = currentClassState;
					if (currentClassState) {
						this.classAddedCallback();
					} else {
						this.classRemovedCallback();
					}
				}
			}
		}
	};
}

let targetNode = document.querySelector(".navbar-collapse");
console.log(targetNode);

function onClassAdd() {
	document.querySelector(".navbar-logo-container").style.display = "none";
}

function onClassRemove() {
	document.querySelector(".navbar-logo-container").style.display = "block";
}

let classWatcher = new ClassWatcher(targetNode, "show", onClassAdd, onClassRemove);
