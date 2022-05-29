const data = [
	{
		day: "mon",
		amount: 17.45,
	},
	{
		day: "tue",
		amount: 34.91,
	},
	{
		day: "wed",
		amount: 52.36,
	},
	{
		day: "thu",
		amount: 31.07,
	},
	{
		day: "fri",
		amount: 23.39,
	},
	{
		day: "sat",
		amount: 43.28,
	},
	{
		day: "sun",
		amount: 25.48,
	},
];

const days = document.querySelectorAll(".day");
console.log(days);

let max;
const maxHeight = 160;

data.forEach((element) => {
	if (max === undefined || max < element.amount) {
		max = element.amount;
	}
});
console.log(max);

const dayProgress = document.querySelectorAll(".day__progress");

for (let i = 0; i < data.length; i++) {
	const percentage = (data[i].amount / max) * 100;
	console.log("PERCENTAGE: ", percentage);
	const height = (percentage * maxHeight) / 100;
	console.log(height);
	dayProgress[i].style.height = height + "px";
}

const hoverEffect = (_day, _amount) => {
	const progress = document.querySelector(".progress__" + _day);
	progress.addEventListener("mouseover", () => {
		document.querySelector(".amount__" + _day).innerText = "$" + _amount;
		document.querySelector(".amount__" + _day).style.display = "flex";
		document.querySelector(".progress__" + _day).style.opacity = 0.7;
	});

	progress.addEventListener("mouseleave", () => {
		document.querySelector(".amount__" + _day).style.display = "none";
		document.querySelector(".progress__" + _day).style.opacity = 1;
	});
};

data.forEach((element) => {
	console.log(element.day);
	hoverEffect(element.day, element.amount);
});
