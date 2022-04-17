import moment from "moment";

// ------------------DateTime
export class DateTime {
	static toStringDate = (date) => {
		return date.format("YYYY-MM-DD");
	};

	static toStringTime = (time) => {
		return time.format("HH:mm");
	};

	static toMomentDate = (date) => {
		return moment(date);
	};

	static toMomentTime = (time) => {
		return moment(moment().format("YYYY-MM-DD") + " " + time);
	};

	static disabledDate(current) {
		return current && current < moment().endOf("day");
	}
}

// ------------------Filters and Sorters
export class Filter {
	static filterText = (optionText, key, arr) => {
		const filtered = [];

		arr.map((a) => {
			if (a[key].includes(optionText)) filtered.push(a);
			return undefined;
		});

		return filtered;
	};

	static filterRadio = (optionRadioValue, key, arr) => {
		const filtered = [];

		arr.map((a) => {
			if (
				a[key].includes(optionRadioValue) &&
				a[key].length === optionRadioValue.length
			)
				filtered.push(a);
			return undefined;
		});

		return filtered;
	};

	static filterArray = (optionArray, key, arr) => {
		const filtered = [];

		arr.map((a) => {
			let contains = false;

			a[key].map((c) => {
				if (optionArray.includes(c)) contains = true;
				return undefined;
			});

			if (contains) filtered.push(a);
			return undefined;
		});

		return filtered;
	};

	//TODO: Filter and Sort by DateTime
	static sortByString = (key, arr) => {
		return arr.sort((a, b) => a[key].localeCompare(b[key]));
	};

	static sortByNumber = (key, arr) => {
		return arr.sort((a, b) => a[key] - b[key]);
	};
}
