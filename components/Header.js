import Link from 'next/link'

export default function Header(){
	return (

		<nav className="relative bg-white">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16 border-b-2 border-gray-400 ">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
			
							<svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex justify-start lg:w-0 lg:flex-1">
							<Link href="/">
								<span className="h-8 w-auto sm:h-10 cursor-pointer">
									💾 
								</span>
							</Link>
						</div>
						<div className="hidden sm:block sm:ml-6">
							<div className="flex space-x-4">
								{/* <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a> */}
								<Link href="/">
									<a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
										Inicio
									</a>
								</Link>
								<Link href="/blog">
									<a className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Blog
									</a>
								</Link>
								
								<Link href="/contacto">
									<a className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Contacto
									</a>
								</Link>
							</div>
						</div>
					</div>

				</div>
			</div>
        
        	<div className="sm:hidden" id="mobile-menu">
				<div className="px-2 pt-2 pb-3 space-y-1">
				
					<Link href="/">
						<a className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
							Inicio
						</a>
					</Link>
					<Link href="/blog">
						<a className="text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Blog
						</a>
					</Link>
					
					<Link href="/contacto">
						<a className="text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Contacto
						</a>
					</Link>
				</div>
        	</div>
      	</nav>
	);	
}