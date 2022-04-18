import { Timestamp } from "firebase/firestore";
import moment from "moment";

// ------------------DateTime
export class DateTime {
	static today = (inMoment) => {
		if (!inMoment) return this.toStringDate(moment());
		else return moment();
	};

	static formattedDate = (date) => {
		return moment(date.seconds * 1000).format("dddd, MMMM DD, YYYY");
	};

	static timestampDate = (date) => {
		return Timestamp.fromDate(new Date(date));
	};

	static toStringDate = (date) => {
		return moment(date.seconds * 1000).format("D MMM, YYYY");
	};

	static toStringTime = (time) => {
		return time.format("HH:mm");
	};

	static toMomentDate = (date) => {
		return moment(date.seconds * 1000);
	};

	static toMomentTime = (time) => {
		return moment(moment().format("YYYY-MM-DD") + " " + time);
	};

	/**
	 *
	 * @param {String} date Date to be checked
	 * @param {String} pivot checkpoint - Defaults to today
	 * @returns Boolean
	 */
	static isBefore = (date, pivot = this.today()) => {
		return moment(date.seconds * 1000).isSameOrBefore(pivot);
	};

	static isSame = (date1, date2) => {
		return moment(date1.seconds * 1000).isSame(date2.seconds * 1000);
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
