import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import {Tracking} from '../components/Tracking'
import './globals.css'

// Load the Ubuntu font with the specified subsets
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
	title: "AZ-Portfolio",
	description: "Vítejte na mém portfoliu. Jsem frontend vývojář a tady najdete moje projekty a zkušenosti.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang="en">
			<body className={ubuntu.className}>
				{children}
				<Tracking />
			</body>
		</html>
	);
}
