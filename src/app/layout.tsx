import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="w-full p-6 bg-amber-200 text-center mb-6">header</header>
        {children}
        <footer className="w-full p-6 bg-amber-200 text-center mt-6">footer</footer>
      </body>
    </html>
  );
}
