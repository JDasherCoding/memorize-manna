import React from "react";

import BibleData from "./en_kjv.json";

const Bible: BibleData[] = BibleData as BibleData[];

interface BibleData {
	abbrev: string;
	name: string;
	chapters: Chapter[];
}

interface Chapter {
	chapterNumber: number;
	verses: string[]; // Assuming verses are strings
}

const TheBible = () => {
	console.log(typeof Bible);

	const Proverbs: BibleData = Bible[19];
	const { abbrev, chapters, name } = Proverbs;
	console.log(Proverbs.chapters);
	// console.log(book);z
	return (
		<div>
			<h1>The Bible</h1>

			<h2>{Proverbs.name}</h2>
			<h2>{Proverbs.abbrev}</h2>
			<h2>{Proverbs.name}</h2>

			<h3>Chapter 01</h3>
		</div>
	);
};

export default TheBible;
