import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<h1>Testing</h1>
			<ul className="flex flex-col gap-4 my-4">
				<Link href="/TheBible">The Bible</Link>
				<Link href="/memorize">Memorize</Link>
			</ul>
		</main>
	);
}
