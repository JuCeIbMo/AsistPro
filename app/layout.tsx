import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "AsistPro",
	description: "Tu asistente personal para recordatorios y organización",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="pt-BR">
			<body
				className={twMerge(inter.className, "bg-white text-black antialiased")}
			>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
